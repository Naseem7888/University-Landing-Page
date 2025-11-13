# Production Dockerfile for WHY Q University Landing Pages (Next.js 15 / React 19)
# Multi-stage build keeps final image small and secure

# ---- Dependencies stage ----
FROM node:20-alpine AS deps
WORKDIR /app
# Copy only dependency manifests first for better layer caching
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# ---- Builder stage ----
FROM node:20-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
# Pass build-time public env var (can be overridden at docker run)
ARG NEXT_PUBLIC_PIPEDREAM_WEBHOOK_URL
ENV NEXT_PUBLIC_PIPEDREAM_WEBHOOK_URL=${NEXT_PUBLIC_PIPEDREAM_WEBHOOK_URL}
COPY --from=deps /app/node_modules ./node_modules
# Copy the rest of the source
COPY . .
# Build Next.js (generates .next)
RUN npm run build

# ---- Runner stage ----
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
# Copy build output & minimal files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
# Install only production dependencies
RUN npm ci --omit=dev --no-audit --no-fund
# Use non-root user
RUN adduser -D nextjs
USER nextjs
EXPOSE 3000
# Healthcheck (optional; uncomment if desired)
# HEALTHCHECK --interval=30s --timeout=5s --start-period=30s CMD wget -qO- http://localhost:3000 || exit 1
CMD ["npm", "run", "start"]

# Usage:
# docker build -t whyq-university --build-arg NEXT_PUBLIC_PIPEDREAM_WEBHOOK_URL=https://eoXXXX.m.pipedream.net .
# docker run -p 3000:3000 -e NEXT_PUBLIC_PIPEDREAM_WEBHOOK_URL=https://eoXXXX.m.pipedream.net whyq-university

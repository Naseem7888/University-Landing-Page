import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { source, timestamp } = body

    // Log download event (in production, send to analytics service or Pipedream)
    console.log('Brochure Download:', {
      source,
      timestamp,
      userAgent: request.headers.get('user-agent'),
    })

    // Optional: Send to Pipedream for tracking
    if (process.env.NEXT_PUBLIC_PIPEDREAM_WEBHOOK_URL) {
      await fetch(process.env.NEXT_PUBLIC_PIPEDREAM_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'brochure_download',
          source,
          timestamp,
          userAgent: request.headers.get('user-agent'),
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error tracking download:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to track download' },
      { status: 500 }
    )
  }
}

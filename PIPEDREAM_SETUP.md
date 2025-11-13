# Pipedream Workflow Setup Guide

## Overview

Pipedream provides serverless workflow automation for processing lead form submissions from the WHY Q University website. This guide walks you through creating a workflow that receives, processes, and forwards lead data.

## Step 1: Create Pipedream Account

1. Visit [https://pipedream.com](https://pipedream.com)
2. Sign up for a free account (no credit card required)
3. Verify your email address

## Step 2: Create New Workflow

1. Click "New Project" or "New Workflow"
2. Give it a name: "WHY Q Lead Capture"
3. Click "Create"

## Step 3: Add HTTP Trigger

1. Click "Add Trigger"
2. Search for "HTTP / Webhook"
3. Select **"New Requests (Payload Only)"**
4. Click "Create Source"

5. **Copy the Webhook URL** - it looks like:
   ```
   https://eoXXXXXXXXXX.m.pipedream.net
   ```
   
6. This URL will be used as `NEXT_PUBLIC_PIPEDREAM_WEBHOOK_URL` in your `.env.local` file

## Step 4: Test the Trigger

1. Use curl to test (replace with your actual URL):

```bash
curl -X POST https://eoXXXXXXXXXX.m.pipedream.net \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "phone": "9876543210",
    "state": "Karnataka",
    "courseInterested": "Computer Science Engineering",
    "intakeYear": "2025",
    "consent": true,
    "triggerSource": "Test",
    "timestamp": "2025-11-12T10:30:00Z"
  }'
```

2. Check Pipedream dashboard to see the test event

## Step 5: Add Processing Steps

### Option A: Send Email Notification (Gmail)

1. Click "+" to add a new step
2. Search for "Gmail" and select "Send Email"
3. Connect your Gmail account
4. Configure:
   - **To**: `admissions@whyq.edu` (your admissions email)
   - **Subject**: `New Lead: {{steps.trigger.event.fullName}}`
   - **Body (HTML)**:
   ```html
   <h2>New Lead Submission</h2>
   <p><strong>Name:</strong> {{steps.trigger.event.fullName}}</p>
   <p><strong>Email:</strong> {{steps.trigger.event.email}}</p>
   <p><strong>Phone:</strong> {{steps.trigger.event.phone}}</p>
   <p><strong>State:</strong> {{steps.trigger.event.state}}</p>
   <p><strong>Course:</strong> {{steps.trigger.event.courseInterested}}</p>
   <p><strong>Intake Year:</strong> {{steps.trigger.event.intakeYear}}</p>
   <p><strong>Source:</strong> {{steps.trigger.event.triggerSource}}</p>
   <p><strong>Submitted At:</strong> {{steps.trigger.event.timestamp}}</p>
   ```

### Option B: Save to Google Sheets

1. Click "+" to add a new step
2. Search for "Google Sheets"
3. Select "Add Single Row"
4. Connect your Google account
5. Select your spreadsheet or create new one
6. Map fields:
   - **Name**: `{{steps.trigger.event.fullName}}`
   - **Email**: `{{steps.trigger.event.email}}`
   - **Phone**: `{{steps.trigger.event.phone}}`
   - **State**: `{{steps.trigger.event.state}}`
   - **Course**: `{{steps.trigger.event.courseInterested}}`
   - **Intake Year**: `{{steps.trigger.event.intakeYear}}`
   - **Source**: `{{steps.trigger.event.triggerSource}}`
   - **Timestamp**: `{{steps.trigger.event.timestamp}}`

### Option C: Send to Slack

1. Click "+" to add a new step
2. Search for "Slack"
3. Select "Send Message to Channel"
4. Connect your Slack workspace
5. Select channel (e.g., #admissions)
6. Configure message:
   ```
   🎓 *New Lead Submission*
   
   *Name:* {{steps.trigger.event.fullName}}
   *Email:* {{steps.trigger.event.email}}
   *Phone:* {{steps.trigger.event.phone}}
   *State:* {{steps.trigger.event.state}}
   *Course:* {{steps.trigger.event.courseInterested}}
   *Intake Year:* {{steps.trigger.event.intakeYear}}
   *Source:* {{steps.trigger.event.triggerSource}}
   ```

### Option D: Send to CRM (HubSpot, Salesforce, etc.)

1. Search for your CRM in Pipedream
2. Select "Create Contact" or similar action
3. Connect your CRM account
4. Map lead data fields to CRM fields

### Option E: Custom Code Processing

1. Click "+" to add a new step
2. Select "Run Node.js Code"
3. Add custom logic:

```javascript
export default defineComponent({
  async run({ steps, $ }) {
    // Access form data
    const lead = steps.trigger.event
    
    // Custom validation
    if (!lead.email.includes('@')) {
      throw new Error('Invalid email')
    }
    
    // Transform data
    const processedLead = {
      ...lead,
      fullName: lead.fullName.toUpperCase(),
      formattedPhone: `+91-${lead.phone.slice(0, 5)}-${lead.phone.slice(5)}`
    }
    
    // Return for next steps
    return processedLead
  }
})
```

## Step 6: Add Response Step

1. Click "+" to add final step
2. Search for "HTTP Response"
3. Select "Return HTTP Response"
4. Configure:
   - **Status Code**: `200`
   - **Body**:
   ```json
   {
     "success": true,
     "message": "Lead submitted successfully"
   }
   ```
   - **Headers**:
   ```json
   {
     "Content-Type": "application/json"
   }
   ```

## Step 7: Deploy Workflow

1. Click **"Deploy"** button at top right
2. Workflow is now live and ready to receive requests

## Step 8: Monitor Executions

1. Go to "Event History" in your workflow
2. View all lead submissions in real-time
3. Debug any errors
4. See execution logs for each step

## Example: Complete Workflow Configuration

Here's a recommended complete workflow:

1. **Trigger**: HTTP / Webhook (New Requests)
2. **Step 1**: Node.js code - Validate and format data
3. **Step 2**: Gmail - Send notification to admissions
4. **Step 3**: Google Sheets - Log lead data
5. **Step 4**: Slack - Notify team channel
6. **Step 5**: HTTP Response - Return success message

## Sample Payload Structure

The lead form sends this JSON structure:

```json
{
  "fullName": "John Doe",
  "email": "john.doe@example.com",
  "phone": "9876543210",
  "state": "Karnataka",
  "courseInterested": "Computer Science Engineering",
  "intakeYear": "2025",
  "consent": true,
  "triggerSource": "Hero",
  "timestamp": "2025-11-12T10:30:00.000Z"
}
```

## Testing Your Workflow

1. Deploy your Next.js app locally: `npm run dev`
2. Visit `http://localhost:3000/lp1`
3. Click "Apply Now"
4. Fill out and submit the form
5. Check Pipedream Event History for the execution
6. Verify email/Sheets/Slack received the data

## Troubleshooting

### Webhook Not Receiving Data

- Verify webhook URL is correct in `.env.local`
- Check browser console for CORS errors
- Ensure workflow is deployed
- Test webhook URL with curl

### Email Not Sending

- Verify Gmail account is connected
- Check spam folder
- Verify email template syntax
- Check Pipedream execution logs

### Google Sheets Not Updating

- Verify spreadsheet permissions
- Check column names match exactly
- Verify Google account has access
- Check execution logs for errors

## Advanced Features

### Add Email Auto-Response

1. Add Gmail step after data logging
2. Send email to `{{steps.trigger.event.email}}`
3. Subject: "Thank you for applying to WHY Q University"
4. Body: Personalized welcome message

### Add Data Enrichment

1. Use Clearbit or similar APIs
2. Enrich lead data with company info
3. Score leads based on criteria

### Add Conditional Logic

```javascript
// Only send Slack notification for certain courses
if (steps.trigger.event.courseInterested.includes("Engineering")) {
  // Send to #engineering-admissions
} else {
  // Send to #general-admissions
}
```

## Cost & Limits

- **Free Tier**: 100 workflows, 10,000 invocations/month
- **More than enough** for a university landing page
- Upgrade if needed for higher volume

## Security

- Webhook URLs are unique and hard to guess
- Add authentication if needed:
  - Use HTTP headers for validation
  - Implement rate limiting
  - Add IP whitelist

## Support

- Pipedream Docs: https://pipedream.com/docs
- Community Forum: https://pipedream.com/community
- Email: support@pipedream.com

---

**Setup complete!** Your lead capture workflow is now live and processing submissions from the WHY Q University landing pages.

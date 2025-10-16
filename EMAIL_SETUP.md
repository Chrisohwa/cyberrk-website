# Email Setup Instructions for Contact Form

The contact form on the Cyberrk Technology website sends emails to **ocarslyobas@gmail.com**.

## Setup Steps

### Option 1: Using Web3Forms (Recommended - Free & Easy)

1. **Get Your Access Key**
   - Visit [https://web3forms.com](https://web3forms.com)
   - Sign up for a free account
   - Verify your email address
   - Get your access key from the dashboard

2. **Configure Environment Variable**
   - Create a `.env.local` file in the root directory
   - Add your access key:
     ```
     WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
     ```

3. **Restart Development Server**
   ```bash
   npm run dev
   ```

4. **Test the Contact Form**
   - Navigate to the contact page
   - Fill out and submit the form
   - Check ocarslyobas@gmail.com for the email

### Option 2: Using Other Email Services

If you prefer to use a different email service, you can modify the API route at `src/app/api/contact/route.ts` to use:

- **SendGrid**: Popular email API service
- **Nodemailer**: SMTP-based email sending
- **Resend**: Modern email API
- **AWS SES**: Amazon's email service

### Current Configuration

- **Recipient Email**: ocarslyobas@gmail.com
- **Email Format**: HTML with styled template
- **Form Fields**: Name, Email, Subject, Message
- **Validation**: Client-side and server-side validation

### Email Template Features

The emails sent include:
- Professional HTML template with Cyberrk branding
- Gradient header with company colors
- Formatted message content
- Sender information (name and email)
- Timestamp of submission
- Reply-to address set to sender's email

### Fallback Behavior

If the email service is not configured or fails:
- Form submission will still succeed
- Message will be logged to server console
- User will see success message
- You can retrieve messages from server logs

### Testing Without Email Service

For development/testing without setting up email:
1. Submit the contact form
2. Check the terminal/console where the dev server is running
3. You'll see the complete message details logged

### Production Deployment

When deploying to production (Vercel, Netlify, etc.):
1. Add `WEB3FORMS_ACCESS_KEY` to your environment variables in the hosting platform
2. The email functionality will work automatically
3. No code changes needed

### Troubleshooting

**Emails not being received:**
- Check spam/junk folder
- Verify Web3Forms access key is correct
- Check server logs for errors
- Ensure environment variable is set correctly

**Form submission fails:**
- Check browser console for errors
- Verify API route is accessible
- Check network tab in browser dev tools

### Support

For issues with:
- **Web3Forms**: Visit [https://web3forms.com/docs](https://web3forms.com/docs)
- **Contact Form**: Check `src/components/Contact.tsx`
- **API Route**: Check `src/app/api/contact/route.ts`

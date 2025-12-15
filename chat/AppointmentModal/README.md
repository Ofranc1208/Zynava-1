# 📅 Appointment Booking System

A professional, Google-free appointment booking system that replaces Calendly with a custom solution.

## ✅ Features

- **No Google Account Required** - Users can book without any Google services
- **Professional Form** - Clean, mobile-responsive design
- **Form Validation** - Client-side validation with helpful error messages
- **API Integration** - Submits to `/api/appointments` endpoint
- **Success/Error Handling** - Clear feedback for users
- **Email Notifications** - Ready for email service integration

## 🎯 User Experience

1. **Click "📅 Book an Appointment"** in the specialist menu
2. **Modal opens** with professional appointment form
3. **User fills out details** (name, email, phone, date, time, consultation type)
4. **Clicks "📅 Submit Appointment Request"**
5. **Success message** shows with confirmation and reference ID
6. **You receive notification** (via API logs or email)

## 🔧 Technical Implementation

### Frontend (React/TypeScript)
- **AppointmentModal.tsx** - Main modal component
- **Form validation** - Required field checking
- **API submission** - POST to `/api/appointments`
- **Error handling** - Network and validation errors

### Backend (Next.js API)
- **`/api/appointments/route.ts`** - Handles form submissions
- **Data validation** - Server-side validation
- **Response formatting** - Structured JSON responses
- **Logging** - Console logging for development

## 📧 Email Integration (Optional)

To enable email notifications, uncomment and configure in `/api/appointments/route.ts`:

### Option 1: SendGrid
```typescript
// Install: npm install @sendgrid/mail
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

await sgMail.send({
  to: 'info@smarterpayouts.com',
  from: 'appointments@smarterpayouts.com',
  subject: subject,
  text: emailBody,
});
```

### Option 2: AWS SES
```typescript
// Install: npm install @aws-sdk/client-ses
const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');

const sesClient = new SESClient({ region: 'us-east-1' });
await sesClient.send(new SendEmailCommand({
  // SES parameters
}));
```

### Option 3: Resend
```typescript
// Install: npm install resend
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'appointments@smarterpayouts.com',
  to: 'info@smarterpayouts.com',
  subject: subject,
  text: emailBody,
});
```

## 📊 Data Storage (Optional)

To save appointment data to a database:

### Firebase Firestore
```typescript
const { doc, setDoc } = await import('firebase/firestore');
await setDoc(doc(db, 'appointments', `${Date.now()}-${body.email}`), {
  ...body,
  submittedAt: new Date(),
  status: 'pending'
});
```

### MongoDB
```typescript
await db.collection('appointments').insertOne({
  ...body,
  submittedAt: new Date(),
  status: 'pending'
});
```

## 🎨 Customization

### Form Fields
Edit `consultationTypes` array in `AppointmentModal.tsx`:
```typescript
const consultationTypes = [
  'Structured Settlement Consultation',
  'Lump Sum Calculator Review',
  'Offer Comparison',
  'Court Approval Process',
  'General Financial Planning',
  'Other'
];
```

### Time Slots
Edit `preferredTime` options in the select field.

### Email Template
Customize the email content in `/api/appointments/route.ts`.

## 🚀 Deployment

1. **Environment Variables** - Add email service credentials
2. **Database** - Set up data storage if needed
3. **Email Service** - Configure SendGrid/AWS SES/Resend
4. **Domain** - Update email addresses for production

## 📱 Mobile Responsive

The modal is fully responsive and works perfectly on:
- ✅ Desktop computers
- ✅ Tablets
- ✅ Mobile phones
- ✅ All screen sizes

## 🔒 Security

- **Input validation** - Both client and server side
- **Rate limiting** - Can be added to API route
- **Spam protection** - CAPTCHA can be integrated
- **Data sanitization** - All inputs are sanitized

## 📈 Analytics

Track appointment bookings with existing Google Analytics:
- Form submissions
- Success rates
- Popular consultation types
- Peak booking times

## 🎯 Benefits

✅ **No Google Account Required** - Users can book without any Google services
✅ **Professional Design** - Matches your brand and existing modals
✅ **Mobile Optimized** - Works perfectly on all devices
✅ **Fast Loading** - No external dependencies
✅ **Easy Integration** - Uses existing chat system
✅ **Scalable** - Ready for email and database integration
✅ **Customizable** - Easy to modify fields and styling

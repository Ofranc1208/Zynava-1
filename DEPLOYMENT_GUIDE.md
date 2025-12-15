# ZYNAVA Deployment Guide to Vercel

## Overview

This guide will help you deploy ZYNAVA to Vercel for testing the layout and UI on mobile devices. The chat endpoints and backend will be completed later.

## Prerequisites

✅ Node.js 18+ installed  
✅ GitHub account  
✅ Vercel account (free tier available)  
✅ `.env.local` file created locally  

## Step-by-Step Deployment

### Step 1: Local Verification

Before deploying, verify everything works locally:

```bash
# Navigate to project directory
cd "Zynava 1"

# Install dependencies (if not done)
npm install

# Run development build
npm run dev

# Test on browser: http://localhost:3000
```

**What to check:**
- Homepage loads correctly
- Navigation responds to screen size
- Chat card displays without scrolling
- Mobile menu (hamburger) works
- All buttons and links functional

### Step 2: Local Production Build Test

Test the production build locally:

```bash
# Build for production
npm run build

# Start production server
npm start

# Test on browser: http://localhost:3000
```

**Note**: The production build is optimized and minified. This is how it will look on Vercel.

### Step 3: Prepare Git Repository

```bash
# Check git status
git status

# Add all files
git add .

# Commit changes
git commit -m "Ready for Vercel deployment - UI/layout testing"

# Push to GitHub
git push origin main
```

### Step 4: Deploy to Vercel

#### Option A: Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository
4. Click "Import"
5. Vercel will auto-detect Next.js configuration
6. Click "Deploy"
7. Wait for deployment to complete (usually 2-5 minutes)

#### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts to link account and project
```

### Step 5: Verify Deployment

After deployment completes:

1. **Get Production URL**: Vercel will provide your URL (e.g., `zynava.vercel.app`)

2. **Test on Desktop Browser**:
   - Open the production URL
   - Check layout and styling
   - Verify navigation works
   - Test responsive design (F12 → Device Emulation)

3. **Test on Mobile Device**:
   - Open production URL on your phone
   - Test hamburger menu
   - Verify chat card displays properly
   - Check touch interactions
   - Test all buttons and links

4. **Check Deployment Logs** (if issues):
   - Go to Vercel Dashboard
   - Select your project
   - Click "Deployments"
   - View build logs for errors

## Environment Variables Setup

If you need environment variables on Vercel:

1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add variables as key-value pairs
5. Click "Save"
6. Deploy again for changes to take effect

Current deployment doesn't require any env variables, so you can skip this step.

## Custom Domain (Optional)

To use a custom domain:

1. Go to Vercel Dashboard → Project Settings
2. Click "Domains"
3. Enter your domain name
4. Follow DNS configuration instructions
5. Wait for DNS to propagate (usually 24 hours)

## Monitoring Deployment

### View Logs
- Vercel Dashboard → Deployments → Click deployment → View Logs

### Performance
- Vercel Dashboard → Analytics (shows Core Web Vitals)

### Build Status
- Shows in Vercel Dashboard
- GitHub will show status badges on commits

## Rollback to Previous Version

If deployment has issues:

1. Go to Vercel Dashboard → Deployments
2. Click on a previous successful deployment
3. Click "Redeploy"
4. Vercel will restore that version

## Common Issues & Fixes

### Issue: Build fails with TypeScript errors
**Solution**: Run `npm run lint` locally to catch errors before pushing

### Issue: Page looks wrong on mobile
**Solution**: 
- Check Chrome DevTools on desktop (F12 → Responsive Design Mode)
- Test with actual mobile device
- Check browser console for JavaScript errors

### Issue: Functions not working
**Solution**: 
- Chat endpoints are not implemented yet (expected)
- This is for UI/layout testing only
- Backend will be completed later

### Issue: Deployment takes too long
**Solution**: 
- This is normal for first deployment (3-5 minutes)
- Subsequent deployments are faster
- Check Vercel dashboard for progress

## Testing Checklist

After deployment, go through this checklist:

**Layout & Responsive Design:**
- [ ] Desktop view looks correct (>1200px)
- [ ] Tablet view adapts properly (768px-1199px)
- [ ] Mobile view works (< 768px)
- [ ] Hamburger menu appears on mobile
- [ ] Chat card displays full content without scrolling
- [ ] Navigation buttons (Flash Deals, Top Seller, Bundle Deals) display correctly
- [ ] Trust badge (stars) displays properly

**Functionality (UI Level):**
- [ ] All links are clickable
- [ ] Hamburger menu opens/closes
- [ ] Buttons have hover states
- [ ] Forms can be interacted with
- [ ] No console errors (F12 → Console)

**Performance:**
- [ ] Page loads quickly
- [ ] Images load properly
- [ ] No visual glitches or layout shifts
- [ ] Animations are smooth

## Next Steps After Deployment

1. **Share with Team**: Send Vercel URL to stakeholders
2. **Gather Feedback**: Collect feedback on layout and design
3. **Test on Various Devices**: Test on different phone models and browsers
4. **Document Issues**: Note any UI/layout issues for next sprint
5. **Implement Backend**: Complete chat endpoints and backend services

## Helpful Resources

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Deployment Troubleshooting: https://vercel.com/support
- GitHub Integration: https://vercel.com/github

## Support

For deployment issues:
1. Check Vercel deployment logs
2. Review build output in Vercel Dashboard
3. Check GitHub for recent commits
4. Verify `.env.local` is in `.gitignore` (sensitive data not exposed)

---

**Version**: 1.0  
**Last Updated**: January 16, 2025  
**Status**: Ready for Deployment


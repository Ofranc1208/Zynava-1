# ZYNAVA - Premium Supplement Marketplace

A modern, responsive web application for discovering and purchasing premium supplements. Built with Next.js 14, React 18, and TypeScript.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd zynava

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📱 Project Features

### Navigation
- **Responsive Design**: Desktop and mobile navigation with automatic switching at 768px breakpoint
- **Mobile Hamburger Menu**: Full-screen overlay menu with smooth animations
- **Desktop Navigation Bar**: Horizontal navigation with hover effects

### Home Page Layout
- **Hero Section**: Eye-catching hero with background image and call-to-action
- **Supplement Advisor Chat**: Interactive chat preview with AI-powered supplement recommendations
- **Trust Badge**: 5-star rating display with "Premium Brand Marketplace" label
- **Navigation Buttons**: Quick access to Flash Deals, Top Seller, and Bundle Deals
- **Why Choose Section**: Benefits and value propositions

### Chat & Advisor System
- **Clean Chat Interface**: Light background (#f8fafc) with readable typography
- **Message Bubbles**: Dark gray text with bold emphasis for important information
- **Advisor Modal**: Full-featured chat experience with quiz-based recommendations
- **Responsive**: Works seamlessly on mobile and desktop

### Design System
- **Color Scheme**: 
  - Primary Orange: #ff6b35
  - Dark Text: #475569 (regular), #1a202c (bold)
  - Background: #f8fafc (light gray-blue)
  - Borders: #e2e8f0

- **Typography**:
  - Font Family: Inter (Google Fonts)
  - Font Sizes: Responsive with clamp() for flexibility
  - Line Height: 1.6 for readability

## 🏗️ Project Structure

```
zynava/
├── app/                          # Next.js 14 app directory
│   ├── layout.tsx               # Root layout with DualNavbar
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx           # About page
│   ├── contact/page.tsx         # Contact page
│   ├── faq/page.tsx             # FAQ page
│   ├── main/page.tsx            # Main landing page
│   ├── advisor/                 # Advisor-related pages
│   └── globals.css              # Global styles
│
├── src/                         # Source files
│   ├── components/              # Reusable components
│   │   ├── Navigation/          # Navigation components
│   │   │   ├── DualNavbar.tsx   # Main navigation wrapper
│   │   │   ├── Desktop/         # Desktop navigation
│   │   │   └── Mobile/          # Mobile navigation
│   │   ├── advisor/             # Advisor chat components
│   │   └── PromoOverlay/        # Promo overlay components
│   │
│   ├── Pages/                   # Page-specific components
│   │   ├── Home/                # Home page components
│   │   │   ├── components/
│   │   │   │   ├── Hero/        # Hero section
│   │   │   │   ├── SupplementAdvisor/  # Chat card preview
│   │   │   │   ├── NavigationBar/      # Quick nav buttons
│   │   │   │   └── WhyChoose/   # Benefits section
│   │   │   └── HomePage.tsx
│   │   ├── Main/                # Main page components
│   │   └── About/               # About page components
│   │
│   └── components/Footer.tsx    # Footer component
│
├── public/                      # Static assets
│   └── assets/
│       └── images/              # Brand images
│
├── chat/                        # Chat-related components (legacy)
├── Home/                        # Alternative home structure (legacy)
├── Main/                        # Alternative main structure (legacy)
│
├── package.json                 # Dependencies
├── next.config.js               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── .env.local                   # Environment variables (local)
└── README.md                    # This file
```

## 🛠️ Development

### Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Lint and fix issues
npm run lint -- --fix
```

### Key Technologies

- **Framework**: Next.js 14.2.0
- **Language**: TypeScript 5.5.4
- **Styling**: CSS Modules + Inline Styles
- **State Management**: React Hooks (useState, useContext)
- **Build Tool**: Webpack (bundled with Next.js)

## 📱 Responsive Design

The application is fully responsive with breakpoints at:
- **Desktop**: 1200px+ (2-column layouts, full navigation)
- **Tablet**: 768px - 1199px (responsive adjustments)
- **Mobile**: < 768px (1-column layout, hamburger menu)
- **Small Mobile**: < 480px (extra-compact layouts)

### Testing on Mobile

1. **Local Testing**: Use Chrome DevTools device emulation (F12)
2. **Physical Device**: 
   - Run `npm run dev`
   - Find your machine's IP address
   - On mobile, navigate to `http://<your-ip>:3000`
3. **Production Testing**: Deploy to Vercel and test on actual mobile devices

## 🚀 Deployment to Vercel

### Prerequisites
- Vercel account ([vercel.com](https://vercel.com))
- GitHub account with repository access

### Deployment Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com/import](https://vercel.com/import)
   - Select your GitHub repository
   - Click "Import"

3. **Configure Environment Variables**
   - In Vercel dashboard: Settings → Environment Variables
   - Add all variables from `.env.local` (if needed for production)
   - Click "Deploy"

4. **Verify Deployment**
   - Vercel will automatically build and deploy
   - Check production URL on mobile device
   - Monitor deployment logs for errors

### Environment Variables

Currently using defaults. When adding production variables:

```env
# .env.local (local development)
NEXT_PUBLIC_APP_NAME=ZYNAVA
NEXT_PUBLIC_API_URL=http://localhost:3000

# .env.production (production on Vercel)
NEXT_PUBLIC_APP_NAME=ZYNAVA
NEXT_PUBLIC_API_URL=https://your-domain.com
```

**Note**: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## 📈 Performance

### Optimization Features
- Image optimization with Next.js Image component (ready to implement)
- Code splitting and dynamic imports
- CSS Module scoping to prevent conflicts
- Responsive font sizing with CSS `clamp()`

### Web Vitals
- Core Web Vitals monitoring ready in Home page
- Performance optimizations in place
- Production build is optimized and minified

## 🧪 Testing

Current test coverage is minimal. Run existing tests:

```bash
npm run test  # If tests are configured
```

Recommended testing approach:
1. Manual testing on multiple devices
2. Chrome DevTools device emulation
3. Lighthouse performance audits (DevTools → Lighthouse)

## 🐛 Known Limitations

- Chat endpoints not yet implemented (placeholder UI ready)
- Advisor quiz system is UI-only (backend pending)
- Email/SMS integrations not configured
- Firebase setup mentioned but not actively used

## 🔄 Future Development

### Phase 1 (In Progress)
- [x] Responsive layout design
- [x] Navigation system
- [x] Chat UI preview
- [ ] Chat endpoints implementation
- [ ] Quiz backend

### Phase 2 (Planned)
- [ ] Product catalog
- [ ] Shopping cart
- [ ] Payment integration
- [ ] User authentication

### Phase 3 (Planned)
- [ ] AI-powered recommendations
- [ ] User profiles
- [ ] Order history
- [ ] Review system

## 📚 Documentation

- **Navigation Audit**: See `NAVIGATION_AUDIT_REPORT.md`
- **Supplement Plan**: See `SUPPLEMENT_SITE_PLAN.md`
- **Pre-Deployment Checklist**: See `PRE_DEPLOYMENT_CHECKLIST.txt`

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make your changes and test locally
3. Commit with clear messages: `git commit -m "Add my feature"`
4. Push to your branch: `git push origin feature/my-feature`
5. Submit a pull request

## 📞 Support

For issues or questions:
1. Check existing documentation in project root
2. Review code comments in relevant components
3. Test in development mode: `npm run dev`
4. Check Vercel deployment logs for production issues

## 📄 License

This project is private and confidential. All rights reserved.

---

**Last Updated**: January 16, 2025  
**Version**: 0.1.0  
**Status**: Ready for Vercel Deployment (UI/Layout Testing)


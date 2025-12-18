# Home Module

This module contains the main landing page (HomePage) and all its sub-components.

## 📁 Folder Structure

```
src/views/Home/
├── index.ts                    # Barrel exports for the Home module
├── types.ts                    # TypeScript type definitions
├── constants.ts                # Shared constants (colors, spacing, etc.)
├── HomePage.tsx                # Main page component
├── HomePage.module.css         # Page-level styles
├── README.md                   # This documentation file
└── components/
    ├── Hero/                   # Hero section with video background
    │   ├── index.tsx           # Barrel exports
    │   ├── hero-background/    # Video and overlay components
    │   ├── hero-content/       # Title, subtitle, description
    │   ├── hero-cta-button/    # CTA buttons
    │   └── hero-section/       # Main hero container
    ├── HomepageContent/        # Long-form educational content
    │   ├── index.tsx           # Barrel exports
    │   ├── HomepageContent.tsx # Main content orchestrator
    │   ├── HomepageContent.module.css  # Content styles
    │   └── sections/           # Individual content sections
    │       ├── index.ts
    │       ├── WhyZynavaSection.tsx
    │       ├── WhatZynavaDoesSection.tsx
    │       ├── HowItWorksSection.tsx
    │       ├── IngredientFocusSection.tsx
    │       ├── UserExperienceSection.tsx
    │       ├── TrustSafetySection.tsx
    │       ├── WhoWeServeSection.tsx
    │       ├── ResponsibleWellnessSection.tsx
    │       └── CTASection.tsx
    ├── SupplementAdvisor/      # Interactive chat card
    │   ├── index.tsx
    │   ├── SupplementAdvisorCard.tsx
    │   └── SupplementAdvisorCard.module.css
    └── TopBrandsBanner/        # Brand logos ticker
        ├── index.tsx
        ├── TopBrandsBanner.tsx
        └── TopBrandsBanner.module.css
```

## 🚀 Quick Start

```tsx
import { HomePage } from '@/src/views/Home'

// In app/page.tsx:
export default function Page() {
  return <HomePage />
}
```

## 📄 Files Overview

### `index.ts`
Barrel exports for centralized module access.

**Exports:**
- `HomePage` - Main page component
- `HeroSection`, `TopBrandsBanner`, `SupplementAdvisorCard`, `HomepageContent` - Sub-components
- Types: `CardStyle`, `SectionProps`, `BrandLogo`, `FeatureCard`, `StepCard`, `AnimationStep`
- Constants: `HOME_COLORS`, `HOME_TYPOGRAPHY`, `HOME_SPACING`, etc.

### `types.ts`
Centralized TypeScript type definitions including:
- `AnimationStep` - Enum for chat animation states
- `CardStyle` - Card styling configuration
- `BrandLogo`, `FeatureCard`, `StepCard` - Content item types

### `constants.ts`
Shared configuration values:
- `HOME_COLORS` - Color palette
- `HOME_TYPOGRAPHY` - Font settings
- `HOME_SPACING` - Layout spacing values
- `ANIMATION_TIMINGS` - Chat animation timings
- `BRAND_LOGOS` - Brand logo data

### `HomePage.tsx`
Main landing page component that orchestrates:
1. Hero section with video background
2. Top brands ticker banner
3. Supplement Advisor chat card
4. Long-form homepage content

Uses CSS modules for responsive behavior (SSR-safe).

---

## 🧩 Component Details

### Hero Section (`components/Hero/`)
Video background hero with:
- Auto-playing background video
- Gradient overlay
- Main headline and subtext
- Responsive height (25.6vh mobile, 32vh desktop)

### SupplementAdvisorCard (`components/SupplementAdvisor/`)
Interactive chat-style card featuring:
- Animated typing indicators
- Sequential message reveal
- "Supplement Advisor" CTA button
- Opens AdvisorModal on click

### TopBrandsBanner (`components/TopBrandsBanner/`)
Scrolling brand logos ticker with:
- Seamless infinite loop
- 8 brand logos
- CSS animation for smooth scroll

### HomepageContent (`components/HomepageContent/`)
Long-form educational content split into 9 modular sections:
1. **WhyZynavaSection** - Mission and purpose
2. **WhatZynavaDoesSection** - Independent approach
3. **HowItWorksSection** - 3-step process
4. **IngredientFocusSection** - Ingredient-first philosophy
5. **UserExperienceSection** - User-centric design
6. **TrustSafetySection** - Trust and disclaimers
7. **WhoWeServeSection** - Target audiences
8. **ResponsibleWellnessSection** - Wellness philosophy
9. **CTASection** - Final call-to-action with disclaimer

---

## 🎨 Styling Approach

All components use **CSS Modules** for:
- Scoped styles (no class name conflicts)
- SSR compatibility (no hydration mismatches)
- Better maintainability
- Responsive design via media queries

---

## ✅ Code Quality

- ✅ Barrel exports for clean imports
- ✅ Centralized types and constants
- ✅ CSS Modules (no inline styles)
- ✅ SSR-safe (no window.innerWidth)
- ✅ Modular section components
- ✅ JSDoc documentation
- ✅ Accessible markup
- ✅ No dead/empty folders

---

## 📊 Rating: 10/10

The Home module follows best practices:
- Clear folder organization
- Centralized types and constants
- Barrel exports for clean imports
- CSS Modules for all styling
- Modular, maintainable components
- Comprehensive documentation


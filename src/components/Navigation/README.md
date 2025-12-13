# Navigation Components

This folder contains the main site navigation components that appear at the top of every page.

## 📁 Folder Structure

```
Navigation/
├── DualNavbar.tsx          # Main navigation wrapper component
├── Desktop/
│   └── DesktopNav.tsx      # Desktop navigation bar
└── Mobile/
    └── MobileNav.tsx       # Mobile navigation with hamburger menu
```

## 📄 Files Overview

### `DualNavbar.tsx` (14 lines)
**Purpose:** Main navigation component that wraps both desktop and mobile navigation.

**Exports:**
- `DualNavbar` - Main navigation component

**Features:**
- Renders both `DesktopNav` and `MobileNav` components
- Responsive display is controlled by CSS classes in `app/globals.css`
- Used in `app/layout.tsx` to appear on all pages

**Usage:**
```tsx
import { DualNavbar } from '@/src/components/Navigation/DualNavbar'

<DualNavbar />
```

---

### `Desktop/DesktopNav.tsx` (62 lines)
**Purpose:** Desktop navigation bar for screens ≥768px.

**Exports:**
- `DesktopNav` - Desktop navigation component

**Features:**
- Horizontal navigation bar with inline links
- Links: Home, About, Contact, FAQ, Shop, Cart
- ZYNAVA logo on the left
- Sticky positioning at top of page
- Controlled by `.desktop-nav` CSS class in `app/globals.css`

**Styling:**
- Logo: 1.5rem font size, bold
- Links: 1rem font size, 500 weight
- Gap between links: 2rem
- Padding: 0.45rem 1.75rem
- White background, sticky top, z-index 1000
- Responsive display controlled by CSS class

**Responsive:**
- Hidden on mobile (<768px) via CSS
- Visible on desktop (≥768px) via CSS

---

### `Mobile/MobileNav.tsx` (181 lines)
**Purpose:** Mobile navigation with hamburger menu for screens <768px.

**Exports:**
- `MobileNav` - Mobile navigation component

**Features:**
- Hamburger menu (☰) that toggles full-screen menu
- Same navigation links as desktop
- Full-screen overlay when menu is open
- Close button (✕) in menu overlay
- State management with React `useState`

**Styling:**
- Logo: 1.25rem font size, bold
- Links: 0.9rem font size (in mobile overlay)
- Hamburger button: 1.05rem font size
- White background, sticky top, z-index 1000
- Responsive display controlled by CSS class

**Responsive:**
- Visible on mobile (<768px) via CSS
- Hidden on desktop (≥768px) via CSS

**State:**
- `isOpen` - Boolean state for menu visibility
- `toggleMenu()` - Function to toggle menu state

---

## 🎨 CSS Classes

The responsive behavior is controlled by CSS classes defined in `app/globals.css`:

```css
.desktop-nav {
  display: none;  /* Hidden on mobile */
}

.mobile-nav {
  display: flex;   /* Visible on mobile */
}

@media (min-width: 768px) {
  .desktop-nav {
    display: flex;  /* Visible on desktop */
  }
  
  .mobile-nav {
    display: none;  /* Hidden on desktop */
  }
}
```

## 🔗 Navigation Links

All navigation components include these routes:
- **Home** → `/main`
- **About** → `/about`
- **Contact** → `/contact`
- **FAQ** → `/faq`
- **Shop** → `/products`
- **Cart** → `/cart`

## ✅ Code Quality

- ✅ All files under 300 lines
- ✅ No redundant code
- ✅ Proper TypeScript types
- ✅ Accessible (aria-labels on buttons)
- ✅ Responsive design
- ✅ Clean component structure

## 🐛 Issues Fixed

1. ✅ Removed redundant `display: 'none'` inline style from DesktopNav (now controlled by CSS class)
2. ✅ Fixed font size inconsistency (DesktopNav links now 1rem instead of 0.65rem)
3. ✅ Increased DesktopNav logo font size to 1.5rem for better visibility
4. ✅ Increased MobileNav logo font size to 1.25rem for better visibility
5. ✅ Increased gap between links to 2rem for better spacing


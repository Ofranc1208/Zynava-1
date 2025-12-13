# Home Page Navigation Bar

This folder contains the navigation bar component that appears on the home page, specifically for filtering products (Top Sellers, Deals, Categories).

## 📁 Folder Structure

```
NavigationBar/
├── NavigationBar.tsx          # Main navigation bar component
├── NavigationBar.module.css   # Scoped CSS styles
└── index.tsx                  # Export file
```

## 📄 Files Overview

### `NavigationBar.tsx` (33 lines)
**Purpose:** Product category navigation bar for the home page.

**Exports:**
- `NavigationBar` (default export)

**Features:**
- Three navigation buttons: Top Sellers, Deals, Categories
- Links to product pages with filter query parameters
- Uses CSS Module for styling
- Sticky positioning at top of page

**Links:**
- **Top Sellers** → `/products?filter=top-sellers`
- **Deals** → `/products?filter=deals`
- **Categories** → `/products?filter=categories`

**Usage:**
```tsx
import NavigationBar from '@/src/Pages/Home/components/NavigationBar'

<NavigationBar />
```

---

### `NavigationBar.module.css` (152 lines)
**Purpose:** Scoped CSS styles for the navigation bar component.

**Key Classes:**

#### `.navigationBar`
- Main container for the navigation bar
- Sticky positioning (stays at top when scrolling)
- Gradient background (light gray to white)
- Border bottom for separation
- z-index: 100

#### `.container`
- Flexbox container for buttons
- Max-width: 1200px (centered)
- Gap: 1rem between buttons
- `flex-wrap: nowrap` (ensures single line)

#### `.navLink`
- Base styles for all navigation buttons
- White background with colored borders
- Responsive font sizing with `clamp()`
- Smooth transitions for hover effects
- Flex: 1 (equal width distribution)

#### Button-Specific Styles

**Top Sellers (Blue):**
- Border: `#3b82f6`
- Hover: Light blue background (`#eff6ff`), blue text (`#1e40af`)
- Lift effect: `translateY(-2px)` on hover

**Deals (Green):**
- Border: `#10b981`
- Hover: Light green background (`#ecfdf5`), green text (`#065f46`)
- Lift effect: `translateY(-2px)` on hover

**Categories (Orange):**
- Border: `#f59e0b`
- Hover: Light orange/yellow background (`#fffbeb`), orange text (`#92400e`)
- Lift effect: `translateY(-2px)` on hover

#### Responsive Breakpoints

**Desktop (default):**
- Padding: 0.75rem 1.5rem
- Font size: clamp(0.96rem, 2.2vw, 1.2rem)
- Min-width: clamp(120px, 15vw, 160px)
- Max-width: 180px

**Tablet (≤768px):**
- Gap: 0.5rem
- Padding: 0.6rem 1rem
- Font size: clamp(0.84rem, 2.6vw, 1.02rem)
- Min-width: clamp(100px, 12vw, 130px)
- Max-width: 140px

**Mobile (≤480px):**
- Gap: 0.25rem
- Padding: 0.5rem 0.75rem
- Font size: clamp(0.78rem, 3vw, 0.96rem)
- Min-width: clamp(90px, 10vw, 110px)
- Max-width: 120px

**Extra Small (≤360px):**
- Gap: 0.15rem
- Padding: 0.4rem 0.5rem
- Font size: 0.7rem
- Min-width: 80px
- Max-width: 100px
- Border-radius: 8px

---

### `index.tsx` (5 lines)
**Purpose:** Export file for cleaner imports.

**Exports:**
- Default export: `NavigationBar`
- Named export: `NavigationBar`

**Usage:**
```tsx
import NavigationBar from './NavigationBar'
// or
import { NavigationBar } from './NavigationBar'
```

---

## 🎨 Design Features

### Hover Effects
- **Lift Animation:** Buttons lift up 2px on hover (`translateY(-2px)`)
- **Color Change:** Background changes to light theme color
- **Shadow Enhancement:** Box shadow increases for depth
- **Smooth Transitions:** All changes animate smoothly (0.2s ease)

### Active States
- Buttons return to original position when clicked
- Shadow reduces slightly for pressed effect

### Focus States
- Orange outline (3px) for keyboard navigation accessibility
- Outline offset: 3px

---

## ✅ Code Quality

- ✅ File size: 152 lines (under 300 line limit)
- ✅ No redundant code
- ✅ Clean CSS structure
- ✅ Proper responsive breakpoints
- ✅ Accessible (focus states)
- ✅ Smooth animations
- ✅ No conflicts or duplications

## 📱 Mobile Compatibility

Tested and verified on:
- ✅ iPhone 16 Pro (390x844)
- ✅ iPhone SE (375x667)
- ✅ iPad Pro (1024x1366)
- ✅ Small phones (320x568)

All three buttons remain visible and properly spaced on all device sizes.

## 🔧 Recent Fixes

1. ✅ Removed redundant generic hover rule that conflicted with button-specific hovers
2. ✅ Simplified transitions for better performance
3. ✅ Added proper active states for each button
4. ✅ Cleaned up all duplicate code
5. ✅ Added extra small device breakpoint (≤360px)


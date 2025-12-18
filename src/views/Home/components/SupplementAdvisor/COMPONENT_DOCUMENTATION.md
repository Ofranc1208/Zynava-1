# Supplement Advisor Card Component - Complete Documentation

## 📍 Component Location

The **SupplementAdvisorCard** component is located in the Home module:

```
src/views/Home/components/SupplementAdvisor/
├── SupplementAdvisorCard.tsx          # Main component
├── SupplementAdvisorCard.module.css   # Styles
├── index.tsx                          # Module exports
├── hooks/
│   ├── usePromoCheck.ts              # Promo overlay integration hook
│   └── index.ts                      # Hook exports
└── COMPONENT_DOCUMENTATION.md        # This file
```

**Usage in Home Page:**
- Imported in: `src/views/Home/HomePage.tsx`
- Used as: `<SupplementAdvisorCard />`
- Positioned: Between TopBrandsBanner and HomepageContent sections

---

## 🎯 Overview

The SupplementAdvisorCard is an **interactive chat-style card component** that displays an animated conversation sequence introducing the Supplement Advisor feature. It features:

- ✅ Progressive message reveal with typing indicators
- ✅ Smooth animations and transitions
- ✅ Glassmorphism design (frosted glass effect)
- ✅ Full accessibility support (ARIA, reduced motion)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Promo overlay integration (waits for dismissal)
- ✅ Auto-scrolling message container
- ✅ Modal integration for full advisor experience

---

## 🏗️ Component Architecture

### Main Component Structure

```tsx
SupplementAdvisorCard
├── usePromoCheck()           // Waits for promo overlay dismissal
├── Animation State Management
│   ├── AnimationStep enum    // 7 animation states
│   └── React transitions     // Non-blocking UI updates
├── Message Container
│   ├── Typing bubbles        // Animated dots
│   ├── Message bubbles       // Text messages
│   └── Auto-scroll ref       // Smooth scrolling
└── CTA Button
    └── Opens AdvisorModal    // Full advisor interface
```

### File Dependencies

**Internal Dependencies:**
- `src/views/Home/types.ts` - `AnimationStep` enum
- `src/views/Home/constants.ts` - `ANIMATION_TIMINGS` and `PROMO_CONFIG`
- `src/views/Home/components/SupplementAdvisor/hooks/usePromoCheck.ts`

**External Dependencies:**
- `src/components/advisor/AdvisorModal` - Full-screen modal component

---

## 🎬 Animation Sequence

The component follows a **7-step animation sequence**:

| Step | AnimationStep | Timing (ms) | Description |
|------|--------------|-------------|-------------|
| 0 | `INITIAL_TYPING` | 0 | Initial typing indicator shown |
| 1 | `GREETING` | 806 | "Hey there 👋" message appears |
| 2 | `TYPING_BEFORE_FIRST` | 1434 | Typing indicator before first message |
| 3 | `FIRST_MESSAGE` | 2150 | "Don't just **BUY** supplements." |
| 4 | `TYPING_BEFORE_SECOND` | 2778 | Typing indicator before second message |
| 5 | `SECOND_MESSAGE` | 3494 | "**Discover the benefits**, **compare prices**, and **decide if it's worth it**." |
| 6 | `SHOW_BUTTON` | 4032 | CTA button appears |

**Total Animation Duration:** ~4 seconds

### Animation Timing Configuration

Located in `src/views/Home/constants.ts`:

```typescript
export const ANIMATION_TIMINGS = {
  GREETING: 806,        // 30% faster (was 1152)
  TYPING_1: 1434,       // 30% faster (was 2048)
  FIRST_MESSAGE: 2150,  // 30% faster (was 3072)
  TYPING_2: 2778,       // 30% faster (was 3968)
  SECOND_MESSAGE: 3494, // 30% faster (was 4992)
  BUTTON: 4032,         // 30% faster (was 5760)
} as const
```

**To adjust animation speed:**
1. Modify values in `ANIMATION_TIMINGS` (lower = faster)
2. Maintain proportional relationships between steps
3. Test on different devices for performance

---

## 🎨 Styling System

### CSS Architecture

The component uses **CSS Modules** with **CSS Custom Properties** (CSS Variables) for maintainability.

#### Design System Variables

All variables are scoped to `.chatCard.chatCard`:

```css
/* Colors */
--color-white: #ffffff;
--color-border: #6b7280;
--color-border-light: #e2e8f0;
--color-bg-light: #f8fafc;
--color-primary: #ff6b35;        /* Orange accent */
--color-primary-hover: #e55a2b;
--color-text: #475569;
--color-text-dark: #1a202c;

/* Spacing Scale */
--spacing-xs: 0.25rem;  /* 4px */
--spacing-sm: 0.5rem;   /* 8px */
--spacing-md: 0.85rem;  /* 14px */
--spacing-lg: 1.1rem;   /* 18px */
--spacing-xl: 1.4rem;   /* 22px */

/* Border Radius */
--radius-sm: 0.75rem;   /* 12px */
--radius-md: 1rem;      /* 16px */
--radius-lg: 1.25rem;   /* 20px */
--radius-corner: 0.25rem; /* 4px - chat bubble corners */

/* Shadows */
--shadow-card: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.06);
--shadow-card-glass: 0 0.5rem 2rem rgba(0, 0, 0, 0.1), 
                     0 0.125rem 0.5rem rgba(0, 0, 0, 0.08);
--shadow-button: 0 0.25rem 0.75rem rgba(255, 107, 53, 0.4);
--shadow-button-hover: 0 0.375rem 1rem rgba(255, 107, 53, 0.5);
```

### Glassmorphism Effect

The card uses a **frosted glass** (glassmorphism) design:

```css
background: rgba(255, 255, 255, 0.85);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(107, 114, 128, 0.3);
box-shadow: var(--shadow-card-glass);
```

**Key Features:**
- Semi-transparent white background (85% opacity)
- Backdrop blur for depth
- Subtle border for definition
- Layered shadows for elevation

### Component Styles

#### `.chatCard`
- **Fixed height containers** (prevents layout shift):
  - Desktop: `24.75rem` (396px)
  - Tablet: `22.5rem` (360px)
  - Mobile: `20rem` (320px)
- **Flexbox column layout**
- **Overflow hidden** (messages scroll internally)

#### `.chatMessages`
- **Scrollable container** for messages
- **Custom scrollbar** styling (orange accent)
- **Gap spacing** between messages (`--spacing-md`)

#### `.typingBubble`
- **Light gray background** (`--color-bg-light`)
- **Rounded corners** with chat bubble style
- **Fade-in animation** (0.3s)
- **Contains animated dots**

#### `.dots` & `.dots span`
- **Three bouncing dots** animation
- **Animation duration:** 0.98s (30% faster)
- **Staggered delays:**
  - Dot 1: `-0.11s`
  - Dot 2: `-0.11s`
  - Dot 3: `0s`
- **Bounce keyframe:** Scale 0.6 → 1.0 → 0.6 with opacity changes

#### `.messageBubble`
- **Standard messages:** `slideIn` animation (0.4s)
- **Animated messages:** `slideInBold` animation (0.5s)
  - Scale + translateY effect
  - Bounce-back cubic-bezier easing
- **Strong text:** 10% larger, bold, darker color

#### `.chatButton`
- **Primary orange** background
- **Pulse animation** (2s infinite)
- **Arrow bounce** animation (1.5s)
- **Hover effects:** Lift + enhanced pulse
- **Focus-visible** styles for accessibility

### Keyframe Animations

#### `@keyframes bounce`
```css
0%, 80%, 100% {
  transform: scale(0.6);
  opacity: 0.5;
}
40% {
  transform: scale(1);
  opacity: 1;
}
```

#### `@keyframes slideIn`
```css
from {
  opacity: 0;
  transform: translateY(0.5rem);
}
to {
  opacity: 1;
  transform: translateY(0);
}
```

#### `@keyframes slideInBold`
```css
0% {
  opacity: 0;
  transform: translateY(0.75rem) scale(0.95);
}
60% {
  transform: translateY(-0.125rem) scale(1);
}
100% {
  opacity: 1;
  transform: translateY(0) scale(1);
}
```

#### `@keyframes pulseOrange`
```css
0%, 100% {
  box-shadow: 0 0.25rem 0.75rem rgba(255, 107, 53, 0.4);
}
50% {
  box-shadow: 0 0.25rem 1.25rem rgba(255, 107, 53, 0.6), 
              0 0 0 0.25rem rgba(255, 107, 53, 0.1);
}
```

---

## 📱 Responsive Design

### Breakpoints

| Breakpoint | Width | Card Height | Padding Adjustments |
|------------|-------|------------|---------------------|
| **Desktop** | ≥769px | 396px | Larger padding, larger fonts |
| **Tablet** | ≤768px | 360px | Medium padding, medium fonts |
| **Mobile** | ≤480px | 320px | Smaller padding, smaller fonts |

### Responsive Features

1. **Card Dimensions:**
   - Fixed heights prevent layout shift
   - Width adapts with margins

2. **Typography Scaling:**
   - Desktop: 1.1rem messages, 1rem button
   - Tablet: 0.95rem messages, 0.9rem button
   - Mobile: 0.9rem messages, 0.85rem button

3. **Spacing Adjustments:**
   - Padding scales down on smaller screens
   - Message gaps adjust proportionally

4. **Dot Sizes:**
   - Desktop: 10px × 10px
   - Mobile: 6px × 6px

---

## ♿ Accessibility Features

### ARIA Attributes

```tsx
<div 
  className={styles.chatMessages}
  role="log"                    // Chat log semantics
  aria-live="polite"           // Announce new messages
  aria-atomic="true"           // Announce entire log
  aria-label="Chat conversation"
>
```

### Keyboard Navigation

- **Escape key** closes modal (handled by AdvisorModal)
- **Focus management** for modal interactions
- **Focus-visible** styles on button

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  /* All animations reduced to 0.01ms */
  /* Single iteration only */
  /* Scroll behavior: auto */
}
```

**Respects user preferences** for reduced motion in system settings.

---

## 🔌 Integration: Promo Overlay

The component uses `usePromoCheck()` hook to wait for promo overlay dismissal.

### How It Works

1. **Checks sessionStorage** for `zynava_promo_seen` flag
2. **Polls every 500ms** (max 10 attempts)
3. **Fallback timeout** of 200ms if sessionStorage unavailable
4. **Starts animation** only after promo is dismissed

### Configuration

Located in `src/views/Home/constants.ts`:

```typescript
export const PROMO_CONFIG = {
  STORAGE_KEY: 'zynava_promo_seen',
  INITIAL_CHECK_DELAY: 100,
  FALLBACK_DELAY: 200,
  POLL_INTERVAL: 500,
  MAX_POLLS: 10,
} as const
```

**To disable promo integration:**
- Remove `usePromoCheck()` hook
- Set `canStart` to `true` immediately
- Or modify hook to always return `true`

---

## 🚀 Usage in Another Project

### Step 1: Copy Component Files

Copy the entire `SupplementAdvisor` folder:
```
src/views/Home/components/SupplementAdvisor/
```

### Step 2: Copy Dependencies

**Required files:**
- `src/views/Home/types.ts` - Copy `AnimationStep` enum
- `src/views/Home/constants.ts` - Copy `ANIMATION_TIMINGS` and `PROMO_CONFIG`

**Optional (if using promo integration):**
- `src/views/Home/components/SupplementAdvisor/hooks/usePromoCheck.ts`

### Step 3: Update Imports

**In `SupplementAdvisorCard.tsx`:**

```tsx
// Update these imports to match your project structure:
import { AnimationStep } from '../../types'  // Adjust path
import { ANIMATION_TIMINGS } from '../../constants'  // Adjust path
import { AdvisorModal } from '@/src/components/advisor'  // Adjust path
```

**If not using AdvisorModal:**
- Remove `AdvisorModal` import
- Replace button click handler with your own action
- Remove `isModalOpen` state

### Step 4: Customize Content

**Update messages in component:**

```tsx
{step >= AnimationStep.GREETING && (
  <div className={styles.messageBubble}>
    Your greeting message here 👋
  </div>
)}

{step >= AnimationStep.FIRST_MESSAGE && (
  <div className={`${styles.messageBubble} ${styles.animated}`}>
    Your first message with <strong>bold text</strong>.
  </div>
)}
```

### Step 5: Adjust Animation Timings

**In your constants file:**

```typescript
export const ANIMATION_TIMINGS = {
  GREETING: 806,        // Adjust to your preference
  TYPING_1: 1434,
  FIRST_MESSAGE: 2150,
  TYPING_2: 2778,
  SECOND_MESSAGE: 3494,
  BUTTON: 4032,
} as const
```

### Step 6: Customize Colors

**In `SupplementAdvisorCard.module.css`:**

Update CSS custom properties:
```css
--color-primary: #ff6b35;  /* Your brand color */
--color-primary-hover: #e55a2b;
--color-bg-light: #f8fafc;
/* etc. */
```

### Step 7: Remove Promo Integration (Optional)

**If you don't need promo overlay integration:**

```tsx
// Replace this:
const canStart = usePromoCheck()

// With this:
const canStart = true

// And remove the usePromoCheck import
```

---

## 🎛️ Customization Options

### Change Animation Speed

**Faster animations:**
- Reduce all `ANIMATION_TIMINGS` values proportionally
- Example: Multiply all by 0.7 for 30% faster

**Slower animations:**
- Increase all `ANIMATION_TIMINGS` values proportionally
- Example: Multiply all by 1.3 for 30% slower

### Change Typing Dot Speed

**In CSS:**
```css
.dots span {
  animation: bounce 0.98s infinite ease-in-out both;
  /* Reduce duration for faster bounce */
}
```

### Change Message Content

**Edit directly in component:**
- Lines 130-132: Greeting message
- Lines 146-148: First message
- Lines 162-164: Second message
- Line 178: Button text

### Change Card Height

**In CSS custom properties:**
```css
--card-height-desktop: 24.75rem;  /* Adjust as needed */
--card-height-tablet: 22.5rem;
--card-height-mobile: 20rem;
```

### Disable Glassmorphism

**Replace in CSS:**
```css
/* From: */
background: rgba(255, 255, 255, 0.85);
backdrop-filter: blur(12px);

/* To: */
background: #ffffff;
/* Remove backdrop-filter */
```

---

## 🐛 Troubleshooting

### Animation Not Starting

1. **Check `canStart` state:**
   - Ensure `usePromoCheck()` returns `true`
   - Or set `canStart = true` for testing

2. **Check animation timings:**
   - Verify `ANIMATION_TIMINGS` values are positive numbers
   - Ensure timers aren't being cleared prematurely

### Messages Not Scrolling

1. **Check ref:**
   - Ensure `messagesEndRef` is attached to a div
   - Verify ref is inside scrollable container

2. **Check CSS:**
   - Ensure `.chatMessages` has `overflow-y: auto`
   - Verify container has fixed height

### Styling Issues

1. **CSS Modules not working:**
   - Verify file extension is `.module.css`
   - Check import: `import styles from './...module.css'`

2. **Variables not applying:**
   - Ensure variables are scoped to `.chatCard.chatCard`
   - Check for CSS specificity conflicts

### Performance Issues

1. **Reduce animations:**
   - Lower `ANIMATION_TIMINGS` values
   - Reduce keyframe complexity

2. **Optimize CSS:**
   - Use `will-change` sparingly
   - Remove unnecessary backdrop-filter on low-end devices

---

## 📊 Technical Details

### React Hooks Used

- `useState` - Animation step state
- `useEffect` - Animation scheduling, auto-scroll
- `useRef` - Message container scroll reference
- `useTransition` - Non-blocking UI updates

### Performance Optimizations

1. **React Transitions:**
   - Uses `startTransition()` for non-urgent updates
   - Prevents blocking main thread

2. **RequestAnimationFrame:**
   - Smooth scrolling uses `requestAnimationFrame`
   - Better performance than direct DOM manipulation

3. **CSS Optimizations:**
   - `will-change` hints for animated elements
   - Hardware-accelerated transforms
   - Efficient keyframe animations

### Browser Compatibility

- **Modern browsers:** Full support
- **IE11:** Not supported (uses modern CSS)
- **Mobile Safari:** Full support with vendor prefixes
- **Chrome/Firefox/Edge:** Full support

---

## 📝 Code Examples

### Basic Usage

```tsx
import SupplementAdvisorCard from './components/SupplementAdvisor'

function HomePage() {
  return (
    <div>
      <SupplementAdvisorCard />
    </div>
  )
}
```

### With Custom Handler

```tsx
// Modify SupplementAdvisorCard.tsx
const handleChatClick = (): void => {
  // Your custom action
  router.push('/advisor')
  // Or analytics tracking
  // Or open custom modal
}
```

### Standalone (No Modal)

```tsx
// Remove AdvisorModal import and usage
// Replace button handler:
<button onClick={() => {
  // Your action here
}}>
  Supplement Advisor
</button>
```

---

## 🎨 Design Tokens Reference

### Color Palette
- **Primary:** `#ff6b35` (Orange)
- **Primary Hover:** `#e55a2b` (Darker Orange)
- **Background Light:** `#f8fafc` (Light Gray)
- **Text:** `#475569` (Medium Gray)
- **Text Dark:** `#1a202c` (Dark Gray)
- **Border:** `#e2e8f0` (Light Border)

### Typography
- **Font Family:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Message Size:** 1.03rem (base), scales down on mobile
- **Button Size:** 0.95rem (base), scales down on mobile
- **Line Height:** 1.6

### Spacing Scale
- **XS:** 4px
- **SM:** 8px
- **MD:** 14px
- **LG:** 18px
- **XL:** 22px

---

## 📚 Additional Resources

### Related Components
- `AdvisorModal` - Full-screen modal wrapper
- `AdvisorChat` - Main chat/quiz interface
- `TopBrandsBanner` - Banner component above advisor card

### Related Files
- `src/views/Home/HomePage.tsx` - Parent component
- `src/views/Home/constants.ts` - Shared constants
- `src/views/Home/types.ts` - Type definitions

---

## ✅ Checklist for Reuse

When adapting this component for another project:

- [ ] Copy `SupplementAdvisor` folder
- [ ] Copy `AnimationStep` enum from `types.ts`
- [ ] Copy `ANIMATION_TIMINGS` from `constants.ts`
- [ ] Update import paths
- [ ] Customize message content
- [ ] Adjust animation timings (if needed)
- [ ] Update color variables
- [ ] Remove/adapt promo integration
- [ ] Update button action (if not using AdvisorModal)
- [ ] Test on mobile/tablet/desktop
- [ ] Verify accessibility features
- [ ] Test reduced motion preference

---

## 📞 Support

For questions or issues:
1. Check this documentation
2. Review component code comments
3. Test in isolation to identify issues
4. Check browser console for errors

---

**Last Updated:** 2025
**Component Version:** Current as of latest implementation
**Maintained By:** Development Team


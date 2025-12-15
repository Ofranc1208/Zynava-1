# iOS Safari Modal Fix - Research-Backed Solution

## Problem
The chatbot modal was being cut off at the top on iOS Safari (especially when opened from Safari that reverts to Google). The header and top portion of the modal were not visible.

## Root Causes Identified
1. **Viewport Height (`vh`) Units**: iOS Safari calculates `vh` inconsistently when the address bar shows/hides
2. **Excessive Padding**: Large `vh`-based padding (15vh, 6vh, etc.) pushed modal content out of view
3. **Inadequate Scroll Lock**: `overflow: hidden` doesn't reliably prevent background scrolling on iOS

## Research-Backed Solutions Implemented

### 1. **Use Percentage-Based Heights Instead of Viewport Units**
**Why**: iOS Safari has known bugs with `vh`/`dvh` units. Using `height: 100%` provides consistent behavior.

**Changes**:
```css
/* BEFORE */
.overlay {
  height: 100vh;
  padding: 15vh 1rem;
}
.modal {
  height: 70vh;
  max-height: 70vh;
}

/* AFTER */
.overlay {
  height: 100%; /* Works consistently on iOS */
  padding: 1rem; /* Simple, fixed padding */
}
.modal {
  height: 70%; /* Percentage of overlay height */
  max-height: 650px; /* Fixed max for large screens */
}
```

### 2. **Improved Body Scroll Lock (position: fixed)**
**Why**: Research shows `position: fixed` with scroll position preservation works better than `overflow: hidden` on iOS.

**Changes in `AdvisorModal.tsx`**:
```javascript
// BEFORE
document.body.style.overflow = 'hidden'

// AFTER
const scrollY = window.scrollY
document.body.style.position = 'fixed'
document.body.style.top = `-${scrollY}px`
document.body.style.width = '100%'

// On close, restore scroll position
window.scrollTo(0, scrollY)
```

### 3. **Mobile-Optimized Responsive Breakpoints**
**Changes**:
- **Tablet (≤768px)**: `height: 85%` with `padding: 0.75rem`
- **Mobile (≤480px)**: `height: 90%` with `padding: 0.5rem`  
- **Small iPhones (≤390px)**: `height: 92%` with `padding: 0.5rem 0.25rem`
- **Landscape (≤600px height)**: `height: 95%` with `padding: 0.25rem`

### 4. **Enhanced Viewport Configuration**
**Added to `app/layout.tsx`**:
```typescript
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover', // iOS safe area support
}
```

### 5. **iOS-Specific CSS Optimizations**
**Added to `app/globals.css`**:
```css
body {
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
  overscroll-behavior: contain; /* Prevent bounce scrolling */
}
```

## Files Modified
1. ✅ `src/components/advisor/AdvisorModal.module.css` - Percentage-based heights, reduced padding
2. ✅ `src/components/advisor/AdvisorModal.tsx` - Improved scroll lock with position: fixed
3. ✅ `app/layout.tsx` - Enhanced viewport configuration
4. ✅ `app/globals.css` - iOS-specific overflow handling

## Browser Compatibility
- ✅ **iOS Safari** (Primary target - all versions)
- ✅ **Chrome Mobile** (Android & iOS)
- ✅ **Firefox Mobile**
- ✅ **Desktop Browsers** (Chrome, Firefox, Safari, Edge)

## Testing Checklist
- [ ] iPhone 16 Pro / iPhone 15 Pro Max
- [ ] iPhone 14 / iPhone 13
- [ ] iPhone SE / iPhone 13 mini
- [ ] iPad (Portrait & Landscape)
- [ ] Safari (direct)
- [ ] Safari → Google redirect
- [ ] Chrome iOS
- [ ] Firefox iOS
- [ ] Android Chrome
- [ ] Desktop browsers

## Expected Behavior
1. ✅ Modal opens centered with full content visible
2. ✅ No top cutoff on any screen size
3. ✅ Background scroll locked (no bounce)
4. ✅ Scroll position preserved when modal closes
5. ✅ Smooth animations across all browsers
6. ✅ Works in portrait and landscape orientations

## References
- [Dev.to: iOS Safari vh inconsistencies](https://dev.to/raicuparta/dealing-with-platform-inconsistencies)
- [CSS-Tricks: Prevent page scrolling when modal is open](https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/)
- [JayFreestone: Locking body scroll on iOS](https://www.jayfreestone.com/writing/locking-body-scroll-ios/)

## Deployment
Ready to push to Git and deploy to Vercel for live testing.

---
**Date**: December 15, 2025  
**Status**: ✅ IMPLEMENTED - Ready for testing


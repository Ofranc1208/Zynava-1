# PromoOverlay - Testing Mode

## Status: TEMPORARILY DISABLED ⏸️

**Date Disabled**: December 13, 2025  
**Reason**: Testing mode - avoiding popup interruptions during development

---

## What Was Done

The PromoOverlay component has been temporarily disabled for testing purposes by commenting it out in the root layout file. The SupplementAdvisorCard was also updated to auto-detect when the promo is disabled.

### Changes Made:

**1. Disabled PromoOverlay**
- **File Modified**: `app/layout.tsx` (line 28-32)
- **Action**: Commented out the `<PromoOverlay />` component
- **Code Status**: All component files remain intact and functional

**2. Updated SupplementAdvisorCard Auto-Detection**
- **File Modified**: `src/Pages/Home/components/SupplementAdvisor/SupplementAdvisorCard.tsx` (line 14-36)
- **Action**: Added 100ms timeout check to detect if promo is disabled
- **Result**: Card now starts immediately when promo is disabled, but still waits correctly when promo is enabled
- **Logic**: If `sessionStorage` is not set after 100ms, assumes promo is disabled and starts animation

---

## Component Details

### Location
- `src/components/PromoOverlay/PromoOverlay.tsx` - Main component
- `src/components/PromoOverlay/PromoOverlay.module.css` - Styles
- `src/components/PromoOverlay/index.tsx` - Export file

### Functionality (when enabled)
- Shows "Weekly Special" popup after 3 seconds
- Offers coupon code (currently: WELCOME21)
- Discount text: "Save 21% + Free Shipping"
- Uses sessionStorage to prevent repeated displays
- Linked to SupplementAdvisor timing (advisor waits for promo to be dismissed)

---

## How to Re-Enable

### Step 1: Open `app/layout.tsx`

### Step 2: Find the commented section (around line 28-31)
```tsx
{/* TESTING MODE: PromoOverlay temporarily disabled - see PromoOverlay/TESTING_MODE.md */}
{/* <PromoOverlay 
  couponCode="WELCOME21" 
  discountText="Save 21% + Free Shipping"
/> */}
```

### Step 3: Uncomment the component
```tsx
<PromoOverlay 
  couponCode="WELCOME21" 
  discountText="Save 21% + Free Shipping"
/>
```

### Step 4: Remove or update the testing mode comment

### Step 5: Clear sessionStorage (optional)
To test immediately after re-enabling:
```javascript
sessionStorage.removeItem('zynava_promo_seen')
```

---

## Dependencies

### Other Components Affected
- **SupplementAdvisorCard** (`src/Pages/Home/components/SupplementAdvisor/SupplementAdvisorCard.tsx`)
  - **UPDATED**: Now auto-detects if promo is disabled
  - Checks `sessionStorage.getItem('zynava_promo_seen')` before starting animation
  - If no sessionStorage after 100ms → assumes promo disabled → starts immediately
  - Polls every 500ms if waiting for promo (when promo is enabled)
  - **Result**: Works correctly whether promo is enabled or disabled

---

## Configuration

### Current Settings (when enabled)
```tsx
couponCode="WELCOME21"
discountText="Save 21% + Free Shipping"
```

### Timing
- Popup appears: 3 seconds after page load
- Session tracking: `zynava_promo_seen` in sessionStorage

---

## Testing Notes

### With PromoOverlay Disabled:
- ✅ No popup interruption during testing
- ✅ SupplementAdvisor starts immediately (no 3-second wait)
- ✅ Cleaner testing experience
- ✅ Faster iteration cycles

### Before Production:
- [ ] Re-enable PromoOverlay in `app/layout.tsx`
- [ ] Test popup timing and behavior
- [ ] Verify SupplementAdvisor coordination
- [ ] Test sessionStorage persistence
- [ ] Check mobile responsiveness
- [ ] Delete or archive this TESTING_MODE.md file

---

## Important Notes

⚠️ **Do NOT delete component files** - they are production-ready and fully functional

✅ **All code is intact** - only the import in layout.tsx is commented out

🔄 **Easy to reverse** - simply uncomment one line to restore functionality

📝 **Update this file** - when you re-enable the component, update the status at the top

---

## Questions or Issues?

If you encounter any issues when re-enabling:
1. Check that all files in `src/components/PromoOverlay/` are intact
2. Verify the import statement in `app/layout.tsx` is correct
3. Clear browser cache and sessionStorage
4. Check browser console for any errors

---

*Last Updated: December 13, 2025*


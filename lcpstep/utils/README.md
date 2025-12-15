# LCP Utilities & Layout System

This folder contains utility CSS modules and layout patterns used throughout the LCP components. These utilities provide consistent styling and eliminate code duplication across the application.

## CSS Modules

### 🎨 LCPUtilities.module.css
**Purpose**: Common utility classes for styling consistency
**Contains**:
- Error and success text styles
- Input wrapper layouts
- Tooltip icon styling
- Validation state indicators

#### Available Classes

```css
/* Error states */
.error, .errorText {
  color: #ef4444;
  font-size: 0.93rem;
  margin-top: 0.18rem;
  text-align: left;
}

/* Success states */
.successText {
  color: #22c55e;
  font-size: 0.8rem;
  margin-top: 0.18rem;
  text-align: center;
  font-weight: 500;
}

/* Form layouts */
.inputWrapper {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
}

/* Interactive elements */
.tooltipIcon {
  /* ... tooltip styling */
}
```

**Usage**:
```tsx
import utilities from './utils/LCPUtilities.module.css';

<p className={utilities.error}>Error message</p>
<div className={utilities.inputWrapper}>
  {/* form content */}
</div>
```

### 📐 LCPLayout.module.css
**Purpose**: Common layout patterns and container styles
**Contains**:
- Container layouts for forms and cards
- Action row positioning
- Payment list layouts
- Form section organization

#### Available Classes

```css
/* Main containers */
.container {
  width: 100%;
  background: #fff;
  border-radius: 16px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Form layouts */
.formContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  margin-bottom: 1.2rem;
}

/* Action positioning */
.actionRow {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  padding: 0.5rem 0;
}

/* Payment layouts */
.paymentList {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}
```

**Usage**:
```tsx
import layout from './utils/LCPLayout.module.css';

<div className={layout.container}>
  <div className={layout.formContainer}>
    {/* form sections */}
  </div>
  <div className={layout.actionRow}>
    <button>Next</button>
  </div>
</div>
```

## Utility Constants

### 📋 UTILITY_CLASSES (TypeScript)

The `utils/index.ts` file exports a constants object for type-safe class usage:

```tsx
import { UTILITY_CLASSES } from './utils';

const errorElement = (
  <p className={UTILITY_CLASSES.ERROR}>
    This field is required
  </p>
);

const formContainer = (
  <div className={UTILITY_CLASSES.FORM_CONTAINER}>
    {/* form content */}
  </div>
);
```

#### Available Constants

| Constant | CSS Class | Purpose |
|----------|-----------|---------|
| `ERROR` | `.error` | Error text styling |
| `ERROR_TEXT` | `.errorText` | Alternative error styling |
| `SUCCESS_TEXT` | `.successText` | Success message styling |
| `INPUT_WRAPPER` | `.inputWrapper` | Form input container |
| `TOOLTIP_ICON` | `.tooltipIcon` | Help tooltip styling |
| `CONTAINER` | `.container` | Main layout container |
| `FORM_CONTAINER` | `.formContainer` | Form section container |
| `ACTION_ROW` | `.actionRow` | Button positioning |
| `PAYMENT_LIST` | `.paymentList` | Payment card layout |
| `FORM_SECTION` | `.formSection` | Form section spacing |
| `FORM_ROW` | `.formRow` | Horizontal form layout |
| `FORM_COLUMN` | `.formColumn` | Vertical form layout |

## Responsive Design

Both utility modules include responsive breakpoints:

### Mobile (max-width: 640px)
- Reduced font sizes (error: 0.85rem, success: 0.75rem)
- Smaller tooltip icons (16px instead of 18px)
- Adjusted container padding
- Stacked form layouts

### Accessibility
- **Prefers-reduced-motion**: Animations respect user preferences
- **Print styles**: Proper styling for printed documents
- **High contrast**: Color combinations meet accessibility standards

## Design System Integration

### Color Palette
- **Success Green**: `#22c55e` (validation states, positive indicators)
- **Error Red**: `#ef4444` (validation errors, warnings)
- **Neutral Gray**: `#f9fafb` (backgrounds, subtle elements)
- **Text Colors**: `#111827` (primary), `#6b7280` (secondary)

### Typography Scale
- **Error/Success**: 0.8rem - 0.93rem
- **Labels**: 0.83rem (700 weight)
- **Buttons**: 0.78rem (500-600 weight)

### Spacing System
- **Micro**: 0.18rem - 0.25rem (text margins)
- **Small**: 0.4rem - 0.5rem (button gaps)
- **Medium**: 0.75rem - 1rem (section spacing)
- **Large**: 1.1rem - 1.2rem (form sections)

## Migration Guide

### From Inline Styles
**Before**:
```tsx
<div style={{
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1rem'
}}>
  <button>Next</button>
</div>
```

**After**:
```tsx
import layout from './utils/LCPLayout.module.css';

<div className={layout.actionRow}>
  <button>Next</button>
</div>
```

### From LCPShared.module.css
**Before**:
```tsx
import styles from './LCPShared.module.css';

<p className={styles.error}>Error message</p>
```

**After**:
```tsx
import utilities from './utils/LCPUtilities.module.css';

<p className={utilities.error}>Error message</p>
```

## Performance Benefits

### Bundle Size
- **CSS splitting** - Only load utilities when needed
- **Tree shaking** - Unused classes are eliminated
- **Caching** - Utility modules can be cached separately

### Maintainability
- **Single source of truth** - Layout patterns defined once
- **Consistent updates** - Change utility affects all components
- **Type safety** - TypeScript constants prevent typos

### Developer Experience
- **IntelliSense** - IDE autocompletion for utility classes
- **Documentation** - Clear usage examples in README
- **Consistency** - Predictable styling across components

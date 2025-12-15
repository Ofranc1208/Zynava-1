# LCP Shared Components

This folder contains reusable UI components used across all LCP step components. These components follow a consistent design system and eliminate code duplication.

## Components

### 🔘 LCPButton
**Purpose**: Standardized button component for all LCP interactions
**Variants**: `option`, `next`
**Features**: 
- Consistent styling across all steps
- Hover/focus states with accessibility
- Disabled state handling
- Professional green gradient for "next" buttons

```tsx
import { LCPButton } from './shared';

// Option button
<LCPButton variant="option" selected={isSelected} onClick={handleClick}>
  Option Text
</LCPButton>

// Next button
<LCPButton variant="next" disabled={!isValid} onClick={handleNext} />
```

### 📋 LCPSection
**Purpose**: Consistent section layout with labels and optional tooltips
**Features**:
- Standardized spacing and typography
- Optional tooltip support
- Responsive design
- Clean visual hierarchy

```tsx
import { LCPSection } from './shared';

<LCPSection label="Section Title" tooltip="Optional help text">
  {/* Section content */}
</LCPSection>
```

### 📝 LCPFormInput
**Purpose**: Standardized form inputs with validation states
**Types**: `text`, `date`
**Features**:
- Built-in validation styling (neutral/valid/error states)
- Automatic numeric sanitization for text inputs
- Accessibility attributes (ARIA)
- Consistent focus/blur behavior

```tsx
import { LCPFormInput } from './shared';

<LCPFormInput
  type="text"
  value={amount}
  onChange={setAmount}
  placeholder="Enter amount"
  error={validationError}
  isValid={isAmountValid}
/>
```

## Design System

### Colors
- **Primary Green**: `#22c55e` (buttons, success states)
- **Dark Green**: `#16a34a` (hover states)
- **Error Red**: `#ef4444` (validation errors)
- **Neutral Gray**: `#f9fafb` (default backgrounds)

### Typography
- **Labels**: 0.83rem, weight 700
- **Buttons**: 0.78rem, weight 500-600
- **Errors**: 0.93rem, weight 400

### Spacing
- **Button padding**: 0.45rem 1.6rem
- **Section gaps**: 0.4rem
- **Form margins**: 1rem

## CSS Modules
Each component has its own CSS module for scoped styling:
- `LCPButton.module.css`
- `LCPSection.module.css` 
- `LCPFormInput.module.css`

## Accessibility
All components include:
- Proper ARIA attributes
- Keyboard navigation support
- Focus indicators
- Screen reader compatibility
- Reduced motion support

## Usage Guidelines
1. **Always use shared components** instead of creating custom buttons/inputs
2. **Import from index.ts** for clean imports: `import { LCPButton } from './shared'`
3. **Follow the design system** - don't override colors or spacing
4. **Test accessibility** when adding new features

# LCP Results Components

This folder contains specialized components for displaying LCP calculation results. These components handle the final step of the LCP flow with celebratory animations and clear result presentation.

## Components

### 🎉 ConfettiAnimation
**Purpose**: Celebratory confetti animation when results are displayed
**Features**:
- 50 animated particles with random positioning
- Configurable particle count
- Fade-in/fade-out timing
- Performance optimized (only renders when needed)

```tsx
import { ConfettiAnimation } from './results-components';

<ConfettiAnimation show={showResults} particleCount={50} />
```

**CSS Module**: `ConfettiAnimation.module.css`
- Random animation delays and durations
- Color variations (green theme)
- Responsive particle sizing

### 🏆 ResultCard
**Purpose**: Individual result display card (min/max/family protection)
**Variants**: `minimum`, `maximum`, `family`
**Features**:
- Currency formatting for amounts
- Color-coded variants
- Responsive design
- Professional styling

```tsx
import { ResultCard } from './results-components';

<ResultCard
  label="Minimum Payout"
  amount={250000}
  variant="minimum"
/>
```

**CSS Module**: `ResultCard.module.css`
- Gradient backgrounds for different variants
- Responsive typography
- Professional shadows and borders

### 📦 ResultsContainer
**Purpose**: Layout container for all result cards
**Features**:
- Responsive grid layout
- Consistent spacing
- Mobile-optimized stacking
- Proper alignment

```tsx
import { ResultsContainer } from './results-components';

<ResultsContainer>
  <ResultCard label="Min" amount={100000} variant="minimum" />
  <ResultCard label="Max" amount={300000} variant="maximum" />
  <ResultCard label="Family" amount={50000} variant="family" />
</ResultsContainer>
```

**CSS Module**: `ResultsContainer.module.css`
- Flexbox layout with responsive breakpoints
- Consistent gaps and padding
- Mobile-first design

## Usage Flow

1. **Animation triggers** when results component mounts
2. **Confetti displays** for 3.3 seconds
3. **Result cards render** with formatted amounts
4. **Container manages** responsive layout

## Styling System

### Animation Sequence
- **Scroll to top** on mount (smooth behavior)
- **Confetti delay** 300ms after scroll completes
- **Confetti duration** 3 seconds total
- **Fade out** after 3.3 seconds

### Responsive Design
- **Desktop**: Cards in single row
- **Tablet**: Cards in 2-column grid
- **Mobile**: Cards stacked vertically

### Accessibility
- **Reduced motion** support for confetti
- **Semantic structure** for screen readers
- **High contrast** color combinations
- **Keyboard navigation** support

## Integration

These components work together to create the final celebratory results page:

```tsx
const LCPaymentResultsPage: React.FC<Props> = ({ result, onBack }) => {
  return (
    <LCPStepContainer title="Congratulations!">
      <ConfettiAnimation show={true} />
      <ResultsContainer>
        {result.minPayout && (
          <ResultCard label="Minimum Payout" amount={result.minPayout} variant="minimum" />
        )}
        {result.maxPayout && (
          <ResultCard label="Maximum Payout" amount={result.maxPayout} variant="maximum" />
        )}
        {result.familyProtectionNPV && (
          <ResultCard label="Family Protection" amount={result.familyProtectionNPV} variant="family" />
        )}
      </ResultsContainer>
    </LCPStepContainer>
  );
};
```

## Performance Notes
- Confetti animation uses CSS transforms for smooth performance
- Components are memoized to prevent unnecessary re-renders
- Animation cleanup on unmount prevents memory leaks
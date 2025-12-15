# LCP Lump Sum Components

This folder contains specialized components for handling lump sum payment input and display. These components manage complex payment validation and dynamic form generation.

## Components

### 🔢 NumberOfPaymentsInput
**Purpose**: Input field for specifying number of lump sum payments
**Features**:
- Numeric validation (1-10 range)
- Real-time error feedback
- Responsive design
- Integration with payment cards

```tsx
import { NumberOfPaymentsInput } from './lump-sum-components';

<NumberOfPaymentsInput
  value={numberOfPayments}
  onChange={setNumberOfPayments}
  error={validationError}
/>
```

**CSS Module**: `NumberOfPaymentsInput.module.css`
- Consistent styling with other form inputs
- Error state indicators
- Mobile-responsive sizing

### 💳 PaymentCard
**Purpose**: Individual payment input card for amount and date
**Features**:
- Amount input with currency formatting
- Date selection with validation
- Error state handling
- Responsive card layout

```tsx
import { PaymentCard } from './lump-sum-components';

<PaymentCard
  payment={{ amount: '10000', lumpSumDate: '2024-06-01' }}
  index={0}
  errors={errors}
  onPaymentChange={handlePaymentChange}
/>
```

**CSS Module**: `PaymentCard.module.css`
- Card-based layout for visual separation
- Consistent spacing and typography
- Responsive form elements

### 💰 PaymentAmountInput
**Purpose**: Specialized input for lump sum amounts with validation
**Features**:
- Automatic numeric filtering (removes non-digits)
- Decimal precision (2 decimal places max)
- Amount range validation (7-digit max)
- Real-time formatting

**Note**: This component is used internally by PaymentCard

## Validation Logic

### Number of Payments
- **Range**: 1-10 payments required
- **Type**: Must be numeric
- **Display**: Error message for invalid input

### Payment Amount
- **Format**: Only digits and decimal point allowed
- **Precision**: Maximum 2 decimal places
- **Range**: 7-digit maximum (9999999.99)
- **Validation**: Positive amounts only

### Payment Date
- **Required**: Must be selected
- **Future dates**: Typically future payment dates
- **Format**: Standard date input validation

## Dynamic Behavior

### Payment Array Management
When number of payments changes:

```tsx
useEffect(() => {
  if (typeof numberOfPayments === 'number' && numberOfPayments > 0) {
    const currentPayments = payments;
    const newPayments: Payment[] = [];

    for (let i = 0; i < numberOfPayments; i++) {
      newPayments.push(currentPayments[i] || { amount: '', lumpSumDate: '' });
    }

    setPayments(newPayments);
  }
}, [numberOfPayments]);
```

### Form Validation
Comprehensive validation before submission:

```tsx
const validateForm = (): boolean => {
  const errors: { [key: string]: string } = {};

  // Number of payments validation
  if (!numberOfPayments || numberOfPayments < 1 || numberOfPayments > 10) {
    errors['numberOfPayments'] = 'Please enter a number between 1 and 10.';
  }

  // Payment details validation
  payments.forEach((payment, index) => {
    if (!payment.amount || isNaN(parseFloat(payment.amount)) || parseFloat(payment.amount) <= 0) {
      errors[`payment-${index}-amount`] = 'Please enter a valid positive amount.';
    }

    if (!payment.lumpSumDate) {
      errors[`payment-${index}-date`] = 'Please enter a payment date.';
    }
  });

  return Object.keys(errors).length === 0;
};
```

## Styling System

### Layout Patterns
- **Card-based design** for visual separation
- **Consistent form spacing** across all inputs
- **Responsive grid** for multiple payments
- **Professional appearance** with subtle shadows

### Error Handling
- **Real-time validation** with immediate feedback
- **Color-coded states** (red for errors, green for valid)
- **Accessible error messages** with proper ARIA attributes

## Accessibility

### Form Accessibility
- **Label associations** for all inputs
- **Error announcements** for screen readers
- **Keyboard navigation** through all form elements
- **Focus management** for dynamic content

### Validation UX
- **Immediate feedback** on input changes
- **Clear error messages** with actionable guidance
- **Progressive validation** (validate as user types)
- **Prevention of invalid submissions**

## Integration Example

```tsx
const LCPLumpSumAmountOverview: React.FC<Props> = ({
  onNext,
  currentStep,
  totalSteps
}) => {
  const [numberOfPayments, setNumberOfPayments] = useState<number | ''>('');
  const [payments, setPayments] = useState<Payment[]>([{ amount: '', lumpSumDate: '' }]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onNext({ payments });
    }
  };

  return (
    <LCPStepContainer title="Lump Sum Payment Details">
      <form onSubmit={handleSubmit}>
        <NumberOfPaymentsInput
          value={numberOfPayments}
          onChange={handleNumberOfPaymentsChange}
          error={errors['numberOfPayments']}
        />

        {typeof numberOfPayments === 'number' && numberOfPayments > 0 && (
          <div className={layout.paymentList}>
            {payments.map((payment, index) => (
              <PaymentCard
                key={index}
                payment={payment}
                index={index}
                errors={errors}
                onPaymentChange={handlePaymentChange}
              />
            ))}
          </div>
        )}

        <div className={layout.actionRow}>
          <LCPButton variant="next" type="submit" disabled={!isValid} />
        </div>
      </form>
    </LCPStepContainer>
  );
};
```

## Performance Notes

### Optimizations
- **Efficient re-renders** with proper dependency arrays
- **Input sanitization** prevents unnecessary state updates
- **Error state management** with minimal object creation
- **Form validation** only runs when needed

### Memory Management
- **Payment array** properly managed with useEffect cleanup
- **Error object** recreated only when validation runs
- **Input handlers** memoized for performance

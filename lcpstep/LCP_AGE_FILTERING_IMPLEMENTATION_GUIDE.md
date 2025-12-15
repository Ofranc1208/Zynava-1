# LCP Age-Based End Date Filtering - Implementation Guide

## **Overview**

This guide provides step-by-step instructions to implement age-based end date filtering in the Next.js LCP project. When a user selects their age range in Step 2 (Physical Profile), the end date options in Step 4 (Dates Selection) will be automatically filtered based on actuarial life expectancy calculations.

---

## **Implementation Map**

### **Step 1: Create Date Filtering Utility Function**
**File:** `lcpstep/utils/dateHelpers.ts` (NEW FILE)

**Purpose:** Convert age range selection to specific age, then generate filtered end date options.

**Implementation:**

```typescript
/**
 * ============================================================================
 * DATE HELPER UTILITIES - Age-Based End Date Filtering
 * ============================================================================
 * 
 * Filters end date options based on selected age range.
 * Older users see fewer long-term options due to life expectancy.
 */

export interface DateOption {
  label: string;      // Display format: "MM/YYYY"
  value: string;      // ISO format: "YYYY-MM-DD" for form submission
  date: Date;         // Date object for calculations
}

/**
 * Maps age range string to specific age number for filtering logic
 * 
 * @param ageRange - Age range string from form (e.g., "18–25", "36–45")
 * @returns Specific age number used for filtering (25, 36, 49, 62, 75)
 */
export function mapAgeRangeToAge(ageRange: string): number {
  const ageMapping: Record<string, number> = {
    '18–25': 25,
    '26–35': 36,
    '36–45': 49,
    '46–50': 49,
    '51–56': 62,
    '57–65': 62,
  };

  return ageMapping[ageRange] || 25; // Default to 25 if not found
}

/**
 * Formats date object to MM/YYYY display string
 * 
 * @param date - Date object
 * @returns Formatted string like "05/2034"
 */
function formatDateLabel(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${year}`;
}

/**
 * Formats date object to ISO string (YYYY-MM-DD) for form submission
 * 
 * @param date - Date object
 * @returns ISO format string like "2034-05-15"
 */
function formatDateValue(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = '15'; // Use 15th of month as default
  return `${year}-${month}-${day}`;
}

/**
 * Generates end date options based on current date
 * Base options: 10, 20, 25, 30 years from current date
 * Month calculation: 4 months ahead from current month
 * 
 * @returns Array of all 4 base date options
 */
function generateBaseDateOptions(): DateOption[] {
  const now = new Date();
  const currentYear = now.getFullYear();
  
  // Calculate month (4 months ahead, wrapped around year)
  let month = (now.getMonth() + 4) % 12;
  if (month === 0) {
    month = 12;
  }

  const baseOptions: DateOption[] = [
    {
      label: formatDateLabel(new Date(currentYear + 10, month - 1, 15)),
      value: formatDateValue(new Date(currentYear + 10, month - 1, 15)),
      date: new Date(currentYear + 10, month - 1, 15),
    },
    {
      label: formatDateLabel(new Date(currentYear + 20, month - 1, 15)),
      value: formatDateValue(new Date(currentYear + 20, month - 1, 15)),
      date: new Date(currentYear + 20, month - 1, 15),
    },
    {
      label: formatDateLabel(new Date(currentYear + 25, month - 1, 15)),
      value: formatDateValue(new Date(currentYear + 25, month - 1, 15)),
      date: new Date(currentYear + 25, month - 1, 15),
    },
    {
      label: formatDateLabel(new Date(currentYear + 30, month - 1, 15)),
      value: formatDateValue(new Date(currentYear + 30, month - 1, 15)),
      date: new Date(currentYear + 30, month - 1, 15),
    },
  ];

  return baseOptions;
}

/**
 * Filters end date options based on selected age
 * 
 * Age-based filtering rules:
 * - Age 25: All 4 options (10, 20, 25, 30 years)
 * - Age 36: 3 options (10, 20, 25 years) - removes 30yr
 * - Age 49: 3 options (10, 20, 25 years) - removes 30yr
 * - Age 62: 2 options (10, 20 years) - removes 25yr, 30yr
 * - Age 75: 1 option (10 years only) - removes 20yr, 25yr, 30yr
 * 
 * @param age - Specific age number (25, 36, 49, 62, 75)
 * @returns Filtered array of date options based on age
 */
function filterDateOptionsByAge(age: number): DateOption[] {
  const allOptions = generateBaseDateOptions();

  switch (age) {
    case 25:
      // Show all 4 options
      return allOptions;

    case 36:
    case 49:
      // Remove last option (30 years)
      return allOptions.slice(0, 3); // Returns [10yr, 20yr, 25yr]

    case 62:
      // Remove last 2 options (25yr, 30yr)
      return allOptions.slice(0, 2); // Returns [10yr, 20yr]

    case 75:
      // Remove last 3 options (20yr, 25yr, 30yr)
      return allOptions.slice(0, 1); // Returns [10yr]

    default:
      // Default to all options if age doesn't match
      return allOptions;
  }
}

/**
 * Main function: Get filtered end date options based on age range
 * 
 * This is the primary function to call from components.
 * It handles the full flow: age range → specific age → filtered dates
 * 
 * @param ageRange - Age range string from form (e.g., "18–25", "36–45")
 * @returns Array of filtered date options for dropdown
 * 
 * @example
 * ```typescript
 * const options = getDynamicEndDateOptions('36–45');
 * // Returns: [
 * //   { label: "05/2034", value: "2034-05-15", date: Date },
 * //   { label: "05/2044", value: "2044-05-15", date: Date },
 * //   { label: "05/2049", value: "2049-05-15", date: Date }
 * // ]
 * ```
 */
export function getDynamicEndDateOptions(ageRange: string): DateOption[] {
  if (!ageRange) {
    return []; // Return empty if no age selected
  }

  const age = mapAgeRangeToAge(ageRange);
  return filterDateOptionsByAge(age);
}

/**
 * Export types for use in components
 */
export type { DateOption };
```

**Testing Checklist:**
- [ ] Age range "18–25" returns 4 options
- [ ] Age range "36–45" returns 3 options
- [ ] Age range "57–65" returns 2 options
- [ ] Invalid age range returns all 4 options (default)
- [ ] Empty age range returns empty array
- [ ] Date formatting is correct (MM/YYYY for label, YYYY-MM-DD for value)

---

### **Step 2: Update Orchestrator to Pass Age Range**
**File:** `lcpstep/LCPFlowOrchestrator.ts` (MODIFY EXISTING)

**Location:** Line 186-196 (in `lcp_details` step configuration)

**Current Code:**
```typescript
lcp_details: {
  stepId: 'lcp_details',
  stepNumber: 4,
  component: components.LCPDatesSelection,
  isDataStep: true,

  getInitialData: (formData) => ({
    startDate: formData.detailsData?.startDate,
    endDate: formData.detailsData?.endDate,
    amount: formData.paymentData?.amount
  }),
```

**Change To:**
```typescript
lcp_details: {
  stepId: 'lcp_details',
  stepNumber: 4,
  component: components.LCPDatesSelection,
  isDataStep: true,

  getInitialData: (formData) => ({
    startDate: formData.detailsData?.startDate,
    endDate: formData.detailsData?.endDate,
    amount: formData.paymentData?.amount,
    ageRange: formData.profileData?.ageRange  // ✅ ADD THIS LINE
  }),
```

**What This Does:**
- Passes the selected age range from Step 2 to Step 4
- Makes age range available in `LCPDatesSelection` component's `initialData` prop

---

### **Step 3: Update LCPDatesSelection Component**
**File:** `lcpstep/LCPDatesSelection.tsx` (MODIFY EXISTING)

**Changes Required:**

#### **3A. Update Props Interface**

**Find (around line 10-20):**
```typescript
interface Props {
  initialData?: {
    startDate?: string;
    endDate?: string;
    amount?: string;
  };
  onNext: (data: { startDate: string; endDate: string; amount: string }) => void;
  onBack?: () => void;
  currentStep: number;
  totalSteps: number;
}
```

**Change To:**
```typescript
interface Props {
  initialData?: {
    startDate?: string;
    endDate?: string;
    amount?: string;
    ageRange?: string;  // ✅ ADD THIS LINE
  };
  onNext: (data: { startDate: string; endDate: string; amount: string }) => void;
  onBack?: () => void;
  currentStep: number;
  totalSteps: number;
}
```

#### **3B. Import Utility Functions**

**Add at top of file (after existing imports, around line 8):**
```typescript
import { getDynamicEndDateOptions, DateOption } from './utils/dateHelpers';
```

#### **3C. Add State for Filtered Date Options**

**Find the useState declarations (around line 22-31):**
```typescript
const [startDate, setStartDate] = useState(initialData?.startDate || '');
const [endDate, setEndDate] = useState(initialData?.endDate || '');
const [amount, setAmount] = useState(initialData?.amount || '');
const [touched, setTouched] = useState(false);
const [showInstructions, setShowInstructions] = useState(false);
```

**Add After:**
```typescript
const [endDateOptions, setEndDateOptions] = useState<DateOption[]>([]);
const [endDateDisabled, setEndDateDisabled] = useState(true);
```

#### **3D. Add useEffect to Filter Dates When Age Changes**

**Find the existing useEffect (around line 33-38):**
```typescript
React.useEffect(() => {
  if (initialData?.startDate) setStartDate(initialData.startDate);
  if (initialData?.endDate) setEndDate(initialData.endDate);
  if (initialData?.amount) setAmount(initialData.amount);
}, [initialData]);
```

**Add New useEffect After It:**
```typescript
// Filter end date options when age range changes
React.useEffect(() => {
  if (initialData?.ageRange) {
    const filteredOptions = getDynamicEndDateOptions(initialData.ageRange);
    setEndDateOptions(filteredOptions);
    setEndDateDisabled(false);
    
    // If current end date is not in filtered options, clear it
    if (endDate && !filteredOptions.some(option => option.value === endDate)) {
      setEndDate('');
    }
  } else {
    // No age selected, disable end date field
    setEndDateOptions([]);
    setEndDateDisabled(true);
    setEndDate('');
  }
}, [initialData?.ageRange]);
```

#### **3E. Replace End Date Input with Dropdown**

**Find the End Date input (around line 249-256):**
```typescript
<LCPSection label="Last Payment Date">
  <LCPFormInput
    type="date"
    value={endDate}
    onChange={handleEndDateChange}
    error={validationErrors.dates}
  />
</LCPSection>
```

**Replace With:**
```typescript
<LCPSection label="Last Payment Date">
  <select
    value={endDate}
    onChange={(e) => {
      setEndDate(e.target.value);
      // Clear date error when selection changes
      if (validationErrors.dates) {
        setValidationErrors(prev => ({ ...prev, dates: undefined }));
      }
      // Validate if we have both dates
      if (startDate && e.target.value) {
        const dateValidation = validateDateRange(startDate, e.target.value);
        if (!dateValidation.isValid) {
          setValidationErrors(prev => ({ ...prev, dates: dateValidation.error }));
        } else {
          setValidationErrors(prev => ({ ...prev, dates: undefined }));
        }
      }
    }}
    disabled={endDateDisabled}
    className={`${utilities.selectInput} ${validationErrors.dates ? utilities.errorBorder : ''}`}
    style={{
      width: '100%',
      padding: '0.75rem',
      borderRadius: '0.5rem',
      border: validationErrors.dates 
        ? '2px solid #ef4444' 
        : endDateDisabled 
          ? '1px solid #d1d5db' 
          : '1px solid #22c55e',
      fontSize: '1rem',
      backgroundColor: endDateDisabled ? '#f3f4f6' : 'white',
      cursor: endDateDisabled ? 'not-allowed' : 'pointer',
    }}
  >
    <option value="" disabled hidden>
      {endDateDisabled ? 'Select age first' : 'Select end date...'}
    </option>
    {endDateOptions.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
  {validationErrors.dates && (
    <p className={utilities.error} style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
      {validationErrors.dates}
    </p>
  )}
</LCPSection>
```

**Note:** You may want to add a styled select component. If your `LCPFormInput` supports select, use that instead. Otherwise, the inline styles above will work.

---

### **Step 4: Export Utility from Utils Index (Optional)**
**File:** `lcpstep/utils/index.ts` (MODIFY IF EXISTS, OR CREATE)

If you have a utils index file, add:
```typescript
export { getDynamicEndDateOptions, mapAgeRangeToAge, type DateOption } from './dateHelpers';
```

This allows cleaner imports: `import { getDynamicEndDateOptions } from './utils'`

---

## **Implementation Checklist**

### **Before Starting:**
- [ ] Backup current `LCPDatesSelection.tsx`
- [ ] Verify you have TypeScript setup
- [ ] Ensure `lcpstep/utils/` folder exists

### **File Creation:**
- [ ] Create `lcpstep/utils/dateHelpers.ts` with all functions
- [ ] Test utility functions in isolation (if possible)

### **File Modifications:**
- [ ] Update `LCPFlowOrchestrator.ts` - add `ageRange` to `getInitialData`
- [ ] Update `LCPDatesSelection.tsx` Props interface
- [ ] Add imports to `LCPDatesSelection.tsx`
- [ ] Add state for `endDateOptions` and `endDateDisabled`
- [ ] Add `useEffect` for age-based filtering
- [ ] Replace date input with dropdown

### **Testing:**
- [ ] Navigate through flow: Step 2 → Step 4
- [ ] Select age range "18–25" → verify 4 end date options appear
- [ ] Select age range "36–45" → verify 3 end date options appear
- [ ] Select age range "57–65" → verify 2 end date options appear
- [ ] Verify end date dropdown is disabled when no age selected
- [ ] Verify end date clears if not in filtered options
- [ ] Test form submission with filtered date selected
- [ ] Test back navigation preserves selected dates
- [ ] Verify validation still works with dropdown
- [ ] Test edge cases (empty age, invalid age range)

---

## **Expected Behavior**

### **User Flow:**

1. **Step 2 (Physical Profile):** User selects age range "36–45"
   - ✅ Age stored in `formData.profileData.ageRange`

2. **Step 4 (Dates Selection):** User reaches this step
   - ✅ `initialData.ageRange` contains "36–45"
   - ✅ `useEffect` triggers: `getDynamicEndDateOptions("36–45")`
   - ✅ Function maps "36–45" → age 49
   - ✅ Function filters to 3 options (removes 30-year option)
   - ✅ Dropdown shows: "05/2034", "05/2044", "05/2049"
   - ✅ End date field is enabled

3. **User Interaction:**
   - ✅ User selects "05/2044" from dropdown
   - ✅ `endDate` state set to "2044-05-15"
   - ✅ Form validation runs
   - ✅ User proceeds to next step

---

## **Troubleshooting**

### **Issue: End date dropdown is always empty**
- **Check:** Is `ageRange` being passed correctly from orchestrator?
- **Debug:** Add `console.log(initialData?.ageRange)` in component
- **Fix:** Verify Step 2 saves age range correctly

### **Issue: Wrong number of options showing**
- **Check:** Age range mapping function
- **Debug:** Log the mapped age value: `console.log(mapAgeRangeToAge(ageRange))`
- **Fix:** Verify switch statement cases match expected ages

### **Issue: Dates not formatted correctly**
- **Check:** `formatDateLabel` and `formatDateValue` functions
- **Debug:** Log the generated options array
- **Fix:** Ensure month/year calculations are correct

### **Issue: Validation errors with dropdown**
- **Check:** Date format from dropdown (should be YYYY-MM-DD)
- **Debug:** Verify `validateDateRange` receives correct format
- **Fix:** Ensure dropdown `value` uses ISO format

### **Issue: End date clears unexpectedly**
- **Check:** `useEffect` dependency array
- **Debug:** Check if `initialData` object reference changes
- **Fix:** Use `initialData?.ageRange` in dependency, not entire object

---

## **Alternative Approaches**

### **Option 1: Keep Date Picker with Min/Max**
Instead of dropdown, keep date picker but set min/max dates based on age:
```typescript
<LCPFormInput
  type="date"
  min={endDateOptions[0]?.value}
  max={endDateOptions[endDateOptions.length - 1]?.value}
  // ...
/>
```
**Pros:** More flexible, familiar UI  
**Cons:** Users can still select invalid dates

### **Option 2: Hybrid Approach**
Show filtered options as "preset" buttons, but allow custom date:
```typescript
{endDateOptions.map(option => (
  <LCPButton onClick={() => setEndDate(option.value)}>
    {option.label}
  </LCPButton>
))}
// Plus custom date input option
```
**Pros:** Best of both worlds  
**Cons:** More complex UI

---

## **Next Steps After Implementation**

1. **Add Error Handling:**
   - Handle case where age range is invalid
   - Show user-friendly message if no dates available

2. **Accessibility:**
   - Add ARIA labels to dropdown
   - Ensure keyboard navigation works

3. **Documentation:**
   - Add JSDoc comments to utility functions
   - Update component README if exists

4. **Testing:**
   - Add unit tests for `dateHelpers.ts`
   - Add integration tests for component flow

---

## **Quick Reference**

### **Age Range → Age Mapping:**
- `'18–25'` → 25 → 4 options
- `'26–35'` → 36 → 3 options
- `'36–45'` → 49 → 3 options
- `'46–50'` → 49 → 3 options
- `'51–56'` → 62 → 2 options
- `'57–65'` → 62 → 2 options

### **File Locations:**
- Utility: `lcpstep/utils/dateHelpers.ts`
- Orchestrator: `lcpstep/LCPFlowOrchestrator.ts` (line ~192)
- Component: `lcpstep/LCPDatesSelection.tsx`

### **Key Functions:**
- `getDynamicEndDateOptions(ageRange)` - Main function to call
- `mapAgeRangeToAge(ageRange)` - Converts range to specific age
- `filterDateOptionsByAge(age)` - Filters options by age

---

**Good luck with implementation! 🚀**


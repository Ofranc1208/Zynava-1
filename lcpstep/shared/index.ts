/**
 * ============================================================================
 * LCP SHARED COMPONENTS - CENTRAL EXPORTS
 * ============================================================================
 *
 * This file provides a clean, centralized export point for all shared
 * LCP components. Use this for clean imports throughout the application.
 *
 * Example:
 * ```typescript
 * import { LCPButton, LCPSection, LCPFormInput } from '../shared';
 * ```
 */

export { default as LCPButton } from './LCPButton';
export { default as LCPSection } from './LCPSection';
export { default as LCPFormInput } from './LCPFormInput';
export { default as LCPNavigationButton } from './LCPNavigationButton';
export { default as QuickHelpBadge } from './QuickHelpBadge';

// TypeScript types are exported directly from component files

/**
 * ============================================================================
 * USAGE EXAMPLES
 * ============================================================================
 *
 * LCPButton Usage:
 * ```tsx
 * <LCPButton variant="option" selected={value === 'option'} onClick={() => setValue('option')}>
 *   Option Text
 * </LCPButton>
 *
 * <LCPButton variant="next" type="submit" disabled={!isValid} aria-label="Next">
 *   →
 * </LCPButton>
 * ```
 *
 * LCPSection Usage:
 * ```tsx
 * <LCPSection label="Age" tooltip="Select your age range">
 *   {AGES.map((age) => (
 *     <LCPButton key={age} variant="option" selected={selectedAge === age} onClick={() => setSelectedAge(age)}>
 *       {age}
 *     </LCPButton>
 *   ))}
 * </LCPSection>
 * ```
 *
 * LCPFormInput Usage:
 * ```tsx
 * <LCPSection label="Amount">
 *   <LCPFormInput
 *     type="text"
 *     value={amount}
 *     onChange={setAmount}
 *     placeholder="Enter amount"
 *     error={validationError}
 *     isValid={amount && validateAmount(amount).isValid}
 *   />
 * </LCPSection>
 * ```
 */

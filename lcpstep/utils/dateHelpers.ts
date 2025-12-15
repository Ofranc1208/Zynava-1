/**
 * ============================================================================
 * DATE HELPER UTILITIES - Age-Based Maximum End Date
 * ============================================================================
 * 
 * Determines maximum allowed end date based on age range for LCP calculator.
 * All calculations use "Today + 6 months" as the base reference point.
 */

/**
 * Get the base reference date (Today + 6 months)
 * All maximum date calculations are based from this point
 * 
 * @returns Date object 6 months from today
 */
export function getBaseReferenceDate(): Date {
  const today = new Date();
  const baseDate = new Date(today);
  baseDate.setMonth(today.getMonth() + 6);
  return baseDate;
}

/**
 * Get maximum allowed years from base reference date based on age range
 * 
 * Age-based rules:
 * - Ages 18-50: Maximum 30 years from base (Today + 6 months)
 * - Ages 51-56: Maximum 25 years from base (Today + 6 months)
 * - Ages 57-65: Maximum 20 years from base (Today + 6 months)
 * 
 * @param ageRange - Age range string from form (e.g., "18–25", "51–56", "57–65")
 * @returns Maximum years allowed from base reference date
 */
export function getMaxYearsByAge(ageRange: string): number {
  if (!ageRange) {
    return 30; // Default to 30 years if no age selected
  }

  // Ages 51-56: 25 years max from base
  if (ageRange === '51–56') {
    return 25;
  }

  // Ages 57-65: 20 years max from base
  if (ageRange === '57–65') {
    return 20;
  }

  // All other ages (18–25, 26–35, 36–45, 46–50): 30 years max from base
  return 30;
}

/**
 * Get maximum allowed end date based on age range
 * Calculation: (Today + 6 months) + age-based years
 * 
 * @param ageRange - Age range string from form
 * @returns Maximum allowed date (Date object)
 */
export function getMaxEndDateByAge(ageRange: string): Date {
  const baseDate = getBaseReferenceDate(); // Today + 6 months
  const maxDate = new Date(baseDate);
  const maxYears = getMaxYearsByAge(ageRange);
  
  maxDate.setFullYear(baseDate.getFullYear() + maxYears);
  return maxDate;
}

/**
 * Get maximum end date string in ISO format for HTML input max attribute
 * Format: YYYY-MM-DD (e.g., "2055-07-01")
 * 
 * @param ageRange - Age range string from form
 * @returns Maximum date string in ISO format
 */
export function getMaxEndDateStringByAge(ageRange: string): string {
  const maxDate = getMaxEndDateByAge(ageRange);
  return maxDate.toISOString().split('T')[0];
}

/**
 * Get minimum start date (3 months from today) for HTML input min attribute
 * Format: YYYY-MM-DD (e.g., "2025-04-01")
 * 
 * Based on VALIDATION_RULES.DATE_RULES.MIN_FUTURE_MONTHS = 3
 * 
 * @returns Minimum date string in ISO format
 */
export function getMinStartDateString(): string {
  const today = new Date();
  const minDate = new Date(today);
  minDate.setMonth(today.getMonth() + 3); // 3 months in the future
  return minDate.toISOString().split('T')[0];
}


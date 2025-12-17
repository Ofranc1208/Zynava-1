/**
 * ZYNAVA Compliance Guardrails
 * Ensures all AI responses meet FDA/FTC requirements
 */

// Blocked phrases that trigger disclaimers or modifications
const BLOCKED_PHRASES = [
  'diagnose', 'treat', 'cure', 'prevent disease',
  'prescription', 'medication', 'drug',
  'guaranteed', 'proven to', 'will definitely',
  'you should take', 'take this dose', 'mg per day for you',
  'clinically proven', 'doctor recommended', 'medical grade',
];

// Sensitive conditions (hard stop - redirect to healthcare provider)
const SENSITIVE_CONDITIONS = [
  // Pregnancy/Children
  'pregnant', 'pregnancy', 'breastfeeding', 'nursing',
  'child', 'children', 'kid', 'baby', 'infant', 'toddler',
  'under 18', 'teenager', 'minor', 'expecting',
  
  // Mental health
  'depression', 'depressed', 'anxiety disorder', 'bipolar', 'schizophrenia',
  'adhd', 'add', 'ocd', 'ptsd', 'eating disorder', 'anorexia', 'bulimia',
  'suicidal', 'self harm',
  
  // Chronic conditions
  'diabetes', 'diabetic', 'hypertension', 'high blood pressure',
  'heart disease', 'cancer', 'autoimmune', 'lupus', 'ms', 'multiple sclerosis',
  'thyroid', 'kidney disease', 'liver disease', 'hepatitis',
  'epilepsy', 'seizure', 'stroke',
  
  // Medications
  'blood thinner', 'warfarin', 'coumadin', 'insulin',
  'antidepressant', 'ssri', 'snri', 'anti-anxiety',
  'prescription', 'on meds', 'taking pills', 'medication for',
  'beta blocker', 'statin', 'immunosuppressant',
];

const REQUIRED_DISCLAIMER = 'These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Consult your healthcare provider before starting any supplement regimen.';

/**
 * Check if user input mentions sensitive conditions
 * Returns true if the input should trigger a medical redirect
 */
export function checkSensitiveInput(userInput: string): boolean {
  const lowerInput = userInput.toLowerCase();
  
  return SENSITIVE_CONDITIONS.some(condition => {
    // Use word boundaries to avoid false positives
    const regex = new RegExp(`\\b${condition}\\b`, 'i');
    return regex.test(lowerInput);
  });
}

/**
 * Sanitize AI response to add disclaimers if needed
 * Checks for blocked phrases and adds appropriate disclaimers
 */
export function sanitizeAdvisorResponse(response: string): string {
  let sanitized = response;
  let needsDisclaimer = false;
  
  // Check for blocked phrases that require disclaimers
  const lowerResponse = response.toLowerCase();
  for (const phrase of BLOCKED_PHRASES) {
    if (lowerResponse.includes(phrase)) {
      needsDisclaimer = true;
      break;
    }
  }
  
  // Check if discussing specific benefits (common patterns)
  const benefitPatterns = [
    /helps? with/i,
    /supports?/i,
    /may (?:help|improve|reduce)/i,
    /can (?:help|improve|reduce)/i,
  ];
  
  for (const pattern of benefitPatterns) {
    if (pattern.test(response)) {
      needsDisclaimer = true;
      break;
    }
  }
  
  // Add disclaimer if needed and not already present
  if (needsDisclaimer && !response.includes('Consult your healthcare provider')) {
    sanitized = sanitized + '\n\n⚠️ ' + REQUIRED_DISCLAIMER;
  }
  
  return sanitized;
}

/**
 * Get medical redirect response for sensitive conditions
 */
export function getMedicalRedirectResponse(): string {
  return `I can share general wellness information about supplements, but for your specific health situation, I recommend discussing with your healthcare provider before starting any supplement regimen.

Here are some questions you might want to ask your healthcare provider:
- Are there any supplements that could interact with my current medications?
- What's an appropriate dosage and approach given my health history?
- Are there any supplements I should avoid?
- What should I monitor while taking supplements?

For general supplement education (ingredients, research, how they work), I'm happy to help explain!`;
}

/**
 * Validate that response doesn't contain prohibited medical claims
 * Returns { valid: boolean, issues: string[] }
 */
export function validateResponse(response: string): { valid: boolean; issues: string[] } {
  const issues: string[] = [];
  const lowerResponse = response.toLowerCase();
  
  // Check for absolute medical claims
  const prohibitedClaims = [
    { pattern: /will cure/i, issue: 'Contains "will cure" claim' },
    { pattern: /guaranteed to/i, issue: 'Contains "guaranteed" claim' },
    { pattern: /treats \w+/i, issue: 'Contains "treats [condition]" claim' },
    { pattern: /prevents \w+ disease/i, issue: 'Contains "prevents disease" claim' },
    { pattern: /diagnose/i, issue: 'Contains diagnostic language' },
  ];
  
  for (const { pattern, issue } of prohibitedClaims) {
    if (pattern.test(response)) {
      issues.push(issue);
    }
  }
  
  return {
    valid: issues.length === 0,
    issues,
  };
}


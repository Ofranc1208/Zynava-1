// LCP Utils - Centralized utility exports
// Import these CSS modules in components that need utility classes

// CSS Modules (import as needed)
// import utilities from './LCPUtilities.module.css';
// import layout from './LCPLayout.module.css';

export const UTILITY_CLASSES = {
  // Error handling
  ERROR: 'error',
  ERROR_TEXT: 'errorText',
  SUCCESS_TEXT: 'successText',
  
  // Layout
  INPUT_WRAPPER: 'inputWrapper',
  TOOLTIP_ICON: 'tooltipIcon',
  
  // Layout patterns
  CONTAINER: 'container',
  FORM_CONTAINER: 'formContainer',
  ACTION_ROW: 'actionRow',
  CENTERED_ACTION: 'centeredAction',
  PAYMENT_LIST: 'paymentList',
  FORM_SECTION: 'formSection',
  FORM_ROW: 'formRow',
  FORM_COLUMN: 'formColumn'
} as const;

// Date helper exports
export { 
  getBaseReferenceDate,
  getMaxYearsByAge,
  getMaxEndDateByAge,
  getMaxEndDateStringByAge,
  getMinStartDateString
} from './dateHelpers';
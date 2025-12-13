/**
 * ⚠️ DEPRECATED - Card Styles moved to global shared location
 * 
 * This file now re-exports from the global card styles file.
 * All card styles have been moved to: src/components/shared/styles/cardStyles.ts
 * 
 * Please update your imports to:
 * import { BORDER_RADIUS, BOX_SHADOWS, getBaseCardStyles } from '@/src/components/shared/styles/cardStyles';
 * 
 * This file exists temporarily for backwards compatibility.
 * Main page components still work because this re-exports everything.
 */

export * from '@/src/components/shared/styles/cardStyles';

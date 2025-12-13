/**
 * ⚠️ DEPRECATED - Hover Effects moved to global shared location
 * 
 * This file now re-exports from the global hover effects file.
 * All hover effects have been moved to: src/components/shared/styles/hoverEffects.ts
 * 
 * Please update your imports to:
 * import { createFloatHover, createSlideHover } from '@/src/components/shared/styles/hoverEffects';
 * 
 * This file exists temporarily for backwards compatibility.
 * Main page components still work because this re-exports everything.
 */

export * from '@/src/components/shared/styles/hoverEffects';

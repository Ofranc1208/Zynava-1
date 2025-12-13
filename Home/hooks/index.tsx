/**
 * Home Page Hooks Module - Enterprise Edition
 * 
 * Central export hub for all custom hooks used in the homepage.
 * Now includes performance optimization and progressive loading hooks.
 * 
 * ## Available Hooks
 * - **useHomeAnalytics**: Event tracking and user behavior analytics
 * - **useHomePerformance**: Performance monitoring and Core Web Vitals
 * - **useHomeAccessibility**: Screen reader support and keyboard navigation
 * - **useIntersectionObserver**: Progressive loading and viewport detection
 * - **useWebVitals**: Core Web Vitals tracking and optimization
 * 
 * @module HomeHooks
 * @author Smarter Payouts Team
 * @since 2024
 * @version 3.0.0 - Performance Optimized
 */

// Core functionality hooks
export { default as useHomeAnalytics } from './useHomeAnalytics';
export { default as useHomePerformance } from './useHomePerformance';
export { default as useHomeAccessibility } from './useHomeAccessibility';

// Performance optimization hooks
export { useIntersectionObserver } from './useIntersectionObserver';
export { useWebVitals } from './useWebVitals';

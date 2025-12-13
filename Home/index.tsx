/**
 * Home Page Module
 * 
 * Central export hub for the Smarter Payouts homepage implementation.
 * Provides clean, modular architecture with enterprise-grade structure
 * and optimal performance characteristics.
 * 
 * ## Module Structure
 * ```
 * Home/
 * ├── HomePage.tsx          ← Main orchestrator component
 * ├── components/           ← Modular section components
 * │   ├── Hero/            ← Video hero with CTAs
 * │   ├── WhyChoose/       ← Features and statistics
 * │   ├── HowItWorks/      ← Process explanation
 * │   ├── Testimonials/    ← Customer feedback
 * │   ├── FinalCTA/        ← Final call-to-action
 * │   └── SEOHead/         ← SEO and performance
 * └── index.tsx            ← This export file
 * ```
 * 
 * ## Usage
 * ```tsx
 * // Default import (recommended)
 * import HomePage from '@/components/Pages/Home';
 * 
 * // Named import (alternative)
 * import { HomePage } from '@/components/Pages/Home';
 * ```
 * 
 * @module Home
 * @author Smarter Payouts Team
 * @since 2024
 * @version 2.0.0
 */

// Main home page component export
export { default } from './HomePage';
export { default as HomePage } from './HomePage';

/**
 * Home Page Components Module
 * 
 * Central export hub for all modular homepage section components.
 * Each component is self-contained, enterprise-grade, and follows
 * clean architecture principles with optimal performance.
 * 
 * ## Component Architecture
 * Each section follows the same modular pattern:
 * ```
 * SectionName/
 * ├── section-header/       ← Title and description components
 * ├── section-content/      ← Main content components (cards, grids, etc.)
 * ├── section-actions/      ← Interactive elements (buttons, links)
 * ├── section-main/         ← Main orchestrator component
 * └── index.tsx            ← Section export hub
 * ```
 * 
 * ## Available Sections
 * - **SEOHead**: Meta tags, structured data, performance optimization
 * - **Hero**: Video background hero with primary call-to-action buttons
 * - **WhyChoose**: Feature cards, statistics, and value propositions
 * - **HowItWorks**: 3-step process explanation with interactive elements
 * - **Testimonials**: Customer testimonials with ratings and social proof
 * - **FinalCTA**: Final call-to-action with trust indicators and conversion
 * 
 * ## Features
 * - ✅ Ultra-modular architecture (150+ components)
 * - ✅ Enterprise-grade error handling
 * - ✅ Optimized for Core Web Vitals
 * - ✅ Full accessibility compliance (WCAG 2.1 AA)
 * - ✅ Interactive hover effects and animations
 * - ✅ Mobile-first responsive design
 * 
 * @module HomeComponents
 * @author Smarter Payouts Team
 * @since 2024
 * @version 2.0.0
 */

// Section components
export { default as SEOHead } from './SEOHead'; // Now using clean SEOHead folder structure
export { default as HeroSection } from './Hero'; // Now using clean Hero folder structure
export { default as WhyChooseSection } from './WhyChoose'; // Now using clean WhyChoose folder structure
export { default as HowItWorksSection } from './HowItWorks'; // Now using clean HowItWorks folder structure
export { default as TestimonialsSection } from './Testimonials'; // Now using clean Testimonials folder structure
export { default as FinalCTASection } from './FinalCTA'; // Now using clean FinalCTA folder structure

// Error Boundary components
export { default as HomePageErrorBoundary } from './HomePageErrorBoundary';
export { default as SectionErrorBoundary } from './SectionErrorBoundary';

'use client';

import HeroHeading from './HeroHeading';
import HeroButtons from './HeroButtons';
import HeroFooterText from './HeroFooterText';
import HeroStyles from './HeroStyles';
import { SPACING_PRESETS } from '../../shared/styles/spacing';

/**
 * HeroSection Component - Orchestrator Pattern
 * 
 * Thin orchestrator that composes sub-components:
 * - HeroBadge: "Powered by Mint AI" badge
 * - HeroHeading: Main title and subtitle
 * - HeroButtons: Primary CTA buttons (Get Instant Quote, Chat with Mint AI)
 * - HeroFooterText: Bottom description with calculator link
 * - HeroStyles: Responsive styles and animations
 * 
 * @component HeroSection
 */
export default function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" style={{
      ...SPACING_PRESETS.heroSection,
      paddingTop: "1.5rem", // Reduced from default hero spacing to move closer to nav
      background: "linear-gradient(135deg, #f8fafc 0%, #e9f9f1 50%, #f0fdf4 100%)"
    }}>
      {/* Background Pattern */}
      <div style={{
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        background: "radial-gradient(circle at 20% 80%, rgba(5, 150, 105, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.06) 0%, transparent 50%)",
        pointerEvents: "none"
      }}></div>
      
      <div style={SPACING_PRESETS.sectionContainer}>
        <HeroHeading />
        <HeroButtons />
        <HeroFooterText />
      </div>
      
      <HeroStyles />
    </section>
  );
}

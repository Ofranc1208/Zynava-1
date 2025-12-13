'use client';

import HeroBackgroundContainer from '../hero-background';
import HeroContentContainer from '../hero-content';
import CTAButtonsContainer from '../hero-cta-button';

/**
 * Home Hero Section Component
 * 
 * Main orchestrator component that combines all hero section elements.
 * 
 * Full-screen hero section featuring:
 * - Background video with counting cash
 * - Main headline and value proposition
 * - Primary CTA buttons for process and calculator
 * - Pulse animation effect on main heading
 * - Responsive design with overlay for readability
 * 
 * @component HomeHeroSection
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function HomeHeroSection() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: '73vh',
      backgroundColor: '#000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      overflow: 'hidden',
      margin: 0
    }}>
      <HeroBackgroundContainer />
      <div style={{ 
        position: 'relative', 
        zIndex: 3, 
        color: 'white', 
        textAlign: 'center',
        padding: '2rem',
        maxWidth: '800px'
      }}>
        <HeroContentContainer />
        <CTAButtonsContainer />
      </div>
    </section>
  );
}

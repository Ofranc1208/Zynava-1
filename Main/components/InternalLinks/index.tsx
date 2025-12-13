'use client';

import { useState, useEffect } from 'react';
import SectionHeader from '../../shared/components/SectionHeader';
// MintAIFeaturedCard removed - not needed on main page
import ResourceCards from './ResourceCards';
import { COLORS } from '../../shared/styles/colorThemes';
import { SPACING_PRESETS } from '../../shared/styles/spacing';

/**
 * InternalLinks Component - Orchestrator Pattern
 * 
 * Thin orchestrator that composes sub-components:
 * - InternalLinksHeader: "Expert Resources" section header
 * - ResourceCards: Two smaller resource link cards
 * 
 * Manages mobile state for responsive layout adjustments.
 * 
 * @component InternalLinks
 */
export default function InternalLinks() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section style={{
      ...SPACING_PRESETS.section,
      background: COLORS.backgrounds.slateGradient
    }}>
      {/* Background Decorations */}
      <div style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        width: "120px",
        height: "120px",
        background: COLORS.radialGradients.greenLight,
        borderRadius: "50%"
      }}></div>
      <div style={{
        position: "absolute",
        bottom: "20px",
        left: "20px",
        width: "80px",
        height: "80px",
        background: COLORS.radialGradients.greenLighter,
        borderRadius: "50%"
      }}></div>
      
      <div style={SPACING_PRESETS.sectionContainer}>
        <SectionHeader
          badge="Expert Resources"
          badgeColor={COLORS.accent.blue}
          badgeBg={COLORS.backgrounds.blueLight}
          badgeBorder={COLORS.borders.blue}
          title="Everything You Need to Know"
          titleGradientFrom={COLORS.neutral.gray800}
          titleGradientTo={COLORS.accent.blue}
          subtitle="From legal insights to comprehensive guides, explore our knowledge center"
        />
        <ResourceCards />
      </div>
    </section>
  );
}

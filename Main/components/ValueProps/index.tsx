'use client';

import SectionHeader from '../../shared/components/SectionHeader';
import ValuePropsGrid from './ValuePropsGrid';
import ValuePropsStyles from './ValuePropsStyles';
import { useResponsiveColumns } from './useResponsiveColumns';
import { COLORS } from '../../shared/styles/colorThemes';
import { SPACING_PRESETS } from '../../shared/styles/spacing';

/**
 * ValueProps Component - Orchestrator Pattern
 * 
 * Thin orchestrator that composes sub-components:
 * - ValuePropsHeader: "Why Choose Us" section header
 * - ValuePropsGrid: 2-column grid with 4 value proposition cards
 * - ValuePropsStyles: Floating animation styles
 * 
 * Uses custom hook `useResponsiveColumns` for responsive 1/2 column layout.
 * 
 * @component ValueProps
 */
export default function ValueProps() {
  const { isMounted, gridColumns } = useResponsiveColumns();

  return (
    <section style={{
      ...SPACING_PRESETS.section,
      background: COLORS.backgrounds.whiteToSlate
    }}>
      {/* Background Decorations */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "5%",
        width: "100px",
        height: "100px",
        background: COLORS.radialGradients.purpleLight,
        borderRadius: "50%",
        animation: "float 6s ease-in-out infinite"
      }}></div>
      <div style={{
        position: "absolute",
        bottom: "15%",
        right: "8%",
        width: "80px",
        height: "80px",
        background: COLORS.radialGradients.greenLighter,
        borderRadius: "50%",
        animation: "float 8s ease-in-out infinite reverse"
      }}></div>
      
      <div style={SPACING_PRESETS.sectionContainer}>
        <SectionHeader
          badge="Why Choose Us"
          badgeColor={COLORS.accent.purple}
          badgeBg={COLORS.backgrounds.purpleLight}
          badgeBorder={COLORS.borders.purple}
          title="The Smarter Payouts Advantage"
          titleGradientFrom={COLORS.neutral.gray800}
          titleGradientTo={COLORS.accent.purple}
          subtitle="Advanced technology meets personalized service for the ultimate structured settlement experience"
          marginBottom="2rem"
        />
        <ValuePropsGrid isMounted={isMounted} gridColumns={gridColumns} />
      </div>

      <ValuePropsStyles />
    </section>
  );
}

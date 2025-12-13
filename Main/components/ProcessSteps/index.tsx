'use client';

import SectionHeader from '../../shared/components/SectionHeader';
import StepGrid from './StepGrid';
import { useResponsiveGrid } from './useResponsiveGrid';
import { COLORS } from '../../shared/styles/colorThemes';
import { SPACING_PRESETS } from '../../shared/styles/spacing';

/**
 * ProcessSteps Component - Orchestrator Pattern
 * 
 * Thin orchestrator that composes sub-components:
 * - ProcessStepsHeader: "How It Works" section header
 * - StepGrid: Responsive grid of 4 step cards
 * 
 * Uses custom hook `useResponsiveGrid` for responsive grid layout.
 * 
 * @component ProcessSteps
 */
export default function ProcessSteps() {
  const { isMounted, gridColumns } = useResponsiveGrid();

  return (
    <section style={{
      ...SPACING_PRESETS.section,
      background: COLORS.backgrounds.whiteToGray
    }}>
      {/* Background Line Decoration */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        height: "2px",
        background: `linear-gradient(90deg, transparent 0%, ${COLORS.neutral.gray200} 20%, ${COLORS.primary.main} 50%, ${COLORS.neutral.gray200} 80%, transparent 100%)`,
        zIndex: 0
      }}></div>
      
      <div style={SPACING_PRESETS.sectionContainer}>
        <SectionHeader
          badge="How It Works"
          badgeColor={COLORS.primary.dark}
          badgeBg={COLORS.backgrounds.greenLight}
          badgeBorder={COLORS.borders.green}
          title="From Quote to Cash in 4 Simple Steps"
          titleGradientFrom={COLORS.neutral.gray800}
          titleGradientTo={COLORS.primary.main}
          subtitle="Our AI-powered platform streamlines the entire process, making it faster and more transparent than ever before"
          marginBottom="2rem"
        />
        <StepGrid isMounted={isMounted} gridColumns={gridColumns} />
      </div>
    </section>
  );
}

'use client';

import SectionHeader from '../../shared/components/SectionHeader';
import TestimonialsGrid from './TestimonialsGrid';
import { useTestimonialsGrid } from './useTestimonialsGrid';
import { COLORS } from '../../shared/styles/colorThemes';
import { SPACING_PRESETS, getContainerStyles } from '../../shared/styles/spacing';

/**
 * Testimonials Component - Orchestrator Pattern
 * 
 * Thin orchestrator that composes sub-components:
 * - TestimonialsHeader: "What Our Clients Say" section header
 * - TestimonialsGrid: Responsive grid of 3 testimonial cards
 * 
 * Uses custom hook `useTestimonialsGrid` for responsive grid layout.
 * 
 * @component Testimonials
 */
export default function Testimonials() {
  const { isMounted, gridColumns } = useTestimonialsGrid();

  return (
    <section style={{
      ...SPACING_PRESETS.sectionCompact,
      background: COLORS.backgrounds.whiteToGray,
      borderBottom: `1px solid ${COLORS.neutral.gray200}`
    }}>
      <div style={getContainerStyles()}>
        <SectionHeader
          title="What Our Clients Say"
          titleGradientFrom={COLORS.neutral.gray800}
          titleGradientTo={COLORS.neutral.gray700}
          subtitle="Join thousands of satisfied clients who have transformed their financial future with us"
          subtitleColor={COLORS.neutral.gray500}
          subtitleMaxWidth="600px"
        />
        <TestimonialsGrid isMounted={isMounted} gridColumns={gridColumns} />
      </div>
    </section>
  );
}

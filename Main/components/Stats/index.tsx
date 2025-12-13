'use client';

import StatsHeader from './StatsHeader';
import StatsGrid from './StatsGrid';
import { SPACING_PRESETS, getContainerStyles } from '../../shared/styles/spacing';
import { COLORS } from '../../shared/styles/colorThemes';

/**
 * Stats Component - Orchestrator Pattern
 * 
 * Thin orchestrator that composes sub-components:
 * - StatsHeader: "Trusted Nationwide" section header
 * - StatsGrid: Grid of 4 animated stat ribbons
 * 
 * The StatsGrid manages counter animation using the useCounterAnimation hook.
 * 
 * @component Stats
 */
export default function Stats() {
  return (
    <section style={{
      ...SPACING_PRESETS.sectionCompact,
      background: COLORS.backgrounds.cream,
      borderTop: `1px solid ${COLORS.neutral.gray200}`,
      borderBottom: `1px solid ${COLORS.neutral.gray200}`
    }}>
      <div style={getContainerStyles()}>
        <StatsHeader />
        <StatsGrid />
      </div>
    </section>
  );
}

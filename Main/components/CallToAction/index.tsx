'use client';

import SectionHeader from '../../shared/components/SectionHeader';
import CTAButtons from './CTAButtons';
import CTAFooter from './CTAFooter';
import { COLORS } from '../../shared/styles/colorThemes';
import { SPACING_PRESETS, SPACING } from '../../shared/styles/spacing';
import { BORDER_RADIUS, BOX_SHADOWS } from '../../shared/styles/cardStyles';

/**
 * CallToAction Component - Orchestrator Pattern
 * 
 * Thin orchestrator that composes sub-components:
 * - CTAHeader: Title and description
 * - CTAButtons: Primary action buttons (Get Instant Offer, Chat with Mint AI)
 * - CTAFooter: Processing time indicator
 * 
 * @component CallToAction
 */
export default function CallToAction() {
  return (
    <section style={{
      ...SPACING_PRESETS.section,
      textAlign: "center",
      background: COLORS.backgrounds.greenLight,
      borderTop: `1px solid ${COLORS.neutral.gray200}`,
      overflow: "hidden"
    }}>
      {/* Background Pattern */}
      <div style={{
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        background: `${COLORS.radialGradients.greenLight}, ${COLORS.radialGradients.greenLighter}`,
        backgroundPosition: "20% 80%, 80% 20%",
        backgroundSize: "50% 50%",
        backgroundRepeat: "no-repeat",
        pointerEvents: "none"
      }}></div>
      
      <div style={SPACING_PRESETS.sectionContainer}>
        <div style={{
          background: COLORS.backgrounds.white,
          borderRadius: BORDER_RADIUS.xxlarge,
          padding: SPACING.card.standard,
          boxShadow: BOX_SHADOWS.large,
          border: `1px solid ${COLORS.neutral.gray200}`,
          maxWidth: "800px",
          margin: "0 auto"
        }}>
          <SectionHeader
            title="Ready to Transform Your Financial Future?"
            titleGradientFrom={COLORS.neutral.gray800}
            titleGradientTo={COLORS.neutral.gray700}
            subtitle="Get your instant quote today or chat with our AI assistant for personalized guidance. No personal information required to get started."
            marginBottom="2.5rem"
          />
          <CTAButtons />
          <CTAFooter />
        </div>
      </div>
    </section>
  );
}

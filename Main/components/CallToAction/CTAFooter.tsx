import { BORDER_RADIUS } from '../../shared/styles/cardStyles';
import { SPACING } from '../../shared/styles/spacing';
import { COLORS } from '../../shared/styles/colorThemes';
import { getBodyStyles, TYPOGRAPHY } from '../../shared/styles/typography';

export default function CTAFooter() {
  return (
    <div style={{
      background: COLORS.backgrounds.greenLight,
      borderRadius: BORDER_RADIUS.medium,
      padding: SPACING.card.compact,
      border: `1px solid ${COLORS.borders.green}`,
      maxWidth: "500px",
      margin: "0 auto"
    }}>
      <p style={{
        margin: "0",
        ...getBodyStyles('medium', 'medium'),
        color: COLORS.primary.main,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: SPACING.inline.sm
      }}>
        <span style={{ 
          fontSize: TYPOGRAPHY.fontSize.heading.h5,
          width: "24px",
          height: "24px",
          background: COLORS.primary.gradient,
          borderRadius: BORDER_RADIUS.circle,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: COLORS.text.white
        }}>⚡</span>
        <strong>Average processing time: 3-5 business days</strong>
      </p>
    </div>
  );
}


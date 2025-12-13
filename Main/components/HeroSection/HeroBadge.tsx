import Image from 'next/image';
import { COLORS } from '../../shared/styles/colorThemes';
import { BORDER_RADIUS } from '../../shared/styles/cardStyles';
import { SPACING } from '../../shared/styles/spacing';
import { ICON_SIZES } from '../../shared/styles/typography';

export default function HeroBadge() {
  return (
    <div style={{
      display: "inline-flex",
      alignItems: "center",
      gap: SPACING.inline.sm,
      background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)",
      border: "1px solid #cbd5e1",
      borderRadius: BORDER_RADIUS.large,
      padding: `${SPACING.unit.xxs} ${SPACING.unit.md}`,
      marginTop: "0", // Remove top margin to move closer to navigation
      marginBottom: SPACING.unit.sm, // Reduced bottom margin
      fontSize: "0.75rem",
      fontWeight: "600",
      color: COLORS.neutral.gray600,
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
      position: "relative",
      top: "-1rem" // Move up more to get closer to navigation
    }}>
      <div style={{
        width: ICON_SIZES.xsmall,
        height: ICON_SIZES.xsmall,
        borderRadius: BORDER_RADIUS.circle,
        background: `linear-gradient(135deg, ${COLORS.backgrounds.white} 0%, #f8fafc 50%, #e2e8f0 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #cbd5e1",
        flexShrink: 0,
        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.8)"
      }}>
        <Image
          src="/assets/images/mint-mascot.png"
          alt="Mint AI"
          width={10}
          height={10}
          style={{ display: 'inline-block' }}
        />
      </div>
      <span>Powered by Mint AI</span>
    </div>
  );
}


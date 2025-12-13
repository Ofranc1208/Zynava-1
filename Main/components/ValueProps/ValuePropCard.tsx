import { createSlideHover } from '../../shared/styles/hoverEffects';
import { getAccentBorderCardStyles, getIconContainerStyles } from '../../shared/styles/cardStyles';
import { TEXT_PRESETS, ICON_SIZES } from '../../shared/styles/typography';
import { COLORS } from '../../shared/styles/colorThemes';
import { SPACING } from '../../shared/styles/spacing';

interface ValuePropCardProps {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  borderColor: string;
  hoverShadowColor: string;
}

export default function ValuePropCard({ 
  icon, 
  iconBg, 
  iconColor, 
  title, 
  description, 
  borderColor,
  hoverShadowColor 
}: ValuePropCardProps) {
  return (
    <div 
      style={{
        ...getAccentBorderCardStyles(borderColor),
        height: "100%",
        display: "flex",
        flexDirection: "column"
      }}
      {...createSlideHover({
        translateX: 8,
        shadowColor: hoverShadowColor,
        shadowSize: '0 12px 32px',
        borderColor
      })}
    >
      <div style={{ 
        marginBottom: SPACING.unit.md,
        flex: 1,
        display: "flex",
        flexDirection: "column"
      }}>
        <div style={{
          ...getIconContainerStyles({
            size: ICON_SIZES.medium,
            borderRadius: "12px",
            background: iconBg,
            color: iconColor,
            fontSize: "1.5rem"
          }),
          marginBottom: SPACING.unit.md
        }}>
          {icon}
        </div>
        <h3 style={{
          ...TEXT_PRESETS.cardTitle,
          color: COLORS.text.primary,
          marginBottom: "0.5rem"
        }}>{title}</h3>
        <p style={{
          ...TEXT_PRESETS.cardText,
          color: COLORS.text.secondary,
          margin: 0,
          flex: 1,
          display: "flex",
          alignItems: "flex-start"
        }}>
          {description}
        </p>
      </div>
    </div>
  );
}


import Link from 'next/link';
import { createScaleHover } from '../../shared/styles/hoverEffects';
import { getStepCardStyles, getIconContainerStyles, BORDER_RADIUS } from '../../shared/styles/cardStyles';
import { TEXT_PRESETS, ICON_SIZES } from '../../shared/styles/typography';
import { COLORS } from '../../shared/styles/colorThemes';
import { SPACING } from '../../shared/styles/spacing';

interface StepCardProps {
  to: string;
  icon: string;
  title: string;
  text: string;
}

export default function StepCard({ to, icon, title, text }: StepCardProps) {
  const stepNumber = icon;
  
  return (
    <div style={{ width: "100%", position: "relative", height: "100%" }}>
      <Link href={to} style={{ textDecoration: "none", color: "inherit", height: "100%", display: "block" }}>
        <div 
          style={{
            ...getStepCardStyles(),
            height: "100%",
            display: "flex",
            flexDirection: "column"
          }}
          {...createScaleHover({
            scale: 1.03,
            shadowColor: COLORS.shadows.greenLighter,
            shadowSize: '0 20px 60px'
          })}
        >
          <div style={{
            ...getIconContainerStyles({
              size: ICON_SIZES.large,
              borderRadius: BORDER_RADIUS.circle,
              background: COLORS.primary.gradient,
              color: COLORS.text.white,
              fontSize: "1.5rem"
            }),
            marginBottom: SPACING.grid.standard,
            boxShadow: `0 8px 24px ${COLORS.shadows.green}`,
            position: "relative"
          }}>
            <div style={{
              position: "absolute",
              inset: "-4px",
              borderRadius: BORDER_RADIUS.circle,
              background: COLORS.primary.gradient,
              zIndex: -1,
              opacity: 0.3
            }}></div>
            <span>{stepNumber}</span>
          </div>
          
          <h3 style={{
            ...TEXT_PRESETS.cardTitle,
            color: COLORS.text.primary,
            marginBottom: "1rem"
          }}>{title}</h3>
          <p style={{
            ...TEXT_PRESETS.cardText,
            color: COLORS.text.secondary,
            margin: 0,
            flex: 1,
            display: "flex",
            alignItems: "flex-start"
          }}>{text}</p>
          
          <div style={{
            position: "absolute",
            top: "0",
            right: "0",
            width: "60px",
            height: "60px",
            background: "linear-gradient(135deg, #f0fdf4 0%, transparent 100%)",
            borderRadius: `0 ${BORDER_RADIUS.xlarge} 0 40px`
          }}></div>
        </div>
      </Link>
    </div>
  );
}


import Link from 'next/link';
import { createSlideHover } from '../../shared/styles/hoverEffects';
import { getResourceCardStyles, getAccentBarStyles } from '../../shared/styles/cardStyles';
import { TEXT_PRESETS, TYPOGRAPHY } from '../../shared/styles/typography';
import { COLORS } from '../../shared/styles/colorThemes';
import { SPACING } from '../../shared/styles/spacing';

export default function ResourceCards() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: SPACING.grid.standard
    }}>
      <Link href="/review-offer" style={{ textDecoration: "none", color: "inherit" }}>
        <div 
          style={getResourceCardStyles()}
          {...createSlideHover({
            translateX: 8,
            shadowColor: COLORS.shadows.black,
            shadowSize: '0 8px 24px',
            borderColor: COLORS.primary.main
          })}
        >
          <div style={getAccentBarStyles(COLORS.primary.main, COLORS.primary.dark)}></div>
          <div>
            <h4 style={{
              ...TEXT_PRESETS.cardTitle,
              fontSize: TYPOGRAPHY.fontSize.heading.h6,
              color: COLORS.text.primary,
              marginBottom: "0.25rem"
            }}>Review Process Guide</h4>
            <p style={{
              ...TEXT_PRESETS.cardSubtext,
              color: COLORS.text.tertiary,
              margin: 0
            }}>Learn our transparent review methodology</p>
          </div>
        </div>
      </Link>

      <Link href="/court-approval" style={{ textDecoration: "none", color: "inherit" }}>
        <div 
          style={getResourceCardStyles()}
          {...createSlideHover({
            translateX: 8,
            shadowColor: COLORS.shadows.black,
            shadowSize: '0 8px 24px',
            borderColor: COLORS.accent.purple
          })}
        >
          <div style={getAccentBarStyles(COLORS.accent.purple, COLORS.accent.purpleDark)}></div>
          <div>
            <h4 style={{
              ...TEXT_PRESETS.cardTitle,
              fontSize: TYPOGRAPHY.fontSize.heading.h6,
              color: COLORS.text.primary,
              marginBottom: "0.25rem"
            }}>Legal Requirements</h4>
            <p style={{
              ...TEXT_PRESETS.cardSubtext,
              color: COLORS.text.tertiary,
              margin: 0
            }}>Understand court approval procedures</p>
          </div>
        </div>
      </Link>
    </div>
  );
}


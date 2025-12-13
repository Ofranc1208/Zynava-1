import { CSSProperties } from 'react';
import { COLORS } from '../styles/colorThemes';
import { TEXT_PRESETS, TYPOGRAPHY } from '../styles/typography';

interface SectionHeaderProps {
  // Badge props (optional - for Pattern A)
  badge?: string;
  badgeColor?: string;
  badgeBg?: string;
  badgeBorder?: string;
  
  // Title props (required)
  title: string;
  titleGradientFrom?: string;
  titleGradientTo?: string;
  titleSize?: string;
  
  // Subtitle props (required)
  subtitle: string;
  subtitleColor?: string;
  subtitleSize?: string;
  subtitleMaxWidth?: string;
  
  // Container props (optional)
  marginBottom?: string;
}

/**
 * SectionHeader Component
 * 
 * Flexible section header that supports two patterns:
 * - Pattern A: Badge + Title + Subtitle (ProcessSteps, InternalLinks, ValueProps)
 * - Pattern B: Title + Subtitle only (MiniFAQ, Testimonials, CallToAction)
 * 
 * @param {SectionHeaderProps} props - Header configuration
 * @returns JSX.Element
 */
export default function SectionHeader({
  badge,
  badgeColor = COLORS.primary.dark,
  badgeBg = COLORS.backgrounds.greenLight,
  badgeBorder = COLORS.borders.green,
  title,
  titleGradientFrom = COLORS.neutral.gray800,
  titleGradientTo = COLORS.primary.main,
  titleSize = TYPOGRAPHY.fontSize.heading.h2,
  subtitle,
  subtitleColor = COLORS.text.secondary,
  subtitleSize = TYPOGRAPHY.fontSize.body.large,
  subtitleMaxWidth = '700px',
  marginBottom = '3rem'
}: SectionHeaderProps) {
  const containerStyle: CSSProperties = {
    textAlign: 'center',
    marginBottom
  };

  const badgeStyle: CSSProperties = {
    display: 'inline-block',
    background: badgeBg,
    border: `1px solid ${badgeBorder}`,
    borderRadius: '24px',
    padding: '0.5rem 1rem',
    marginBottom: '1rem',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: badgeColor,
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  const titleStyle: CSSProperties = {
    fontSize: titleSize,
    fontWeight: '800',
    color: COLORS.text.primary,
    marginBottom: '1rem',
    background: `linear-gradient(135deg, ${titleGradientFrom} 0%, ${titleGradientTo} 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const subtitleStyle: CSSProperties = {
    fontSize: subtitleSize,
    color: subtitleColor,
    maxWidth: subtitleMaxWidth,
    margin: '0 auto',
    lineHeight: '1.7'
  };

  return (
    <div style={containerStyle}>
      {badge && (
        <div style={badgeStyle}>
          {badge}
        </div>
      )}
      <h2 style={titleStyle}>
        {title}
      </h2>
      <p style={subtitleStyle}>
        {subtitle}
      </p>
    </div>
  );
}


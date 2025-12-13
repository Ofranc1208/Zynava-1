import { forwardRef } from 'react';
import Link from 'next/link';
import { createStatHover } from '../../shared/styles/hoverEffects';
import { getStatRibbonStyles } from '../../shared/styles/cardStyles';
import { TYPOGRAPHY } from '../../shared/styles/typography';
import { COLORS } from '../../shared/styles/colorThemes';

interface StatRibbonProps {
  icon: string;
  label: string;
  ariaLabel: string;
  href?: string;
  description?: string;
}

const StatRibbon = forwardRef<HTMLDivElement, StatRibbonProps>(({ icon, label, ariaLabel, href, description }, ref) => {
  const content = (
    <div 
      style={getStatRibbonStyles({ cursor: href ? "pointer" : "default" })}
      {...createStatHover()}
      title={description}
    >
      <span
        style={{
          marginBottom: "0.5rem",
          fontSize: TYPOGRAPHY.fontSize.heading.h2,
          lineHeight: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '3rem',
          opacity: 0.9
        }}
        role="img"
        aria-label={ariaLabel}
      >
        {icon}
      </span>
      <div ref={ref} style={{ 
        fontSize: TYPOGRAPHY.fontSize.heading.h3,
        minHeight: '2.25rem',
        color: COLORS.primary.dark,
        fontWeight: TYPOGRAPHY.fontWeight.bold
      }}>
        0
      </div>
      <div style={{
        fontSize: TYPOGRAPHY.fontSize.body.small,
        fontWeight: TYPOGRAPHY.fontWeight.medium,
        color: COLORS.text.secondary,
        textAlign: "center"
      }}>{label}</div>
    </div>
  );

  return href ? (
    <Link href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
      {content}
    </Link>
  ) : content;
});

StatRibbon.displayName = 'StatRibbon';

export default StatRibbon;


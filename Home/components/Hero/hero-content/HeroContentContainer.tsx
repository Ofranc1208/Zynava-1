'use client';

import HeroTitle from './HeroTitle';
import HeroSubtitle from './HeroSubtitle';
import HeroDescription from './HeroDescription';

/**
 * Hero Content Container Component
 * 
 * Orchestrates all text content components for the hero section.
 * 
 * @component HeroContentContainer
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function HeroContentContainer() {
  return (
    <>
      <HeroTitle />
      <HeroSubtitle />
      
      {/* Top Rated Badge */}
      <div style={{ 
        marginTop: '1.6rem',
        marginBottom: '1.6rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.41rem',
          padding: '0.5rem 0.5rem',
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '10px',
          backdropFilter: 'blur(6px)',
          boxShadow: '0 1px 4px rgba(0, 0, 0, 0.2), 0 0 12px rgba(255, 180, 0, 0.1)',
          transition: 'all 0.3s ease',
          maxWidth: '100%'
        }}>
          {/* Stars - Top Line */}
          <span style={{
            fontSize: 'clamp(0.875rem, 2vw, 1rem)',
            color: '#FFB400',
            lineHeight: '1',
            letterSpacing: '0.03em'
          }} aria-label="5 star rating">
            ⭐ ⭐ ⭐ ⭐ ⭐
          </span>
          {/* Text - Bottom Line */}
          <span style={{
            fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)',
            fontWeight: '400',
            color: 'rgba(243, 244, 246, 0.85)',
            lineHeight: '1.2',
            whiteSpace: 'nowrap',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            textAlign: 'center'
          }}>
            Top Rated ∙ Private ∙ Trusted
          </span>
        </div>
      </div>
      
      <HeroDescription />
    </>
  );
}

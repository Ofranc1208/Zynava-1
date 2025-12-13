'use client';

/**
 * Hero Subtitle Component
 * 
 * Secondary headline highlighting the AI-powered platform.
 * 
 * @component HeroSubtitle
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function HeroSubtitle() {
  return (
    <h2 style={{ 
      fontSize: 'clamp(1.1rem, 3vw, 1.25rem)', 
      fontWeight: '600', 
      color: '#f3f4f6', 
      marginTop: '1.5rem',
      marginBottom: '1rem',
      textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
    }}>
      Get Your Structured Settlement Lump-Sum Offer Instantly
    </h2>
  );
}

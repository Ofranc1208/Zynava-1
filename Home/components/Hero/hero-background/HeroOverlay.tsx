'use client';

/**
 * Hero Overlay Component
 * 
 * Provides the dark overlay for better text readability
 * over the background video.
 * 
 * @component HeroOverlay
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function HeroOverlay() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      zIndex: 2,
      pointerEvents: 'none' // Ensures clicks pass through to buttons
    }}></div>
  );
}

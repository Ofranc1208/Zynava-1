'use client';

import { useEffect } from 'react';

/**
 * Optimized Hero Content Component
 * 
 * Combines title, subtitle, and description into a single optimized component
 * to reduce bundle size while maintaining functionality.
 * 
 * @component OptimizedHeroContent
 * @author Smarter Payouts Team
 * @since 2024
 * @version 1.0.0
 */
export default function OptimizedHeroContent() {
  useEffect(() => {
    // Add pulse animation to main title
    if (typeof window !== 'undefined') {
      const pulse = document.getElementById('pulseText');
      if (pulse) {
        pulse.classList.add('pulse-effect');
      }
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes heartbeat {
            0%, 70%, 100% {
              transform: scale(1);
              opacity: 1;
            }
            14%, 42% {
              transform: scale(1.05);
              opacity: 0.9;
            }
          }
          
          .heartbeat-pulse {
            animation: heartbeat 2.5s ease-in-out infinite;
            transform-origin: center;
          }
        `
      }} />
      
      {/* Main Title with Pulse Animation */}
      <h1 
        id="pulseText" 
        className="heartbeat-pulse"
        style={{ 
          fontWeight: '700', 
          color: 'white', 
          fontSize: 'clamp(2rem, 5vw, 2.75rem)',
          marginBottom: '1rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}
      >
        Skip the Sales Pitch
      </h1>
      
      {/* Subtitle */}
      <p style={{
        fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
        color: 'white',
        marginBottom: '2rem',
        textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
        lineHeight: '1.4'
      }}>
        Just Instant Early Payout Offer
      </p>
      
      {/* Description */}
      <p style={{
        fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
        color: 'rgba(255, 255, 255, 0.9)',
        marginBottom: '2rem',
        textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
        lineHeight: '1.6',
        maxWidth: '600px',
        margin: '0 auto 2rem auto'
      }}>
        Get a transparent, market-rate offer for your structured settlement payments. 
        No hidden fees, no pressure tactics—just honest pricing in minutes.
      </p>
    </>
  );
}

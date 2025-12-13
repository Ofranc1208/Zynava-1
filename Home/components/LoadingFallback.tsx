/**
 * Loading Fallback Component
 * 
 * Lightweight loading component to show while heavy sections are loading.
 * Prevents layout shift and provides smooth user experience.
 * 
 * @component LoadingFallback
 * @author Smarter Payouts Team
 * @since 2024
 */

import React from 'react';

interface LoadingFallbackProps {
  height?: string;
  message?: string;
  icon?: string;
  background?: string;
}

export const LoadingFallback: React.FC<LoadingFallbackProps> = ({
  height = '400px',
  message = 'Loading...',
  icon = '⚡',
  background = 'linear-gradient(135deg, #f8fffe 0%, #e8f5e8 100%)'
}) => {
  return (
    <div style={{ 
      height, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background
    }}>
      <div style={{ textAlign: 'center', color: '#2d5a27' }}>
        <div style={{ 
          fontSize: '2rem', 
          marginBottom: '1rem',
          animation: 'pulse 2s ease-in-out infinite'
        }}>
          {icon}
        </div>
        <p style={{ 
          margin: 0, 
          fontSize: '1rem',
          fontWeight: '500'
        }}>
          {message}
        </p>
      </div>
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default LoadingFallback;

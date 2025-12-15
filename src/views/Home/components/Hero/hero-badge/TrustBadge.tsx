'use client'

export default function TrustBadge() {
  return (
    <div style={{
      position: 'relative',
      backgroundColor: 'transparent',
      textAlign: 'center',
      padding: '0'
    }}>
      {/* Stars Row - Google review star color with borders */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        marginBottom: '0.6rem'
      }}>
        {[...Array(5)].map((_, i) => (
          <span 
            key={i} 
            style={{
              color: '#fbbc04',
              fontSize: '1.4rem',
              lineHeight: 1,
              textShadow: '0 0 6px rgba(251, 188, 4, 0.4), 1px 1px 2px rgba(0, 0, 0, 0.2)',
              animation: `starGooglePulse 1.8s ease-in-out infinite ${i * 0.15}s`,
              display: 'inline-block',
              filter: 'brightness(1.1)',
              WebkitTextStroke: '0.5px rgba(0, 0, 0, 0.3)'
            }}
          >
            ★
          </span>
        ))}
      </div>
      
      {/* Text Row - Smaller font, better positioning */}
      <div style={{
        fontSize: '0.7rem',
        color: '#0a0a0a',
        textAlign: 'center',
        fontWeight: '700',
        letterSpacing: '0.02em',
        fontFamily: 'Inter, sans-serif',
        textTransform: 'uppercase',
        marginTop: '0.2rem'
      }}>
        Premium Brand Marketplace
      </div>

      {/* CSS Animation Styles */}
      <style jsx>{`
        @keyframes starGooglePulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
            filter: brightness(1.1) drop-shadow(0 0 4px rgba(251, 188, 4, 0.3));
          }
          50% {
            transform: scale(1.15);
            opacity: 0.95;
            filter: brightness(1.2) drop-shadow(0 0 8px rgba(251, 188, 4, 0.5));
          }
        }
      `}</style>
    </div>
  )
}


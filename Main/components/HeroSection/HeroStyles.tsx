export default function HeroStyles() {
  return (
    <style jsx>{`
      .hero-section-spaced {
        padding-top: 4rem;
        padding-bottom: 1rem;
      }
      .hero-content-wrapper {
        margin-bottom: 2rem;
      }
      .hero-cta-bottom {
        margin-bottom: 2rem;
      }
      @media (max-width: 600px) {
        .hero-section-spaced {
          padding-top: 2rem;
          padding-bottom: 1rem;
        }
        .hero-content-wrapper {
          margin-bottom: 0;
        }
        .hero-cta-bottom {
          margin-bottom: 1rem;
        }
      }
      @media (max-width: 400px) {
        .hero-section-spaced {
          padding-top: 1.5rem;
          padding-bottom: 0.5rem;
        }
        .hero-cta-bottom {
          margin-bottom: 0.5rem;
        }
      }
      
      /* Optimized Animations for Performance */
      @keyframes shine {
        0% { left: -100%; }
        100% { left: 100%; }
      }
      
      @keyframes livePulse {
        0%, 100% { 
          opacity: 1; 
          transform: scale(1); 
        }
        50% { 
          opacity: 0.7; 
          transform: scale(1.1); 
        }
      }
    `}</style>
  );
}


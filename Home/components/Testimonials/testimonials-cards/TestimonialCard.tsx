'use client';

import { useRouter } from 'next/navigation';

interface TestimonialCardProps {
  rating: number;
  testimonial: string;
  name: string;
  location: string;
}

/**
 * Testimonial Card Component
 * 
 * Displays an individual testimonial card with star rating, quote, and customer info.
 * 
 * @component TestimonialCard
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function TestimonialCard({ rating, testimonial, name, location }: TestimonialCardProps) {
  const router = useRouter();

  return (
    <div 
      style={{
        height: '100%',
        borderRadius: '16px',
        backgroundColor: 'white',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        border: '2px solid #e8f5e8'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(45, 90, 39, 0.12)';
        e.currentTarget.style.borderColor = '#09b44d';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
        e.currentTarget.style.borderColor = '#e8f5e8';
      }}
      onClick={() => router.push('/testimonials')}
    >
      <div style={{
        padding: '24px',
        textAlign: 'center'
      }}>
        <div style={{marginBottom: '16px'}}>
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} style={{
              color: '#ffc107',
              fontSize: '1.25rem'
            }}>★</span>
          ))}
        </div>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.6',
          marginBottom: '24px'
        }}>"{testimonial}"</p>
        <footer style={{color: '#6c757d'}}>
          <strong style={{color: '#2d5a27'}}>{name}</strong><br />
          <small>{location}</small>
        </footer>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          padding: '16px'
        }}>
          <span style={{fontSize: '2rem', opacity: 0.1, color: '#09b44d'}}>"</span>
        </div>
      </div>
    </div>
  );
}

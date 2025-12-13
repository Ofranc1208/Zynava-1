'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  linkHref: string;
  linkText: string;
  onClick?: () => void;
}

/**
 * Step Card Component
 * 
 * Displays an individual step card with hover effects and interactive elements.
 * 
 * @component StepCard
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function StepCard({ stepNumber, title, description, linkHref, linkText, onClick }: StepCardProps) {
  return (
    <div style={{position: 'relative', zIndex: 2}}>
      <div 
        style={{
          textAlign: 'center',
          padding: '24px',
          backgroundColor: 'white',
          borderRadius: '16px',
          position: 'relative',
          overflow: 'hidden',
          border: '2px solid #e8f5e8',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 12px 30px rgba(45, 90, 39, 0.12)';
          e.currentTarget.style.borderColor = '#09b44d';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
          e.currentTarget.style.borderColor = '#e8f5e8';
        }}
        onClick={onClick}
      >
        <div style={{position: 'relative'}}>
          <div 
            style={{
              borderRadius: '50%',
              color: 'white',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px',
              position: 'relative',
              width: 70, 
              height: 70,
              background: 'linear-gradient(135deg, #09b44d 0%, #087a35 100%)',
              boxShadow: '0 4px 12px rgba(9, 180, 77, 0.2)'
            }}
          >
            <span style={{fontWeight: '700', fontSize: '1.25rem'}}>{stepNumber}</span>
          </div>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '700',
            marginBottom: '16px',
            color: '#2d5a27'
          }}>{title}</h3>
          <p style={{
            color: '#6c757d',
            marginBottom: '24px',
            lineHeight: '1.6'
          }}>{description}</p>
          <Link href={linkHref} style={{
            display: 'inline-block',
            padding: '8px 16px',
            fontSize: '0.875rem',
            lineHeight: '1.5',
            borderRadius: '6px',
            textDecoration: 'none',
            cursor: 'pointer',
            color: '#198754',
            backgroundColor: 'transparent',
            border: '1px solid #198754',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#198754';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#198754';
          }}
          >
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
}

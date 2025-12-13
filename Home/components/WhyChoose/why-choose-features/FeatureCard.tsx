'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

/**
 * Feature Card Component
 * 
 * Individual feature card with hover effects and navigation.
 * 
 * @component FeatureCard
 * @author Smarter Payouts Team
 * @since 2024
 */

interface CalculatorLink {
  label: string;
  href: string;
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  onClick?: () => void;
  calculatorLinks?: CalculatorLink[];
}

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  linkText, 
  linkUrl, 
  onClick,
  calculatorLinks 
}: FeatureCardProps) {
  const router = useRouter();

  return (
    <div 
      style={{
        textAlign: 'center',
        padding: '24px',
        borderRadius: '12px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #f8fffe 0%, #e8f5e8 100%)',
        border: '2px solid transparent',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(45, 90, 39, 0.15)';
        e.currentTarget.style.borderColor = '#09b44d';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = 'transparent';
      }}
      onClick={onClick || (() => router.push(linkUrl))}
    >
      <div style={{
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '16px',
        width: 80, 
        height: 80, 
        background: 'linear-gradient(135deg, #09b44d 0%, #087a35 100%)',
        boxShadow: '0 8px 16px rgba(9, 180, 77, 0.3)'
      }}>
        <span style={{fontSize: '2rem'}} role="img" aria-label={title}>{icon}</span>
      </div>
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: '700',
        marginBottom: '16px',
        color: '#2d5a27'
      }}>{title}</h3>
      <p style={{
        color: '#6c757d',
        marginBottom: '16px',
        lineHeight: '1.6'
      }}>{description}</p>
      <Link href={linkUrl} style={{
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
        transition: 'all 0.15s ease-in-out'
      }}>
        {linkText}
      </Link>
      
      {/* Clean Calculator Links - Only for AI-Powered Platform */}
      {calculatorLinks && calculatorLinks.length > 0 && (
        <div style={{
          marginTop: '16px',
          paddingTop: '16px',
          borderTop: '1px solid rgba(9, 180, 77, 0.15)'
        }}>
          <div style={{
            fontSize: '0.75rem',
            color: '#6c757d',
            marginBottom: '12px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Quick Access Tools
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px'
          }}>
            {calculatorLinks.map((calcLink, index) => (
              <Link
                key={index}
                href={calcLink.href}
                onClick={(e) => e.stopPropagation()}
                style={{
                  textDecoration: 'none',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                  backgroundColor: '#fafafa',
                  transition: 'all 0.2s ease-in-out',
                  textAlign: 'left',
                  display: 'block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f0fdf4';
                  e.currentTarget.style.borderColor = '#198754';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(25, 135, 84, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#fafafa';
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                aria-label={calcLink.label}
              >
                <div style={{
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span>{calcLink.label}</span>
                  <span style={{ color: '#198754', fontSize: '0.9rem' }}>→</span>
                </div>
                <div style={{
                  fontSize: '0.7rem',
                  color: '#6b7280'
                }}>
                  {calcLink.description}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

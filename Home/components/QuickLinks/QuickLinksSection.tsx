'use client';

import Link from 'next/link';

/**
 * Quick Links Section Component
 * 
 * Provides direct access to core structured settlement calculators
 * below the hero section. Designed to solve the "Invisible Excellence"
 * problem by making core calculators discoverable within 1 click.
 * 
 * @component QuickLinksSection
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function QuickLinksSection() {
  return (
    <section 
      style={{
        backgroundColor: '#f8fafc',
        padding: '2rem 1rem',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
      }}
      aria-label="Quick Links to Structured Settlement Calculators"
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '1.5rem',
        }}>
          <h2 style={{
            fontSize: '1.125rem',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '0.5rem',
          }}>
            Quick Access to Specialized Calculators
          </h2>
          <p style={{
            fontSize: '0.875rem',
            color: '#6b7280',
            margin: 0,
          }}>
            Choose the calculator that matches your payment type
          </p>
        </div>

        {/* Quick Links Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem',
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          {/* Guaranteed Payments Calculator Link */}
          <Link 
            href="/calculations/guaranteed"
            style={{
              textDecoration: 'none',
              display: 'block',
            }}
            aria-label="Calculate Structured Settlement Value for Guaranteed Payments"
            title="Calculate Structured Settlement Value for Guaranteed Payment Streams"
          >
            <div style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '2px solid #e5e7eb',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#059669';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(5, 150, 105, 0.15)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e5e7eb';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '0.5rem',
              }}>
                <span style={{
                  fontSize: '1.5rem',
                }}>✅</span>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  margin: 0,
                }}>
                  Guaranteed Payments Calculator
                </h3>
              </div>
              <p style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                margin: 0,
                lineHeight: '1.5',
              }}>
                Calculate structured settlement value for guaranteed payment streams
              </p>
              <span style={{ 
                display: 'none' 
              }}>
                Calculate Structured Settlement Value
              </span>
            </div>
          </Link>

          {/* Life Contingent Payments Calculator Link */}
          <Link 
            href="/calculations/lcp"
            style={{
              textDecoration: 'none',
              display: 'block',
            }}
            aria-label="Calculate Structured Settlement Value for Life Contingent Payments"
            title="Calculate Structured Settlement Value for Life-Contingent Payment Streams"
          >
            <div style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '2px solid #e5e7eb',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#059669';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(5, 150, 105, 0.15)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e5e7eb';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '0.5rem',
              }}>
                <span style={{
                  fontSize: '1.5rem',
                }}>⏱️</span>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  margin: 0,
                }}>
                  Life Contingent Calculator
                </h3>
              </div>
              <p style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                margin: 0,
                lineHeight: '1.5',
              }}>
                Calculate structured settlement value for life-contingent payment streams
              </p>
              <span style={{ 
                display: 'none' 
              }}>
                Calculate Structured Settlement Value
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

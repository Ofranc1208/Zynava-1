'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import StatisticCard from './StatisticCard';

/**
 * Statistics Grid Component
 * 
 * Grid of statistics with call-to-action button.
 * 
 * @component StatisticsGrid
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function StatisticsGrid() {
  const statistics = [
    { value: '400+', label: 'Happy Clients', linkUrl: '/testimonials' },
    { value: '$50M+', label: 'Payments Bought', linkUrl: '/about' },
    { value: '35-55', label: 'Days Average', linkUrl: '/how-fast-can-i-get-my-money' },
    { value: '100%', label: 'Client Satisfaction', linkUrl: '/testimonials' }
  ];

  return (
    <div 
      style={{
        borderRadius: '12px',
        padding: '24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #f8fffe 0%, #e8f5e8 100%)',
        border: '2px solid #e0e0e0'
      }}
    >
      <div style={{position: 'relative'}}>
        <h3 style={{
          fontSize: '1.25rem',
          marginBottom: '8px',
          fontWeight: '700',
          color: '#2d5a27'
        }}>Join 400+ Happy Clients</h3>
        <p style={{
          marginBottom: '20px',
          color: '#6c757d',
          fontSize: '0.95rem'
        }}>Since 2017, we've helped recipients access over $50M in early payouts.</p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '12px',
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          {statistics.map((stat, index) => (
            <StatisticCard
              key={index}
              value={stat.value}
              label={stat.label}
              linkUrl={stat.linkUrl}
            />
          ))}
        </div>
        
        <div style={{marginTop: '16px'}}>
          <Link href="/mint-chat-active?type=calculate" style={{
            display: 'inline-block',
            padding: '10px 20px',
            fontSize: '1rem',
            lineHeight: '1.5',
            borderRadius: '6px',
            textDecoration: 'none',
            cursor: 'pointer',
            color: '#fff',
            backgroundColor: '#198754',
            border: '1px solid #198754',
            fontWeight: '600',
            transition: 'all 0.15s ease-in-out'
          }}>
            Start Your Quote Now
          </Link>
        </div>
      </div>
    </div>
  );
}

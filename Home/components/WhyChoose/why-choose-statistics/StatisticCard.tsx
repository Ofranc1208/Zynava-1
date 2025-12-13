'use client';

import { useRouter } from 'next/navigation';

/**
 * Statistic Card Component
 * 
 * Individual statistic card with hover effects and navigation.
 * 
 * @component StatisticCard
 * @author Smarter Payouts Team
 * @since 2024
 */

interface StatisticCardProps {
  value: string;
  label: string;
  linkUrl: string;
}

export default function StatisticCard({ value, label, linkUrl }: StatisticCardProps) {
  const router = useRouter();

  return (
    <div 
      style={{
        padding: '12px 8px',
        borderRadius: '8px',
        background: 'white',
        border: '1px solid #e8f5e8',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(45, 90, 39, 0.06)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(45, 90, 39, 0.12)';
        e.currentTarget.style.borderColor = '#09b44d';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(45, 90, 39, 0.06)';
        e.currentTarget.style.borderColor = '#e8f5e8';
      }}
      onClick={() => router.push(linkUrl)}
    >
      <div style={{
        fontSize: '1.5rem',
        fontWeight: '700',
        color: '#09b44d',
        marginBottom: '2px'
      }}>
        {value}
      </div>
      <div style={{
        color: '#6c757d',
        fontSize: '0.75rem'
      }}>
        {label}
      </div>
    </div>
  );
}

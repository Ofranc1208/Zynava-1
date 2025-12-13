'use client';

import FeatureCard from './FeatureCard';

/**
 * Features Grid Component
 * 
 * Grid layout for the three main feature cards.
 * 
 * @component FeaturesGrid
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function FeaturesGrid() {
  const features = [
    {
      icon: '🧮',
      title: 'AI-Powered Platform',
      description: 'Get your quote in seconds with Mint, our AI assistant. No personal information required to see your settlement value.',
      linkText: 'Try Calculator →',
      linkUrl: '/mint-chat-active?type=calculate',
      calculatorLinks: [
        { label: 'AI Quote Assistant', href: '/mint-intelligent-chat' },
        { label: 'Debt & Savings Tools', href: '/motivation-calculators' },
        { label: 'Guaranteed Payments', href: '/calculations/guaranteed' },
        { label: 'Lifetime Payments', href: '/calculations/lcp' }
      ]
    },
    {
      icon: '🛡️',
      title: 'Court-Approved Process',
      description: '100% legal and regulated. We handle all court paperwork and approval requirements for you.',
      linkText: 'Learn Process →',
      linkUrl: '/court-approval'
    },
    {
      icon: '🤝',
      title: 'No Pressure Sales',
      description: 'Our team educates and informs — never pressures. You\'re in complete control of your decision.',
      linkText: 'Our Values →',
      linkUrl: '/about'
    }
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
      marginBottom: '48px'
    }}>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          linkText={feature.linkText}
          linkUrl={feature.linkUrl}
          calculatorLinks={feature.calculatorLinks}
        />
      ))}
    </div>
  );
}

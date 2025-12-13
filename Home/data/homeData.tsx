import { FeatureCard, TestimonialData, StatisticData, ProcessStep, HeroContent } from '../types';

export const HERO_CONTENT: HeroContent = {
  title: 'Get Cash for Your Structured Settlement',
  subtitle: 'Turn Your Future Payments Into Cash When You Need It',
  description: 'Smarter Payouts is the industry\'s first fully self-quoting platform. Use our DIY lump-sum calculator to get instant quotes in under 60 seconds—no personal info required.',
  videoUrl: '/videos/hero-background.mp4',
  ctaButtons: [
    {
      id: 'primary-cta',
      text: 'How Our Process Works',
      href: '/main',
      type: 'primary'
    },
    {
      id: 'secondary-cta',
      text: 'Get Free Quote',
      href: '/mint-chat-active?type=calculate&source=home-data-secondary',
      type: 'secondary'
    }
  ]
};

export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: 'fast-cash',
    icon: '⚡',
    title: 'Fast Cash Access',
    description: 'Get your money in as little as 30 days with our streamlined process.',
    linkText: 'Learn About Fast Cash Access',
    linkUrl: '/how-it-works'
  },
  {
    id: 'no-hidden-fees',
    icon: '💰',
    title: 'No Hidden Fees',
    description: 'Transparent pricing with no surprise costs or hidden charges.',
    linkText: 'See Pricing',
    linkUrl: '/pricing'
  },
  {
    id: 'expert-guidance',
    icon: '🎯',
    title: 'Expert Guidance',
    description: 'Our experienced team guides you through every step of the process.',
    linkText: 'Meet Our Team',
    linkUrl: '/about'
  },
  {
    id: 'secure-process',
    icon: '🔒',
    title: 'Secure Process',
    description: 'Bank-level security and full compliance with all regulations.',
    linkText: 'Security Info',
    linkUrl: '/security'
  }
];

export const STATISTICS: StatisticData[] = [
  {
    id: 'customers-served',
    value: '400+',
    label: 'Happy Clients',
    description: 'Satisfied clients who got cash for their settlements'
  },
  {
    id: 'total-funded',
    value: '$50M+',
    label: 'Future Payments Bought',
    description: 'In structured settlement purchases'
  },
  {
    id: 'average-time',
    value: '30 Days',
    label: 'Average Time',
    description: 'From application to cash in hand'
  },
  {
    id: 'satisfaction-rate',
    value: '98%',
    label: 'Satisfaction Rate',
    description: 'Customer satisfaction rating'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'step-1',
    stepNumber: 1,
    title: 'Get Your Free Quote',
    description: 'Fill out our simple form and get a no-obligation quote in minutes.',
    icon: '📝'
  },
  {
    id: 'step-2',
    stepNumber: 2,
    title: 'Review & Accept',
    description: 'Review your offer and accept the terms that work best for you.',
    icon: '✅'
  },
  {
    id: 'step-3',
    stepNumber: 3,
    title: 'Get Your Cash',
    description: 'Complete the paperwork and receive your cash in as little as 30 days.',
    icon: '💵'
  }
];

export const TESTIMONIALS: TestimonialData[] = [
  {
    id: 'testimonial-1',
    name: 'Jennifer M.',
    role: 'Small Business Owner',
    company: 'Johnson Consulting',
    content: 'Smarter Payouts helped me access my settlement money when I needed it most to expand my business. The process was smooth and transparent.',
    rating: 5
  },
  {
    id: 'testimonial-2',
    name: 'Robert L.',
    role: 'Father of Two',
    company: 'Family',
    content: 'When my kids needed college funding, Smarter Payouts made it possible to access my future payments. Great service and fair pricing.',
    rating: 5
  },
  {
    id: 'testimonial-3',
    name: 'Lisa Rodriguez',
    role: 'Homeowner',
    company: 'Personal',
    content: 'I was able to pay off my mortgage early thanks to Smarter Payouts. The team was professional and made everything easy to understand.',
    rating: 5
  }
];

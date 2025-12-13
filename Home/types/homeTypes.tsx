// Home Page Core Types

export interface HomePageProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface SectionProps {
  className?: string;
  style?: React.CSSProperties;
  onSectionView?: (sectionName: string) => void;
}

export interface FeatureCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

export interface TestimonialData {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface StatisticData {
  id: string;
  value: string;
  label: string;
  description?: string;
}

export interface ProcessStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  icon: string;
}

export interface CTAButton {
  id: string;
  text: string;
  href: string;
  type: 'primary' | 'secondary';
  onClick?: () => void;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  videoUrl?: string;
  backgroundImage?: string;
  ctaButtons: CTAButton[];
}

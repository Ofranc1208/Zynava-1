import TestimonialCard from './TestimonialCard';
import { SPACING } from '../../shared/styles/spacing';

interface TestimonialsGridProps {
  isMounted: boolean;
  gridColumns: string;
}

export default function TestimonialsGrid({ isMounted, gridColumns }: TestimonialsGridProps) {
  return (
    <div style={{
      display: isMounted ? "grid" : "block",
      gridTemplateColumns: isMounted ? gridColumns : "1fr",
      gap: SPACING.grid.comfortable,
      alignItems: "stretch"
    }}>
      <TestimonialCard 
        text="Everything was fast and smooth. They were transparent and helpful throughout the entire process. I got my money much faster than expected!" 
        author="Jamie L." 
        rating={5}
      />
      <TestimonialCard 
        text="No personal info needed to get started. That made me feel safe and comfortable. The AI calculator gave me an instant quote!" 
        author="Daniel K." 
        rating={5}
      />
      <TestimonialCard 
        text="Court approval sounded scary, but they handled everything professionally. The process was much easier than I imagined." 
        author="Alexis M." 
        rating={5}
      />
    </div>
  );
}


import TestimonialCard from './TestimonialCard';

/**
 * Testimonials Grid Component
 * 
 * Displays a grid of testimonial cards with customer feedback.
 * 
 * @component TestimonialsGrid
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function TestimonialsGrid() {
  const testimonials = [
    {
      rating: 5,
      testimonial: "Smarter Payouts gave me an instant quote online with zero hassle. The process was transparent and I felt in control the entire time.",
      name: "Nat Reynolds",
      location: "Denver, CO"
    },
    {
      rating: 5,
      testimonial: "I was skeptical at first, but the team walked me through everything. Got my money faster than I expected and the rates were fair.",
      name: "Celia Almeda",
      location: "Miami, FL"
    },
    {
      rating: 5,
      testimonial: "The calculator gave me a realistic expectation upfront. No surprises, no hidden fees. Exactly what they promised from day one.",
      name: "Tom Cruise",
      location: "Austin, TX"
    }
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px'
    }}>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          rating={testimonial.rating}
          testimonial={testimonial.testimonial}
          name={testimonial.name}
          location={testimonial.location}
        />
      ))}
    </div>
  );
}

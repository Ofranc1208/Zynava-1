'use client';

import { useRouter } from 'next/navigation';
import StepCard from './StepCard';

/**
 * Steps Grid Component
 * 
 * Displays the 3-step process grid with connection lines and interactive cards.
 * 
 * @component StepsGrid
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function StepsGrid() {
  const router = useRouter();

  const steps = [
    {
      stepNumber: 1,
      title: "Get Your Quote",
      description: "Use our calculator to see what your settlement is worth. No phone calls or personal data required.",
      linkHref: "/mint-chat-active?type=calculate",
      linkText: "Try Calculator"
    },
    {
      stepNumber: 2,
      title: "Court Approval",
      description: "We handle all the legal paperwork and court approval process. You just review and sign the documents.",
      linkHref: "/how-it-works",
      linkText: "Learn About Court Approval"
    },
    {
      stepNumber: 3,
      title: "Get Your Cash",
      description: "Receive your money via direct deposit or check. Most clients get paid within 45-90 days of approval.",
      linkHref: "/contact",
      linkText: "Get Started"
    }
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
      position: 'relative'
    }}>
      {/* Subtle Connection Lines for Desktop */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '75%',
        height: '1px',
        zIndex: 1,
        background: 'linear-gradient(90deg, transparent 0%, #e0e0e0 20%, #e0e0e0 80%, transparent 100%)'
      }} className="d-none d-md-block"></div>
      
      {steps.map((step, index) => (
        <StepCard
          key={index}
          stepNumber={step.stepNumber}
          title={step.title}
          description={step.description}
          linkHref={step.linkHref}
          linkText={step.linkText}
          onClick={() => {
            if (step.stepNumber === 1) {
              router.push('/mint-chat-active?type=calculate');
            }
          }}
        />
      ))}
    </div>
  );
}

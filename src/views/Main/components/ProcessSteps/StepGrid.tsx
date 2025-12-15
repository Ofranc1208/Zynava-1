'use client'

import StepCard from './StepCard'

export default function StepGrid() {
  const steps = [
    {
      stepNumber: 1,
      title: 'Discover Your Needs',
      description: 'Explore our product range and identify which supplements align with your wellness goals.',
      icon: '🔍'
    },
    {
      stepNumber: 2,
      title: 'Choose Your Products',
      description: 'Select from our premium formulations, each backed by scientific research and transparent dosing.',
      icon: '✅'
    },
    {
      stepNumber: 3,
      title: 'Start Your Journey',
      description: 'Begin taking your supplements as directed and track your progress over time.',
      icon: '🚀'
    },
    {
      stepNumber: 4,
      title: 'Experience Results',
      description: 'Feel the difference with improved energy, focus, and overall wellness.',
      icon: '💪'
    }
  ]

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      position: 'relative'
    }}>
      {steps.map((step, index) => (
        <StepCard
          key={index}
          stepNumber={step.stepNumber}
          title={step.title}
          description={step.description}
          icon={step.icon}
        />
      ))}
    </div>
  )
}


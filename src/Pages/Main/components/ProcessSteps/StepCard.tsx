interface StepCardProps {
  stepNumber: number
  title: string
  description: string
  icon: string
}

export default function StepCard({ stepNumber, title, description, icon }: StepCardProps) {
  return (
    <div style={{
      textAlign: 'center',
      padding: '2rem',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, #f8fffe 0%, #e8f5e8 100%)',
      border: '2px solid transparent',
      transition: 'all 0.3s ease',
      position: 'relative'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px)'
      e.currentTarget.style.boxShadow = '0 20px 40px rgba(9, 180, 77, 0.15)'
      e.currentTarget.style.borderColor = '#09b44d'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = 'none'
      e.currentTarget.style.borderColor = 'transparent'
    }}
    >
      <div style={{
        fontSize: '3rem',
        marginBottom: '1rem'
      }}>{icon}</div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: '#09b44d',
        color: 'white',
        fontWeight: 'bold',
        margin: '0 auto 1rem',
        fontSize: '1.25rem'
      }}>
        {stepNumber}
      </div>
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: '700',
        marginBottom: '1rem',
        color: '#1a1a1a'
      }}>{title}</h3>
      <p style={{
        color: '#6c757d',
        lineHeight: '1.6'
      }}>{description}</p>
    </div>
  )
}


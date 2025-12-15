export default function HeroHeading() {
  return (
    <>
      <h1 style={{
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        fontWeight: '800',
        color: '#1a1a1a',
        marginBottom: '1rem',
        textAlign: 'center'
      }}>
        How Our Products Work
      </h1>
      
      <p style={{
        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
        color: '#4a5568',
        maxWidth: '600px',
        margin: '0 auto 1.5rem',
        textAlign: 'center',
        lineHeight: '1.6'
      }}>
        Discover how <strong>Science-Backed Formulations</strong> with premium ingredients help you achieve peak performance <strong>naturally</strong> and effectively.
      </p>
    </>
  )
}


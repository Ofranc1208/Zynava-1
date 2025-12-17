export default function EditorialPolicyPage() {
  return (
    <main style={{
      maxWidth: '48rem', // max-width-3xl equivalent
      margin: '0 auto',
      padding: '3rem 1.5rem',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      lineHeight: '1.7',
      color: '#1a202c'
    }}>
      <h1 style={{
        fontSize: '2rem',
        fontWeight: 700,
        marginBottom: '1.5rem',
        color: '#1a202c'
      }}>
        How We Rank (Editorial Policy)
      </h1>

      <div style={{
        fontSize: '1rem',
        color: '#374151',
        lineHeight: '1.75'
      }}>
        <p style={{ marginBottom: '1.5rem', fontWeight: 600 }}>
          How does Zynava recommend products?
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          Our recommendations are driven by the <strong>Zynava FitScore™</strong>, a proprietary algorithm that evaluates products based on:
        </p>

        <ol style={{ 
          marginBottom: '1.5rem',
          paddingLeft: '1.5rem',
          listStyleType: 'decimal'
        }}>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Ingredient Quality:</strong> Dosage transparency and bioavailability.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Safety:</strong> Filtering out contraindications for your specific demographic.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Value:</strong> Cost-per-serving analysis.
          </li>
        </ol>

        <p style={{ 
          marginTop: '2rem',
          padding: '1.5rem',
          background: '#f9fafb',
          borderRadius: '8px',
          border: '1px solid #e5e7eb',
          fontStyle: 'italic',
          color: '#374151'
        }}>
          <strong>Note:</strong> Brands cannot pay to alter their FitScore. We maintain an objective firewall between our editorial team and affiliate partnerships.
        </p>

        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#6b7280' }}>
          Last Updated: December 2025
        </p>
      </div>
    </main>
  )
}


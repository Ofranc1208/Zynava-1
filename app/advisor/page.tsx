export default function AdvisorPage() {
  return (
    <main style={{
      maxWidth: '900px',
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
        Supplement Advisor
      </h1>

      <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '1rem' }}>
        ZYNAVA's Supplement Advisor guides you through a series of questions about your wellness goals, lifestyle, and preferences. Based on your answers, our platform analyzes thousands of supplements to identify options that may align with your specific needs.
      </p>

      <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '2rem' }}>
        This tool is designed for educational and informational purposes only. It does not provide medical advice, diagnose conditions, or recommend treatments. Always consult with a qualified healthcare professional before starting any supplement regimen.
      </p>

      <div style={{
        marginTop: '2rem',
        padding: '1.5rem',
        background: '#f9fafb',
        borderRadius: '8px',
        border: '1px solid #e5e7eb'
      }}>
        <p style={{ fontSize: '0.9rem', color: '#6b7280', margin: 0 }}>
          <strong>Get Started:</strong> To begin your personalized supplement recommendations, click the &quot;Supplement Advisor&quot; button on the homepage or use the chat widget. Our AI-powered quiz takes about 2 minutes to complete.
        </p>
      </div>
    </main>
  )
}


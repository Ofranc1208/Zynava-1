export default function DisclaimerPage() {
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
        Medical Disclaimer
      </h1>

      <section style={{
        marginBottom: '2rem',
        padding: '1.5rem',
        background: '#fffbf0',
        borderRadius: '8px',
        border: '1px solid #fde68a'
      }}>
        <p style={{ fontSize: '1rem', color: '#744210', marginBottom: '1rem', fontWeight: 600 }}>
          IMPORTANT: The content on Zynava, including the Zynava FitScore™ and Advisor recommendations, is for informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
        </p>
        <p style={{ fontSize: '1rem', color: '#744210', margin: 0 }}>
          Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '1rem',
          color: '#1a202c'
        }}>
          Not Medical Advice
        </h2>
        <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '1rem' }}>
          ZYNAVA is not a medical platform. We do not diagnose, treat, cure, or prevent any disease or medical condition. We do not replace conversations with qualified healthcare professionals. We do not provide personalized medical advice.
        </p>
        <p style={{ fontSize: '1rem', color: '#374151', margin: 0 }}>
          If you have specific health concerns, medical conditions, or are taking medications, consultation with a healthcare provider is essential before using supplements.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '1rem',
          color: '#1a202c'
        }}>
          Consult Healthcare Professionals
        </h2>
        <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '1rem' }}>
          Before using any supplement, especially if you have:
        </p>
        <ul style={{ fontSize: '1rem', color: '#374151', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
          <li>Existing health conditions</li>
          <li>Prescription medications</li>
          <li>Pregnancy or breastfeeding status</li>
          <li>Specific medical concerns</li>
        </ul>
        <p style={{ fontSize: '1rem', color: '#374151', margin: 0 }}>
          Please consult with a qualified healthcare professional. Supplements should never be viewed as a replacement for professional medical advice or treatment.
        </p>
      </section>

      <section style={{
        marginBottom: '2rem',
        padding: '1.5rem',
        background: '#fef2f2',
        borderRadius: '8px',
        border: '1px solid #fecaca'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '1rem',
          color: '#991b1b'
        }}>
          FDA Disclaimer
        </h2>
        <p style={{ fontSize: '1rem', color: '#991b1b', marginBottom: '1rem', fontWeight: 500 }}>
          The statements made regarding supplements on this website have not been evaluated by the Food and Drug Administration (FDA).
        </p>
        <p style={{ fontSize: '1rem', color: '#991b1b', margin: 0, fontWeight: 500 }}>
          These products are not intended to diagnose, treat, cure, or prevent any disease. The information provided on this site is for informational purposes only and is not a substitute for professional medical advice.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '1rem',
          color: '#1a202c'
        }}>
          Individual Results Vary
        </h2>
        <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '1rem' }}>
          Individual results and experiences with supplements vary. What may support one person's wellness may not be appropriate or effective for another. ZYNAVA does not promise specific outcomes or results.
        </p>
        <p style={{ fontSize: '1rem', color: '#374151', margin: 0 }}>
          Our recommendations are based on available information about ingredients and supplement types, but we cannot guarantee that any product will produce specific results for any individual.
        </p>
      </section>

      <section style={{
        marginTop: '2rem',
        padding: '1.5rem',
        background: '#f9fafb',
        borderRadius: '8px',
        border: '1px solid #e5e7eb'
      }}>
        <p style={{ fontSize: '0.9rem', color: '#6b7280', margin: 0 }}>
          <strong>Last Updated:</strong> This disclaimer is subject to updates. Please review it periodically for any changes.
        </p>
      </section>
    </main>
  )
}


export function AboutPage() {
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
        About ZYNAVA
      </h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '1rem',
          color: '#1a202c'
        }}>
          Why ZYNAVA Exists
        </h2>
        <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '1rem' }}>
          The supplement market presents a paradox: we have more options than ever before, yet individuals often feel more confused, not less. ZYNAVA exists to solve this fundamental problem by providing ingredient-focused guidance that helps people navigate the supplement landscape with clarity and confidence.
        </p>
        <p style={{ fontSize: '1rem', color: '#374151', margin: 0 }}>
          We recognize that people don't need more supplement options - they need better guidance. Supplement decisions should be informed by ingredients, personal goals, and evidence-based information, not by marketing budgets or brand popularity.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '1rem',
          color: '#1a202c'
        }}>
          What ZYNAVA Does
        </h2>
        <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '1rem' }}>
          ZYNAVA is an independent supplement advisor platform. We evaluate and analyze thousands of supplements across trusted retailers, examining ingredient profiles, formulation transparency, and other data points that matter to informed decision-making.
        </p>
        <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '1rem' }}>
          Based on your responses to a structured questionnaire, we match you with supplements that may align with your stated wellness goals. You're then routed to trusted third-party retailers where you can review products, check independent certifications, and make your own informed purchasing decisions.
        </p>
        <p style={{ fontSize: '1rem', color: '#374151', margin: 0 }}>
          We do not sell supplements, manufacture products, or profit from your purchasing decisions. Our role is purely informational and educational.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '1rem',
          color: '#1a202c'
        }}>
          Trust, Transparency, and Safety
        </h2>
        <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '1rem' }}>
          ZYNAVA is not a medical platform. We do not diagnose, treat, cure, or prevent any disease or medical condition. We do not replace conversations with qualified healthcare professionals. We do not provide personalized medical advice.
        </p>
        <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '1rem' }}>
          We commit to ingredient-focused, evidence-informed guidance. We use transparent language - "may support," not guaranteed results. Accuracy over sales. We never promise outcomes.
        </p>
        <p style={{ fontSize: '1rem', color: '#374151', margin: 0 }}>
          Before using any supplement, especially if you have existing health conditions, take medications, are pregnant or breastfeeding, or have specific medical concerns, please consult with a qualified healthcare professional.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '1rem',
          color: '#1a202c'
        }}>
          Our Mission
        </h2>
        <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '1rem' }}>
          ZYNAVA's mission is to empower individuals with clear, ingredient-focused information that supports informed supplement decisions. We believe that supplement guidance should be independent, evidence-informed, and free from sales pressure.
        </p>
        <p style={{ fontSize: '1rem', color: '#374151', margin: 0 }}>
          We are committed to transparency, accuracy, and user-first design. Our platform is designed to reduce confusion, not add to it.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '1rem',
          color: '#1a202c'
        }}>
          Company Information
        </h2>
        <div style={{
          padding: '1.5rem',
          background: '#f9fafb',
          borderRadius: '8px',
          border: '1px solid #e5e7eb'
        }}>
          <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '0.75rem' }}>
            <strong>Business Name:</strong> ZYNAVA
          </p>
          <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '0.75rem' }}>
            <strong>Business Type:</strong> Educational Supplement Guidance Platform
          </p>
          <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '0.75rem' }}>
            <strong>Contact Email:</strong> <a href="mailto:info@zynava.com" style={{ color: '#ff6b35', textDecoration: 'none' }}>info@zynava.com</a>
          </p>
          <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '0.75rem' }}>
            <strong>Business Address:</strong> New York, NY 10001, United States
          </p>
          <p style={{ fontSize: '1rem', color: '#374151', margin: 0 }}>
            <strong>Established:</strong> 2025
          </p>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '1rem',
          color: '#1a202c'
        }}>
          Our Commitment
        </h2>
        <ul style={{ fontSize: '1rem', color: '#374151', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Independent, unbiased supplement guidance</li>
          <li style={{ marginBottom: '0.5rem' }}>Evidence-based information from trusted sources</li>
          <li style={{ marginBottom: '0.5rem' }}>Transparent, compliance-safe language</li>
          <li style={{ marginBottom: '0.5rem' }}>No sales pressure or product pushing</li>
          <li style={{ marginBottom: '0.5rem' }}>Privacy-first approach to user data</li>
          <li style={{ marginBottom: '0.5rem' }}>Regular content updates and accuracy reviews</li>
        </ul>
      </section>
    </main>
  )
}

export default AboutPage


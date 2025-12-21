export default function HowItWorksPage() {
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
        marginBottom: '2rem',
        color: '#1a202c'
      }}>
        How ZYNAVA Works
      </h1>

      <section id="complexity" style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '1rem',
          color: '#1a202c'
        }}>
          Why Supplement Decisions Are Complex
        </h2>
        <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '1rem' }}>
          The supplement market offers thousands of products, each with different ingredients, quality standards, and formulations. Conflicting information, marketing claims, and the challenge of comparing options make supplement decisions overwhelming for many people.
        </p>
        <p style={{ fontSize: '1rem', color: '#374151', margin: 0 }}>
          ZYNAVA exists to simplify this process by providing ingredient-focused guidance based on your personal goals and preferences, not marketing narratives.
        </p>
      </section>

      <section id="evaluation" style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '1rem',
          color: '#1a202c'
        }}>
          How ZYNAVA Evaluates Thousands of Supplements
        </h2>
        <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '1rem' }}>
          Our platform analyzes supplements across trusted retailers, examining ingredient quality, purity standards, third-party testing, brand reputation, and other factors that matter for informed decision-making. We do not recommend dosages—please consult your healthcare provider for personalized guidance.
        </p>
        <p style={{ fontSize: '1rem', color: '#374151', margin: 0 }}>
          Rather than relying on brand recognition or marketing, we focus on what's actually inside each product and how those ingredients relate to your stated wellness goals.
        </p>
      </section>

      <section id="recommendations" style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '1rem',
          color: '#1a202c'
        }}>
          How Your Answers Guide Recommendations
        </h2>
        <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '1rem' }}>
          When you complete the Supplement Advisor questionnaire, you provide information about your wellness goals, lifestyle factors, dietary preferences, and personal needs. This information forms the basis for personalized recommendations.
        </p>
        <p style={{ fontSize: '1rem', color: '#374151', margin: 0 }}>
          Our matching process identifies supplements with ingredients commonly associated with your goals, while respecting your dietary restrictions and personal preferences. You maintain complete control over whether to explore or purchase any recommended products.
        </p>
      </section>

      <section id="safety" style={{
        marginTop: '3rem',
        padding: '1.5rem',
        background: '#fffbf0',
        borderRadius: '8px',
        border: '1px solid #fde68a'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '1rem',
          color: '#1a202c'
        }}>
          Safety & Disclaimers
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#744210', marginBottom: '0.5rem' }}>
          <strong>Important:</strong> ZYNAVA provides educational and informational guidance only. These statements have not been evaluated by the Food and Drug Administration. ZYNAVA recommendations are not intended to diagnose, treat, cure, or prevent any disease or medical condition.
        </p>
        <p style={{ fontSize: '0.9rem', color: '#744210', margin: 0 }}>
          Before using any supplement, especially if you have existing health conditions, take medications, are pregnant or breastfeeding, or have specific medical concerns, please consult with a qualified healthcare professional. Supplements never replace professional medical advice.
        </p>
      </section>
    </main>
  )
}


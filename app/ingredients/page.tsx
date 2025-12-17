export default function IngredientsPage() {
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
        Ingredients
      </h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '1rem',
          color: '#1a202c'
        }}>
          Ingredient-First Philosophy
        </h2>
        <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '1rem' }}>
          ZYNAVA believes that ingredients matter more than branding when it comes to supplement selection. Understanding what's actually in a product, the form each ingredient takes, the dose provided, and what research tells us about each ingredient transforms supplement shopping from guessing into informed decision-making.
        </p>
        <p style={{ fontSize: '1rem', color: '#374151', margin: 0 }}>
          Rather than relying on brand prestige or celebrity endorsements, we focus on ingredient-level transparency. This approach helps you become a more critical consumer across all your wellness choices.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '1rem',
          color: '#1a202c'
        }}>
          Educational Intent
        </h2>
        <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '1rem' }}>
          Our ingredient-focused approach is designed for educational purposes. We help you understand supplement formulations, ingredient forms, optimal dosages, and how different ingredients relate to various wellness goals.
        </p>
        <p style={{ fontSize: '1rem', color: '#374151', margin: 0 }}>
          This information empowers you to make informed decisions, but it does not constitute medical advice. Always consult with qualified healthcare professionals before using supplements.
        </p>
      </section>

      <div style={{
        marginTop: '2rem',
        padding: '1.5rem',
        background: '#f9fafb',
        borderRadius: '8px',
        border: '1px solid #e5e7eb'
      }}>
        <p style={{ fontSize: '0.9rem', color: '#6b7280', margin: 0 }}>
          <strong>Note:</strong> A comprehensive ingredient directory will be available here in the future, providing detailed information about common supplement ingredients, their forms, typical dosages, and research-backed associations with wellness goals.
        </p>
      </div>
    </main>
  )
}


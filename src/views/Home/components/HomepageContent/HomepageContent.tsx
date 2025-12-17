'use client'

export default function HomepageContent() {
  const cardStyle = {
    background: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    padding: '2rem',
    marginBottom: '2rem',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease',
  }

  const darkGrayText = '#374151'
  const lightGray = '#6b7280'

  return (
    <div style={{
      width: '100%',
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '3rem 1.5rem',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      lineHeight: '1.6',
      color: darkGrayText
    }}>
      
      {/* Why ZYNAVA Exists */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: '1.75rem',
          fontWeight: 700,
          marginBottom: '2rem',
          color: darkGrayText,
          textAlign: 'center'
        }}>Why ZYNAVA Exists</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          <div style={{...cardStyle, borderLeft: '4px solid #ff6b35'}}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem', color: darkGrayText }}>The Supplement Confusion</h3>
            <p style={{ fontSize: '0.9rem', color: lightGray, margin: 0 }}>
              The supplement market overwhelms consumers with thousands of products, conflicting information, and aggressive marketing. People spend hours researching, comparing labels, and cross-referencing reviews, only to feel uncertain about their final choice.
            </p>
          </div>

          <div style={{...cardStyle, borderLeft: '4px solid #ff6b35'}}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem', color: darkGrayText }}>Our Core Mission</h3>
            <p style={{ fontSize: '0.9rem', color: lightGray, margin: 0 }}>
              ZYNAVA exists to simplify supplement decisions. We provide guidance based on ingredients, personal goals, and transparent information, not marketing budgets or brand popularity. Your clarity is our success.
            </p>
          </div>

          <div style={{...cardStyle, borderLeft: '4px solid #ff6b35'}}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem', color: darkGrayText }}>What We're Not</h3>
            <p style={{ fontSize: '0.9rem', color: lightGray, margin: 0 }}>
              ZYNAVA doesn't sell supplements, manufacture products, or make medical claims. We're not a retailer, doctor, or replacement for healthcare advice. We're an independent guidance platform focused purely on education.
            </p>
          </div>
        </div>
      </section>

      {/* What ZYNAVA Does */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: '1.75rem',
          fontWeight: 700,
          marginBottom: '2rem',
          color: darkGrayText,
          textAlign: 'center'
        }}>What ZYNAVA Does</h2>

        <div style={{...cardStyle}}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '1.5rem', color: darkGrayText }}>Our Independent Approach</h3>
          <p style={{ fontSize: '0.9rem', color: lightGray, marginBottom: '1rem', margin: 0 }}>
            We evaluate and analyze thousands of supplements across trusted retailers without financial incentive. Our focus is ingredient-level transparency, not brand recognition or marketing narratives. Every recommendation is rooted in your personal goals and ingredient profiles.
          </p>
          <p style={{ fontSize: '0.9rem', color: lightGray, margin: 0 }}>
            We match you with supplements that may support your stated wellness goals based on structured questionnaire responses. You maintain complete control: exploring recommendations, researching products, and deciding whether to purchase from trusted retailers.
          </p>
        </div>
      </section>

      {/* How ZYNAVA Works */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: '1.75rem',
          fontWeight: 700,
          marginBottom: '2rem',
          color: darkGrayText,
          textAlign: 'center'
        }}>How ZYNAVA Works</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{...cardStyle}}>
            <div style={{
              background: '#eff6ff',
              width: '45px',
              height: '45px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#ff6b35'
            }}>1</div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.75rem', color: darkGrayText }}>Answer Questions</h3>
            <p style={{ fontSize: '0.9rem', color: lightGray, margin: 0 }}>
              Tell us about your wellness goals, lifestyle, dietary preferences, and personal needs. Simple questions designed to understand what you're actually seeking.
            </p>
          </div>

          <div style={{...cardStyle}}>
            <div style={{
              background: '#eff6ff',
              width: '45px',
              height: '45px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#ff6b35'
            }}>2</div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.75rem', color: darkGrayText }}>Get Personalized Matches</h3>
            <p style={{ fontSize: '0.9rem', color: lightGray, margin: 0 }}>
              ZYNAVA analyzes thousands of supplements and identifies matches based on your responses. See exactly why each recommendation aligns with your goals.
            </p>
          </div>

          <div style={{...cardStyle}}>
            <div style={{
              background: '#eff6ff',
              width: '45px',
              height: '45px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#ff6b35'
            }}>3</div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.75rem', color: darkGrayText }}>Explore & Decide</h3>
            <p style={{ fontSize: '0.9rem', color: lightGray, margin: 0 }}>
              Review ingredient profiles, learn why supplements match your goals, and connect to trusted retailers. You control whether to purchase anything.
            </p>
          </div>
        </div>
      </section>

      {/* Ingredient-Focused */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: '1.75rem',
          fontWeight: 700,
          marginBottom: '2rem',
          color: darkGrayText,
          textAlign: 'center'
        }}>Ingredient-Focused Guidance</h2>

        <div style={{...cardStyle, background: '#fafbfc'}}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: darkGrayText }}>Why Ingredients Matter More Than Brands</h3>
          <p style={{ fontSize: '0.9rem', color: lightGray, marginBottom: '1rem', margin: 0 }}>
            Marketing often matters more than formulation in the supplement industry. Brand prestige and celebrity endorsements don't reflect actual ingredient quality. ZYNAVA inverts this dynamic by focusing entirely on what's inside the bottle.
          </p>
          <p style={{ fontSize: '0.9rem', color: lightGray, margin: 0 }}>
            Understanding ingredients transforms supplement shopping from guessing to informed decision-making. You see ingredient forms, doses, and what research tells us about each one. You become a more critical consumer across all your wellness choices.
          </p>
        </div>
      </section>

      {/* User-First Experience */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: '1.75rem',
          fontWeight: 700,
          marginBottom: '2rem',
          color: darkGrayText,
          textAlign: 'center'
        }}>A Calm, User-First Experience</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <div style={{...cardStyle}}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.75rem', color: darkGrayText }}>No Pressure. No Account Required.</h3>
            <p style={{ fontSize: '0.9rem', color: lightGray, margin: 0 }}>
              Explore ZYNAVA without creating an account. No aggressive retargeting, subscription traps, or pressure to buy immediately.
            </p>
          </div>

          <div style={{...cardStyle}}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.75rem', color: darkGrayText }}>Privacy First</h3>
            <p style={{ fontSize: '0.9rem', color: lightGray, margin: 0 }}>
              Your questionnaire responses are handled with care. You're not a data point for sale. Privacy and respect are foundational.
            </p>
          </div>

          <div style={{...cardStyle}}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.75rem', color: darkGrayText }}>Reduces Overwhelm</h3>
            <p style={{ fontSize: '0.9rem', color: lightGray, margin: 0 }}>
              Clear questions, transparent information, factual recommendations. The entire platform is designed to reduce overwhelm and support confident decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: '1.75rem',
          fontWeight: 700,
          marginBottom: '2rem',
          color: darkGrayText,
          textAlign: 'center'
        }}>Trust, Transparency & Safety</h2>

        <div style={{...cardStyle}}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem', color: darkGrayText }}>What We Are Not</h3>
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '0.9rem', color: lightGray, marginBottom: '0.5rem' }}>
              <strong>Not Medical:</strong> We don't diagnose, treat, cure, or prevent disease. Consult healthcare providers before using supplements.
            </p>
            <p style={{ fontSize: '0.9rem', color: lightGray, marginBottom: '0.5rem' }}>
              <strong>Not a Seller:</strong> We have no financial incentive to recommend one brand over another.
            </p>
            <p style={{ fontSize: '0.9rem', color: lightGray }}>
              <strong>Not a Replacement:</strong> Professional guidance, nutrition counseling, and medical care come first.
            </p>
          </div>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: darkGrayText }}>What We Commit To</h3>
          <p style={{ fontSize: '0.9rem', color: lightGray, marginBottom: '0.5rem' }}>
            Ingredient-focused, evidence-informed guidance. Objective evaluation without brand bias. Transparent language: "may support," not guaranteed results.
          </p>
          <p style={{ fontSize: '0.9rem', color: lightGray, margin: 0 }}>
            Accuracy over sales. We never promise outcomes. Your autonomy and informed decision-making are our priority.
          </p>
        </div>
      </section>

      {/* Who ZYNAVA Serves */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: '1.75rem',
          fontWeight: 700,
          marginBottom: '2rem',
          color: darkGrayText,
          textAlign: 'center'
        }}>Who ZYNAVA Serves</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <div style={{...cardStyle}}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.75rem', color: darkGrayText }}>Seeking Clarity</h3>
            <p style={{ fontSize: '0.9rem', color: lightGray, margin: 0 }}>
              Confused by supplement marketing and overwhelming options? ZYNAVA transforms confusion into structured, ingredient-focused guidance.
            </p>
          </div>

          <div style={{...cardStyle}}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.75rem', color: darkGrayText }}>New to Supplements</h3>
            <p style={{ fontSize: '0.9rem', color: lightGray, margin: 0 }}>
              Don't know where to start? ZYNAVA provides a framework for systematic exploration rather than random trial.
            </p>
          </div>

          <div style={{...cardStyle}}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.75rem', color: darkGrayText }}>Educated Consumers</h3>
            <p style={{ fontSize: '0.9rem', color: lightGray, margin: 0 }}>
              Already knowledgeable? ZYNAVA's ingredient-focused approach and access to thousands of products makes discovery faster.
            </p>
          </div>

          <div style={{...cardStyle}}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.75rem', color: darkGrayText }}>Skeptical Decision-Makers</h3>
            <p style={{ fontSize: '0.9rem', color: lightGray, margin: 0 }}>
              Want concrete data before deciding? ZYNAVA's transparency and ingredient-level information gives you the facts you need.
            </p>
          </div>

          <div style={{...cardStyle}}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.75rem', color: darkGrayText }}>Valuing Independence</h3>
            <p style={{ fontSize: '0.9rem', color: lightGray, margin: 0 }}>
              Want guidance without financial incentives? ZYNAVA's independent approach aligns with your values.
            </p>
          </div>

          <div style={{...cardStyle}}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.75rem', color: darkGrayText }}>Privacy-Conscious</h3>
            <p style={{ fontSize: '0.9rem', color: lightGray, margin: 0 }}>
              Your data matters. We respect privacy and never sell information. You're a person seeking clarity, not a commodity.
            </p>
          </div>
        </div>
      </section>

      {/* Responsible Wellness */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: '1.75rem',
          fontWeight: 700,
          marginBottom: '2rem',
          color: darkGrayText,
          textAlign: 'center'
        }}>A Responsible Approach to Wellness</h2>

        <div style={{...cardStyle, background: 'linear-gradient(135deg, #fafbfc 0%, #f3f4f6 100%)'}}>
          <p style={{ fontSize: '0.9rem', color: lightGray, marginBottom: '1rem', margin: 0 }}>
            ZYNAVA commits to education over promises, guidance over hype, and respect for your autonomy. The wellness industry too often profits from uncertainty and urgency. We operate differently.
          </p>
          <p style={{ fontSize: '0.9rem', color: lightGray, marginBottom: '1rem', margin: 0 }}>
            Supplements can support wellness exploration, but never as prescriptive solutions or replacements for professional care. Individual differences matter. What supports one person may be unsuitable for another.
          </p>
          <p style={{ fontSize: '0.9rem', color: lightGray, margin: 0 }}>
            We believe you make better wellness decisions with time, clear information, and support. Our role is helping you understand the supplement landscape so your choices reflect your values, not marketing narratives.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h2 style={{
          fontSize: '1.75rem',
          fontWeight: 700,
          marginBottom: '1.5rem',
          color: darkGrayText
        }}>Start Your Guided Exploration</h2>

        <p style={{ fontSize: '0.95rem', color: lightGray, maxWidth: '600px', margin: '0 auto 2rem', lineHeight: '1.7' }}>
          Your journey to clarity begins with straightforward questions about your wellness goals. ZYNAVA matches you with supplements that may align with those goals, giving you ingredient information and connections to trusted retailers for further research.
        </p>

        <div style={{
          background: '#fffbf0',
          border: '1px solid #fde68a',
          borderRadius: '8px',
          padding: '1.5rem',
          maxWidth: '750px',
          margin: '0 auto',
          textAlign: 'left'
        }}>
          <p style={{ fontSize: '0.8rem', color: '#744210', lineHeight: '1.6', margin: 0 }}>
            <strong>Important Disclaimer:</strong> ZYNAVA provides educational and informational guidance only. These statements have not been evaluated by the Food and Drug Administration. ZYNAVA recommendations are not intended to diagnose, treat, cure, or prevent disease. Before using supplements, especially with existing health conditions, medications, pregnancy, or medical concerns, consult a qualified healthcare professional. Supplements never replace professional medical advice. Individual experiences vary.
          </p>
        </div>
      </section>

    </div>
  )
}

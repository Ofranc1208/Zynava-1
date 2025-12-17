export default function AffiliateDisclosurePage() {
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
        Affiliate Disclosure
      </h1>

      <div style={{
        fontSize: '1rem',
        color: '#374151',
        lineHeight: '1.75'
      }}>
        <p style={{ marginBottom: '1.5rem' }}>
          Transparency is a core value at Zynava.
        </p>
        
        <p style={{ marginBottom: '1.5rem' }}>
          In compliance with the FTC guidelines, please assume the following about links and posts on this site:
        </p>

        <ul style={{ 
          marginBottom: '1.5rem',
          paddingLeft: '1.5rem',
          listStyleType: 'disc'
        }}>
          <li style={{ marginBottom: '0.75rem' }}>
            Many of the links on Zynava are affiliate links. This means that if you click on the link and purchase the item, we may receive a small commission.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            The price to you remains the same.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            We only recommend products that score highly on our Zynava FitScore™ algorithm. Our editorial content is not influenced by affiliate partnerships.
          </li>
        </ul>

        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#6b7280' }}>
          Last Updated: December 2025
        </p>
      </div>
    </main>
  )
}


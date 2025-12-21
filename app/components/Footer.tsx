import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      style={{
        padding: '3rem 2rem',
        borderTop: '1px solid #e5e5e5',
        marginTop: '4rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        fontSize: '0.9rem',
        backgroundColor: '#ffffff',
      }}
    >
      <div>
        <h3 style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Company</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Link href="/about" style={{ color: '#666', textDecoration: 'none' }}>
            About Us
          </Link>
          <Link href="/contact" style={{ color: '#666', textDecoration: 'none' }}>
            Contact Us
          </Link>
          <Link href="/how-it-works" style={{ color: '#666', textDecoration: 'none' }}>
            How It Works
          </Link>
          <Link href="/editorial-policy" style={{ color: '#666', textDecoration: 'none' }}>
            Editorial Policy
          </Link>
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Legal</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Link href="/privacy" style={{ color: '#666', textDecoration: 'none' }}>
            Privacy Policy
          </Link>
          <Link href="/terms" style={{ color: '#666', textDecoration: 'none' }}>
            Terms of Service
          </Link>
          <Link href="/affiliate-disclosure" style={{ color: '#666', textDecoration: 'none' }}>
            Affiliate Disclosure
          </Link>
          <Link href="/disclaimer" style={{ color: '#666', textDecoration: 'none' }}>
            Health Disclaimer
          </Link>
        </div>
      </div>
      <div style={{ gridColumn: 'span 2' }}>
        <p style={{ 
          fontSize: '0.85rem', 
          color: '#666', 
          lineHeight: '1.6',
          marginBottom: '0.75rem',
          fontStyle: 'italic'
        }}>
          Zynava is a participant in the Amazon Services LLC Associates Program, iHerb Rewards, and other affiliate programs. We may earn a commission if you click a link and make a purchase, at no additional cost to you.
        </p>
        <p style={{ 
          fontSize: '0.85rem', 
          color: '#666', 
          marginBottom: '0.75rem'
        }}>
          <strong>Contact:</strong>{' '}
          <a href="mailto:info@zynava.com" style={{ color: '#ff6b35', textDecoration: 'none' }}>
            info@zynava.com
          </a>
        </p>
        <p style={{ 
          fontSize: '0.85rem', 
          color: '#666', 
          margin: 0 
        }}>
          © {currentYear} Zynava. All rights reserved.
        </p>
      </div>
    </footer>
  )
}


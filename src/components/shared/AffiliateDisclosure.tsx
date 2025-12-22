import Link from 'next/link'

/**
 * AffiliateDisclosure - Compact affiliate disclosure component
 * 
 * Minimal FTC-compliant disclosure that links to full details.
 * Use on results pages to save space while maintaining transparency.
 */
export function AffiliateDisclosure() {
  return (
    <div style={{
      padding: '0.8rem 0',
      margin: '0.8rem 0',
      textAlign: 'center',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.4rem',
      }}>
        <p style={{
          fontSize: '0.75rem',
          color: '#6b7280',
          margin: 0,
          lineHeight: '1.4',
          maxWidth: '300px',
        }}>
          <strong>Affiliate Disclosure:</strong> Some links on this page are affiliate links.
          If you buy through them, Zynava may earn a commission at no extra cost to you.
        </p>
        <Link 
          href="/affiliate-disclosure" 
          style={{ 
            color: '#ffffff', 
            backgroundColor: '#ff6b35',
            textDecoration: 'none',
            fontWeight: '600',
            padding: '0.3rem 0.7rem',
            borderRadius: '4px',
            fontSize: '0.7rem',
            transition: 'all 0.2s ease',
            border: 'none',
            cursor: 'pointer',
            display: 'inline-block',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#e55a2b'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ff6b35'
          }}
        >
          Learn more
        </Link>
      </div>
    </div>
  )
}

export default AffiliateDisclosure


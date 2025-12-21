import Link from 'next/link'

/**
 * AffiliateDisclosure - Reusable affiliate disclosure component
 * 
 * FTC-compliant disclosure for pages with affiliate links.
 * Use on results pages, product pages, and anywhere affiliate links appear.
 */
export function AffiliateDisclosure() {
  return (
    <div style={{
      backgroundColor: '#f9fafb',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '0.75rem 1rem',
      margin: '1rem 0',
      textAlign: 'center',
    }}>
      <p style={{
        fontSize: '0.8rem',
        color: '#6b7280',
        lineHeight: '1.5',
        margin: 0,
      }}>
        <strong>Affiliate Disclosure:</strong> Some of the links below are affiliate links. If you buy through them, ZYNAVA may earn a commission at no extra cost to you. Our recommendations are never influenced by affiliate relationships.{' '}
        <Link 
          href="/affiliate-disclosure" 
          style={{ 
            color: '#ff6b35', 
            textDecoration: 'underline',
          }}
        >
          Learn more
        </Link>
      </p>
    </div>
  )
}

export default AffiliateDisclosure


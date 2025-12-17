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
            About
          </Link>
          <Link href="/contact" style={{ color: '#666', textDecoration: 'none' }}>
            Contact
          </Link>
          <Link href="/faq" style={{ color: '#666', textDecoration: 'none' }}>
            FAQ
          </Link>
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Shop</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Link href="/products" style={{ color: '#666', textDecoration: 'none' }}>
            Products
          </Link>
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Support</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Link href="/shipping" style={{ color: '#666', textDecoration: 'none' }}>
            Shipping
          </Link>
          <Link href="/returns" style={{ color: '#666', textDecoration: 'none' }}>
            Returns
          </Link>
        </div>
      </div>
      <div>
        <p style={{ color: '#666', marginTop: 'auto' }}>
          © {currentYear} ZYNAVA
        </p>
      </div>
    </footer>
  )
}


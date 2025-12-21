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
            The price to you remains the same whether you use our affiliate link or go directly to the merchant's website.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            We only recommend products that score highly on our Z-SCORE™ algorithm. <strong>Our editorial content is never influenced by affiliate relationships.</strong> We maintain editorial independence and integrity in all our reviews and recommendations.
          </li>
        </ul>

        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginTop: '2.5rem',
          marginBottom: '1rem',
          color: '#1a202c'
        }}>
          Our Affiliate Partners
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          We partner with several major affiliate networks and retailers, including but not limited to:
        </p>
        <ul style={{ 
          marginBottom: '1.5rem',
          paddingLeft: '1.5rem',
          listStyleType: 'disc'
        }}>
          <li style={{ marginBottom: '0.5rem' }}>Amazon Services LLC Associates Program</li>
          <li style={{ marginBottom: '0.5rem' }}>iHerb Rewards Program</li>
          <li style={{ marginBottom: '0.5rem' }}>CJ Affiliate (Commission Junction)</li>
          <li style={{ marginBottom: '0.5rem' }}>Impact</li>
          <li style={{ marginBottom: '0.5rem' }}>ShareASale</li>
          <li style={{ marginBottom: '0.5rem' }}>Partnerize</li>
          <li style={{ marginBottom: '0.5rem' }}>Rakuten Advertising</li>
        </ul>
        <p style={{ marginBottom: '1.5rem' }}>
          By clicking on a link that takes you to a merchant's site (such as iHerb, Vitacost, The Vitamin Shoppe, Amazon, or others), we may earn a commission if you make a purchase.
        </p>

        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginTop: '2.5rem',
          marginBottom: '1rem',
          color: '#1a202c'
        }}>
          Strict Compliance Policy
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          We strictly adhere to the terms and conditions of all our affiliate partners. Our compliance policy includes:
        </p>
        <ul style={{ 
          marginBottom: '1.5rem',
          paddingLeft: '1.5rem',
          listStyleType: 'disc'
        }}>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Brand Bidding Prohibition:</strong> We do not engage in Pay-Per-Click (PPC) advertising on trademarked terms, misspellings, or variations of any of our affiliate partners' brand names. All brand names are added to our negative keyword lists to ensure compliance.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Coupon Code Integrity:</strong> We only promote official, approved, and valid coupon codes provided directly through our affiliate network dashboards. We will never promote unapproved, expired, or non-affiliate-specific codes.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Content Integrity:</strong> All content is created independently. We do not make any health claims that are not supported by the manufacturer or that violate the terms of our affiliate agreements.
          </li>
        </ul>

        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#6b7280' }}>
          Last Updated: December 2025
        </p>
      </div>
    </main>
  )
}


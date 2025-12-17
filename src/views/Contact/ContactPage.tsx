'use client'

export function ContactPage() {
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
        Get in Touch
      </h1>

      <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '2rem' }}>
        We're here to help. Whether you have questions about our platform, need support, or want to reach out for business inquiries, we'd love to hear from you.
      </p>

      {/* Contact Form */}
      <section style={{
        marginBottom: '3rem',
        padding: '2rem',
        background: '#ffffff',
        borderRadius: '8px',
        border: '1px solid #e5e7eb'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '1.5rem',
          color: '#1a202c'
        }}>
          Send Us a Message
        </h2>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label htmlFor="name" style={{
              display: 'block',
              fontSize: '0.9rem',
              fontWeight: 500,
              marginBottom: '0.5rem',
              color: '#374151'
            }}>
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1rem',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <div>
            <label htmlFor="email" style={{
              display: 'block',
              fontSize: '0.9rem',
              fontWeight: 500,
              marginBottom: '0.5rem',
              color: '#374151'
            }}>
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1rem',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <div>
            <label htmlFor="subject" style={{
              display: 'block',
              fontSize: '0.9rem',
              fontWeight: 500,
              marginBottom: '0.5rem',
              color: '#374151'
            }}>
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1rem',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <div>
            <label htmlFor="message" style={{
              display: 'block',
              fontSize: '0.9rem',
              fontWeight: 500,
              marginBottom: '0.5rem',
              color: '#374151'
            }}>
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1rem',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '0.75rem 2rem',
              fontSize: '1rem',
              fontWeight: 500,
              color: '#ffffff',
              background: '#ff6b35',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              alignSelf: 'flex-start',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = '#e55a2b'}
            onMouseOut={(e) => e.currentTarget.style.background = '#ff6b35'}
          >
            Send Message
          </button>
        </form>
      </section>

      <section style={{
        marginBottom: '2rem',
        padding: '2rem',
        background: '#f9fafb',
        borderRadius: '8px',
        border: '1px solid #e5e7eb'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '1.5rem',
          color: '#1a202c'
        }}>
          Business Information
        </h2>
        
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <div>
            <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '0.5rem', fontWeight: 600 }}>
              BUSINESS NAME
            </p>
            <p style={{ fontSize: '1rem', color: '#374151', margin: 0 }}>
              ZYNAVA
            </p>
          </div>

          <div>
            <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '0.5rem', fontWeight: 600 }}>
              EMAIL ADDRESS
            </p>
            <p style={{ fontSize: '1rem', color: '#374151', margin: 0 }}>
              <a href="mailto:support@zynava.com" style={{ color: '#ff6b35', textDecoration: 'none' }}>
                support@zynava.com
              </a>
            </p>
          </div>

          <div>
            <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '0.5rem', fontWeight: 600 }}>
              BUSINESS ADDRESS
            </p>
            <p style={{ fontSize: '1rem', color: '#374151', margin: 0, lineHeight: '1.6' }}>
              ZYNAVA<br />
              New York, NY 10001<br />
              United States
            </p>
          </div>

          <div>
            <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '0.5rem', fontWeight: 600 }}>
              BUSINESS HOURS
            </p>
            <p style={{ fontSize: '1rem', color: '#374151', margin: 0 }}>
              Monday - Friday: 9:00 AM - 5:00 PM EST<br />
              Saturday - Sunday: Closed
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '1rem',
          color: '#1a202c'
        }}>
          Contact Methods
        </h2>
        
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div style={{
            padding: '1.5rem',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            background: '#ffffff'
          }}>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              marginBottom: '0.5rem',
              color: '#1a202c'
            }}>
              General Inquiries
            </h3>
            <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '0.5rem' }}>
              For general questions about ZYNAVA, our platform, or how it works.
            </p>
            <p style={{ fontSize: '1rem', color: '#374151', margin: 0 }}>
              Email: <a href="mailto:info@zynava.com" style={{ color: '#ff6b35', textDecoration: 'none' }}>info@zynava.com</a>
            </p>
          </div>

          <div style={{
            padding: '1.5rem',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            background: '#ffffff'
          }}>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              marginBottom: '0.5rem',
              color: '#1a202c'
            }}>
              Business & Partnerships
            </h3>
            <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '0.5rem' }}>
              For affiliate partnerships, business inquiries, or collaboration opportunities.
            </p>
            <p style={{ fontSize: '1rem', color: '#374151', margin: 0 }}>
              Email: <a href="mailto:business@zynava.com" style={{ color: '#ff6b35', textDecoration: 'none' }}>business@zynava.com</a>
            </p>
          </div>

          <div style={{
            padding: '1.5rem',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            background: '#ffffff'
          }}>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              marginBottom: '0.5rem',
              color: '#1a202c'
            }}>
              Support
            </h3>
            <p style={{ fontSize: '1rem', color: '#374151', marginBottom: '0.5rem' }}>
              For technical support, questions about recommendations, or platform assistance.
            </p>
            <p style={{ fontSize: '1rem', color: '#374151', margin: 0 }}>
              Email: <a href="mailto:support@zynava.com" style={{ color: '#ff6b35', textDecoration: 'none' }}>support@zynava.com</a>
            </p>
          </div>
        </div>
      </section>

      <section style={{
        marginTop: '2rem',
        padding: '1.5rem',
        background: '#fffbf0',
        borderRadius: '8px',
        border: '1px solid #fde68a'
      }}>
        <p style={{ fontSize: '0.9rem', color: '#744210', margin: 0 }}>
          <strong>Response Time:</strong> We aim to respond to all inquiries within 1-2 business days. For urgent matters, please include "URGENT" in your subject line.
        </p>
      </section>
    </main>
  )
}

export default ContactPage


/**
 * Trust Indicators Component
 * 
 * Displays trust indicators like security, licensing, and compliance info.
 * 
 * @component TrustIndicators
 * @author Smarter Payouts Team
 * @since 2024
 */
export default function TrustIndicators() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '24px',
      flexWrap: 'wrap',
      marginTop: '1.5rem',
      paddingTop: '1.5rem',
      borderTop: '1px solid #e5e7eb'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: '#6b7280',
        fontSize: '0.875rem'
      }}>
        <span>🔒</span>
        <span>Secure & Confidential</span>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: '#6b7280',
        fontSize: '0.875rem'
      }}>
        <span>📋</span>
        <span>Registered Florida Corporation</span>
      </div>
    </div>
  );
}

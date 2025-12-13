'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  linkText: string
  linkUrl: string
  onClick?: () => void
}

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  linkText, 
  linkUrl, 
  onClick
}: FeatureCardProps) {
  const router = useRouter()

  return (
    <div 
      style={{
        textAlign: 'center',
        padding: '24px',
        borderRadius: '12px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #f8fffe 0%, #e8f5e8 100%)',
        border: '2px solid transparent',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)'
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(9, 180, 77, 0.15)'
        e.currentTarget.style.borderColor = '#09b44d'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor = 'transparent'
      }}
      onClick={onClick || (() => router.push(linkUrl))}
    >
      <div style={{
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '16px',
        width: 80, 
        height: 80, 
        background: 'linear-gradient(135deg, #09b44d 0%, #087a35 100%)',
        boxShadow: '0 8px 16px rgba(9, 180, 77, 0.3)'
      }}>
        <span style={{fontSize: '2rem'}} role="img" aria-label={title}>{icon}</span>
      </div>
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: '700',
        marginBottom: '16px',
        color: '#1a1a1a'
      }}>{title}</h3>
      <p style={{
        color: '#6c757d',
        marginBottom: '16px',
        lineHeight: '1.6'
      }}>{description}</p>
      <Link href={linkUrl} style={{
        display: 'inline-block',
        padding: '8px 16px',
        fontSize: '0.875rem',
        lineHeight: '1.5',
        borderRadius: '6px',
        textDecoration: 'none',
        cursor: 'pointer',
        color: '#198754',
        backgroundColor: 'transparent',
        border: '1px solid #198754',
        transition: 'all 0.15s ease-in-out'
      }}>
        {linkText}
      </Link>
    </div>
  )
}


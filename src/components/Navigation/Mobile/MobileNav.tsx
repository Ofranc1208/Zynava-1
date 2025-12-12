'use client'

import { useState } from 'react'
import Link from 'next/link'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      style={{
        padding: '1rem 2rem',
        borderBottom: '1px solid #e5e5e5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      className="mobile-nav"
    >
      <Link
        href="/"
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textDecoration: 'none',
        }}
      >
        ZYNAVA
      </Link>
      <button
        onClick={toggleMenu}
        style={{
          background: 'none',
          border: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer',
          padding: '0.5rem',
        }}
        aria-label="Toggle menu"
      >
        {isOpen ? '✕' : '☰'}
      </button>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'white',
            zIndex: 1000,
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2rem',
            }}
          >
            <Link
              href="/"
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                textDecoration: 'none',
              }}
            >
              ZYNAVA
            </Link>
            <button
              onClick={toggleMenu}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                padding: '0.5rem',
              }}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <Link
            href="/"
            onClick={toggleMenu}
            style={{
              fontSize: '1.25rem',
              textDecoration: 'none',
              color: '#333',
              padding: '0.5rem 0',
            }}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={toggleMenu}
            style={{
              fontSize: '1.25rem',
              textDecoration: 'none',
              color: '#333',
              padding: '0.5rem 0',
            }}
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            style={{
              fontSize: '1.25rem',
              textDecoration: 'none',
              color: '#333',
              padding: '0.5rem 0',
            }}
          >
            Contact
          </Link>
          <Link
            href="/faq"
            onClick={toggleMenu}
            style={{
              fontSize: '1.25rem',
              textDecoration: 'none',
              color: '#333',
              padding: '0.5rem 0',
            }}
          >
            FAQ
          </Link>
          <Link
            href="/products"
            onClick={toggleMenu}
            style={{
              fontSize: '1.25rem',
              textDecoration: 'none',
              color: '#333',
              padding: '0.5rem 0',
            }}
          >
            Shop
          </Link>
          <Link
            href="/cart"
            onClick={toggleMenu}
            style={{
              fontSize: '1.25rem',
              textDecoration: 'none',
              color: '#333',
              padding: '0.5rem 0',
            }}
          >
            Cart
          </Link>
        </div>
      )}
    </div>
  )
}


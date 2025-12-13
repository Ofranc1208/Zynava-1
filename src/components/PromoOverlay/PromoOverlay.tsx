'use client'

import { useState, useEffect } from 'react'
import styles from './PromoOverlay.module.css'

interface PromoOverlayProps {
  couponCode?: string
  discountText?: string
}

export default function PromoOverlay({ 
  couponCode = 'WELCOME10',
  discountText = 'Save 10% + Free Shipping'
}: PromoOverlayProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showCoupon, setShowCoupon] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPromo = sessionStorage.getItem('zynava_promo_seen')
    if (!hasSeenPromo) {
      const timer = setTimeout(() => setIsVisible(true), 3000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleYes = () => {
    setShowCoupon(true)
    // Mark promo as seen so advisor can start loading in background
    sessionStorage.setItem('zynava_promo_seen', 'true')
  }

  const handleClose = () => {
    setIsVisible(false)
    sessionStorage.setItem('zynava_promo_seen', 'true')
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(couponCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!isVisible) return null

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* Background Image - Clean and crisp */}
        <div className={styles.backgroundImage} />

        {/* Subtle gradient for text readability */}
        <div className={styles.gradientOverlay} />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className={styles.closeButton}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Content */}
        <div className={styles.content}>
          {/* Logo in transparent card */}
          <div className={styles.logoCard}>
            <div className={styles.logo}>
              ZYNAVA
            </div>
          </div>

          {!showCoupon ? (
            /* Initial State - Ask for Deal */
            <>
              <h2 className={`${styles.title} ${styles.animateIn} ${styles.animateDelay1}`}>
                Weekly Special
              </h2>

              <p className={`${styles.subtitle} ${styles.animateIn} ${styles.animateDelay1}`}>
                No signup required
              </p>

              <button
                onClick={handleYes}
                className={`${styles.yesButton} ${styles.animateIn} ${styles.animateDelay2}`}
              >
                YES, I WANT IT!
              </button>

              <button
                onClick={handleClose}
                className={`${styles.noButton} ${styles.animateIn} ${styles.animateDelay3}`}
              >
                No, thanks
              </button>
            </>
          ) : (
            /* Coupon Revealed State */
            <>
              <h2 className={`${styles.revealTitle} ${styles.animateIn}`}>
                Here&apos;s Your<br />Exclusive Code!
              </h2>

              <p className={`${styles.discountText} ${styles.animateIn} ${styles.animateDelay1}`}>
                {discountText}
              </p>

              {/* Coupon Code Box */}
              <div className={`${styles.couponBox} ${styles.animateIn} ${styles.animateDelay2}`}>
                <div className={styles.couponCode}>
                  {couponCode}
                </div>
              </div>

              <button
                onClick={handleCopyCode}
                className={`${styles.copyButton} ${copied ? styles.copyButtonCopied : ''} ${styles.animateIn} ${styles.animateDelay2}`}
              >
                {copied ? '✓ Copied!' : 'Copy Code'}
              </button>

              <button
                onClick={handleClose}
                className={`${styles.continueButton} ${styles.animateIn} ${styles.animateDelay3}`}
              >
                Continue Shopping
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

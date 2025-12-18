'use client'

import { useState, useEffect } from 'react'
import { PROMO_CONFIG } from '../../../constants'

/**
 * Custom hook for checking promo overlay status.
 * 
 * Delays the chat animation until the promo overlay is dismissed,
 * ensuring a smooth user experience without overlapping animations.
 * 
 * Features:
 * - Safe sessionStorage access with fallback
 * - Polling mechanism for promo dismissal
 * - Maximum poll limit to prevent infinite loops
 * - Fallback timeout for browser compatibility
 * 
 * @returns {boolean} Whether the animation can start
 */
export function usePromoCheck(): boolean {
  const [canStart, setCanStart] = useState(false)

  useEffect(() => {
    /**
     * Safely access sessionStorage with error handling.
     */
    const getSessionStorage = (key: string): string | null => {
      try {
        if (typeof window !== 'undefined' && window.sessionStorage) {
          return window.sessionStorage.getItem(key)
        }
      } catch (e) {
        // sessionStorage might be disabled or unavailable
        console.warn('sessionStorage not available:', e)
      }
      return null
    }

    /**
     * Check if promo has been seen/dismissed.
     */
    const checkPromoStatus = (): boolean => {
      const promoSeen = getSessionStorage(PROMO_CONFIG.STORAGE_KEY)
      if (promoSeen === 'true') {
        setCanStart(true)
        return true
      }
      return false
    }

    // Check immediately
    if (checkPromoStatus()) return

    // Fallback: Start animation after short delay if sessionStorage unavailable
    const fallbackTimer = setTimeout(() => {
      setCanStart(true)
    }, PROMO_CONFIG.FALLBACK_DELAY)

    // Check if promo is disabled (after delay to let page load)
    const initialCheck = setTimeout(() => {
      const promoSeen = getSessionStorage(PROMO_CONFIG.STORAGE_KEY)
      if (!promoSeen) {
        // Promo is likely disabled - start immediately
        clearTimeout(fallbackTimer)
        setCanStart(true)
        return
      }
    }, PROMO_CONFIG.INITIAL_CHECK_DELAY)

    // Poll for promo dismissal with max limit
    let pollCount = 0
    const interval = setInterval(() => {
      pollCount++
      if (checkPromoStatus() || pollCount >= PROMO_CONFIG.MAX_POLLS) {
        clearInterval(interval)
        clearTimeout(fallbackTimer)
        if (pollCount >= PROMO_CONFIG.MAX_POLLS) {
          setCanStart(true)
        }
      }
    }, PROMO_CONFIG.POLL_INTERVAL)

    return () => {
      clearTimeout(initialCheck)
      clearTimeout(fallbackTimer)
      clearInterval(interval)
    }
  }, [])

  return canStart
}

export default usePromoCheck


'use client'

import Link from 'next/link'
import styles from './ExploreButton.module.css'

interface ExploreButtonProps {
  href?: string
  text?: string
}

/**
 * ExploreButton - Reusable CTA button for homepage sections
 * Links to the Supplement Advisor by default
 */
export default function ExploreButton({ 
  href = '/supplement-advisor',
  text = 'Ready to explore'
}: ExploreButtonProps) {
  return (
    <Link href={href} className={styles.exploreButton}>
      <span>{text}</span>
      <span className={styles.arrow}>→</span>
    </Link>
  )
}


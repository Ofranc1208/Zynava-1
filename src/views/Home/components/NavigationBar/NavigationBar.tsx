'use client'

import Link from 'next/link'
import styles from './NavigationBar.module.css'

export default function NavigationBar() {
  return (
    <nav className={styles.navigationBar}>
      <div className={styles.container}>
        <Link 
          href="/products?filter=top-sellers"
          className={styles.navLink}
        >
          flash deals
        </Link>
        
        <Link 
          href="/products?filter=deals"
          className={styles.navLink}
        >
          top seller
        </Link>
        
        <Link 
          href="/products?filter=categories"
          className={styles.navLink}
        >
          bundle deals
        </Link>
      </div>
    </nav>
  )
}
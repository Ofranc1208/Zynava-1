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
          Top Sellers
        </Link>
        
        <Link 
          href="/products?filter=deals"
          className={styles.navLink}
        >
          Deals
        </Link>
        
        <Link 
          href="/products?filter=categories"
          className={styles.navLink}
        >
          Categories
        </Link>
      </div>
    </nav>
  )
}
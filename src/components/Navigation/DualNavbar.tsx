'use client'

import { DesktopNav } from './Desktop/DesktopNav'
import { MobileNav } from './Mobile/MobileNav'

export function DualNavbar() {
  return (
    <nav>
      <DesktopNav />
      <MobileNav />
    </nav>
  )
}


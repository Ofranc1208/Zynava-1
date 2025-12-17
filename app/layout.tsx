import type { Metadata, Viewport } from 'next'
import { DualNavbar } from '@/src/components/Navigation/DualNavbar'
import { Footer } from './components/Footer'
import { CookieConsent } from '@/src/components/CookieConsent/CookieConsent'
import { PromoOverlay } from '@/src/components/PromoOverlay'
import './globals.css'

export const metadata: Metadata = {
  title: 'ZYNAVA - Premium Supplement Brand',
  description: 'Premium wellness supplements',
  icons: {
    icon: '/assets/images/icons8-heart-health-50.png',
    shortcut: '/assets/images/icons8-heart-health-50.png',
    apple: '/assets/images/icons8-heart-health-50.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover', // Important for iOS safe area support
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <DualNavbar />
        {children}
        <Footer />
        <CookieConsent />
        {/* TESTING MODE: PromoOverlay temporarily disabled - see PromoOverlay/TESTING_MODE.md */}
        {/* <PromoOverlay 
          couponCode="WELCOME21" 
          discountText="Save 21% + Free Shipping"
        /> */}
      </body>
    </html>
  )
}


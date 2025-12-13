import type { Metadata } from 'next'
import { DualNavbar } from '@/src/components/Navigation/DualNavbar'
import { Footer } from './components/Footer'
import { PromoOverlay } from '@/src/components/PromoOverlay'
import './globals.css'

export const metadata: Metadata = {
  title: 'ZYNAVA - Premium Supplement Brand',
  description: 'Premium wellness supplements',
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
        <PromoOverlay 
          couponCode="WELCOME21" 
          discountText="Save 21% + Free Shipping"
        />
      </body>
    </html>
  )
}


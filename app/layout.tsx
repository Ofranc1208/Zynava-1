import type { Metadata } from 'next'
import { DualNavbar } from '@/src/components/Navigation/DualNavbar'
import { Footer } from './components/Footer'
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
      </body>
    </html>
  )
}


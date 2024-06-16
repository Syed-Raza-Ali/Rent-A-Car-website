import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './header'
import Footer from './footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rent a car',
  description: 'Creater by Syed Raza Ali',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

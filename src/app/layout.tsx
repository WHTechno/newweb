import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import GalaxyBackground from '@/components/GalaxyBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChainView - Blockchain Validator Dashboard',
  description: 'Monitor your blockchain PoS validator nodes, view network performance and stay updated with real-time node statistics.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <GalaxyBackground />
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 relative z-10">
            {children}
          </main>
          <footer className="border-t border-border bg-card/50 backdrop-blur py-6 relative z-10">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
              © 2024 ChainView. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

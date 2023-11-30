import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { NavbarComponent } from '@/components/Navbar'
import { MenuComponent } from '@/components/Menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-text dark:bg-darkbase dark:text-background`}>
        <Providers>
          <div className="grid grid-cols-12">
            <header className="col-span-12">
              <NavbarComponent />
            </header>
            <MenuComponent />
            {children}
          </div>
        </Providers>
      </body>
    </html >
  )
}

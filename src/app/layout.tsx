import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/Components/Header'
import { cn } from '@/lib/Utils'
import "slick-carousel/slick/slick.css";
import Footer from '@/Components/Footer'

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
      <body className={cn("main-h-screen font-sans antialiased bgDesign",inter.className)}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}

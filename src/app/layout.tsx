import './globals.css'
import type { Metadata } from 'next'
//import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Google Clone',
  description: 'Created by Rahul kapri',
  
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}

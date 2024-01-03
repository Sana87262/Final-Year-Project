import type { Metadata } from 'next'

import './globals.css'
import { relative } from 'path'
import { Navbar } from '../../components'






export const metadata: Metadata = {
  title: 'SmartConnect',
  description: 'Blockchain Social Media Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        {/* <Navbar/> */}
        {children}</body>
    </html>
  )
}

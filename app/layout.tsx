import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Elliot Liu',
  description: 'A portfolio website for Elliot Liu',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

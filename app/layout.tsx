import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png"/>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
        </ ThemeProvider>
      </body>
    </html>
  )
}

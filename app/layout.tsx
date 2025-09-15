import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { trixieCyr } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/bg/final/bg-1920x1080.png" />
        <style data-critical>
          {`
            body {
              background-image: url('/bg/final/bg-1920x1080.png');
              background-repeat: no-repeat;
              background-position: center;
              background-size: cover;
            }
          `}
        </style>
      </head>
      <body className={`${trixieCyr.variable} ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

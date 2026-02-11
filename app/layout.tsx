import type { Metadata } from 'next'
import './globals.css'
import { LayoutShell } from '@/components/LayoutShell'

export const metadata: Metadata = {
  title: 'Prinz Oil | Premium Energy Solutions',
  description: 'A Premium Nigerian Oil & Energy Company. Exploration, Distribution, Refining.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-satoshi">
        <LayoutShell>
          {children}
        </LayoutShell>
      </body>
    </html>
  )
}

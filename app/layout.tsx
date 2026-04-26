import type { Metadata } from 'next'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/globals.css'
import '../lib/fontawesome'

export const metadata: Metadata = {
  title: 'Nik Korablin',
  description: 'I am a full-stack Javascript engineer working remotely from Lancaster, PA',
  icons: {
    icon: '/favicon.svg',
  },
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

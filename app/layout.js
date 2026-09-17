import './globals.css'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: 'OCHI – Presentation Design Agency',
  description: 'We create eye-opening presentations for forward-thinking businesses.',
  openGraph: {
    title: 'OCHI – Presentation Design Agency',
    description: 'We create eye-opening presentations for forward-thinking businesses.',
    type: 'website',
    url: '/',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

import './globals.css'

export const metadata = {
  title: 'OCHI - Presentation Design Agency',
  description: 'We create eye-opening presentations for forward-thinking businesses',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

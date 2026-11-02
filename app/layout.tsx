import { Header, Footer } from '@/components/shared'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bir Purkha Multipurpose Pvt. Ltd. | Highway Passenger Transit Nepal',
  description:
    'Official website of Bir Purkha Multipurpose Pvt. Ltd. (वीर पुर्खा यातायात), based in Hetauda, Nepal. Premier passenger microbus and coach services across Nepal.',
  icons: {
    icon: [
      { url: '/logo.jpg' },
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png',  media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f5f8' },
    { media: '(prefers-color-scheme: dark)',  color: '#080c14' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

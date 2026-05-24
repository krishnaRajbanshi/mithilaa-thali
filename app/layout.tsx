import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mithila Thali Biratnagar | Authentic Mithila Cuisine',
  description: 'Experience the authentic taste of Mithila at Mithila Thali Biratnagar. Traditional Nepali cuisine, family-friendly atmosphere, and cultural dining experience in Biratnagar.',
  keywords: ['Mithila Thali', 'Biratnagar', 'Nepali food', 'Traditional cuisine', 'Mithila food', 'Restaurant'],
  authors: [{ name: 'Mithila Thali Biratnagar' }],
  openGraph: {
    title: 'Mithila Thali Biratnagar | Authentic Mithila Cuisine',
    description: 'Experience the authentic taste of Mithila at our traditional restaurant in Biratnagar.',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#8B4513' },
    { media: '(prefers-color-scheme: dark)', color: '#2D1810' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

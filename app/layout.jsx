import { Inter } from 'next/font/google'
import './globals.css'

// Configuration de la police Inter (alternative à SF Pro Display)
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'BDE EFET 2025 — Une équipe, une vision, une famille 💙',
  description: 'Le Bureau des Étudiants de l\'EFET 2025-2026 incarne l\'énergie, la créativité et l\'unité du campus de Casablanca.',
  keywords: 'BDE, EFET, Casablanca, étudiants, bureau des étudiants, 2025',
  authors: [{ name: 'Hatim L.', role: 'Vice-Président & Développeur' }],
  openGraph: {
    title: 'BDE EFET 2025',
    description: 'Une équipe, une vision, une famille 💙',
    type: 'website',
    locale: 'fr_FR',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* Police SF Pro Display depuis CDN */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap"
        />
      </head>
      <body className={`${inter.className} antialiased bg-white text-efet-black overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}

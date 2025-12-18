import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import FrozenPage from './components/FrozenPage'

// Configuration de la police Inter
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'BDE EFET 2025 - Terminée',
  description: 'Le BDE a été remporté. À l\'année prochaine !',
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap"
        />
      </head>
      <body className={inter.className}>
        <FrozenPage />
      </body>
    </html>
  )
}

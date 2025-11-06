'use client'

import { motion } from 'framer-motion'
import { ArrowUp, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

/**
 * Footer - Design premium et professionnel
 * Style épuré avec navigation et informations de contact
 */
export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Bouton "Back to top" minimaliste */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-efet-blue text-white p-4 hover:bg-efet-dark transition-all duration-300"
          aria-label="Retour en haut"
        >
          <ArrowUp className="w-5 h-5" strokeWidth={1.5} />
        </motion.button>
      )}

      {/* Footer principal */}
      <footer className="relative bg-efet-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Section BDE EFET */}
            <div>
              <h3 className="text-xl font-bold mb-6 tracking-tight">
                BDE EFET 2025
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Bureau des Étudiants de l'EFET Casablanca - Une équipe passionnée au service des étudiants
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/efet_bde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-efet-blue hover:text-efet-blue transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="mailto:bde@efet.ma"
                  className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-efet-blue hover:text-efet-blue transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">
                Navigation
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/#home" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/#team" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Équipe
                  </Link>
                </li>
                <li>
                  <Link href="/#program" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Programme
                  </Link>
                </li>
                <li>
                  <Link href="/#values" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Valeurs
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Événements */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">
                Événements 2025
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/events/fete-fin-annee" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Fête de fin d'année
                  </Link>
                </li>
                <li>
                  <Link href="/events/marche-efet" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Marché de l'EFET
                  </Link>
                </li>
                <li>
                  <Link href="/events/don-du-sang" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Don du Sang
                  </Link>
                </li>
                <li>
                  <Link href="/events/sortie-barbecue" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Sortie Barbecue
                  </Link>
                </li>
                <li>
                  <Link href="/events/8-mars" className="text-gray-400 hover:text-white transition-colors text-sm">
                    8 Mars
                  </Link>
                </li>
                <li>
                  <Link href="/events/voyage-etudiant" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Voyage Étudiant
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>EFET Casablanca, Maroc</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <a href="mailto:bde@efet.ma" className="hover:text-white transition-colors">
                    bde@efet.ma
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <Instagram className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <a
                    href="https://instagram.com/efet_bde"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    @efet_bde
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Séparateur */}
          <div className="w-full h-px bg-gray-800 my-12"></div>

          {/* Bas de page */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm mb-2">
                © 2025 BDE EFET Casablanca — Tous droits réservés
              </p>
              <p className="text-gray-600 text-xs">
                Conçu par <span className="text-gray-400 font-medium">Lamarti Hatim.</span> — Vice-Président & Développeur Web
              </p>
            </div>
            <div>
             
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

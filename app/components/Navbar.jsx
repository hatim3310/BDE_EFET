'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

/**
 * Navbar - Navigation premium minimaliste
 * Avec logo EFET et menu responsive
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation items
  const navItems = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Équipe', href: '#team' },
    { label: 'Programme', href: '#program' },
    { label: 'Valeurs', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ]

  // Fonction de scroll fluide
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection('#hero')}
            >
              {/* Placeholder pour le logo - dimensions recommandées */}
              <div className="relative w-12 h-12 flex items-center justify-center bg-efet-blue/10 rounded-lg overflow-hidden">
                {/* Le logo sera placé ici */}
                <Image
                  src="/logo.svg"
                  alt="BDE EFET Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  onError={(e) => {
                    // Fallback si le logo n'existe pas encore
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = '<span class="text-efet-blue font-bold text-xl">BDE</span>'
                  }}
                />
              </div>

              {/* Texte à côté du logo */}
              <div className="hidden sm:block">
                <div className="text-sm font-bold text-efet-black tracking-tight">
                  BDE EFET
                </div>
                <div className="text-xs text-gray-500">2025</div>
              </div>
            </motion.div>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-efet-blue transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-efet-blue group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}

              {/* CTA Button */}
              <button
                onClick={() => scrollToSection('#contact')}
                className="ml-4 px-6 py-2 bg-efet-blue text-white text-sm font-medium hover:bg-efet-dark transition-all duration-300"
              >
                Nous Contacter
              </button>
            </div>

            {/* Menu Mobile - Burger Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-efet-blue transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Menu Mobile - Fullscreen Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-40 bg-white md:hidden"
        >
          {/* Spacer pour la navbar */}
          <div className="h-20"></div>

          {/* Menu Items */}
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] gap-6 px-6">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="text-3xl font-bold text-efet-black hover:text-efet-blue transition-colors"
              >
                {item.label}
              </motion.button>
            ))}

            {/* CTA Mobile */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
              onClick={() => scrollToSection('#contact')}
              className="mt-8 px-10 py-4 bg-efet-blue text-white text-lg font-medium hover:bg-efet-dark transition-all duration-300"
            >
              Nous Contacter
            </motion.button>
          </div>
        </motion.div>
      )}
    </>
  )
}

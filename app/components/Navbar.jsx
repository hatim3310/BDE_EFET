'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

/**
 * Navbar - Navigation Ultra Premium (Dark Mode)
 */
export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    setScrolled(latest > 50)
  })

  const navItems = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Équipe', href: '#team' },
    { label: 'Programme', href: '#program' },
    { label: 'Valeurs', href: '#gallery' },
    { label: 'Souvenirs', href: '#events-gallery' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 inset-x-0 z-50 h-20 flex items-center justify-center pointer-events-none`}
      >
        <div className={`w-full max-w-7xl px-6 flex items-center justify-between pointer-events-auto transition-all duration-500 ${scrolled ? 'mt-4' : 'mt-0'}`}>

          {/* Logo Area */}
          <div className={`
             flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-500
             ${scrolled ? 'glass' : 'bg-transparent'}
          `}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('#hero')}
              className="cursor-pointer flex items-center gap-3"
            >
              {/* Logo sans altération de couleurs */}
              <div className="relative w-10 h-10 flex items-center justify-center rounded-full overflow-hidden">
                <Image src="/logo.svg" alt="BDE" width={32} height={32} className="object-contain" />
              </div>
              <span className={`font-outfit font-bold text-lg tracking-tight ${scrolled ? 'text-white' : 'text-white'}`}>
                BDE EFET
              </span>
            </motion.div>
          </div>

          {/* Desktop Menu - Floating Capsule (Dark Mode) */}
          <div className="hidden lg:block">
            <div className={`
              flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500
              ${scrolled ? 'glass' : 'bg-black/30 backdrop-blur-md border border-white/10'}
            `}>
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="relative px-5 py-2.5 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100"
                    layoutId="navbar-hover"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                </button>
              ))}

              <div className="w-px h-6 bg-white/10 mx-2"></div>

              <button
                onClick={() => scrollToSection('#contact')}
                className="px-6 py-2.5 bg-efet-blue text-white text-sm font-medium rounded-full hover:bg-efet-dark transition-colors shadow-lg shadow-efet-blue/20"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden pointer-events-auto">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-3 rounded-full ${scrolled ? 'glass' : 'bg-black/30 backdrop-blur-md'}`}
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>

        </div>
      </motion.nav>

      {/* Mobile Menu Overlay (Dark Mode) */}
      <motion.div
        initial={{ opacity: 0, pointerEvents: 'none' }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none'
        }}
        className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl"
      >
        <div className="absolute top-6 right-6">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 bg-white/10 rounded-full hover:rotate-90 transition-transform duration-300 border border-white/10"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : 20 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              onClick={() => scrollToSection(item.href)}
              className="text-4xl font-outfit font-bold text-white hover:text-efet-blue transition-colors"
            >
              {item.label}
            </motion.button>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: mobileMenuOpen ? 1 : 0, scale: mobileMenuOpen ? 1 : 0.9 }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={() => scrollToSection('#contact')}
              className="mt-8 px-10 py-4 bg-efet-blue text-white rounded-full text-xl font-medium shadow-xl shadow-efet-blue/30"
            >
              Nous Rejoindre
            </button>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

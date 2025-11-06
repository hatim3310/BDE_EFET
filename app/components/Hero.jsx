'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

/**
 * Hero Section - Landing premium avec image
 * Design épuré et professionnel avec couleur EFET
 */
export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20"
    >
      {/* Effet de fond subtil avec teinte bleue */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(10,108,240,0.03)_1px,_transparent_1px)] bg-[length:24px_24px] opacity-60"></div>

      {/* Contenu principal - Grid Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche - Texte */}
          <div className="text-center lg:text-left">
            {/* Badge avec couleur EFET */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-8"
            >
              <div className="inline-block border border-efet-blue/30 px-6 py-2.5">
                <span className="text-xs uppercase tracking-[0.2em] text-efet-blue font-medium">
                  Bureau des Étudiants 2025-2026
                </span>
              </div>
            </motion.div>

            {/* Titre principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-12"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-efet-black mb-8 tracking-tighter leading-none">
                BDE EFET
              </h1>
              <div className="w-20 h-0.5 bg-efet-blue mx-auto lg:mx-0 mb-8"></div>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-light tracking-tight">
                Une équipe, une vision, une famille
              </h2>
            </motion.div>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-base md:text-lg text-gray-600 mb-12 leading-relaxed font-light"
            >
              Le Bureau des Étudiants de l'EFET 2025-2026 incarne l'énergie,
              la créativité et l'unité du campus
            </motion.p>

            {/* Boutons CTA avec couleur EFET */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection('program')}
                className="group px-10 py-4 bg-efet-blue text-white text-sm font-medium tracking-wide uppercase hover:bg-efet-dark transition-all duration-300"
              >
                Découvrir le programme
              </button>

              <button
                onClick={() => scrollToSection('team')}
                className="group px-10 py-4 border border-efet-blue text-efet-blue text-sm font-medium tracking-wide uppercase hover:bg-efet-blue hover:text-white transition-all duration-300"
              >
                Notre équipe
              </button>
            </motion.div>
          </div>

          {/* Colonne droite - Image Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            {/* Container avec aspect ratio */}
            <div className="relative aspect-square lg:aspect-[4/5] w-full max-w-lg mx-auto">
              {/* Image principale */}
              <div className="absolute inset-0 bg-gradient-to-br from-efet-blue/10 to-efet-dark/10 rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero-images.jpg"
                  alt="BDE EFET 2025"
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    // Fallback si l'image n'existe pas
                    e.target.style.display = 'none'
                  }}
                />

                {/* Overlay avec effet */}
                <div className="absolute inset-0 bg-gradient-to-t from-efet-blue/20 via-transparent to-transparent"></div>
              </div>

              {/* Badge flottant */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-6 -right-6 bg-white px-8 py-4 shadow-premium border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-efet-blue">10</div>
                  <div className="text-xs uppercase tracking-wider text-gray-600 mt-1">
                    Membres
                  </div>
                </div>
              </motion.div>

              {/* Badge flottant 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -top-6 -left-6 bg-efet-blue px-8 py-4 shadow-premium"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">6</div>
                  <div className="text-xs uppercase tracking-wider text-white/90 mt-1">
                    Événements
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Indicateur de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Défiler</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ArrowDown className="w-5 h-5 text-efet-blue" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </div>

      {/* Lignes verticales décoratives avec teinte bleue */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-efet-blue/20 to-transparent hidden xl:block"></div>
      <div className="absolute right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-efet-blue/20 to-transparent hidden xl:block"></div>
    </section>
  )
}

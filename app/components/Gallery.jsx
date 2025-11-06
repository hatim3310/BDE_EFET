'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * Gallery Section - Design minimaliste et professionnel
 * Focus sur l'élégance et la simplicité
 */
export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Valeurs et missions du BDE
  const values = [
    {
      title: 'Excellence',
      description: 'Viser l\'excellence dans chaque initiative et projet que nous entreprenons',
    },
    {
      title: 'Unité',
      description: 'Renforcer les liens entre étudiants et créer une communauté soudée',
    },
    {
      title: 'Innovation',
      description: 'Proposer des événements créatifs et des expériences uniques',
    },
    {
      title: 'Engagement',
      description: 'Être à l\'écoute et répondre aux besoins de tous les étudiants',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <section id="gallery" className="relative bg-white py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-efet-black mb-6 tracking-tight">
            Nos Valeurs
          </h2>
          <div className="w-16 h-0.5 bg-efet-blue mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Les principes qui guident nos actions et définissent notre mission
          </p>
        </motion.div>

        {/* Grille des valeurs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="border border-gray-200 p-10 h-full hover:border-efet-blue transition-all duration-500">
                <div className="mb-6">
                  <div className="text-6xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors duration-500">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-efet-black mb-4 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Citation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="border-l-2 border-efet-blue pl-8 py-6">
            <blockquote className="text-2xl md:text-3xl font-light text-efet-black mb-6 text-left italic">
              "Ensemble, nous créons plus que des événements.
              Nous bâtissons une communauté, une famille, un héritage."
            </blockquote>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 text-left">
              Bureau des Étudiants EFET 2025
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

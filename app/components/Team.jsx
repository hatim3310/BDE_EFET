'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * Team Section - Design Premium Minimaliste
 * Style épuré et professionnel inspiré d'Apple et BMW
 */
export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Données de l'équipe avec design minimaliste
  const teamMembers = [
    {
      name: 'Douaa',
      role: 'Présidente',
      subRoles: ['Trésorière', 'Comité Associatif'],
      image: '/images/team/douaa.jpg',
      fallback: 'https://ui-avatars.com/api/?name=Douaa&size=600&background=1C1C1E&color=fff&bold=true&font-size=0.35',
    },
    {
      name: 'Lamarti Hatim',
      role: 'Vice-Président',
      subRoles: ['Développeur Web'],
      image: '/images/team/hatim.png',
      fallback: 'https://ui-avatars.com/api/?name=Hatim+L&size=600&background=1C1C1E&color=fff&bold=true&font-size=0.35',
    },
    {
      name: 'El Khadiri Marwa',
      role: 'Secrétaire Générale',
      subRoles: [],
      image: '/images/team/marwa.png',
      fallback: 'https://ui-avatars.com/api/?name=Marwa&size=600&background=1C1C1E&color=fff&bold=true&font-size=0.35',
    },
    {
      name: 'Marjane Abdessamia',
      role: 'Trésorière',
      subRoles: ['Support IT'],
      image: '/images/team/marjane.png',
      fallback: 'https://ui-avatars.com/api/?name=Marjane&size=600&background=1C1C1E&color=fff&bold=true&font-size=0.35',
    },
    {
      name: 'Nassiri Fatim Zahra',
      role: 'Comité Associatif',
      subRoles: [],
      image: '/images/team/fati.png',
      fallback: 'https://ui-avatars.com/api/?name=Fati&size=600&background=1C1C1E&color=fff&bold=true&font-size=0.35',
    },
    {
      name: 'El Bouzary Imane',
      role: 'Comité Événementiel',
      subRoles: ['Communication'],
      image: '/images/team/imane.png',
      fallback: 'https://ui-avatars.com/api/?name=Imane&size=600&background=1C1C1E&color=fff&bold=true&font-size=0.35',
    },
    {
      name: 'Yassine',
      role: 'Comité Événementiel',
      subRoles: ['Media'],
      image: '/images/team/yassine.png',
      fallback: 'https://ui-avatars.com/api/?name=Yassine&size=600&background=1C1C1E&color=fff&bold=true&font-size=0.35',
    },
    {
      name: 'Ikram',
      role: 'Comité Événementiel',
      subRoles: [],
      image: '/images/team/ikram.png',
      fallback: 'https://ui-avatars.com/api/?name=Ikram&size=600&background=1C1C1E&color=fff&bold=true&font-size=0.35',
    },
    {
      name: 'Agarraijou Mohammed',
      role: 'Comité Sportife',
      subRoles: [],
      image: '/images/team/simo.png',
      fallback: 'https://ui-avatars.com/api/?name=Simo&size=600&background=1C1C1E&color=fff&bold=true&font-size=0.35',
    },
    {
      name: 'Mouradi Amira',
      role: 'Comité Communication',
      subRoles: [''],
      image: '/images/team/amira.png',
      fallback: 'https://ui-avatars.com/api/?name=Amira&size=600&background=1C1C1E&color=fff&bold=true&font-size=0.35',
    },
  ]

  // Variantes d'animation subtiles
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const cardVariants = {
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
    <section id="team" className="relative bg-white py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* En-tête minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-efet-black mb-6 tracking-tight">
            Notre Équipe
          </h2>
          <div className="w-16 h-0.5 bg-efet-blue mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Une équipe passionnée et dévouée à votre réussite
          </p>
        </motion.div>

        {/* Grille premium minimaliste */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group"
            >
              <div className="relative overflow-hidden bg-white">
                {/* Image avec aspect ratio fixe */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 mb-6">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    onError={(e) => {
                      e.target.src = member.fallback
                    }}
                  />

                  {/* Overlay subtil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Informations épurées */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-efet-black tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium uppercase tracking-wider">
                    {member.role}
                  </p>

                  {/* Sous-rôles minimalistes */}
                  {member.subRoles.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {member.subRoles.map((subRole, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-gray-500 border-b border-gray-300 pb-0.5"
                        >
                          {subRole}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

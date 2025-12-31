'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { Calendar, MapPin, Users, Ticket, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useRef } from 'react'
import Link from 'next/link'

/**
 * Program Section - Timeline Evolution (Dark Mode)
 */
export default function Program() {
  const containerRef = useRef(null)

  const events = [
    {
      title: 'Halloween Party',
      date: '31 Octobre 2024',
      month: 'OCT',
      day: '31',
      location: 'Campus EFET',
      capacity: 'Tous les étudiants',
      price: 'Gratuit',
      isPaid: false,
      isPast: true,
      description: 'Une après-midi mémorable avec buffet gourmand, photo booth, jeux et le fameux "Djaje Mhamare".',
      tags: ['Soirée', 'Buffet', 'Musique']
    },
    {
      title: 'Fête de fin d\'année',
      date: 'Décembre 2024',
      month: 'DEC',
      day: '15',
      location: 'À déterminer',
      capacity: '200+ étudiants',
      price: 'Gratuit',
      isPaid: false,
      isPast: true,
      description: 'Célébration des réussites de l\'année. Musique, tournoi de billard et remise des prix.',
      tags: ['Célébration', 'DJ', 'Awards']
    },
    {
      title: 'Marché de l\'EFET',
      date: 'Mars 2025',
      month: 'MAR',
      day: '05',
      location: 'Campus EFET',
      capacity: '50+ stands',
      price: 'Gratuit',
      isPaid: false,
      isPast: false,
      description: 'Un marché étudiant vibrant pour les créateurs et artisans. Venez exposer vos talents !',
      tags: ['Entrepreneuriat', 'Artisanat', 'Vente']
    },
    {
      title: 'Don du Sang',
      date: 'Avril 2025',
      month: 'AVR',
      day: '12',
      location: 'Campus EFET',
      capacity: 'Illimité',
      price: 'Gratuit',
      isPaid: false,
      isPast: false,
      description: 'Action solidaire en partenariat avec le Centre de Transfusion Sanguine. Sauvons des vies ensemble.',
      tags: ['Solidarité', 'Santé', 'Civisme']
    },
    {
      title: 'Sortie Barbecue',
      date: 'Mai 2025',
      month: 'MAI',
      day: '20',
      location: 'Extérieur Casa',
      capacity: '100 Places',
      price: 'Payant',
      isPaid: true,
      isPast: false,
      description: 'Détente en plein air, bonne viande et ambiance conviviale avant les examens.',
      tags: ['Fun', 'Food', 'Nature']
    },
    {
      title: 'Voyage Étudiant',
      date: 'Juin 2025',
      month: 'JUIN',
      day: '10',
      location: 'Surprise',
      capacity: 'Limité',
      price: 'Payant',
      isPaid: true,
      isPast: false,
      description: 'L\'aventure ultime inter-campus (Casablanca, Fès, Marrakech). 3 jours inoubliables.',
      tags: ['Voyage', 'Aventure', 'Inter-campus']
    },
  ]

  return (
    <section id="program" ref={containerRef} className="relative py-32 bg-[#050505] overflow-hidden text-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

      <div className="container-premium relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-3 rounded-full bg-efet-blue/10 text-efet-blue text-sm font-semibold tracking-wide mb-4 border border-efet-blue/20"
          >
            AGENDA 2024-2025
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-outfit font-bold text-4xl md:text-7xl text-white mb-6"
          >
            Une Année <span className="text-transparent bg-clip-text bg-gradient-to-r from-efet-blue to-cyan-400">Mémorable</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 font-light"
          >
            Chaque mois, une nouvelle occasion de créer des liens et des souvenirs.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-800 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`flex flex-col md:flex-row gap-8 md:gap-0 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Side */}
                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                  <div className={`group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-efet-blue/40 transition-all duration-500 hover:shadow-2xl hover:shadow-efet-blue/10 ${event.isPast ? 'opacity-50 grayscale-[0.8]' : ''}`}>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-efet-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

                    {/* Date Badge Mobile */}
                    <div className="md:hidden absolute -left-9 top-8 flex flex-col items-center justify-center w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 shadow-sm z-10">
                      <div className={`w-3 h-3 rounded-full ${event.isPast ? 'bg-gray-600' : 'bg-efet-blue animate-pulse'}`}></div>
                    </div>

                    {/* Status Badge */}
                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <div className="space-y-1">
                        <h3 className="font-outfit font-bold text-2xl text-white group-hover:text-efet-blue transition-colors">
                          {event.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar size={14} className="text-efet-blue" />
                          <span>{event.date}</span>
                        </div>
                      </div>
                      {event.isPast ? (
                        <span className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-xs font-bold rounded-full uppercase">Terminé</span>
                      ) : (
                        <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase border ${event.isPaid ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' : 'bg-green-500/10 border-green-500/20 text-green-400'}`}>
                          {event.isPaid ? 'Payant' : 'Gratuit'}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-400 mb-6 font-light leading-relaxed relative z-10">
                      {event.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                      {event.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-md border border-white/5">#{tag}</span>
                      ))}
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-white/10 relative z-10">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <MapPin size={16} className="text-efet-blue" />
                        <span className="truncate">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Users size={16} className="text-efet-blue" />
                        <span>{event.capacity}</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Center Point */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-black bg-zinc-900 items-center justify-center shadow-sm z-10">
                  <div className={`w-3 h-3 rounded-full ${event.isPast ? 'bg-gray-600' : 'bg-efet-blue shadow-[0_0_15px_rgba(10,108,240,0.8)]'}`}></div>
                </div>

                {/* Empty Side */}
                <div className="w-full md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

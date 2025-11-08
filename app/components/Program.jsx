'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Users, DollarSign, Clock } from 'lucide-react'
import Link from 'next/link'

/**
 * Program Section - Cartes détaillées des événements 2025
 * Design premium avec informations complètes et prix réels
 */
export default function Program() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Données détaillées et mises à jour des événements
  const events = [
    {
      title: 'Fête de fin d\'année',
      date: 'Décembre 2025',
      location: 'À déterminer',
      capacity: '200+ étudiants',
      price: 'Gratuit',
      isPaid: false,
      description: 'Une soirée mémorable pour célébrer les réussites de l\'année et renforcer les liens entre étudiants. Au programme : musique, animations, tournoi de billard et moments de convivialité.',
      highlights: [
        'Tournoi de billard exclusif',
        'DJ et musique live',
        'Buffet et rafraîchissements',
        'Remise des prix et distinctions'
      ],
      link: '/events/fete-fin-annee',
    },
    {
      title: 'Marché de l\'EFET',
      date: 'Mars 2025',
      location: 'Campus EFET',
      capacity: '50+ stands',
      price: 'Gratuit',
      isPaid: false,
      description: 'Un marché étudiant vibrant ouvert aux petits artisans locaux et surtout aux étudiants ! Vendez vos créations, produits artisanaux et services. Les étudiants sont prioritaires pour participer.',
      highlights: [
        'Priorité aux étudiants exposants',
        'Ouvert aux artisans locaux',
        'Vente de produits fait-main',
        'Networking et découvertes'
      ],
      link: '/events/marche-efet',
    },
    {
      title: 'Don du Sang',
      date: 'Avril 2025',
      location: 'Campus EFET',
      capacity: 'Illimité',
      price: 'Gratuit',
      isPaid: false,
      description: 'Une action solidaire et citoyenne pour sauver des vies. En partenariat avec le Centre de Transfusion Sanguine, participez à ce geste qui peut tout changer.',
      highlights: [
        'Encadrement médical professionnel',
        'Collation offerte aux donneurs',
        'Certificat de participation',
        'Contribution à sauver des vies'
      ],
      link: '/events/don-du-sang',
    },
    {
      title: 'Sortie Barbecue',
      date: 'Mai 2025',
      location: 'Extérieur Casablanca',
      capacity: '100 étudiants',
      price: 'Payant',
      isPaid: true,
      description: 'Une journée 100% étudiants ! Moment de détente et de convivialité en plein air entre camarades. Profitez d\'une journée ensoleillée autour d\'un délicieux barbecue.',
      highlights: [
        'Sortie exclusivement entre étudiants',
        'Repas barbecue complet',
        'Transport aller-retour inclus',
        'Activités de groupe et jeux'
      ],
      link: '/events/sortie-barbecue',
    },
    {
      title: '8 Mars – Journée de la Femme',
      date: '8 Mars 2025',
      location: 'Campus EFET',
      capacity: 'Toutes les femmes de l\'établissement',
      price: 'Gratuit',
      isPaid: false,
      description: 'Célébration dédiée à toutes les femmes de notre établissement : étudiantes, enseignantes et personnel. Une journée spéciale avec des cadeaux et moments de reconnaissance.',
      highlights: [
        'Cadeaux pour toutes les femmes',
        'Étudiantes, enseignantes et personnel',
        'Ateliers et discussions',
        'Moments de partage et convivialité'
      ],
      link: '/events/8-mars',
    },
    {
      title: 'Voyage Étudiant',
      date: 'Juin 2025',
      location: 'Destination à annoncer',
      capacity: 'Collaboration EFET Casa + Fès + Marrakech',
      price: 'Payant',
      isPaid: true,
      description: 'Une aventure exceptionnelle en collaboration avec tous les campus EFET du Maroc (Casablanca, Fès, Marrakech) ! Une opportunité unique de rencontrer des étudiants de tout le groupe EFET et créer des souvenirs inoubliables.',
      highlights: [
        'Collaboration inter-campus EFET',
        'Prix à confirmer',
        'Transport et hébergement inclus',
        '3 jours / 2 nuits d\'aventure'
      ],
      link: '/events/voyage-etudiant',
    },
  ]

  // Variantes d'animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
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
    <section id="program" className="relative bg-gray-50 py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-efet-black mb-6 tracking-tight">
            Programme 2025
          </h2>
          <div className="w-16 h-0.5 bg-efet-blue mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Une année remplie d'événements exceptionnels et de moments inoubliables
          </p>
        </motion.div>

        {/* Grille d'événements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white p-8 lg:p-10 h-full flex flex-col border border-gray-200 hover:border-efet-blue transition-all duration-500">
                {/* En-tête de la carte */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-efet-black tracking-tight pr-4">
                      {event.title}
                    </h3>
                    <div className={`px-4 py-1.5 text-xs font-semibold tracking-wide uppercase whitespace-nowrap ${
                      event.isPaid
                        ? 'bg-efet-blue text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {event.isPaid ? 'Payant' : 'Gratuit'}
                    </div>
                  </div>

                  {/* Informations clés */}
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 flex-shrink-0 text-efet-blue" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 flex-shrink-0 text-efet-blue" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-4 h-4 flex-shrink-0 text-efet-blue" />
                      <span>{event.capacity}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <DollarSign className="w-4 h-4 flex-shrink-0 text-efet-blue" />
                      <span className="font-semibold text-efet-blue">{event.price}</span>
                    </div>
                  </div>
                </div>

                {/* Ligne de séparation */}
                <div className="w-full h-px bg-gray-200 mb-6"></div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 font-light">
                  {event.description}
                </p>

                {/* Points forts */}
                <div className="mt-auto">
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">
                    Points forts
                  </p>
                  <ul className="space-y-2">
                    {event.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1 h-1 bg-efet-blue rounded-full mt-2 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA avec couleur EFET */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link
                    href={event.link}
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-efet-blue text-white text-sm font-medium hover:bg-efet-dark transition-all duration-300 group"
                  >
                    Plus d'informations
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note importante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white border border-efet-blue/20 p-8 max-w-3xl mx-auto">
            <Clock className="w-8 h-8 mx-auto mb-4 text-efet-blue" />
            <p className="text-sm text-gray-600 leading-relaxed">
              Les dates et détails des événements peuvent être sujets à modification.
              Suivez-nous sur Instagram <span className="font-semibold text-efet-blue">@efet_bde</span> pour
              rester informé des dernières mises à jour et inscriptions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, MapPin, Users, DollarSign, Trophy, Music, Utensils } from 'lucide-react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function FeteFinAnnee() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-50 to-pink-50 py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Link href="/#program" className="inline-flex items-center gap-2 text-efet-blue hover:text-efet-dark mb-8 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Retour au programme
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-efet-black mb-6">
                Fête de fin d'année 🎊
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Une soirée mémorable pour célébrer ensemble les réussites de l'année et renforcer les liens entre étudiants
              </p>
            </motion.div>
          </div>
        </section>

        {/* Informations principales */}
        <section className="py-16 bg-white border-b">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center p-6 border border-gray-200">
                <Calendar className="w-8 h-8 text-efet-blue mx-auto mb-4" />
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Date</div>
                <div className="text-xl font-bold">Décembre 2025</div>
              </div>
              <div className="text-center p-6 border border-gray-200">
                <MapPin className="w-8 h-8 text-efet-blue mx-auto mb-4" />
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Lieu</div>
                <div className="text-xl font-bold">À déterminer</div>
              </div>
              <div className="text-center p-6 border border-gray-200">
                <Users className="w-8 h-8 text-efet-blue mx-auto mb-4" />
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Capacité</div>
                <div className="text-xl font-bold">200+ étudiants</div>
              </div>
              <div className="text-center p-6 border border-gray-200 bg-gray-50">
                <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Tarif</div>
                <div className="text-xl font-bold text-green-600">GRATUIT</div>
              </div>
            </div>
          </div>
        </section>

        {/* Description détaillée */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">À propos de l'événement</h2>
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                La <strong>Fête de fin d'année</strong> est l'événement phare qui clôture notre année universitaire.
                C'est une soirée exceptionnelle où l'ensemble des étudiants de l'EFET se réunit pour célébrer les accomplissements,
                partager des moments de joie et créer des souvenirs inoubliables.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Cette année, nous innovons avec un <strong>tournoi de billard exclusif</strong> qui promet d'être passionnant !
                Les meilleurs joueurs s'affronteront dans une compétition amicale avec des prix à gagner.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Au programme : musique live avec notre DJ résident, un buffet généreux, des animations surprises,
                et la traditionnelle remise des prix pour récompenser les étudiants les plus méritants de l'année.
              </p>
            </div>
          </div>
        </section>

        {/* Programme de la soirée */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">Programme de la soirée</h2>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-lg font-bold text-efet-blue">14h00</span>
                </div>
                <div className="flex-1 border-l-2 border-efet-blue pl-6 pb-6">
                  <h3 className="text-xl font-bold mb-2">Accueil des participants</h3>
                  <p className="text-gray-600">Arrivée des étudiants et début des festivités</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-lg font-bold text-efet-blue">14h30</span>
                </div>
                <div className="flex-1 border-l-2 border-efet-blue pl-6 pb-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    Tournoi de Billard
                  </h3>
                  <p className="text-gray-600">Début des qualifications du tournoi exclusif de billard</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-lg font-bold text-efet-blue">15h30</span>
                </div>
                <div className="flex-1 border-l-2 border-efet-blue pl-6 pb-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Utensils className="w-5 h-5" />
                    Buffet & Rafraîchissements
                  </h3>
                  <p className="text-gray-600">Ouverture du buffet avec une variété de plats et boissons</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-lg font-bold text-efet-blue">16h30</span>
                </div>
                <div className="flex-1 border-l-2 border-efet-blue pl-6 pb-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Music className="w-5 h-5" />
                    DJ & Musique Live
                  </h3>
                  <p className="text-gray-600">Ambiance musicale avec notre DJ et piste de danse</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-lg font-bold text-efet-blue">18h00</span>
                </div>
                <div className="flex-1 border-l-2 border-efet-blue pl-6">
                  <h3 className="text-xl font-bold mb-2">Remise des Prix</h3>
                  <p className="text-gray-600">Cérémonie de remise des distinctions et prix du tournoi</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ce qui est inclus */}
        <section className="py-16 bg-efet-blue text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Tout est inclus !</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Accès illimité à toutes les activités',
                'Participation au tournoi de billard',
                'Buffet complet et rafraîchissements',
                'DJ et musique live toute la soirée',
                'Photos souvenirs professionnelles',
                'Cadeaux et surprises',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-white">✓</span>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Intéressé ?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Les inscriptions ouvriront bientôt. Suivez-nous sur Instagram pour ne rien manquer !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://instagram.com/efet_bde"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-efet-blue text-white font-medium hover:bg-efet-dark transition-all"
              >
                Suivre @efet_bde
              </a>
              <a
                href="mailto:bde@efet.ma"
                className="px-10 py-4 border border-efet-blue text-efet-blue font-medium hover:bg-efet-blue hover:text-white transition-all"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

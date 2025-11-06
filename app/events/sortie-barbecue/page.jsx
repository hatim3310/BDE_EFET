'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, MapPin, Users, DollarSign, Flame, Music, Camera, Sandwich } from 'lucide-react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function SortieBarbecue() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-50 to-amber-50 py-20">
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
                Sortie Barbecue 🍖
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Une journée conviviale exclusivement réservée aux étudiants EFET pour partager des moments inoubliables
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
                <div className="text-xl font-bold">Printemps 2025</div>
              </div>
              <div className="text-center p-6 border border-gray-200">
                <MapPin className="w-8 h-8 text-efet-blue mx-auto mb-4" />
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Lieu</div>
                <div className="text-xl font-bold">À déterminer</div>
              </div>
              <div className="text-center p-6 border border-gray-200">
                <Users className="w-8 h-8 text-efet-blue mx-auto mb-4" />
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Public</div>
                <div className="text-xl font-bold">Étudiants EFET</div>
              </div>
              <div className="text-center p-6 border border-gray-200 bg-orange-50">
                <DollarSign className="w-8 h-8 text-orange-600 mx-auto mb-4" />
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Tarif</div>
                <div className="text-xl font-bold text-orange-600">150 DH</div>
              </div>
            </div>
          </div>
        </section>

        {/* Description détaillée */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">À propos de la sortie</h2>
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                La <strong>Sortie Barbecue</strong> est l'événement convivial par excellence, exclusivement réservé
                aux étudiants de l'EFET. C'est l'occasion parfaite de se détendre, de créer des liens et de profiter
                d'une journée en pleine nature loin du stress des cours.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Cette sortie est pensée pour vous offrir un moment de détente authentique avec vos camarades.
                Au programme : barbecue généreux, activités sportives, jeux, musique et surtout une ambiance
                chaleureuse et festive qui fera de cette journée un souvenir mémorable.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Important : cette sortie est <strong>exclusivement réservée aux étudiants de l'EFET</strong>
                pour garantir une cohésion optimale et renforcer les liens au sein de notre communauté.
              </p>
            </div>
          </div>
        </section>

        {/* Programme */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">Au programme</h2>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <Flame className="w-8 h-8 text-orange-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Barbecue généreux</h3>
                  <p className="text-gray-600">
                    Viandes grillées, salades variées, accompagnements et boissons à volonté
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <Users className="w-8 h-8 text-efet-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Activités sportives</h3>
                  <p className="text-gray-600">
                    Football, volleyball, jeux d'équipe et compétitions amicales
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <Music className="w-8 h-8 text-efet-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Ambiance musicale</h3>
                  <p className="text-gray-600">
                    Playlist entraînante pour danser et chanter ensemble toute la journée
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <Camera className="w-8 h-8 text-efet-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Photos souvenirs</h3>
                  <p className="text-gray-600">
                    Photobooth et photographe professionnel pour immortaliser ces moments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ce qui est inclus */}
        <section className="py-16 bg-efet-blue text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Inclus dans les 150 DH</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Transport aller-retour',
                'Barbecue complet et boissons',
                'Accès à toutes les activités',
                'Matériel sportif fourni',
                'Animation et musique',
                'Photos professionnelles',
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

        {/* Informations pratiques */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Informations pratiques</h2>
            <div className="bg-white border border-gray-200 p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-efet-blue font-bold">•</span>
                  <div>
                    <strong>Public :</strong> Exclusivement réservé aux étudiants EFET
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-efet-blue font-bold">•</span>
                  <div>
                    <strong>Tarif :</strong> 150 DH par personne
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-efet-blue font-bold">•</span>
                  <div>
                    <strong>À prévoir :</strong> Tenue confortable, crème solaire, casquette
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-efet-blue font-bold">•</span>
                  <div>
                    <strong>Départ :</strong> Rendez-vous devant l'EFET (horaire à confirmer)
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-efet-blue font-bold">•</span>
                  <div>
                    <strong>Retour :</strong> En fin d'après-midi
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Prêt pour l'aventure ?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Les inscriptions ouvriront prochainement. Suivez-nous pour ne pas manquer cette sortie exclusive !
            </p>
            <a
              href="https://instagram.com/efet_bde"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-efet-blue text-white font-medium hover:bg-efet-dark transition-all"
            >
              Suivre @efet_bde
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

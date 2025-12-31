'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, MapPin, Users, Clock, Camera, Candy, Music, Gift, Coffee, Utensils, DollarSign } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function HalloweenParty() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20">
        <style jsx global>{`
          /* Bloquer le téléchargement des images */
          img {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-user-drag: none;
            -khtml-user-drag: none;
            -moz-user-drag: none;
            -o-user-drag: none;
            pointer-events: none;
          }
        `}</style>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-50 via-purple-50 to-black/5 py-20">
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
                Halloween Party 2024 🎃
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Une après-midi mémorable remplie de friandises, de jeux et de moments magiques
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
                <div className="text-xl font-bold">31 Octobre 2024</div>
              </div>
              <div className="text-center p-6 border border-gray-200">
                <Clock className="w-8 h-8 text-efet-blue mx-auto mb-4" />
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Horaires</div>
                <div className="text-xl font-bold">14:00 - 17:00</div>
              </div>
              <div className="text-center p-6 border border-gray-200">
                <MapPin className="w-8 h-8 text-efet-blue mx-auto mb-4" />
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Lieu</div>
                <div className="text-xl font-bold">Campus EFET</div>
              </div>
              <div className="text-center p-6 border border-gray-200 bg-gray-50">
                <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Participation</div>
                <div className="text-xl font-bold text-green-600">GRATUIT</div>
              </div>
            </div>
          </div>
        </section>

        {/* Description de l'événement */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Un événement inoubliable</h2>
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                Le <strong>31 octobre 2024</strong>, le BDE EFET a organisé une fabuleuse fête d'Halloween
                qui a réuni toute la communauté étudiante pour une après-midi pleine de magie et de convivialité.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                De <strong>14h00 à 17h00</strong>, les étudiants ont profité d'un buffet gourmand,
                participé à des jeux amusants, et créé des souvenirs mémorables dans notre espace photo dédié.
              </p>
              <p className="text-gray-700 leading-relaxed">
                L'événement s'est conclu avec une pause déjeuner spéciale à 15h45, où tous les participants
                ont pu déguster un délicieux plat 100% marocain, et des cadeaux ont été distribués à tous les présents !
              </p>
            </div>
          </div>
        </section>

        {/* Programme de la journée */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">Programme de l'après-midi</h2>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <Clock className="w-8 h-8 text-efet-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">14:00 - Début de la fête</h3>
                  <p className="text-gray-600">
                    Ouverture de l'événement avec accueil des participants et découverte des activités
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <Candy className="w-8 h-8 text-efet-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Buffet gourmand en continu</h3>
                  <p className="text-gray-600">
                    Bonbons, pop-corn, limonade et autres délices disponibles tout au long de l'événement
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <Music className="w-8 h-8 text-efet-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Jeux et animations</h3>
                  <p className="text-gray-600">
                    Participez à nos jeux d'Halloween et tentez de gagner des prix !
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <Camera className="w-8 h-8 text-efet-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Espace photo booth</h3>
                  <p className="text-gray-600">
                    Un coin dédié avec accessoires et décoration pour immortaliser votre après-midi
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <Utensils className="w-8 h-8 text-efet-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">15:45 - Pause déjeuner spéciale</h3>
                  <p className="text-gray-600">
                    Dégustation d'un plat traditionnel marocain : <strong>Djaje Mhamare</strong>
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <Gift className="w-8 h-8 text-efet-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">17:00 - Clôture et distribution des cadeaux</h3>
                  <p className="text-gray-600">
                    Des petits cadeaux ont été offerts à tous les participants pour les remercier de leur présence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ce qui était inclus */}
        <section className="py-16 bg-efet-blue text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Ce qui était inclus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Bonbons à volonté',
                'Pop-corn frais',
                'Limonade et boissons',
                'Espace photo booth avec accessoires',
                'Pause photo professionnelle',
                'Jeux et animations',
                'Plat marocain : Djaje Mhamare',
                'Cadeaux pour tous les participants',
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

        {/* Moments forts */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Moments forts</h2>
            <div className="bg-white border border-gray-200 p-8">
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <Candy className="w-8 h-8 text-efet-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Ambiance festive</h3>
                    <p className="text-gray-600">
                      Une décoration d'Halloween soignée et une atmosphère conviviale qui ont créé
                      une expérience immersive pour tous les participants.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <Utensils className="w-8 h-8 text-efet-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Découverte culinaire</h3>
                    <p className="text-gray-600">
                      Le <strong>Djaje Mhamare</strong>, un plat traditionnel marocain savoureux,
                      a été apprécié par tous et a ajouté une touche culturelle à l'événement.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <Camera className="w-8 h-8 text-efet-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Souvenirs inoubliables</h3>
                    <p className="text-gray-600">
                      L'espace photo a permis aux étudiants de repartir avec des souvenirs mémorables
                      et de partager leur expérience sur les réseaux sociaux.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <Gift className="w-8 h-8 text-efet-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Cadeaux surprise</h3>
                    <p className="text-gray-600">
                      Tous les participants sont repartis avec un petit cadeau en guise de remerciement,
                      créant une fin mémorable pour cet événement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Galerie Photos */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Galerie de l'événement</h2>
              <p className="text-gray-600">Revivez les meilleurs moments de notre Halloween Party</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <div
                  key={index}
                  className="relative aspect-square bg-gradient-to-br from-orange-100 to-purple-100 rounded-lg overflow-hidden group select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                >
                  <Image
                    src={`/events/halloween-2024-photo-${index}.jpg`}
                    alt={`Halloween Party Photo ${index}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300 pointer-events-none select-none"
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ne manquez pas nos prochains événements !</h2>
            <p className="text-xl text-gray-600 mb-8">
              Suivez-nous sur Instagram pour être informé de tous nos événements et activités à venir
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

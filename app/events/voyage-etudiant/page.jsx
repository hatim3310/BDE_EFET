'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, MapPin, Users, DollarSign, Plane, Hotel, Camera, Utensils, MapPinned } from 'lucide-react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function VoyageEtudiant() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
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
                Voyage Étudiant ✈️
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                L'aventure ultime : une collaboration unique entre EFET Casablanca, Fès et Marrakech
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
                <div className="text-xl font-bold">Été 2025</div>
              </div>
              <div className="text-center p-6 border border-gray-200">
                <MapPin className="w-8 h-8 text-efet-blue mx-auto mb-4" />
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Destination</div>
                <div className="text-xl font-bold">À définir ensemble</div>
              </div>
              <div className="text-center p-6 border border-gray-200">
                <Users className="w-8 h-8 text-efet-blue mx-auto mb-4" />
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Participants</div>
                <div className="text-xl font-bold">3 Campus EFET</div>
              </div>
              <div className="text-center p-6 border border-gray-200 bg-blue-50">
                <DollarSign className="w-8 h-8 text-efet-blue mx-auto mb-4" />
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Budget</div>
                <div className="text-xl font-bold text-efet-blue">400-600 DH</div>
                <div className="text-xs text-gray-500 mt-1">Négociable</div>
              </div>
            </div>
          </div>
        </section>

        {/* Description détaillée */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">L'aventure d'une vie</h2>
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                Le <strong>Voyage Étudiant</strong> est l'événement phare de l'année, une collaboration
                exceptionnelle entre les trois campus EFET : Casablanca, Fès et Marrakech. C'est bien plus
                qu'un simple voyage, c'est une aventure collective qui réunit des centaines d'étudiants.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Imaginez partir à la découverte d'une nouvelle destination avec des étudiants venus de tout
                le Maroc, partager des moments inoubliables, créer des amitiés qui dureront toute une vie,
                et vivre des expériences que vous raconterez pendant des années.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Le tarif est <strong>négociable (entre 400 et 600 DH)</strong> pour permettre au maximum
                d'étudiants de participer. Nous travaillons dur pour vous offrir le meilleur rapport qualité-prix
                et rendre ce voyage accessible à tous.
              </p>
            </div>
          </div>
        </section>

        {/* Collaboration */}
        <section className="py-16 bg-efet-blue text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <MapPinned className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-8">Une collaboration unique</h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8">
              Ce voyage réunit les BDE des trois campus EFET pour créer un événement d'une ampleur inédite.
              C'est l'occasion de rencontrer des étudiants d'autres villes, d'élargir votre réseau et de
              découvrir la richesse de notre communauté EFET à l'échelle nationale.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-2xl font-bold mb-2">EFET Casa</div>
                <div className="text-sm opacity-90">Casablanca</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-2xl font-bold mb-2">EFET Fès</div>
                <div className="text-sm opacity-90">Fès</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-2xl font-bold mb-2">EFET Marrakech</div>
                <div className="text-sm opacity-90">Marrakech</div>
              </div>
            </div>
          </div>
        </section>

        {/* Ce qui est inclus */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">Ce qui sera inclus</h2>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <Plane className="w-8 h-8 text-efet-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Transport</h3>
                  <p className="text-gray-600">
                    Voyage confortable en bus climatisé depuis votre campus
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <Hotel className="w-8 h-8 text-efet-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Hébergement</h3>
                  <p className="text-gray-600">
                    Logement en hôtel ou résidence selon la destination (à confirmer)
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <Utensils className="w-8 h-8 text-efet-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Repas</h3>
                  <p className="text-gray-600">
                    Petit-déjeuner et certains repas inclus (détails à venir)
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <Camera className="w-8 h-8 text-efet-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Activités & Animations</h3>
                  <p className="text-gray-600">
                    Programme d'activités variées, soirées et animations tout au long du séjour
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations possibles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Destinations possibles</h2>
            <p className="text-center text-gray-600 mb-12">
              La destination sera choisie ensemble en fonction de vos préférences et du budget !
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Agadir', emoji: '🏖️', desc: 'Plage et détente' },
                { name: 'Chefchaouen', emoji: '🏔️', desc: 'Montagne et nature' },
                { name: 'Essaouira', emoji: '🌊', desc: 'Charme côtier' },
                { name: 'Ifrane', emoji: '🌲', desc: 'Fraîcheur et forêts' },
                { name: 'Merzouga', emoji: '🏜️', desc: 'Désert et aventure' },
                { name: 'Ouarzazate', emoji: '🎬', desc: 'Cinéma et culture' },
              ].map((dest, index) => (
                <div key={index} className="bg-white border border-gray-200 p-6 text-center hover:border-efet-blue transition-colors">
                  <div className="text-4xl mb-3">{dest.emoji}</div>
                  <div className="text-xl font-bold mb-2">{dest.name}</div>
                  <div className="text-sm text-gray-600">{dest.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Prêt pour l'aventure ?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Les détails seront annoncés prochainement. Un sondage sera lancé pour choisir la destination ensemble !
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

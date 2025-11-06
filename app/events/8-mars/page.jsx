'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, MapPin, Users, DollarSign, Heart, Gift, Sparkles, Flower } from 'lucide-react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function HuitMars() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-pink-50 to-purple-50 py-20">
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
                8 Mars – Journée de la Femme 💐
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Célébrons toutes les femmes de l'établissement avec reconnaissance et bienveillance
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
                <div className="text-xl font-bold">8 Mars 2025</div>
              </div>
              <div className="text-center p-6 border border-gray-200">
                <MapPin className="w-8 h-8 text-efet-blue mx-auto mb-4" />
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Lieu</div>
                <div className="text-xl font-bold">Campus EFET</div>
              </div>
              <div className="text-center p-6 border border-gray-200">
                <Users className="w-8 h-8 text-efet-blue mx-auto mb-4" />
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Public</div>
                <div className="text-xl font-bold">Toutes les femmes</div>
              </div>
              <div className="text-center p-6 border border-gray-200 bg-gray-50">
                <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Participation</div>
                <div className="text-xl font-bold text-green-600">GRATUIT</div>
              </div>
            </div>
          </div>
        </section>

        {/* Description détaillée */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Une journée dédiée aux femmes</h2>
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                Le <strong>8 Mars</strong> est une journée spéciale où nous célébrons toutes les femmes de notre
                établissement : étudiantes, professeurs, personnel administratif et technique. C'est l'occasion
                de reconnaître leur contribution essentielle à notre communauté EFET.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Cette année, le BDE EFET organise une célébration mémorable où <strong>chaque femme de l'établissement
                recevra un cadeau</strong> en signe de reconnaissance et d'appréciation. Nous voulons que cette journée
                soit marquée par la bienveillance, le respect et la joie.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Au-delà des cadeaux, c'est une journée pour mettre en lumière les accomplissements des femmes,
                partager des moments de convivialité et célébrer ensemble l'égalité et la diversité au sein de l'EFET.
              </p>
            </div>
          </div>
        </section>

        {/* Programme */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">Programme de la journée</h2>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-lg font-bold text-efet-blue">9h00</span>
                </div>
                <div className="flex-1 border-l-2 border-pink-400 pl-6 pb-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Gift className="w-5 h-5" />
                    Distribution des cadeaux
                  </h3>
                  <p className="text-gray-600">
                    Remise des cadeaux à toutes les femmes de l'établissement
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-lg font-bold text-efet-blue">11h00</span>
                </div>
                <div className="flex-1 border-l-2 border-pink-400 pl-6 pb-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Activités & Animations
                  </h3>
                  <p className="text-gray-600">
                    Animations spéciales, musique et ambiance festive
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-lg font-bold text-efet-blue">13h00</span>
                </div>
                <div className="flex-1 border-l-2 border-pink-400 pl-6 pb-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Moments de Partage
                  </h3>
                  <p className="text-gray-600">
                    Témoignages, remerciements et célébration collective
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-lg font-bold text-efet-blue">15h00</span>
                </div>
                <div className="flex-1 border-l-2 border-pink-400 pl-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Flower className="w-5 h-5" />
                    Photos Souvenirs
                  </h3>
                  <p className="text-gray-600">
                    Photobooth et séance photos pour immortaliser cette journée
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ce qui est offert */}
        <section className="py-16 bg-efet-blue text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Pour toutes les femmes de l'EFET</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Cadeau personnalisé',
                'Animations et surprises',
                'Ambiance festive et musicale',
                'Rafraîchissements et collations',
                'Photos souvenirs professionnelles',
                'Moment de célébration collective',
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

        {/* Message */}
        <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <Heart className="w-16 h-16 text-pink-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Un message de reconnaissance</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              À toutes les femmes de l'EFET : étudiantes, professeurs, personnel administratif et technique,
              merci pour votre dévouement, votre force et votre contribution à faire de notre établissement
              un lieu d'excellence et de bienveillance. Cette journée est pour vous célébrer !
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Suivez-nous pour plus d'informations</h2>
            <p className="text-xl text-gray-600 mb-8">
              Restez connectés pour connaître tous les détails de cette journée spéciale !
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

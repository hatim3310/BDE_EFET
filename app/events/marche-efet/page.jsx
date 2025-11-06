'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, MapPin, Users, DollarSign, ShoppingBag, Heart, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function MarcheEfet() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
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
                Marché de l'EFET 🛍️
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Un marché étudiant pour vendre vos produits et développer votre esprit entrepreneurial
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
                <div className="text-xl font-bold">Novembre 2025</div>
              </div>
              <div className="text-center p-6 border border-gray-200">
                <MapPin className="w-8 h-8 text-efet-blue mx-auto mb-4" />
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Lieu</div>
                <div className="text-xl font-bold">Campus EFET</div>
              </div>
              <div className="text-center p-6 border border-gray-200">
                <Users className="w-8 h-8 text-efet-blue mx-auto mb-4" />
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Participants</div>
                <div className="text-xl font-bold">Tous les étudiants</div>
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
            <h2 className="text-3xl font-bold mb-8">À propos de l'événement</h2>
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                Le <strong>Marché de l'EFET</strong> est un événement unique qui permet aux étudiants de développer
                leur esprit entrepreneurial en vendant leurs propres produits sur le campus.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Cette initiative donne la <strong>priorité absolue aux étudiants</strong> qui souhaitent vendre leurs créations,
                produits artisanaux, services ou toute autre activité commerciale. C'est l'occasion parfaite de tester
                vos idées business dans un environnement bienveillant et supportif.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Que vous vendiez des vêtements, des accessoires faits main, de la nourriture, des services de design,
                ou tout autre produit créatif, le Marché de l'EFET est votre plateforme pour briller !
              </p>
            </div>
          </div>
        </section>

        {/* Pourquoi participer */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">Pourquoi participer ?</h2>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <ShoppingBag className="w-8 h-8 text-efet-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Vendez vos produits</h3>
                  <p className="text-gray-600">
                    Un stand gratuit pour exposer et vendre vos créations à toute la communauté EFET
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <Sparkles className="w-8 h-8 text-efet-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Développez votre projet</h3>
                  <p className="text-gray-600">
                    Testez vos idées, recevez des feedbacks et améliorez votre offre en temps réel
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <Users className="w-8 h-8 text-efet-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Créez votre réseau</h3>
                  <p className="text-gray-600">
                    Rencontrez d'autres entrepreneurs étudiants et créez des collaborations
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <Heart className="w-8 h-8 text-efet-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Expérience entrepreneuriale</h3>
                  <p className="text-gray-600">
                    Acquérez une expérience pratique en gestion, vente et marketing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ce qui est inclus */}
        <section className="py-16 bg-efet-blue text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Pour les vendeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Stand gratuit sur le campus',
                'Priorité absolue aux étudiants EFET',
                'Exposition à toute la communauté',
                'Support logistique du BDE',
                'Communication sur nos réseaux sociaux',
                'Ambiance conviviale et festive',
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
            <h2 className="text-3xl font-bold mb-6">Envie de vendre vos produits ?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Les inscriptions pour réserver votre stand ouvriront bientôt. Suivez-nous pour ne rien manquer !
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

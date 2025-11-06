'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, MapPin, Users, DollarSign, Heart, Activity, Shield, Gift } from 'lucide-react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function DonDuSang() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-red-50 to-pink-50 py-20">
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
                Don du Sang ❤️
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Un geste simple qui sauve des vies - Participez à notre campagne de don du sang
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
                <div className="text-xl font-bold">À annoncer</div>
              </div>
              <div className="text-center p-6 border border-gray-200">
                <MapPin className="w-8 h-8 text-efet-blue mx-auto mb-4" />
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Lieu</div>
                <div className="text-xl font-bold">Campus EFET</div>
              </div>
              <div className="text-center p-6 border border-gray-200">
                <Users className="w-8 h-8 text-efet-blue mx-auto mb-4" />
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Public</div>
                <div className="text-xl font-bold">Étudiants & Staff</div>
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
            <h2 className="text-3xl font-bold mb-8">Une action qui sauve des vies</h2>
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                Le <strong>Don du Sang</strong> est bien plus qu'un simple événement - c'est un acte de solidarité
                qui peut sauver jusqu'à trois vies avec un seul don.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                En partenariat avec le Centre Régional de Transfusion Sanguine, nous organisons une campagne de
                collecte de sang directement sur le campus de l'EFET. L'équipe médicale professionnelle sera présente
                pour garantir un don dans les meilleures conditions de sécurité et de confort.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Chaque année, des milliers de patients ont besoin de transfusions sanguines. Votre don peut faire
                la différence pour des personnes atteintes de maladies graves, des victimes d'accidents ou des femmes
                lors de l'accouchement.
              </p>
            </div>
          </div>
        </section>

        {/* Pourquoi donner */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">Pourquoi donner son sang ?</h2>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <Heart className="w-8 h-8 text-red-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Sauvez des vies</h3>
                  <p className="text-gray-600">
                    Un seul don peut sauver jusqu'à 3 vies. C'est un geste simple avec un impact immense
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <Shield className="w-8 h-8 text-efet-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Sécurisé et sans danger</h3>
                  <p className="text-gray-600">
                    Tout le matériel est stérile et à usage unique. Le processus est supervisé par des professionnels
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <Activity className="w-8 h-8 text-efet-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Bilan de santé gratuit</h3>
                  <p className="text-gray-600">
                    Profitez d'un mini-bilan de santé gratuit avec vérification de votre tension et groupe sanguin
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <Gift className="w-8 h-8 text-efet-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Collation offerte</h3>
                  <p className="text-gray-600">
                    Après votre don, profitez d'une collation et de boissons pour vous restaurer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Conditions pour donner</h2>
            <div className="bg-white border border-gray-200 p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-efet-blue text-xl">•</span>
                  <span className="text-gray-700">Avoir entre 18 et 65 ans</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-efet-blue text-xl">•</span>
                  <span className="text-gray-700">Peser au moins 50 kg</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-efet-blue text-xl">•</span>
                  <span className="text-gray-700">Être en bonne santé</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-efet-blue text-xl">•</span>
                  <span className="text-gray-700">Apporter une pièce d'identité</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-efet-blue text-xl">•</span>
                  <span className="text-gray-700">Avoir mangé avant le don</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-efet-blue text-xl">•</span>
                  <span className="text-gray-700">Ne pas avoir donné son sang dans les 3 derniers mois</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ce qui est inclus */}
        <section className="py-16 bg-efet-blue text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Le jour du don</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Accueil par l\'équipe médicale',
                'Questionnaire médical confidentiel',
                'Vérification de la tension artérielle',
                'Don de sang (environ 10 minutes)',
                'Collation et boissons offertes',
                'Attestation de don',
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
            <h2 className="text-3xl font-bold mb-6">Prêt à sauver des vies ?</h2>
            <p className="text-xl text-gray-600 mb-8">
              La date sera annoncée prochainement. Suivez-nous pour être informé en priorité !
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

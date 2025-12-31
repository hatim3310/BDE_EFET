'use client'

import { motion } from 'framer-motion'
import { ArrowUp, Heart, Instagram } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black text-white pt-32 pb-10 border-t border-white/5 relative overflow-hidden">

      {/* Giant Watermark */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
        <h1 className="text-[20vw] font-black leading-none text-white whitespace-nowrap animate-marquee">
          BDE EFET 2025 • BDE EFET 2025 •
        </h1>
      </div>

      <div className="container-premium relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">

          {/* Brand */}
          <div className="md:col-span-6 space-y-8">
            <div>
              <h2 className="font-outfit font-bold text-4xl mb-2">BDE EFET</h2>
              <p className="text-efet-blue font-medium">Casablanca Campus</p>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed font-light text-lg">
              Le cœur battant de la vie étudiante. Nous sommes là pour créer, inspirer et rassembler la prochaine génération de leaders.
            </p>

            <div className="flex gap-4">
              <a href="https://instagram.com/efet_bde" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h3 className="font-bold mb-8 text-white uppercase tracking-wider text-xs">Navigation</h3>
            <ul className="space-y-4 text-gray-500">
              <li><Link href="#hero" className="hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="#team" className="hover:text-white transition-colors">Équipe</Link></li>
              <li><Link href="#program" className="hover:text-white transition-colors">Agenda</Link></li>
              <li><Link href="#gallery" className="hover:text-white transition-colors">Valeurs</Link></li>
            </ul>
          </div>

          {/* Back to Top */}
          <div className="md:col-span-3 flex justify-end items-start">
            <button
              onClick={scrollToTop}
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-efet-blue hover:border-efet-blue transition-all group"
            >
              <ArrowUp className="text-white group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} BDE EFET. Tous droits réservés.</p>
          <p className="flex items-center gap-2">
            Fait avec <Heart size={14} className="text-efet-blue fill-efet-blue animate-pulse" /> par
            <a href="https://instagram.com/laamarti_hatim" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-medium hover:text-white transition-colors cursor-pointer underline decoration-dotted underline-offset-4 hover:decoration-solid">Laamarti Hatim</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

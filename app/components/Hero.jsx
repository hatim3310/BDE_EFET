'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

/**
 * Hero Section - "Typography Only"
 * Massive Impact. Zero distractions. Pure Message.
 */
export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-black text-white px-6 pt-32 md:pt-40">

      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-efet-blue/10 rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 brightness-150 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="container-premium relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">

        {/* MASSIVE TYPOGRAPHY */}
        <h1 className="font-clash font-semibold text-[12vw] md:text-[8rem] lg:text-[10rem] leading-[0.85] tracking-tight text-white mix-blend-normal mb-8 select-none">
          <span className="block">NEXT</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-efet-blue via-blue-400 to-white">
            GEN
          </span>
          <span className="block">LEADERS</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
          Plus qu'un BDE, un mouvement. Nous redéfinissons la vie étudiante à l'EFET avec ambition, créativité et unité.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
          <button
            onClick={() => document.getElementById('program').scrollIntoView({ behavior: 'smooth' })}
            className="group px-10 py-5 bg-white text-black rounded-full font-bold text-lg transition-transform active:scale-95 hover:bg-gray-200"
          >
            Découvrir l'Agenda
          </button>

          <button
            onClick={() => document.getElementById('team').scrollIntoView({ behavior: 'smooth' })}
            className="group px-10 py-5 rounded-full border border-white/20 hover:border-white/50 bg-white/5 backdrop-blur-sm text-white font-medium transition-all hover:bg-white/10 flex items-center justify-center gap-2"
          >
            Notre Équipe <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

      {/* Scroll Indicator */}


    </section>
  )
}

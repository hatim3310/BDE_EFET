'use client'

import { motion } from 'framer-motion'
import { Instagram, Send, Sparkles } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-black flex flex-col items-center justify-center relative overflow-hidden text-white">
      {/* Background Blobs Dark Mode */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-900/20 to-purple-900/20 rounded-full blur-[120px] opacity-40 -z-10 animate-pulse-glow"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 pointer-events-none"></div>

      <div className="container-premium text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white mb-8 shadow-lg shadow-white/5"
        >
          <Sparkles size={16} className="text-yellow-400" />
          <span className="text-sm font-medium tracking-wide">Rejoignez l'aventure</span>
        </motion.div>

        <h2 className="font-outfit font-black text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tighter text-white drop-shadow-2xl">
          LET'S CONNECT
        </h2>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light">
          Vous avez une idée ? Une suggestion ? Ou vous voulez simplement participer à la vie du campus ?
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <motion.a
            href="https://instagram.com/efet_bde"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-5 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 text-white shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all border border-white/10"
          >
            <Instagram size={24} />
            <span className="font-bold text-lg">Suivez-nous sur Instagram</span>
          </motion.a>


        </div>

      </div>
    </section>
  )
}

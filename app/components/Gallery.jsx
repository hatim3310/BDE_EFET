'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Users, Lightbulb, HeartHandshake } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Excellence',
    text: "Nous ne visons pas juste la réussite, mais l'exceptionnel. Chaque projet est une signature de qualité.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: 'Unité',
    text: "Plus qu'une équipe, une famille. Nous avançons ensemble, forts de nos différences et unis par nos ambitions.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    text: "Oser, créer, surprendre. Nous repoussons les limites du possible pour offrir des expériences inédites.",
    gradient: "from-amber-400 to-orange-500"
  },
  {
    icon: HeartHandshake,
    title: 'Engagement',
    text: "Au service de chaque étudiant. Votre voix est notre boussole, votre satisfaction notre moteur.",
    gradient: "from-emerald-400 to-green-500"
  },
]

export default function Gallery() {
  const containerRef = useRef(null)

  return (
    <section id="gallery" className="relative py-32 bg-black text-white overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none"></div>

      <div className="container-premium relative z-10">

        {/* Header Manifesto */}
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
          <div className="lg:w-1/2 sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-efet-blue font-bold tracking-widest text-sm uppercase mb-4 block">Notre ADN</span>
              <h2 className="font-outfit font-black text-4xl md:text-7xl lg:text-8xl leading-[0.9] mb-8">
                NOS<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">PILIERS</span>
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed max-w-md border-l-2 border-efet-blue/30 pl-6">
                Quatre valeurs fondamentales qui sculptent notre vision et guident chacune de nos actions au quotidien.
              </p>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full grid gap-6">
            {values.map((item, index) => (
              <ValueCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

function ValueCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 overflow-hidden transition-all duration-300"
    >
      <div className={`absolute top-0 right-0 p-32 opacity-10 rounded-full blur-3xl bg-gradient-to-br ${item.gradient} group-hover:opacity-20 transition-opacity duration-500`}></div>

      <div className="relative z-10 flex items-start gap-6">
        <div className={`p-4 rounded-xl bg-gradient-to-br ${item.gradient} bg-opacity-10 text-white shadow-lg`}>
          <item.icon size={28} />
        </div>
        <div>
          <h3 className="font-outfit font-bold text-2xl mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
            {item.title}
          </h3>
          <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
            {item.text}
          </p>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
    </motion.div>
  )
}

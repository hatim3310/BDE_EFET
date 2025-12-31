'use client'

import { motion } from 'framer-motion'
import { Linkedin, Instagram, Mail } from 'lucide-react'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Douaa',
    role: 'Présidente',
    subRoles: ['Trésorière', 'Comité Associatif'],
    image: '/images/team/douaa.jpg',
    color: 'from-blue-600 to-indigo-700'
  },
  {
    name: 'Lamarti Hatim',
    role: 'Vice-Président',
    subRoles: ['Développeur Web'],
    image: '/images/team/hatim.png',
    color: 'from-cyan-600 to-blue-700'
  },
  {
    name: 'El Khadiri Marwa',
    role: 'Secrétaire Générale',
    subRoles: [],
    image: '/images/team/marwa.png',
    color: 'from-purple-600 to-pink-700'
  },
  {
    name: 'Marjane Abdessamia',
    role: 'Trésorière',
    subRoles: ['Support IT'],
    image: '/images/team/marjane.png',
    color: 'from-emerald-600 to-teal-700'
  },
  {
    name: 'Nassiri Fatim Zahra',
    role: 'Comité Associatif',
    subRoles: [],
    image: '/images/team/fati.png',
    color: 'from-orange-600 to-red-700'
  },
  {
    name: 'El Bouzary Imane',
    role: 'Pôle Événementiel',
    subRoles: ['Communication'],
    image: '/images/team/imane.png',
    color: 'from-pink-600 to-rose-700'
  },
  {
    name: 'Yassine',
    role: 'Pôle Événementiel',
    subRoles: ['Media'],
    image: '/images/team/yassine.png',
    color: 'from-indigo-600 to-blue-700'
  },
  {
    name: 'Ikram',
    role: 'Pôle Événementiel',
    subRoles: [],
    image: '/images/team/ikram.png',
    color: 'from-amber-600 to-orange-700'
  },
  {
    name: 'Agarraijou Mohammed',
    role: 'Pôle Sport',
    subRoles: [],
    image: '/images/team/simo.png',
    color: 'from-green-600 to-emerald-700'
  },
  {
    name: 'Mouradi Amira',
    role: 'Pôle Communication',
    subRoles: [],
    image: '/images/team/amira.png',
    color: 'from-violet-600 to-purple-700'
  },
]

export default function Team() {
  return (
    <section id="team" className="relative py-32 bg-[#050505] overflow-hidden">
      <div className="container-premium relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-outfit font-bold text-4xl md:text-6xl text-white mb-4">
              Les Visages<br />
              <span className="text-efet-blue">du Changement</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-md font-light">
              Des étudiants passionnés, unis par une volonté commune de dynamiser la vie de campus.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden md:block" // Assure que cet élément est caché sur mobile s'il cause du layout shift
          >
            <div className="text-right">
              <span className="block text-4xl font-bold text-efet-blue">10</span>
              <span className="text-sm uppercase tracking-widest text-gray-500">Membres Actifs</span>
            </div>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{}}
              className="group relative h-[380px] w-full max-w-sm mx-auto rounded-2xl overflow-hidden cursor-pointer border border-white/5"
            >
              {/* Image Background */}
              <div className="absolute inset-0 bg-gray-900">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  quality={70}
                />
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <div className="">
                  <motion.div
                    className={`h-1 w-12 bg-gradient-to-r ${member.color} mb-4 rounded-full`}
                  ></motion.div>

                  <h3 className="font-outfit font-bold text-2xl mb-1">{member.name}</h3>
                  <p className="text-gray-400 font-medium tracking-wide text-sm uppercase">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

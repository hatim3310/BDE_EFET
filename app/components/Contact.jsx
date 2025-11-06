'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Instagram, QrCode } from 'lucide-react'

/**
 * Contact Section - Design minimaliste et professionnel
 * Palette monochrome avec accent subtil
 */
export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bde@efet.ma',
      link: 'mailto:bde@efet.ma',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@efet_bde',
      link: 'https://instagram.com/efet_bde',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <section
      id="contact"
      className="relative bg-gray-50 py-24 md:py-32"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-efet-black mb-6 tracking-tight">
            Contactez-nous
          </h2>
          <div className="w-16 h-0.5 bg-efet-blue mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Une idée ? Une question ? Une envie de participer ?
            <br />
            Notre équipe est à votre écoute
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          {/* Informations de contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="border border-gray-200 bg-white p-10 hover:border-efet-blue transition-all duration-500 h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 border border-gray-200 group-hover:border-efet-blue group-hover:bg-efet-blue transition-all duration-500">
                      <contact.icon className="w-6 h-6 text-efet-blue group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 font-medium">
                        {contact.label}
                      </p>
                      <p className="text-xl md:text-2xl font-semibold text-efet-blue">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* QR Code */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="border border-gray-200 bg-white p-10 inline-block">
              <QrCode className="w-8 h-8 mx-auto mb-4 text-efet-blue" />
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 font-medium">
                QR Code
              </p>

              {/* Placeholder QR Code */}
              <div className="bg-gray-50 p-8 mx-auto w-56 h-56 flex items-center justify-center border border-gray-200">
                <div className="text-center">
                  <QrCode className="w-24 h-24 text-gray-300 mx-auto mb-3" />
                  <p className="text-xs text-gray-500">
                    Placez votre QR code
                    <br />
                    dans public/qr.png
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-6 font-light">
                Scannez pour accéder rapidement
                <br />
                à notre site et nos réseaux
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

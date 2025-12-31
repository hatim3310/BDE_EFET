'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { X, Camera, ArrowRight } from 'lucide-react'

// Images from public/events
const photos = [
    { src: '/events/halloween-2024-photo-1.jpg', alt: 'Halloween Party 1', size: 'large' },
    { src: '/events/halloween-2024-photo-2.jpg', alt: 'Halloween Party 2', size: 'small' },
    { src: '/events/halloween-2024-photo-3.jpg', alt: 'Halloween Party 3', size: 'small' },
    { src: '/events/halloween-2024-photo-4.jpg', alt: 'Halloween Party 4', size: 'medium' },
    { src: '/events/halloween-2024-photo-5.jpg', alt: 'Halloween Party 5', size: 'medium' },
    { src: '/events/halloween-2024-photo-6.jpg', alt: 'Halloween Party 6', size: 'small' },
    { src: '/events/halloween-2024-photo-7.jpg', alt: 'Halloween Party 7', size: 'large' },
    { src: '/events/halloween-2024-photo-8.jpg', alt: 'Halloween Party 8', size: 'small' },
]

export default function EventsGallery() {
    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <section id="events-gallery" className="relative py-32 bg-black overflow-hidden">

            <div className="container-premium relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-efet-blue font-bold tracking-widest text-sm uppercase mb-4 block">Souvenirs</span>
                        <h2 className="font-outfit font-bold text-4xl md:text-6xl text-white mb-4">
                            Retour en <span className="text-efet-blue">Images</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-md font-light">
                            Les meilleurs moments de nos événements. Plus que des photos, des souvenirs gravés.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="hidden md:block"
                    >
                        <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                            <Camera size={20} className="text-efet-blue" />
                            <span className="text-sm font-medium text-white">Halloween 2024</span>
                        </div>
                    </motion.div>
                </div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            onClick={() => setSelectedImage(photo)}
                            className={`relative group rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 border border-white/5 
                ${photo.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${photo.size === 'medium' ? 'md:col-span-2' : ''}
              `}
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>

                            {/* Overlay Icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white transform scale-50 group-hover:scale-100 transition-transform duration-300">
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedImage(null)}
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                >
                    <button
                        className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={32} />
                    </button>

                    <div className="relative w-full max-w-5xl aspect-video rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            fill
                            className="object-contain"
                            quality={100}
                        />
                    </div>

                    <div className="absolute bottom-8 left-0 w-full text-center text-gray-400 text-sm">
                        Cliquez n'importe où pour fermer
                    </div>
                </motion.div>
            )}

        </section>
    )
}

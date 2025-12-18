'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

// Glitch Text Component
const GlitchText = ({ children, className }) => {
    return (
        <div className={`relative inline-block ${className}`}>
            <motion.span
                className="relative z-10 block"
                animate={{
                    x: [0, -2, 2, -1, 0],
                    y: [0, 1, -1, 0],
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    times: [0, 0.1, 0.2, 0.3, 1]
                }}
            >
                {children}
            </motion.span>
            <motion.span
                className="absolute top-0 left-0 -z-10 text-efet-blue opacity-70 mix-blend-multiply"
                animate={{
                    x: [0, -3, 3, -2, 0],
                    opacity: [0.7, 0.4, 0.7],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                }}
            >
                {children}
            </motion.span>
            <motion.span
                className="absolute top-0 left-0 -z-10 text-efet-orange opacity-70 mix-blend-multiply"
                animate={{
                    x: [0, 3, -3, 2, 0],
                    opacity: [0.7, 0.4, 0.7],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                }}
            >
                {children}
            </motion.span>
        </div>
    )
}

export default function FrozenPage() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white text-efet-black relative selection:bg-efet-blue selection:text-white overflow-hidden md:overflow-hidden">
            {/* Noise / Error Overlay */}
            <div className="absolute inset-0 pointer-events-none z-[1] opacity-[0.03] mix-blend-overlay fixed">
                <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
            </div>

            {/* Background Decor */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-efet-blue/5 rounded-full blur-[60px] md:blur-[120px] opacity-70 animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[250px] h-[250px] md:w-[600px] md:h-[600px] bg-efet-orange/5 rounded-full blur-[50px] md:blur-[100px] opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center w-full max-w-3xl px-4 py-12 md:py-0 z-10">
                <motion.div
                    className="flex flex-col items-center w-full text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Logo with Glitch Shake */}
                    <motion.div
                        className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 mb-6 md:mb-10 shrink-0"
                        animate={{
                            x: [0, -1, 1, -1, 0],
                            rotate: [0, -1, 1, 0],
                            filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "mirror",
                            times: [0, 0.05, 0.1, 0.15, 1]
                        }}
                    >
                        <div className="absolute inset-0 bg-efet-blue/10 rounded-full blur-2xl md:blur-3xl" />
                        <Image
                            src="/logo.svg"
                            alt="BDE EFET Logo"
                            fill
                            className="object-contain drop-shadow-2xl grayscale-[0.2]"
                            priority
                        />
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-6 md:space-y-8 w-full">
                        <GlitchText className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-efet-dark px-2">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-efet-dark to-efet-blue block leading-tight">
                                Message de l'Équipe
                            </span>
                        </GlitchText>

                        <div className="h-px w-16 md:w-24 mx-auto bg-gradient-to-r from-transparent via-efet-blue/50 to-transparent shadow-[0_0_10px_rgba(10,108,240,0.5)]" />

                        <motion.div
                            className="space-y-4 md:space-y-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <p className="text-base sm:text-lg md:text-xl font-medium text-efet-black/90 tracking-wide px-4">
                                Toute l'équipe tient à vous présenter ses <span className="text-efet-orange">sincères excuses</span>.
                            </p>

                            <p className="text-sm sm:text-base md:text-lg font-light text-gray-600 leading-relaxed max-w-xl md:max-w-2xl mx-auto backdrop-blur-sm px-2">
                                L'arrêt de notre campagne ne reflète en rien le travail acharné et l'engagement de notre groupe.
                                Nous avons été confrontés à des circonstances indépendantes de notre volonté.
                            </p>

                            <motion.div
                                className="inline-block mt-4 px-3 py-1.5 md:px-4 md:py-2 border border-efet-blue/20 rounded bg-efet-blue/5 mx-2"
                                animate={{ opacity: [0.8, 1, 0.8] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-efet-blue font-mono">
                                    Merci de votre compréhension.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Footer System Status */}
            <motion.div
                className="relative md:absolute md:bottom-12 flex flex-col items-center space-y-2 opacity-60 pb-8 md:pb-0 shrink-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <div className="flex items-center space-x-2 text-[10px] md:text-xs font-mono text-red-500/80">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full animate-ping" />
                    <span>SYSTEM_HALTED // E_CAMPAIGN_STOPPED</span>
                </div>
                <div className="text-[10px] md:text-xs text-gray-400 font-medium tracking-widest uppercase">
                    BDE EFET 2025
                </div>
            </motion.div>
        </div>
    )
}

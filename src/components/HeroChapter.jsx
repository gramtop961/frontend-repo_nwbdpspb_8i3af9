import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const HeroChapter = () => {
  return (
    <section id="chapter-spark" className="relative min-h-[100vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil that does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90" />

      <div className="relative z-10 mx-auto flex h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl md:text-6xl font-serif"
        >
          The Journey of Creation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
          className="mx-auto max-w-2xl text-base text-gray-700 sm:text-lg md:text-xl font-sans"
        >
          “It all started with a question — what if ideas could move, breathe, and interact?”
        </motion.p>

        {/* Subtle line art metaphor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 w-full max-w-2xl"
        >
          <svg viewBox="0 0 700 120" className="w-full">
            <defs>
              <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a78bfa"/>
                <stop offset="50%" stopColor="#60a5fa"/>
                <stop offset="100%" stopColor="#34d399"/>
              </linearGradient>
            </defs>
            <path
              d="M10 80 C 150 10, 250 120, 350 50 S 600 90, 690 40"
              fill="none"
              stroke="url(#glow)"
              strokeWidth="2.5"
              className="drop-shadow-[0_0_12px_rgba(99,102,241,0.25)]"
            />
          </svg>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 flex flex-col items-center text-gray-500"
        >
          <span className="text-xs tracking-widest">SCROLL</span>
          <span className="mt-2 h-8 w-[1px] bg-gradient-to-b from-gray-400/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroChapter

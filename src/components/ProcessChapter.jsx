import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Pencil, Code, Palette } from 'lucide-react'

const steps = [
  { icon: Pencil, label: 'Sketch', color: 'from-violet-200 to-indigo-200', desc: 'Ideas emerge as lines and shapes.' },
  { icon: Palette, label: 'Design', color: 'from-rose-200 to-amber-200', desc: 'Form meets feeling — systems with soul.' },
  { icon: Code, label: 'Code', color: 'from-sky-200 to-cyan-200', desc: 'Interfaces become living, breathing stories.' },
  { icon: Rocket, label: 'Launch', color: 'from-emerald-200 to-teal-200', desc: 'Share the work, learn, evolve.' },
]

const ProcessChapter = () => {
  return (
    <section id="chapter-flow" className="relative w-full bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl font-serif"
        >
          The Flow
        </motion.h2>

        <div className="no-scrollbar -mx-6 overflow-x-auto px-6">
          <div className="grid grid-flow-col auto-cols-[80%] gap-6 sm:auto-cols-[55%] md:auto-cols-[35%]">
            {steps.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`relative rounded-2xl bg-gradient-to-br ${s.color} p-1`}
              >
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 shadow-sm">
                      <s.icon className="h-5 w-5 text-gray-700" />
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 font-serif">{s.label}</h3>
                  </div>
                  <p className="text-gray-700">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-10 max-w-2xl text-center text-sm text-gray-500"
        >
          Soft, horizontal rhythm — glide through the steps to feel the cadence of making.
        </motion.p>
      </div>
    </section>
  )
}

export default ProcessChapter

import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Adaptive Portfolio',
    narrative: {
      problem: 'Static portfolios felt like museums — beautiful, but distant.',
      insight: 'If stories guide attention, interfaces can guide emotion.',
      solution: 'A living portfolio that reveals projects as chapters, not cards.'
    },
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    accent: 'from-indigo-200 to-blue-200'
  },
  {
    title: 'Calm Commerce',
    narrative: {
      problem: 'Checkout flows were noisy and anxious.',
      insight: 'Fewer choices, clearer rhythm — reduce cognitive load.',
      solution: 'A serene e‑commerce experience with micro‑interactions and focus states.'
    },
    image: 'https://images.unsplash.com/photo-1678086790025-25d2bfaf770a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIdW1hbiUyMERhc2hib2FyZHN8ZW58MHwwfHx8MTc2MjEzNDQ3NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    accent: 'from-emerald-200 to-teal-200'
  },
  {
    title: 'Human Dashboards',
    narrative: {
      problem: 'Data-heavy dashboards ignored human pace.',
      insight: 'Meaning emerges when information breathes.',
      solution: 'Motion-led layouts that reveal complexity gradually.'
    },
    image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIwNzE5NTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    accent: 'from-violet-200 to-fuchsia-200'
  }
]

const ProjectsChapter = () => {
  return (
    <section id="chapter-craft" className="relative w-full bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl font-serif"
        >
          The Craft
        </motion.h2>

        <div className="space-y-20">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="grid grid-cols-1 items-center gap-8 sm:gap-12 md:grid-cols-2"
            >
              <div className="order-2 md:order-1">
                <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl font-serif">
                  {p.title}
                </h3>
                <div className="mt-4 space-y-3 text-gray-700">
                  <p><span className="font-medium text-gray-900">Problem</span> — {p.narrative.problem}</p>
                  <p><span className="font-medium text-gray-900">Insight</span> — {p.narrative.insight}</p>
                  <p><span className="font-medium text-gray-900">Solution</span> — {p.narrative.solution}</p>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${p.accent} p-1`}> 
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsChapter

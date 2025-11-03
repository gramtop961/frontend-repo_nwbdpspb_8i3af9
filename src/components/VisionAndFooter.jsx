import React, { useState } from 'react'
import { motion } from 'framer-motion'

const VisionAndFooter = () => {
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Thank you — I will get back to you soon.')
    e.currentTarget.reset()
  }

  return (
    <section id="chapter-vision" className="relative w-full bg-white">
      {/* Vision */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50" />
        {/* Subtle animated glow */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 0.75, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="pointer-events-none absolute -top-16 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-300/30 via-sky-300/20 to-emerald-300/30 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl font-serif"
          >
            The Vision
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-700 sm:text-xl font-sans"
          >
            “I believe design should feel like poetry — simple, honest, timeless.”
          </motion.p>
        </div>
      </div>

      {/* Footer / Contact */}
      <footer id="chapter-footer" className="relative w-full border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 font-serif">Let’s Create Together</h3>
              <p className="mt-3 max-w-md text-gray-700">
                Everything starts with a spark. Let’s make it shine.
              </p>
              <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
                <a
                  href="#"
                  className="relative inline-block underline-offset-4 transition-colors hover:text-gray-900"
                >
                  <span className="bg-gradient-to-r from-indigo-400 to-sky-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-300 hover:bg-[length:100%_2px]">
                    Twitter
                  </span>
                </a>
                <a
                  href="#"
                  className="relative inline-block underline-offset-4 transition-colors hover:text-gray-900"
                >
                  <span className="bg-gradient-to-r from-indigo-400 to-sky-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-300 hover:bg-[length:100%_2px]">
                    GitHub
                  </span>
                </a>
                <a
                  href="#"
                  className="relative inline-block underline-offset-4 transition-colors hover:text-gray-900"
                >
                  <span className="bg-gradient-to-r from-indigo-400 to-sky-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-300 hover:bg-[length:100%_2px]">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>

            <div>
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm text-gray-600">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none focus:ring-0"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-gray-600">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none focus:ring-0"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-gray-600">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none focus:ring-0"
                    placeholder="Tell me about your vision…"
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 px-5 py-3 text-white shadow-lg shadow-indigo-500/20 transition-transform duration-200 hover:scale-[1.02] focus:outline-none"
                  >
                    <span className="mr-1">Send message</span>
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                  </button>
                </div>
                {status && (
                  <p className="text-sm text-emerald-600">{status}</p>
                )}
              </form>
            </div>
          </div>

          <p className="mt-12 text-center text-xs text-gray-500">© {new Date().getFullYear()} — Crafted with calm and curiosity.</p>
        </div>
      </footer>
    </section>
  )
}

export default VisionAndFooter

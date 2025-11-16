import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-28 overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Open to freelance & full-time
            </div>
            <h1 className="mt-5 text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
              Building thoughtful, modern digital experiences
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600">
              I craft clean, performant interfaces and reliable backends. Focused on fintech, 3D interactions, and delightful UX.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="#work" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-white shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition">
                View Work
              </a>
              <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-white/80 ring-1 ring-black/5 px-5 py-3 text-slate-900 hover:bg-white transition">
                Get in Touch
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hidden lg:block"
          >
            <div className="pointer-events-none rounded-3xl bg-white/30 backdrop-blur-xl border border-white/20 p-6 shadow-xl shadow-black/5">
              <p className="text-slate-700 text-sm leading-relaxed">
                3D credit card scene rendered live. Scroll to explore more.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

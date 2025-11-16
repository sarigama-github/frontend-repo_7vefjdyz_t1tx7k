import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Fintech Dashboard',
    desc: 'Real-time portfolio tracking with bank-grade security.',
    tags: ['React', 'FastAPI', 'Tailwind'],
    href: '#',
  },
  {
    title: '3D Card Interactions',
    desc: 'Immersive product showcase using Spline and WebGL.',
    tags: ['Spline', 'WebGL', 'UX'],
    href: '#',
  },
  {
    title: 'Payments API',
    desc: 'High-availability REST API for card payments.',
    tags: ['Python', 'MongoDB', 'APM'],
    href: '#',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Selected work</h2>
          <a href="#contact" className="text-sm font-medium text-slate-700 hover:text-slate-900">See availability →</a>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.href}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 backdrop-blur shadow-sm shadow-black/5 block"
            >
              <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-indigo-200/60 via-white to-purple-200/60 ring-1 ring-black/5" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-slate-900 text-white px-2.5 py-1">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

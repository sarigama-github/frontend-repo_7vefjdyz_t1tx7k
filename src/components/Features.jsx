import { ShieldCheck, Zap, Palette, Globe } from 'lucide-react'

const items = [
  {
    icon: ShieldCheck,
    title: 'Secure by design',
    desc: 'Standards-first, audited dependencies, and robust auth patterns to protect your data.',
  },
  {
    icon: Zap,
    title: 'Fast & performant',
    desc: 'Lighthouse-friendly builds, optimized images, code-splitting and caching out of the box.',
  },
  {
    icon: Palette,
    title: 'Polished UI/UX',
    desc: 'Glassmorphism, subtle motion, and a consistent design system for a premium feel.',
  },
  {
    icon: Globe,
    title: 'SEO & Accessibility',
    desc: 'Semantic markup, keyboard-friendly interactions, and metadata best practices.',
  },
]

export default function Features() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 -top-24 -z-10 h-72 bg-gradient-to-b from-indigo-100/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 backdrop-blur shadow-sm shadow-black/5">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-slate-900 p-2"><Icon className="h-5 w-5 text-white" /></div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

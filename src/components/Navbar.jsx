import { Menu, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/70 backdrop-blur-md shadow-sm shadow-black/5 ring-1 ring-black/5 px-4 py-3 sm:px-6">
          <a href="#" className="text-sm sm:text-base font-semibold tracking-tight text-slate-900">My Portfolio</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#work" className="hover:text-slate-900 transition-colors">Work</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="mailto:hello@example.com" aria-label="Email" className="p-2 rounded-xl bg-white/60 ring-1 ring-black/5 hover:bg-white/80 transition">
              <Mail className="h-5 w-5 text-slate-800" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-xl bg-white/60 ring-1 ring-black/5 hover:bg-white/80 transition">
              <Github className="h-5 w-5 text-slate-800" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-xl bg-white/60 ring-1 ring-black/5 hover:bg-white/80 transition">
              <Linkedin className="h-5 w-5 text-slate-800" />
            </a>
            <button className="md:hidden p-2 rounded-xl bg-white/60 ring-1 ring-black/5 hover:bg-white/80 transition" aria-label="Menu">
              <Menu className="h-5 w-5 text-slate-800" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

import { Mail, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/70 bg-white/70 p-8 sm:p-10 backdrop-blur shadow-sm shadow-black/5">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-slate-900 p-2"><Mail className="h-5 w-5 text-white" /></div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Let’s build something</h2>
          </div>
          <p className="mt-3 text-slate-600">Have a project in mind or want to collaborate? Drop your email and I’ll get back within 24 hours.</p>
          <form className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
            <input type="email" required placeholder="your@email.com" className="w-full rounded-xl border border-slate-300/80 bg-white/80 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition">
              <Send className="h-4 w-4" />
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

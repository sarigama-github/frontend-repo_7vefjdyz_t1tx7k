import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.15),transparent_45%)]">
      <Navbar />
      <Hero />
      <Features />
      <Work />
      <Contact />
      <footer className="py-10">
        <p className="text-center text-sm text-slate-500">© {new Date().getFullYear()} — Built with care.</p>
      </footer>
    </div>
  )
}

export default App

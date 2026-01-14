import { Header } from './components/Header'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ overflow: 'visible' }}>
      <Header />
      <main className="relative" role="main" style={{ overflow: 'visible' }}>
        <section id="about" aria-label="About section">
          <About />
        </section>
        <section id="contact" aria-label="Contact section">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Team from './components/Team'
import Program from './components/Program'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

/**
 * Page principale du site BDE EFET 2025
 * Assemblage de tous les composants avec scroll fluide
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar - Navigation fixe en haut */}
      <Navbar />

      {/* Hero Section - Landing page avec animations */}
      <Hero />

      {/* Team Section - Présentation de l'équipe */}
      <Team />

      {/* Program Section - Timeline des événements 2025 */}
      <Program />

      {/* Gallery Section - Esprit BDE et valeurs */}
      <Gallery />

      {/* Contact Section - Informations de contact */}
      <Contact />

      {/* Footer - Pied de page avec crédits */}
      <Footer />
    </main>
  )
}

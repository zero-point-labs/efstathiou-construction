import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ArchitectureSection from '@/components/ArchitectureSection'
import ExcellenceInMotion from '@/components/ExcellenceInMotion'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header isDark={true} />
      <Hero />
      <ArchitectureSection />
      <ExcellenceInMotion />
      <ContactSection />
      <Footer />
    </main>
  )
}

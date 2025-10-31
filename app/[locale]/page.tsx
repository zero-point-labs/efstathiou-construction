import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import NewServicesSection from '@/components/NewServicesSection'
import OurWorkSection from '@/components/OurWorkSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header isDark={true} />
      <Hero />
      <AboutSection />
      <OurWorkSection />
      <NewServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

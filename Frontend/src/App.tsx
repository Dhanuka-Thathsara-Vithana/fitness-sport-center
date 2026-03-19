import React, { useState } from 'react'

import AnnouncementBar        from './components/layout/AnnouncementBar'
import Navbar                 from './components/layout/Navbar'
import Footer                 from './components/layout/Footer'

import HeroSection            from './sections/HeroSection'
import AboutSection           from './sections/AboutSection'
import ResultsSection         from './sections/ResultsSection'
import HowItWorksSection      from './sections/HowItWorksSection'
import ServicesSection        from './sections/ServicesSection'
import TrainersSection        from './sections/TrainersSection'
import PlansSection           from './sections/PlansSection'
import GuaranteeBannerSection from './sections/GuaranteeBannerSection'
import FAQSection             from './sections/FAQSection'
import ContactSection         from './sections/ContactSection'

const App: React.FC = () => {
  const [announcementVisible, setAnnouncementVisible] = useState<boolean>(true)
  const topOffset = announcementVisible ? '40px' : '0px'

  return (
    <>
      <AnnouncementBar onDismiss={() => setAnnouncementVisible(false)} />
      <Navbar topOffset={topOffset} />

      <main style={{ paddingTop: topOffset }}>
        <HeroSection        topOffset={topOffset} />
        <AboutSection />
        <ResultsSection />
        <HowItWorksSection />
        <ServicesSection />
        <TrainersSection />
        <PlansSection />
        <GuaranteeBannerSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}

export default App

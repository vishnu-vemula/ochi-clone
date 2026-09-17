'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Preloader } from '@/components/layout/preloader'
import { Navbar } from '@/components/layout/navbar'
import { HeroSection } from '@/components/sections/hero-section'
import { MarqueeSection } from '@/components/sections/marquee-section'
import { AboutSection } from '@/components/sections/about-section'
import { EyesSection } from '@/components/sections/eyes-section'
import { FeaturedProjectsSection } from '@/components/sections/featured-projects-section'
import { ClientReviewsSection } from '@/components/sections/client-reviews-section'
import { AwardsSection } from '@/components/sections/awards-section'
import { CtaSection } from '@/components/sections/cta-section'
import { Footer } from '@/components/layout/footer'

export function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <main className="overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <HeroSection />
          <MarqueeSection />
          <AboutSection />
          <EyesSection />
          <FeaturedProjectsSection />
          <ClientReviewsSection />
          <AwardsSection />
          <CtaSection />
          <Footer />
        </motion.div>
      )}
    </main>
  )
}

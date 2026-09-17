'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SOCIAL_LINKS } from '@/lib/data'

export function AboutSection() {
  return (
    <section className="bg-ochi-lime py-16 lg:py-24 px-5 lg:px-12 relative">
      <div
        className="absolute top-0 left-0 w-full h-8 bg-ochi-green"
        style={{ borderRadius: '0 0 50% 50% / 0 0 100% 100%' }}
      />

      <div className="max-w-[1400px] mx-auto">
        <motion.p
          className="text-[5.5vw] lg:text-[3vw] leading-[1.3] font-light max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          We craft category-defining presentations, brand identities, and digital experiences that{' '}
          <span className="link-underline cursor-pointer">drive funding</span>,{' '}
          <span className="link-underline cursor-pointer">sales</span>, and{' '}
          <span className="link-underline cursor-pointer">market leadership</span>.
        </motion.p>

        <div className="mt-16 lg:mt-24 pt-6 border-t border-ochi-zinc/20 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6">
            <p className="text-sm">What you can expect:</p>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm leading-relaxed">
              We don&apos;t just make slides. We shape strategy, storytelling, design scalable brand
              systems, and build presentations that make people say: &quot;I want in!&quot;
            </p>
            <p className="text-sm leading-relaxed mt-4">
              Our clients make the world go round – from deep tech, aerospace and robotics to music
              festivals and Michelin-starred restaurants.
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="text-sm mb-3">S:</p>
            <div className="flex flex-col gap-1">
              {SOCIAL_LINKS.map((social) => (
                <a key={social} className="text-sm link-underline cursor-pointer w-fit" href="#">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-ochi-zinc/20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl lg:text-3xl mb-6">How we can help:</h2>
            <button className="group inline-flex items-center gap-2 px-6 py-3 bg-ochi-zinc text-white rounded-full text-sm uppercase hover:bg-ochi-zinc/80 transition-all duration-300">
              Read more
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </button>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Team working"
              className="w-full h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

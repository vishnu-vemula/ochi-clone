'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Eyes } from '@/components/ochi/eyes'
import { CONTACT_EMAIL } from '@/lib/data'

export function CtaSection() {
  const containerRef = useRef(null)

  return (
    <section
      ref={containerRef}
      className="bg-ochi-lime py-24 lg:py-40 px-5 lg:px-12 relative overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 w-full h-8 bg-ochi-cream"
        style={{ borderRadius: '0 0 50% 50% / 0 0 100% 100%' }}
      />

      <div className="max-w-[1400px] mx-auto text-center relative">
        <motion.h2
          className="text-[12vw] lg:text-[8vw] font-founders uppercase leading-[0.85] tracking-tight mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready<br />to start<br />the project?
        </motion.h2>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-30 lg:opacity-100">
          <Eyes containerRef={containerRef} />
        </div>

        <div className="flex flex-col items-center gap-4 relative z-10">
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-ochi-zinc text-white rounded-full text-sm uppercase hover:bg-ochi-zinc/80 transition-all duration-300">
            Start the project
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </button>
          <span className="text-sm">OR</span>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group inline-flex items-center gap-2 px-6 py-3 border border-ochi-zinc rounded-full text-sm hover:bg-ochi-zinc hover:text-white transition-all duration-300"
          >
            {CONTACT_EMAIL}
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}

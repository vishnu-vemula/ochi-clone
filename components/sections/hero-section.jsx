'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="min-h-screen bg-ochi-cream pt-24 lg:pt-20 px-5 lg:px-12 relative flex flex-col">
      <div className="flex-1 flex items-center">
        <div className="w-full">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-[16vw] lg:text-[11vw] font-founders uppercase leading-[0.85] tracking-tight text-ochi-zinc m-0">
              We Create
            </h1>

            <div className="flex items-center">
              <div className="w-[14vw] lg:w-[9vw] h-[10vw] lg:h-[7vw] rounded-md overflow-hidden mr-2 flex-shrink-0 relative">
                <img
                  src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                  alt="Presentation slides"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-[16vw] lg:text-[11vw] font-founders uppercase leading-[0.85] tracking-tight text-ochi-zinc m-0">
                Eye-Opening
              </h1>
            </div>

            <h1 className="text-[16vw] lg:text-[11vw] font-founders uppercase leading-[0.85] tracking-tight text-ochi-zinc m-0">
              Presentations
            </h1>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="py-5 border-t border-ochi-zinc/20 flex flex-col lg:flex-row lg:items-center justify-between gap-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-20">
          <p className="text-sm lg:text-base">Presentation and storytelling agency</p>
          <p className="text-sm lg:text-base">For innovation teams and global brands</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-5 py-3 border border-ochi-zinc rounded-full text-sm uppercase hover:bg-ochi-zinc hover:text-white transition-all duration-300">
            Start the project
          </button>
          <button
            className="w-11 h-11 border border-ochi-zinc rounded-full flex items-center justify-center hover:bg-ochi-zinc hover:text-white transition-all duration-300"
            aria-label="Start the project"
          >
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-24 left-1/2 -translate-x-1/2 text-sm opacity-50 hidden lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Scroll down
      </motion.div>
    </section>
  )
}

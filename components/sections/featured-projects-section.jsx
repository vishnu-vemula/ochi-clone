'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/lib/data'

export function FeaturedProjectsSection() {
  return (
    <section className="bg-ochi-cream py-16 lg:py-24 px-5 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl lg:text-5xl mb-12">Featured projects</h2>

        <div className="border-t border-ochi-zinc/20 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.name}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-ochi-zinc" />
                  <span className="text-sm uppercase">{project.name}</span>
                </div>

                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div
                    className={`${project.color} aspect-[4/3] flex items-center justify-center group-hover:scale-95 transition-transform duration-500`}
                  >
                    <h3 className="text-[8vw] lg:text-[4vw] font-founders uppercase text-ochi-zinc opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.name}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 border border-ochi-zinc/30 rounded-full text-xs uppercase hover:bg-ochi-zinc hover:text-white transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-ochi-zinc text-white rounded-full text-sm uppercase hover:bg-ochi-zinc/80 transition-all duration-300">
            View all case studies
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}

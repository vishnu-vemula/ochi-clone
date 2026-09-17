'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { REVIEWS } from '@/lib/data'

export function ClientReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="bg-ochi-cream py-16 lg:py-24 px-5 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl lg:text-5xl mb-12">Clients&apos; reviews</h2>

        <div className="border-b border-ochi-zinc/20">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.company}
              className="border-t border-ochi-zinc/20 py-4 cursor-pointer"
              onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
            >
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-6 lg:col-span-3">
                  <span className="link-underline text-sm lg:text-base">{review.company}</span>
                </div>
                <div className="hidden lg:block lg:col-span-3 text-sm text-ochi-gray">Services:</div>
                <div className="hidden lg:block lg:col-span-3 text-sm">{review.person}</div>
                <div className="col-span-6 lg:col-span-3 text-right">
                  <button className="text-sm uppercase link-underline">
                    {activeIndex === index ? 'Close' : 'Read'}
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 pb-4 grid grid-cols-1 lg:grid-cols-12 gap-6">
                      <div className="lg:col-span-3 lg:col-start-4">
                        <p className="text-sm text-ochi-gray mb-2 lg:hidden">Services:</p>
                        <div className="flex flex-wrap gap-2">
                          {review.services.map((service) => (
                            <span
                              key={service}
                              className="px-3 py-1 border border-ochi-zinc/30 rounded-full text-xs uppercase"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="lg:col-span-4 lg:col-start-7">
                        <div className="w-16 h-16 bg-ochi-zinc/10 rounded-lg mb-4" />
                        <p className="text-sm leading-relaxed">{review.quote}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

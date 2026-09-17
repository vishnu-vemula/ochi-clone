'use client'

import { useRef } from 'react'
import { Eyes } from '@/components/ochi/eyes'

export function EyesSection() {
  const containerRef = useRef(null)

  return (
    <section
      ref={containerRef}
      className="bg-ochi-cream h-[70vh] lg:h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&q=80"
          alt="Office"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10">
        <Eyes containerRef={containerRef} />
      </div>
    </section>
  )
}

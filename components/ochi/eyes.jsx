'use client'

import { useEffect, useState } from 'react'

export function Eyes({ containerRef }) {
  const [rotate, setRotate] = useState({ left: 0, right: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = containerRef?.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const angleLeft = Math.atan2(e.clientY - centerY, e.clientX - (centerX - 80)) * (180 / Math.PI)
      const angleRight = Math.atan2(e.clientY - centerY, e.clientX - (centerX + 80)) * (180 / Math.PI)

      setRotate({ left: angleLeft - 90, right: angleRight - 90 })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [containerRef])

  return (
    <div className="flex gap-4 lg:gap-8">
      {['left', 'right'].map((eye) => (
        <div
          key={eye}
          className="w-[25vw] h-[25vw] max-w-[200px] max-h-[200px] bg-ochi-cream rounded-full flex items-center justify-center"
        >
          <div className="w-[65%] h-[65%] bg-ochi-zinc rounded-full relative overflow-hidden">
            <div
              className="absolute w-full h-full flex items-start justify-center"
              style={{ transform: `rotate(${rotate[eye]}deg)` }}
            >
              <div className="w-3 h-3 lg:w-4 lg:h-4 bg-ochi-cream rounded-full mt-2" />
            </div>
            <span className="absolute inset-0 flex items-center justify-center text-ochi-cream text-xs lg:text-sm uppercase font-medium">
              Play
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

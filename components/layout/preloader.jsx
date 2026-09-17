'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { OchiLogo } from '@/components/ochi/logo'

export function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => onComplete(), 500)
          return 100
        }
        return prev + 2
      })
    }, 30)
    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[999] bg-ochi-zinc flex flex-col justify-between p-8 lg:p-12"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="flex items-start">
        <OchiLogo className="text-white" />
      </div>

      <div>
        <h1 className="text-white text-[12vw] lg:text-[8vw] font-founders uppercase leading-[0.85] tracking-tight">
          We create<br />eye-opening<br />presentations
        </h1>
      </div>

      <div className="flex justify-between items-end">
        <span className="text-white text-sm">Loading:</span>
        <span className="text-white text-[15vw] lg:text-[10vw] font-founders leading-none">
          {progress}%
        </span>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-white"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ ease: 'linear' }}
      />
    </motion.div>
  )
}

'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { OchiLogo } from '@/components/ochi/logo'
import { MENU_ITEMS, SOCIAL_LINKS } from '@/lib/data'

export function FullScreenMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] bg-ochi-zinc"
          initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
          animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          exit={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-center justify-between px-6 lg:px-12 py-4">
            <OchiLogo className="text-white" />
            <button onClick={onClose} className="text-white p-2" aria-label="Close menu">
              <X size={28} strokeWidth={1.5} />
            </button>
          </div>

          <div className="px-6 lg:px-12 pt-8 lg:pt-16">
            <nav className="flex flex-col gap-2">
              {MENU_ITEMS.map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-white text-[12vw] lg:text-[8vw] font-founders uppercase leading-[0.95] hover:text-ochi-gray transition-colors"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </div>

          <motion.div
            className="absolute bottom-8 left-6 lg:left-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <p className="text-ochi-gray text-sm mb-3">S:</p>
            <div className="flex flex-col gap-1">
              {SOCIAL_LINKS.map((link) => (
                <a key={link} href="#" className="text-white text-sm link-underline w-fit">
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

'use client'

import { useState } from 'react'
import { OchiLogo } from '@/components/ochi/logo'
import { FullScreenMenu } from '@/components/layout/full-screen-menu'
import { NAV_LINKS } from '@/lib/data'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-5 lg:px-12 py-4 flex items-center justify-between bg-ochi-cream">
        <a href="#" className="text-ochi-zinc" aria-label="ochi home">
          <OchiLogo />
        </a>

        <div className="hidden lg:flex items-center gap-10 text-ochi-zinc text-sm absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((item) => (
            <a key={item} className="link-underline cursor-pointer hover:opacity-70 transition-opacity">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-ochi-zinc link-underline cursor-pointer hidden md:block">
            Contact us
          </a>

          <button
            className="lg:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="w-6 h-[2px] bg-ochi-zinc"></span>
            <span className="w-6 h-[2px] bg-ochi-zinc"></span>
          </button>
        </div>
      </nav>

      <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

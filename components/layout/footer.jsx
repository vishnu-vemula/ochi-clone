'use client'

import { OchiLogo } from '@/components/ochi/logo'
import { FOOTER_LINKS, SOCIAL_LINKS, CONTACT_EMAIL } from '@/lib/data'

export function Footer() {
  return (
    <footer className="bg-ochi-zinc text-white py-12 lg:py-20 px-5 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-[10vw] lg:text-[5vw] font-founders uppercase leading-[0.85]">
              Eye-<br />opening
            </h3>
          </div>

          <div>
            <p className="text-sm text-ochi-gray mb-4">M:</p>
            <a className="text-sm link-underline" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </div>

          <div>
            <p className="text-sm text-ochi-gray mb-4">S:</p>
            <div className="flex flex-col gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a key={social} className="text-sm link-underline w-fit" href="#">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-ochi-gray mb-4">L:</p>
            <div className="flex flex-col gap-2">
              <span className="text-sm">202-1965 W 4th Ave</span>
              <span className="text-sm">Vancouver, Canada</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="flex flex-wrap gap-4">
            {FOOTER_LINKS.map((item) => (
              <a key={item} className="text-sm link-underline" href="#">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <OchiLogo className="text-white" />
          </div>
        </div>

        <div className="mt-8 text-xs text-ochi-gray">© ochi design 2019-2025. Legal Terms</div>
      </div>
    </footer>
  )
}

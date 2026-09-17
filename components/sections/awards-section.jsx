'use client'

import { OchiLogo } from '@/components/ochi/logo'

export function AwardsSection() {
  return (
    <section className="bg-ochi-cream py-16 lg:py-24 px-5 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-ochi-green text-ochi-lime rounded-xl p-8 h-72 lg:h-80 flex flex-col justify-between">
            <OchiLogo className="text-ochi-lime" width={100} height={40} />
            <div>
              <span className="px-4 py-2 border border-ochi-lime/30 rounded-full text-xs uppercase">
                ©2019–2025
              </span>
            </div>
          </div>

          <div className="bg-ochi-zinc text-white rounded-xl p-8 h-72 lg:h-80 flex flex-col justify-between">
            <div className="flex items-center justify-center flex-1">
              <span className="text-4xl font-bold">Clutch</span>
            </div>
            <div>
              <span className="px-4 py-2 border border-white/30 rounded-full text-xs uppercase">
                Rating 5.0 on Clutch
              </span>
            </div>
          </div>

          <div className="bg-ochi-zinc text-white rounded-xl p-8 h-72 lg:h-80 flex flex-col justify-between">
            <div className="flex items-center justify-center flex-1">
              <span className="text-4xl font-bold">The Futur</span>
            </div>
            <div>
              <span className="px-4 py-2 border border-white/30 rounded-full text-xs uppercase">
                Business Bootcamp Alumni
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

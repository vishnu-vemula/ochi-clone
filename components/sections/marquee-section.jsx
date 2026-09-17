export function MarqueeSection() {
  return (
    <section className="bg-ochi-green text-white py-8 lg:py-12 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-8 bg-ochi-cream"
        style={{ borderRadius: '0 0 50% 50% / 0 0 100% 100%' }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-8 bg-ochi-cream"
        style={{ borderRadius: '50% 50% 0 0 / 100% 100% 0 0' }}
      />

      <div className="border-t border-b border-white/20 py-5">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-[9vw] lg:text-[6vw] font-founders uppercase mx-6">
              We Are Ochi —
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

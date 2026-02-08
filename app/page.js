'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

// Preloader Component
function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
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
        <svg width="72" height="30" viewBox="0 0 72 30" fill="none" className="text-white">
          <path d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z" fill="currentColor"/>
          <path d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z" fill="currentColor"/>
          <path d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z" fill="currentColor"/>
          <path d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z" fill="currentColor"/>
          <path d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z" fill="currentColor"/>
        </svg>
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
      
      {/* Progress bar */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-white"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ ease: 'linear' }}
      />
    </motion.div>
  )
}

// Eyes Component
function Eyes({ containerRef }) {
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
        <div key={eye} className="w-[25vw] h-[25vw] max-w-[200px] max-h-[200px] bg-ochi-cream rounded-full flex items-center justify-center">
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

// Navbar Component
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 lg:px-12 py-4 flex items-center justify-between mix-blend-difference">
      <div className="text-white">
        <svg width="72" height="30" viewBox="0 0 72 30" fill="none">
          <path d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z" fill="currentColor"/>
          <path d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z" fill="currentColor"/>
          <path d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z" fill="currentColor"/>
          <path d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z" fill="currentColor"/>
          <path d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="hidden lg:flex items-center gap-8 text-white text-sm">
        {['Services', 'Our work', 'About us', 'Insights', 'Contact'].map((item) => (
          <a key={item} className="link-underline cursor-pointer hover:opacity-70 transition-opacity">
            {item}
          </a>
        ))}
      </div>
      <div className="lg:hidden text-white">
        <span className="text-sm">Menu</span>
      </div>
    </nav>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className="min-h-screen bg-ochi-cream pt-32 pb-20 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.h1 
          className="text-[14vw] lg:text-[9.5vw] font-founders uppercase leading-[0.85] tracking-tight text-ochi-zinc"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We create<br />eye-opening<br />presentations
        </motion.h1>
        
        <motion.div 
          className="mt-16 lg:mt-24 pt-6 border-t border-ochi-zinc/20 grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-sm lg:text-base">Presentation and storytelling agency</p>
          <p className="text-sm lg:text-base max-w-xs">For innovation teams and global brands</p>
          <div className="lg:text-right">
            <button className="group inline-flex items-center gap-2 px-6 py-3 border border-ochi-zinc rounded-full text-sm uppercase hover:bg-ochi-zinc hover:text-white transition-all duration-300">
              Start the project
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm opacity-50 hidden lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Scroll down
      </motion.div>
    </section>
  )
}

// Marquee Section
function MarqueeSection() {
  return (
    <section className="bg-ochi-green text-white py-10 lg:py-16 relative overflow-hidden">
      {/* Rounded corners */}
      <div className="absolute top-0 left-0 w-full h-10 bg-ochi-cream" style={{ borderRadius: '0 0 50% 50% / 0 0 100% 100%' }} />
      <div className="absolute bottom-0 left-0 w-full h-10 bg-ochi-cream" style={{ borderRadius: '50% 50% 0 0 / 100% 100% 0 0' }} />
      
      <div className="border-t border-b border-white/20 py-6">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-[10vw] lg:text-[6vw] font-founders uppercase mx-8">
              WE ARE OCHI &nbsp;—&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  return (
    <section className="bg-ochi-lime py-16 lg:py-24 px-6 lg:px-12 relative">
      {/* Rounded corners */}
      <div className="absolute top-0 left-0 w-full h-10 bg-ochi-green" style={{ borderRadius: '0 0 50% 50% / 0 0 100% 100%' }} />
      
      <div className="max-w-[1400px] mx-auto">
        <motion.p 
          className="text-[5vw] lg:text-[3vw] leading-[1.3] font-light max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          We craft category-defining presentations, brand identities, and digital experiences that{' '}
          <span className="link-underline cursor-pointer">drive funding</span>,{' '}
          <span className="link-underline cursor-pointer">sales</span>, and{' '}
          <span className="link-underline cursor-pointer">market leadership</span>.
        </motion.p>
        
        <div className="mt-16 lg:mt-24 pt-6 border-t border-ochi-zinc/20 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6">
            <p className="text-sm">What you can expect:</p>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm leading-relaxed">
              We don't just make slides. We shape strategy, storytelling, design scalable brand systems, and build presentations that make people say: "I want in!"
            </p>
            <p className="text-sm leading-relaxed mt-4">
              Our clients make the world go round – from deep tech, aerospace and robotics to music festivals and Michelin-starred restaurants.
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="text-sm mb-3">S:</p>
            <div className="flex flex-col gap-1">
              {['Instagram', 'Behance', 'Facebook', 'Linkedin'].map((social) => (
                <a key={social} className="text-sm link-underline cursor-pointer w-fit">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-6 border-t border-ochi-zinc/20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl lg:text-3xl mb-6">How we can help:</h2>
            <button className="group inline-flex items-center gap-2 px-6 py-3 bg-ochi-zinc text-white rounded-full text-sm uppercase hover:bg-ochi-zinc/80 transition-all duration-300">
              Read more
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </button>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
              alt="Team working"
              className="w-full h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// Eyes Section
function EyesSection() {
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

// Featured Projects
function FeaturedProjects() {
  const projects = [
    { name: 'Fyde', tags: ['Audit', 'Copywriting', 'Sales Deck', 'Slides Design'], color: 'bg-ochi-lime' },
    { name: 'Vise', tags: ['Agency', 'Company Presentation'], color: 'bg-ochi-lime' },
    { name: 'Trawa', tags: ['Brand Identity', 'Design Research', 'Investor Deck'], color: 'bg-ochi-lime' },
    { name: 'Premium Blend', tags: ['Branded Template'], color: 'bg-ochi-lime' },
  ]

  return (
    <section className="bg-ochi-cream py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl lg:text-5xl mb-12">Featured projects</h2>
        
        <div className="border-t border-ochi-zinc/20 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
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
                  <div className={`${project.color} aspect-[4/3] flex items-center justify-center group-hover:scale-95 transition-transform duration-500`}>
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

// Client Reviews Section
function ClientReviews() {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const reviews = [
    { company: 'Karman Ventures', person: 'William Barnes', services: ['Investor Deck', 'Sales Deck'] },
    { company: 'Planetly', person: 'Nina Walloch', services: ['Agency', 'Investor Deck', 'Sales Deck'] },
    { company: 'Workiz Easy', person: 'Tomer Levy', services: ['Sales Deck', 'Redesign'] },
    { company: 'Premium Blend', person: 'Ellen Kim', services: ['Branded Template', 'Illustrations'] },
  ]

  return (
    <section className="bg-ochi-cream py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl lg:text-5xl mb-12">Clients' reviews</h2>
        
        <div className="border-b border-ochi-zinc/20">
          {reviews.map((review, index) => (
            <motion.div 
              key={review.company}
              className="border-t border-ochi-zinc/20 py-4 cursor-pointer"
              onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
            >
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-6 lg:col-span-3">
                  <span className="link-underline text-sm lg:text-base">{review.company}</span>
                </div>
                <div className="hidden lg:block lg:col-span-3 text-sm text-ochi-gray">
                  Services:
                </div>
                <div className="hidden lg:block lg:col-span-3 text-sm">
                  {review.person}
                </div>
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
                            <span key={service} className="px-3 py-1 border border-ochi-zinc/30 rounded-full text-xs uppercase">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="lg:col-span-4 lg:col-start-7">
                        <div className="w-16 h-16 bg-ochi-zinc/10 rounded-lg mb-4" />
                        <p className="text-sm leading-relaxed">
                          Outstanding work! The team delivered exactly what we needed with exceptional attention to detail and creativity.
                        </p>
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

// Awards Section
function AwardsSection() {
  return (
    <section className="bg-ochi-cream py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* OCHI Logo Card */}
          <div className="bg-ochi-green text-ochi-lime rounded-lg p-8 h-80 flex flex-col justify-between lg:col-span-1">
            <svg width="100" height="40" viewBox="0 0 72 30" fill="currentColor">
              <path d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032Z"/>
              <path d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z"/>
              <path d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z"/>
              <path d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z"/>
              <path d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z"/>
            </svg>
            <div>
              <span className="px-4 py-2 border border-ochi-lime/30 rounded-full text-xs uppercase">
                ©2019–2025
              </span>
            </div>
          </div>
          
          {/* Clutch Card */}
          <div className="bg-ochi-zinc text-white rounded-lg p-8 h-80 flex flex-col justify-between">
            <div className="flex items-center justify-center flex-1">
              <span className="text-4xl font-bold">Clutch</span>
            </div>
            <div>
              <span className="px-4 py-2 border border-white/30 rounded-full text-xs uppercase">
                Rating 5.0 on Clutch
              </span>
            </div>
          </div>
          
          {/* The Futur Card */}
          <div className="bg-ochi-zinc text-white rounded-lg p-8 h-80 flex flex-col justify-between">
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

// CTA Section
function CTASection() {
  const containerRef = useRef(null)
  
  return (
    <section 
      ref={containerRef}
      className="bg-ochi-lime py-24 lg:py-40 px-6 lg:px-12 relative overflow-hidden"
    >
      {/* Rounded corner */}
      <div className="absolute top-0 left-0 w-full h-10 bg-ochi-cream" style={{ borderRadius: '0 0 50% 50% / 0 0 100% 100%' }} />
      
      <div className="max-w-[1400px] mx-auto text-center relative">
        <motion.h2 
          className="text-[12vw] lg:text-[8vw] font-founders uppercase leading-[0.85] tracking-tight mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready<br />to start<br />the project?
        </motion.h2>
        
        {/* Eyes */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-30 lg:opacity-100">
          <Eyes containerRef={containerRef} />
        </div>
        
        <div className="flex flex-col items-center gap-4 relative z-10">
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-ochi-zinc text-white rounded-full text-sm uppercase hover:bg-ochi-zinc/80 transition-all duration-300">
            Start the project
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </button>
          <span className="text-sm">OR</span>
          <button className="group inline-flex items-center gap-2 px-6 py-3 border border-ochi-zinc rounded-full text-sm hover:bg-ochi-zinc hover:text-white transition-all duration-300">
            hello@ochi.design
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-ochi-zinc text-white py-12 lg:py-20 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-[10vw] lg:text-[5vw] font-founders uppercase leading-[0.85]">
              Eye-<br />opening
            </h3>
          </div>
          
          <div>
            <p className="text-sm text-ochi-gray mb-4">M:</p>
            <a className="text-sm link-underline" href="mailto:hello@ochi.design">hello@ochi.design</a>
          </div>
          
          <div>
            <p className="text-sm text-ochi-gray mb-4">S:</p>
            <div className="flex flex-col gap-2">
              {['Instagram', 'Behance', 'Facebook', 'Linkedin'].map((social) => (
                <a key={social} className="text-sm link-underline w-fit">{social}</a>
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
            {['Services', 'Our work', 'About us', 'Insights', 'Contact'].map((item) => (
              <a key={item} className="text-sm link-underline">{item}</a>
            ))}
          </div>
          
          <div className="flex items-center gap-8">
            <svg width="72" height="30" viewBox="0 0 72 30" fill="currentColor">
              <path d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032Z"/>
              <path d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z"/>
              <path d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z"/>
              <path d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z"/>
              <path d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z"/>
            </svg>
          </div>
        </div>
        
        <div className="mt-8 text-xs text-ochi-gray">
          © ochi design 2019-2025. Legal Terms
        </div>
      </div>
    </footer>
  )
}

// Main App
export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <main className="overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <HeroSection />
          <MarqueeSection />
          <AboutSection />
          <EyesSection />
          <FeaturedProjects />
          <ClientReviews />
          <AwardsSection />
          <CTASection />
          <Footer />
        </motion.div>
      )}
    </main>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Menu, X, Car } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobileMenuOpen])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop&auto=format)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* Full-Width Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 w-full z-[110]"
      >
        <div 
          className={`w-full px-6 sm:px-8 lg:px-12 py-4 transition-all duration-300 ease-out ${
            isScrolled 
              ? 'bg-slate-900/90 backdrop-blur-xl border-b border-white/10' 
              : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center cursor-pointer gap-2"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <Car className="w-8 h-8 text-blue-500" />
              <span className="font-bold text-white text-xl tracking-wide">UNICARS</span>
            </motion.div>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#inventory" 
                className="text-white hover:text-blue-400 font-medium gentle-animation hover:scale-105"
              >
                Inventory
              </a>
              <a 
                href="#about" 
                className="text-white hover:text-blue-400 font-medium gentle-animation hover:scale-105"
              >
                About Us
              </a>
              <a 
                href="#services" 
                className="text-white hover:text-blue-400 font-medium gentle-animation hover:scale-105"
              >
                Services
              </a>
              <a 
                href="#team" 
                className="text-white hover:text-blue-400 font-medium gentle-animation hover:scale-105"
              >
                Our Team
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-blue-400 font-medium gentle-animation hover:scale-105"
              >
                Contact
              </a>
            </div>

            {/* Right Side - CTA + Mobile Menu */}
            <div className="flex items-center space-x-3 relative">
              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact')
                  contactSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="hidden sm:block bg-blue-600 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 gentle-animation cursor-pointer"
              >
                Get in Touch
              </motion.button>

              {/* Mobile Hamburger Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden glass-effect p-3 rounded-full text-white hover:bg-white/20 active:bg-white/30 gentle-animation cursor-pointer z-[120] relative"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-md z-[80] cursor-pointer"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-slate-900/95 backdrop-blur-xl border-l border-white/10 z-[90] mobile-menu-panel pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          {/* Close Button at the top */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="glass-effect p-3 rounded-full text-white hover:bg-white/20 active:bg-white/30 gentle-animation cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex flex-col px-6 pb-6 h-full">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-4 text-white">
              <a 
                href="#inventory" 
                className="mobile-menu-link px-4 py-3 hover:text-blue-400 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inventory
              </a>
              <a 
                href="#about" 
                className="mobile-menu-link px-4 py-3 hover:text-blue-400 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#services" 
                className="mobile-menu-link px-4 py-3 hover:text-blue-400 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#team" 
                className="mobile-menu-link px-4 py-3 hover:text-blue-400 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Team
              </a>
              <a 
                href="#contact" 
                className="mobile-menu-link px-4 py-3 hover:text-blue-400 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>

            {/* Mobile CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contact')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
                setIsMobileMenuOpen(false)
              }}
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 gentle-animation mt-8 cursor-pointer"
            >
              Get in Touch
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Hero Content - Lower Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-12 left-6 sm:left-8 lg:left-12 z-40"
      >
        <div className="max-w-2xl">
          <p className="text-blue-400 font-semibold mb-4 text-lg">UNICARS LTD</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-white mb-6">
            <span className="block">DRIVING</span>
            <span className="block">YOUR</span>
            <span className="block text-blue-400">STORIES</span>
          </h1>
          <p className="text-white/80 text-lg sm:text-xl max-w-lg mb-8">
            Discover your perfect new car. Quality vehicles, exceptional service, and a buying experience you'll love.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const inventorySection = document.getElementById('inventory')
                inventorySection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 gentle-animation cursor-pointer"
            >
              Browse Inventory
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contact')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/20 gentle-animation cursor-pointer border border-white/20"
            >
              Schedule Test Drive
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

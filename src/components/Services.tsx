'use client'

import { useState, useEffect } from 'react'
import { Car, CreditCard, Wrench, Shield, RefreshCw, Truck } from 'lucide-react'
import { motion } from 'framer-motion'

export function Services() {
  const [isVisible, setIsVisible] = useState(false)

  const services = [
    {
      id: 'new-cars',
      title: "New Car Sales",
      description: "Browse our extensive selection of brand new vehicles from top manufacturers with full warranty coverage.",
      icon: Car,
      color: 'bg-blue-500'
    },
    {
      id: 'financing',
      title: "Flexible Financing", 
      description: "Competitive rates and flexible payment plans tailored to your budget. Get pre-approved in minutes.",
      icon: CreditCard,
      color: 'bg-emerald-500'
    },
    {
      id: 'service',
      title: "Service & Maintenance",
      description: "Expert technicians and genuine parts to keep your vehicle running smoothly for years to come.",
      icon: Wrench,
      color: 'bg-purple-500'
    },
    {
      id: 'warranty',
      title: "Extended Warranty",
      description: "Peace of mind with comprehensive warranty packages that protect your investment.",
      icon: Shield,
      color: 'bg-blue-500'
    },
    {
      id: 'trade-in',
      title: "Trade-In Program",
      description: "Get the best value for your current vehicle with our fair and transparent trade-in assessments.",
      icon: RefreshCw,
      color: 'bg-emerald-500'
    },
    {
      id: 'delivery',
      title: "Home Delivery",
      description: "Can't come to us? We'll bring your new car directly to your doorstep at no extra cost.",
      icon: Truck,
      color: 'bg-purple-500'
    }
  ]

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="services" className="relative py-20 bg-slate-900">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-900/15 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-3 mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-blue-200/80">
              What We Offer
            </span>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
          </div>
          
          <h2 className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-white transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            Our Services
          </h2>
          
          <p className={`text-xl text-blue-100/80 leading-relaxed max-w-3xl mx-auto transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Everything you need for a complete car ownership experience
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-blue-100/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
              Ready to Find Your Perfect Car?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our team is here to help you every step of the way. Schedule a visit or give us a call today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Schedule a Visit
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                Call Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

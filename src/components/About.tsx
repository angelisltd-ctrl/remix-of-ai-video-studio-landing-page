'use client'

import { useEffect, useState } from 'react'
import { Search, FileCheck, Car, Key, Heart } from 'lucide-react'

export function About() {
  const [activeStep, setActiveStep] = useState(-1)
  const [animationStarted, setAnimationStarted] = useState(false)

  const processSteps = [
    {
      number: "01",
      title: "Current Offers",
      description: "Browse and discover our Special Offers",
      icon: Search,
      color: "bg-blue-500",
      link: "https://www.unicars.com/gr/offers-sales.php"
    },
    {
      number: "02", 
      title: "Special Offers",
      description: "Check our Special Offers on eHub",
      icon: FileCheck,
      color: "bg-emerald-500",
      link: "https://www.ehub.unicars.com.cy/"
    },
    {
      number: "03",
      title: "Test Drive",
      description: "Experience your chosen vehicle firsthand with no pressure",
      icon: Car,
      color: "bg-purple-500",
      link: "https://www.unicars.com/gr/testdrive.php"
    },
    {
      number: "05",
      title: "Ongoing Support",
      description: "Contact us",
      icon: Heart,
      color: "bg-emerald-500",
      link: "https://www.unicars.com/gr/contactform.php"
    }
  ]

  useEffect(() => {
    setTimeout(() => {
      setAnimationStarted(true)
      processSteps.forEach((_, index) => {
        setTimeout(() => {
          setActiveStep(index)
        }, index * 800 + 500)
      })
    }, 1000)
  }, [])

  return (
    <section id="about" className="relative py-20 bg-background overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground">
            Your Journey to a New Car
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We've streamlined the car buying experience to make it easy and enjoyable
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              const CardWrapper = step.link ? 'a' : 'div'
              const cardProps = step.link ? { href: step.link, target: "_blank", rel: "noopener noreferrer" } : {}
              
              return (
                <CardWrapper
                  key={step.number}
                  {...cardProps}
                  className={`relative bg-card clean-border rounded-2xl p-6 text-center transition-all duration-500 ${
                    activeStep >= index ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-4'
                  } ${step.link ? 'hover:scale-105 cursor-pointer' : ''}`}
                >
                  {/* Step Number */}
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Step Title */}
                  <h3 className="font-black text-lg mb-2 text-foreground">
                    {step.title}
                  </h3>
                  
                  {/* Step Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connector Line (hidden on mobile and last item) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 -right-3 w-6 h-0.5 bg-border" />
                  )}
                </CardWrapper>
              )
            })}
          </div>
        </div>

        {/* About Text */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-black mb-6 text-foreground">Why Choose Unicars?</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            At Unicars Ltd, we believe buying a car should be an exciting experience, not a stressful one. 
            Our team of dedicated professionals is committed to helping you find the perfect vehicle 
            that fits your lifestyle and budget.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With our transparent pricing, no-pressure sales approach, and comprehensive after-sales support, 
            we're not just selling cars – we're building relationships that last a lifetime.
          </p>
        </div>
      </div>
    </section>
  )
}

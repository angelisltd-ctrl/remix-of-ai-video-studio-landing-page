'use client'

import { MapPin, Building2, Wrench, Car, Paintbrush } from 'lucide-react'

export function Contact() {
  const locations = [
    {
      title: "Headquarters",
      icon: Building2,
      address: "144, Giannou Kranidioti",
      city: "Latsia, 2235",
      country: "Cyprus",
      color: "bg-blue-600"
    },
    {
      title: "Workshops",
      icon: Wrench,
      address: "144, Giannou Kranidioti",
      city: "Latsia, 2235",
      country: "Cyprus",
      color: "bg-emerald-600"
    },
    {
      title: "Showrooms",
      icon: Car,
      address: "144, Giannou Kranidioti",
      city: "Latsia, 2235",
      country: "Cyprus",
      color: "bg-purple-600"
    },
    {
      title: "Body and Paint",
      icon: Paintbrush,
      address: "144, Giannou Kranidioti",
      city: "Latsia, 2235",
      country: "Cyprus",
      color: "bg-orange-600"
    }
  ]

  return (
    <section id="contact" className="relative py-32 bg-card/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Our Locations
            </span>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <span className="block mb-2">Visit Us Today</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We'd love to help you find your perfect car
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {locations.map((location) => {
            const Icon = location.icon
            return (
              <div
                key={location.title}
                className="bg-background clean-border rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-14 h-14 ${location.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-black mb-3 text-foreground">
                  {location.title}
                </h3>
                
                <div className="flex items-start justify-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    {location.address}<br />
                    {location.city}<br />
                    {location.country}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

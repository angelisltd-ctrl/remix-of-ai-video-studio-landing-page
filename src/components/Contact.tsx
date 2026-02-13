'use client'

import { MapPin, Building2, Wrench, Car, Paintbrush, Phone } from 'lucide-react'

interface LocationAddress {
  name: string
  address: string
  city: string
  tel: string
}

interface LocationGroup {
  title: string
  icon: typeof Building2
  color: string
  addresses: LocationAddress[]
}

export function Contact() {
  const locations: LocationGroup[] = [
    {
      title: "Headquarters",
      icon: Building2,
      color: "bg-blue-600",
      addresses: [
        { name: "Main Office", address: "144, Giannou Kranidioti", city: "Latsia, 2235", tel: "" }
      ]
    },
    {
      title: "Workshops",
      icon: Wrench,
      color: "bg-emerald-600",
      addresses: [
        { name: "Main Workshop", address: "144, Giannou Kranidioti", city: "Latsia, 2235", tel: "" }
      ]
    },
    {
      title: "Showrooms",
      icon: Car,
      color: "bg-purple-600",
      addresses: [
        { name: "Nicosia – Sales Hub", address: "9 Megaron Street", city: "2032 Strovolos", tel: "+357 22366366" },
        { name: "Limassol VW", address: "122 Franklin Roosevelt Avenue", city: "3011 Zakaki", tel: "+357 25819799" },
        { name: "Limassol Audi", address: "37 Omonia Ave.", city: "3052", tel: "+357 25567577" },
        { name: "Larnaka", address: "2 Eleftherias Avenue", city: "7101 Aradippou", tel: "+357 24811033" },
        { name: "Paphos Offices", address: "90 Mesogis Avenue", city: "8280", tel: "+357 26954626" },
        { name: "Famagusta Offices", address: "71 Sotiros Avenue", city: "5286 Paralimni", tel: "+357 23743888" }
      ]
    },
    {
      title: "Body and Paint",
      icon: Paintbrush,
      color: "bg-orange-600",
      addresses: [
        { name: "Main Facility", address: "144, Giannou Kranidioti", city: "Latsia, 2235", tel: "" }
      ]
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
                
                <h3 className="text-xl font-black mb-4 text-foreground">
                  {location.title}
                </h3>
                
                <div className="space-y-4">
                  {location.addresses.map((addr) => (
                    <div key={addr.name} className="text-left border-l-2 border-muted pl-3">
                      <p className="text-sm font-semibold text-foreground mb-1">{addr.name}</p>
                      <div className="flex items-start gap-1.5 text-muted-foreground mb-1">
                        <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                        <p className="text-xs leading-relaxed">
                          {addr.address}<br />{addr.city}
                        </p>
                      </div>
                      {addr.tel && (
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                          <a href={`tel:${addr.tel.replace(/\s/g, '')}`} className="text-xs hover:text-foreground transition-colors">
                            {addr.tel}
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

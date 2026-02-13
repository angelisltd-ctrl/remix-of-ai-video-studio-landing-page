'use client'

import { MapPin, Building2, Wrench, Car, Paintbrush, Phone, Clock, Shield } from 'lucide-react'

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
        { name: "Main Office", address: "144, Giannou Kranidioti", city: "Latsia, 2235", tel: "+357 22204000" }
      ]
    },
    {
      title: "Body and Paint",
      icon: Paintbrush,
      color: "bg-orange-600",
      addresses: [
        { name: "Nicosia Paint Shop and Body Shop", address: "45A Tripolis Street", city: "2235 Latsia", tel: "+357 22204192" }
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
      title: "Workshops",
      icon: Wrench,
      color: "bg-emerald-600",
      addresses: [
        { name: "Nicosia After Sales Hub", address: "144 Giannou Kranidiotis Ave.", city: "2235 Latsia", tel: "+357 22204222" },
        { name: "Limassol Workshop and Spare Parts", address: "204 Franklin Roosevelt Ave.", city: "3045 Zakaki", tel: "+357 25827300" },
        { name: "Larnaca Workshop and Spare Parts", address: "4 Pireos", city: "7101 Aradippou", tel: "+357 24533777" },
        { name: "Paphos Workshop and Spare Parts", address: "13 Charalampou Pettemeridis", city: "Industrial Area Geroskipou, 8028", tel: "+357 26967444" }
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
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${addr.address}, ${addr.city}, Cyprus`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-1.5 text-muted-foreground mb-1 hover:text-foreground transition-colors"
                      >
                        <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                        <p className="text-xs leading-relaxed underline-offset-2 hover:underline">
                          {addr.address}<br />{addr.city}
                        </p>
                      </a>
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

        {/* Working Hours */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-3xl sm:text-4xl font-black text-foreground">Winter Hours</h3>
              <Clock className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Showrooms */}
            <div className="bg-background clean-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Car className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-black text-foreground">Showrooms</h4>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="font-semibold text-foreground">Monday - Friday:</span><br />08:30-13:00, 15:00 – 18:00</p>
                <p><span className="font-semibold text-foreground">Wednesday:</span> 08:30-13:00</p>
                <p><span className="font-semibold text-foreground">Saturday:</span> 09:00-13:00</p>
              </div>
            </div>

            {/* Workshops */}
            <div className="bg-background clean-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-black text-foreground">Workshops</h4>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="font-semibold text-foreground">Monday-Thursday:</span><br />07:30 – 13:00 / 13:30 - 16:15</p>
                <p><span className="font-semibold text-foreground">Friday:</span> 07:30 – 13:45</p>
              </div>
            </div>

            {/* Body & Paint */}
            <div className="bg-background clean-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                  <Paintbrush className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-black text-foreground">Body & Paint</h4>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="font-semibold text-foreground">Monday-Thursday:</span><br />07:30 – 13:00 / 13:30 - 16:15</p>
                <p><span className="font-semibold text-foreground">Friday:</span> 07:30 – 13:45</p>
              </div>
            </div>

            {/* Guard Hours */}
            <div className="bg-background clean-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-black text-foreground">Guard Hours</h4>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground mb-1">Nicosia:</p>
                  <p>Monday-Thursday: 06:00 – 09:00 / 16:00 – 22:00</p>
                  <p>Friday: 06:00 – 09:00 / 13:00 – 22:00</p>
                  <p>Sunday: 16:00 – 20:00</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Limassol:</p>
                  <p>Monday-Thursday: 16:00 – 20:00</p>
                  <p>Friday: 13:00 – 20:00</p>
                  <p>Sunday: 16:00 – 20:00</p>
                </div>
              </div>
            </div>

            {/* Head Offices */}
            <div className="bg-background clean-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-black text-foreground">Head Offices</h4>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="font-semibold text-foreground">Monday-Thursday:</span><br />08:30 – 13:30 / 14:00 – 17:15</p>
                <p><span className="font-semibold text-foreground">Friday:</span> 08:30 – 13:30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

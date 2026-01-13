'use client'

import { Car, Fuel, Gauge, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

export function Portfolio() {
  const featuredCars = [
    {
      id: 1,
      name: "2024 BMW 5 Series",
      price: "$62,500",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop&auto=format",
      specs: { fuel: "Petrol", power: "335 HP", year: "2024" },
      tag: "New Arrival"
    },
    {
      id: 2,
      name: "2024 Mercedes-Benz E-Class",
      price: "$58,900",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop&auto=format",
      specs: { fuel: "Hybrid", power: "308 HP", year: "2024" },
      tag: "Popular"
    },
    {
      id: 3,
      name: "2024 Audi A6",
      price: "$56,200",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop&auto=format",
      specs: { fuel: "Petrol", power: "261 HP", year: "2024" },
      tag: "Best Value"
    }
  ]

  return (
    <section id="inventory" className="relative py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Featured Vehicles
            </span>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <span className="block mb-2">Our Latest Arrivals</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Handpicked new vehicles ready for you to drive home today
          </p>
        </div>

        {/* Featured Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card clean-border rounded-2xl overflow-hidden elevated-shadow hover:shadow-2xl transition-all duration-300"
            >
              {/* Car Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {car.tag}
                  </span>
                </div>
              </div>

              {/* Car Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {car.name}
                </h3>
                <p className="text-3xl font-black text-blue-600 mb-4">
                  {car.price}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Fuel className="w-4 h-4" />
                    <span>{car.specs.fuel}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Gauge className="w-4 h-4" />
                    <span>{car.specs.power}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{car.specs.year}</span>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-foreground text-background font-semibold py-3 rounded-lg hover:bg-foreground/90 transition-colors">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
            <Car className="w-5 h-5" />
            View Full Inventory
          </button>
        </div>
      </div>
    </section>
  )
}

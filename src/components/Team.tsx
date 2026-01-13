'use client'

import { ImageWithFallback } from './figma/ImageWithFallback'
import { Linkedin, Mail } from 'lucide-react'

export function Team() {
  const teamMembers = [
    {
      name: "James Mitchell",
      role: "General Manager",
      bio: "20+ years in automotive industry. Passionate about customer satisfaction and building lasting relationships.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format"
    },
    {
      name: "Sarah Williams",
      role: "Sales Director",
      bio: "Expert in matching customers with their perfect vehicle. Known for her no-pressure approach.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&auto=format"
    },
    {
      name: "Michael Chen",
      role: "Finance Manager",
      bio: "Specializes in finding the best financing solutions. Makes the numbers work for every budget.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format"
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Experience",
      bio: "Dedicated to ensuring every customer leaves with a smile. Your satisfaction is her priority.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&auto=format"
    },
    {
      name: "David Thompson",
      role: "Service Manager",
      bio: "Master technician with 15 years experience. Keeps your vehicle running like new.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&auto=format"
    },
    {
      name: "Lisa Park",
      role: "Marketing Manager",
      bio: "Creative mind behind our brand. Connects Unicars with the community through innovative campaigns.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&auto=format"
    }
  ]

  return (
    <section id="team" className="relative py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Meet Our Experts
            </span>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8 text-foreground">
            Our Team
          </h2>
          
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Dedicated professionals committed to your satisfaction
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group bg-card clean-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-3">
                  <button className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Interested in joining our team?</p>
          <button className="bg-foreground text-background font-semibold px-8 py-3 rounded-lg hover:bg-foreground/90 transition-colors">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  )
}

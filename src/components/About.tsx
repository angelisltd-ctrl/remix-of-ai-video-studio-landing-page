'use client'

export function About() {
  return (
    <section id="about" className="relative py-20 bg-background overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground">
            Why Choose Unicars?
          </h2>
        </div>

        {/* About Text */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            At Unicars Ltd, we believe buying a car should be an exciting experience, not a stressful one. 
            Our team of dedicated professionals is committed to helping you find the perfect vehicle 
            that fits your lifestyle and budget.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            With our transparent pricing, no-pressure sales approach, and comprehensive after-sales support, 
            we're not just selling cars – we're building relationships that last a lifetime.
          </p>
          <a
            href="https://www.unicars.com/gr/history.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-opacity"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  )
}

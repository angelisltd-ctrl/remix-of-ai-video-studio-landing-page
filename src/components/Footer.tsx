'use client'

import { useState } from 'react'
import { Facebook, Instagram, Send } from 'lucide-react'
import unicarsLogo from '@/assets/unicars-logo.png'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'

export function Footer() {
  const [email, setEmail] = useState('')
  const { toast } = useToast()

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      })
      setEmail('')
    }
  }

  return (
    <footer className="relative py-20 bg-foreground text-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-12">
          {/* Logo and Description */}
          <div className="col-span-12 md:col-span-4">
            <div>
              <div className="mb-4">
                <img src={unicarsLogo} alt="Unicars - Driving Your Stories" className="h-12 w-auto" />
              </div>
              <p className="text-background/70 leading-relaxed mb-2">
                <strong>Driving Your Stories</strong>
              </p>
              <p className="text-background/70 leading-relaxed mb-6">
                Your trusted partner for quality new vehicles. Experience the difference 
                of buying from a dealership that puts you first.
              </p>
              {/* Social Media Icons */}
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.facebook.com/unicarscyprus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/unicarscy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-6 md:col-span-2">
            <h4 className="font-bold text-lg text-background mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-background/70 hover:text-background transition-colors">About Us</a></li>
              <li><a href="#services" className="text-background/70 hover:text-background transition-colors">Services</a></li>
              <li><a href="#contact" className="text-background/70 hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="col-span-12 md:col-span-6">
            <h4 className="font-bold text-lg text-background mb-4">Stay Updated</h4>
            <p className="text-background/70 leading-relaxed mb-4">
              Subscribe to our newsletter for the latest deals, new arrivals, and exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background/40"
              />
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
              >
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-background/70">
              © 2025 Unicars Ltd. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-background/70">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

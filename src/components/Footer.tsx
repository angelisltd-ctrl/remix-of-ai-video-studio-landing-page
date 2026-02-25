import { Facebook, Instagram } from 'lucide-react'
import unicarsLogo from '@/assets/unicars-logo.png'

export function Footer() {
  return (
    <footer className="relative py-20 bg-foreground text-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center">
          {/* Logo and Description */}
          <div className="mb-4">
            <img src={unicarsLogo} alt="Unicars - Driving Your Stories" className="h-12 w-auto" />
          </div>
          <p className="text-background/70 leading-relaxed mb-2">
            <strong>Driving Your Stories</strong>
          </p>
          <p className="text-background/70 leading-relaxed mb-6 max-w-md">
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

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-background/70">
              © 2025 Unicars Ltd. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-background/70">
              <a href="https://www.unicars.com/gr/privacy.php" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="https://www.unicars.com/gr/terms.php" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">Terms of Service</a>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

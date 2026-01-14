'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import unicarsLogo from '@/assets/unicars-logo.png';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [{
    href: '#about',
    label: 'About Us'
  }, {
    href: '#services',
    label: 'Services'
  }, {
    href: '#contact',
    label: 'Contact'
  }];
  return <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 bg-black text-white">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={unicarsLogo} alt="Unicars - Driving Your Stories" className="h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                {link.label}
              </a>)}
            <Button asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => <a key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>)}
              <Button asChild className="w-full">
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Get in Touch</a>
              </Button>
            </div>
          </nav>}
      </div>
    </header>;
}
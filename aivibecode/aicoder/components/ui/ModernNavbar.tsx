'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function ModernNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`navbar fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95' : 'bg-black/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="gradient-text text-2xl font-bold">ModernTech</div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="hover:text-purple-400 transition-colors duration-300"
              >
                FAQ
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <button className="gradient-bg px-6 py-2 rounded-full text-white font-medium hover:opacity-90 transition-opacity duration-300">
              Get Started
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-purple-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 hover:text-purple-400 transition-colors duration-300 w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="block px-3 py-2 hover:text-purple-400 transition-colors duration-300 w-full text-left"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block px-3 py-2 hover:text-purple-400 transition-colors duration-300 w-full text-left"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="block px-3 py-2 hover:text-purple-400 transition-colors duration-300 w-full text-left"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="block px-3 py-2 hover:text-purple-400 transition-colors duration-300 w-full text-left"
            >
              FAQ
            </button>
            <button className="gradient-bg w-full mt-4 px-6 py-2 rounded-full text-white font-medium">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
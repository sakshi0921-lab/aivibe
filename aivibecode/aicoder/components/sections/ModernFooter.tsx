'use client';

import { Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function ModernFooter() {
  return (
    <footer className="glass-dark py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="gradient-text text-3xl font-bold mb-4">ModernTech</div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering businesses with revolutionary solutions and cutting-edge technology for a better tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">API</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 ModernTech. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
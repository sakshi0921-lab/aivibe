'use client';

import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Security', href: '#' },
    { name: 'Integrations', href: '#' },
    { name: 'API', href: '#' }
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' }
  ],
  support: [
    { name: 'Help Center', href: '#' },
    { name: 'Contact', href: '#contact' },
    { name: 'Documentation', href: '#' },
    { name: 'Status', href: '#' },
    { name: 'Community', href: '#' }
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Security', href: '#' },
    { name: 'Cookies', href: '#' },
    { name: 'Licenses', href: '#' }
  ]
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' }
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid lg:grid-cols-6 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  NeoLanding
                </span>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Transform your ideas into reality with our cutting-edge platform. 
                Built for developers, designed for everyone.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm text-slate-400">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4" />
                  <span>hello@neolanding.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="border-t border-slate-800 pt-8 mb-8">
            <div className="max-w-md mx-auto text-center">
              <h3 className="text-xl font-semibold mb-2">Stay in the loop</h3>
              <p className="text-slate-400 mb-4">
                Get the latest updates, features, and insights delivered to your inbox.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-medium transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 NeoLanding. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200 group"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
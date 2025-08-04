'use client';

import { useEffect, useState } from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ModernHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl floating"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl floating" style={{animationDelay: '-2s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl floating" style={{animationDelay: '-4s'}}></div>
      
      {/* Nebula Effects */}
      <div className="nebula nebula-1"></div>
      <div className="nebula nebula-2"></div>
      <div className="nebula nebula-3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Revolutionary
            <span className="gradient-text block">Solutions</span>
            for Tomorrow
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge technology and innovative solutions that drive growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button 
              className="gradient-bg px-8 py-4 rounded-full text-white font-semibold text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
            </motion.button>
            <motion.button 
              className="glass px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="mr-2" size={20} />
              Watch Demo
            </motion.button>
          </div>
        </motion.div>
        
        {/* Hero Image/Video Placeholder */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="glass-dark rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <Play className="text-6xl text-white/70 mb-4 mx-auto" size={96} />
                <p className="text-xl text-white/70">Product Demo Video</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
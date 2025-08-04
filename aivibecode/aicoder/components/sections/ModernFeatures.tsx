'use client';

import { Rocket, Shield, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: Rocket,
    title: 'Lightning Fast',
    description: 'Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology stack.'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Bank-level security with 99.9% uptime guarantee. Your data is protected with enterprise-grade encryption.'
  },
  {
    icon: TrendingUp,
    title: 'Advanced Analytics',
    description: 'Get deep insights into your data with powerful analytics and real-time reporting capabilities.'
  }
];

export default function ModernFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="features" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the tools and capabilities that make our platform the perfect choice for your business needs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="feature-card glass rounded-2xl p-8 card-3d"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                rotateY: 5, 
                rotateX: 5, 
                translateZ: 20,
                transition: { duration: 0.3 }
              }}
            >
              <div className="feature-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="text-2xl text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
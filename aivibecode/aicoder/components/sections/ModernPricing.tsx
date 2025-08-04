'use client';

import { Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const plans = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for small teams',
    features: [
      'Up to 5 team members',
      '10GB storage',
      'Basic analytics',
      'Email support'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: 79,
    description: 'Best for growing businesses',
    features: [
      'Up to 25 team members',
      '100GB storage',
      'Advanced analytics',
      'Priority support',
      'API access'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'For large organizations',
    features: [
      'Unlimited team members',
      '1TB storage',
      'Custom analytics',
      '24/7 phone support',
      'Custom integrations'
    ],
    popular: false
  }
];

export default function ModernPricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="pricing" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Select the perfect plan for your needs. All plans include our core features with varying levels of usage and support.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`pricing-card rounded-3xl p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                translateY: -15,
                rotateX: 8,
                rotateY: 6,
                transition: { duration: 0.3 }
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="gradient-bg px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="mr-1" size={16} />
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="text-green-400 mr-3" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <motion.button 
                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'gradient-bg hover:opacity-90' 
                    : 'glass-dark hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
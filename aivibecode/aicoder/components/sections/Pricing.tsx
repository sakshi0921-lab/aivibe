'use client';

import { useState } from 'react';
import { Check, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedCard from '@/components/ui/AnimatedCard';

const plans = [
  {
    name: 'Starter',
    price: { monthly: 9, annual: 99 },
    description: 'Perfect for individuals and small projects',
    features: [
      '5 Projects',
      '10GB Storage',
      'Basic Analytics',
      'Community Support',
      'SSL Certificate',
      'Mobile Responsive'
    ],
    popular: false,
    gradient: 'from-slate-600 to-slate-700'
  },
  {
    name: 'Professional',
    price: { monthly: 29, annual: 299 },
    description: 'Ideal for growing businesses and teams',
    features: [
      'Unlimited Projects',
      '100GB Storage',
      'Advanced Analytics',
      'Priority Support',
      'Custom Domain',
      'Team Collaboration',
      'API Access',
      'Advanced Security'
    ],
    popular: true,
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    name: 'Enterprise',
    price: { monthly: 99, annual: 999 },
    description: 'For large organizations with advanced needs',
    features: [
      'Unlimited Everything',
      '1TB Storage',
      'Custom Analytics',
      'Dedicated Support',
      'White Label',
      'Advanced Integrations',
      'SLA Guarantee',
      'Custom Development'
    ],
    popular: false,
    gradient: 'from-purple-600 to-pink-600'
  }
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedCard>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 backdrop-blur-sm mb-4">
              <span className="text-sm font-medium text-blue-700">Simple Pricing</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Choose the perfect plan
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                for your needs
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Start free and scale as you grow. All plans include our core features 
              and 30-day money-back guarantee.
            </p>

            {/* Toggle */}
            <div className="inline-flex items-center p-1 bg-slate-100 rounded-full">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  !isAnnual 
                    ? 'bg-white text-slate-900 shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  isAnnual 
                    ? 'bg-white text-slate-900 shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Annual
                <span className="ml-1 text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">
                  Save 15%
                </span>
              </button>
            </div>
          </AnimatedCard>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <AnimatedCard key={plan.name} delay={index * 0.1}>
              <div className={`relative p-8 bg-white/70 backdrop-blur-sm rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.popular 
                  ? 'border-blue-200 ring-1 ring-blue-200 shadow-lg' 
                  : 'border-slate-200/50 hover:border-slate-300/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-slate-600 ml-1">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                  </div>

                  <Button 
                    className={`w-full bg-gradient-to-r ${plan.gradient} hover:scale-105 transition-all duration-300 text-white shadow-lg`}
                    size="lg"
                  >
                    {plan.popular ? (
                      <>
                        <Zap className="mr-2 h-5 w-5" />
                        Get Started
                      </>
                    ) : (
                      'Choose Plan'
                    )}
                  </Button>
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Pricing Calculator */}
        <AnimatedCard delay={0.4}>
          <div className="mt-16 text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Custom Enterprise Solution
              </h3>
              <p className="text-slate-600 mb-6">
                Need something more? Let's build a custom solution that fits your exact requirements.
              </p>
              <Button variant="outline" size="lg" className="border-slate-300 hover:bg-slate-50">
                Contact Sales
              </Button>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
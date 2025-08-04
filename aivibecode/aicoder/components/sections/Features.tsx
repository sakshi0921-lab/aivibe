'use client';

import { Zap, Shield, Globe, Smartphone, BarChart3, Users, Code, Palette } from 'lucide-react';
import AnimatedCard from '@/components/ui/AnimatedCard';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience blazing-fast performance with our optimized infrastructure and edge computing technology.',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with end-to-end encryption, compliance standards, and advanced threat protection.',
    gradient: 'from-green-400 to-blue-500'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploy worldwide with our global CDN network, ensuring low latency for users everywhere.',
    gradient: 'from-blue-400 to-purple-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Responsive design that works perfectly on all devices, from smartphones to desktops.',
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Comprehensive insights and real-time analytics to help you make data-driven decisions.',
    gradient: 'from-pink-400 to-red-500'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Seamless collaboration tools that keep your team aligned and productive.',
    gradient: 'from-indigo-400 to-cyan-500'
  },
  {
    icon: Code,
    title: 'Developer Friendly',
    description: 'Clean APIs, comprehensive documentation, and SDKs for all major programming languages.',
    gradient: 'from-cyan-400 to-teal-500'
  },
  {
    icon: Palette,
    title: 'Customizable',
    description: 'Fully customizable interface with themes, layouts, and branding options to match your needs.',
    gradient: 'from-teal-400 to-green-500'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedCard>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 backdrop-blur-sm mb-4">
              <span className="text-sm font-medium text-blue-700">Powerful Features</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Everything you need to
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                build amazing products
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools and features you need to create, 
              deploy, and scale your applications with confidence.
            </p>
          </AnimatedCard>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AnimatedCard key={feature.title} delay={index * 0.1}>
              <div className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 hover:border-slate-300/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
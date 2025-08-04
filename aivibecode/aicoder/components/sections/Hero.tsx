'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Play, Star, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedCard from '@/components/ui/AnimatedCard';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="mb-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 backdrop-blur-sm">
                <Star className="h-4 w-4 text-blue-500 mr-2" />
                <span className="text-sm font-medium text-blue-700">Trusted by 10,000+ users</span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Build the
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Future Today
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              Transform your ideas into reality with our cutting-edge platform. 
              Experience the perfect blend of innovation, performance, and elegance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  10K+
                </div>
                <div className="text-sm text-slate-600">Active Users</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  99.9%
                </div>
                <div className="text-sm text-slate-600">Uptime</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-sm text-slate-600">Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Cards */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div className="relative">
              {/* Main Hero Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern workspace"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating Cards */}
              <AnimatedCard className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">+1,247</div>
                    <div className="text-xs text-slate-600">New users today</div>
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50" delay={0.2}>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Zap className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">2.4x faster</div>
                    <div className="text-xs text-slate-600">Performance boost</div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
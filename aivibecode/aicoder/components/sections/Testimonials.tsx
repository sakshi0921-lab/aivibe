'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedCard from '@/components/ui/AnimatedCard';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'This platform has revolutionized our workflow. The performance improvements and user experience are outstanding. Our team productivity has increased by 300%.',
    rating: 5,
    company: 'TechStart Inc.'
  },
  {
    name: 'Michael Chen',
    role: 'CTO, InnovateLab',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'The best investment we\'ve made this year. The scalability and security features are exactly what we needed for our enterprise clients.',
    rating: 5,
    company: 'InnovateLab'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager, GrowthCo',
    avatar: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Incredible user experience and the customer support team is always there when we need them. It\'s like having an extension of our own team.',
    rating: 5,
    company: 'GrowthCo'
  },
  {
    name: 'David Park',
    role: 'Founder, StartupX',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'From day one, this platform helped us scale rapidly. The analytics and insights have been game-changing for our business decisions.',
    rating: 5,
    company: 'StartupX'
  },
  {
    name: 'Lisa Wang',
    role: 'Director of Engineering, CloudTech',
    avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'The developer experience is phenomenal. Clean APIs, great documentation, and the performance is unmatched in the industry.',
    rating: 5,
    company: 'CloudTech Solutions'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedCard>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 backdrop-blur-sm mb-4">
              <span className="text-sm font-medium text-blue-700">Customer Stories</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Loved by thousands of
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                happy customers
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say about their experience.
            </p>
          </AnimatedCard>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatedCard delay={0.2}>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 md:p-12 shadow-lg">
              <div className="text-center mb-8">
                <Quote className="h-12 w-12 text-blue-500 mx-auto mb-6" />
                <blockquote className="text-2xl md:text-3xl font-medium text-slate-900 mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-slate-900">{testimonials[currentIndex].name}</div>
                    <div className="text-slate-600">{testimonials[currentIndex].role}</div>
                    <div className="text-sm text-slate-500">{testimonials[currentIndex].company}</div>
                  </div>
                </div>

                <div className="flex items-center justify-center mt-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="p-2 rounded-full border-slate-300 hover:bg-slate-50"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-blue-500 scale-125' 
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="p-2 rounded-full border-slate-300 hover:bg-slate-50"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </AnimatedCard>
        </div>

        {/* Stats */}
        <AnimatedCard delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                4.9/5
              </div>
              <div className="text-slate-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                10,000+
              </div>
              <div className="text-slate-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-slate-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-slate-600">Support Available</div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
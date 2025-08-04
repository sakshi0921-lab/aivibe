'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  [
    {
      name: 'John Smith',
      role: 'CEO, TechCorp',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face&auto=format',
      content: 'This platform has completely transformed how we manage our projects. The intuitive interface and powerful features have increased our productivity by 300%.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO, InnovateLab',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face&auto=format',
      content: 'The analytics and reporting features are incredible. We now have insights we never had before, which has helped us make better business decisions.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Founder, StartupXYZ',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face&auto=format',
      content: 'Outstanding customer support and a product that just works. We\'ve been able to scale our operations seamlessly thanks to this platform.',
      rating: 5
    }
  ],
  [
    {
      name: 'Emily Davis',
      role: 'VP Marketing, GrowthCo',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face&auto=format',
      content: 'The collaboration features are game-changing. Our remote team has never been more connected and productive. Highly recommend!',
      rating: 5
    },
    {
      name: 'David Wilson',
      role: 'Director, DataFlow',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face&auto=format',
      content: 'Security and reliability are top-notch. We handle sensitive data and this platform gives us the peace of mind we need.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Operations Manager, FlexiTech',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face&auto=format',
      content: 'The mobile app is fantastic. I can manage everything on the go, which has been crucial for our fast-paced business environment.',
      rating: 5
    }
  ]
];

export default function ModernTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
          </p>
        </motion.div>
        
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {testimonials[currentSlide].map((testimonial, index) => (
                <div key={index} className="testimonial-card rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    "{testimonial.content}"
                  </p>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          {/* Carousel Controls */}
          <div className="flex justify-center mt-8 space-x-4">
            <motion.button
              onClick={prevSlide}
              className="glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
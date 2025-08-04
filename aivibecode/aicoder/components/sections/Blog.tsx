'use client';

import { Calendar, ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedCard from '@/components/ui/AnimatedCard';

const blogPosts = [
  {
    title: 'Building Scalable Applications with Modern Architecture',
    excerpt: 'Learn how to design and build applications that can handle millions of users with our comprehensive guide to modern architecture patterns.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Architecture'
  },
  {
    title: 'The Future of Web Development: Trends for 2024',
    excerpt: 'Discover the latest trends and technologies shaping the future of web development, from AI integration to performance optimization.',
    author: 'Michael Chen',
    date: '2024-01-12',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Trends'
  },
  {
    title: 'Security Best Practices for Modern Applications',
    excerpt: 'A comprehensive guide to implementing security best practices in your applications, covering authentication, authorization, and data protection.',
    author: 'Emily Rodriguez',
    date: '2024-01-10',
    readTime: '10 min read',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Security'
  }
];

export default function Blog() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedCard>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 backdrop-blur-sm mb-4">
              <span className="text-sm font-medium text-blue-700">Resources</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Latest insights and
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                best practices
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Stay up to date with the latest industry trends, best practices, and insights from our team of experts.
            </p>
          </AnimatedCard>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <AnimatedCard key={post.title} delay={index * 0.1}>
              <article className="group bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Button variant="ghost" className="group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-200 p-0">
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
              </article>
            </AnimatedCard>
          ))}
        </div>

        <AnimatedCard delay={0.4}>
          <div className="text-center">
            <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50">
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
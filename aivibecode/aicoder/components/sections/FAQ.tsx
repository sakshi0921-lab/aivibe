'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedCard from '@/components/ui/AnimatedCard';

const faqs = [
  {
    question: 'How do I get started with your platform?',
    answer: 'Getting started is easy! Simply sign up for a free account, choose your plan, and follow our step-by-step onboarding guide. Our team is also available 24/7 to help you get set up.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers. All payments are processed securely through industry-standard encryption.'
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees, and you\'ll continue to have access to your account until the end of your current billing period.'
  },
  {
    question: 'Do you offer customer support?',
    answer: 'Absolutely! We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our enterprise customers also get dedicated account managers and priority support.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Security is our top priority. We use bank-level encryption, regular security audits, and comply with industry standards including SOC 2, GDPR, and HIPAA. Your data is backed up daily and stored in secure, redundant data centers.'
  },
  {
    question: 'Can I integrate with other tools?',
    answer: 'Yes! We offer integrations with over 100+ popular tools including Slack, Salesforce, Google Workspace, Microsoft Teams, and many more. We also provide a robust API for custom integrations.'
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes, we offer a 14-day free trial with full access to all features. No credit card required to start, and you can upgrade or downgrade your plan at any time during or after the trial.'
  },
  {
    question: 'What happens to my data if I cancel?',
    answer: 'You can export all your data at any time, and we provide a 30-day grace period after cancellation to download your information. After that, data is securely deleted from our servers according to our data retention policy.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedCard>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 backdrop-blur-sm mb-4">
              <span className="text-sm font-medium text-blue-700">FAQ</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Frequently asked
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                questions
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Find answers to common questions about our platform, pricing, and features.
            </p>
          </AnimatedCard>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 overflow-hidden hover:shadow-lg transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-50/50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-500 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <div className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <AnimatedCard delay={0.8}>
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">Still have questions?</p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
            >
              Contact our team
            </a>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
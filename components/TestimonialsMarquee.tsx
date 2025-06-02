import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Peter van Dijk',
    role: 'Operations Manager, Manufacturing Company',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Since using Improve, there\'s no more chaos on the production floor. The AI-driven planning prevents errors and literally saves us thousands of euros every month.'
  },
  {
    name: 'Marlies de Boer',
    role: 'Logistics Coordinator, Logistics Company',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'We now act proactively instead of reactively. The AI route planner and alerts are a real gamechanger for our efficiency.'
  },
  {
    name: 'Jeroen van Hout',
    role: 'Creative Director, Marketing Agency',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'Thanks to Improve, we deliver faster and smarter. Our AI copywriter and reporting bot save us a huge amount of time.'
  },
  {
    name: 'Lisanne Jansen',
    role: 'Partner, Financial Advisory Firm',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'Reports and forecasts now take a fraction of the time. Our clients are impressed by both the speed and the insights.'
  },
  {
    name: 'Timo Bakker',
    role: 'Founder, E-commerce Business',
    avatar: 'https://randomuser.me/api/portraits/men/49.jpg',
    text: 'The AI chatbot handles 80% of our customer inquiries, and our stock updates are now always real-time. We truly have control over everything.'
  }
];

// Duplicate testimonials for seamless infinite scroll
const marqueeTestimonials = [...testimonials, ...testimonials];

export default function TestimonialsMarquee() {
  return (
    <div className="relative w-full overflow-x-hidden py-8">
      {/* Green glow background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#00FFB2]/10 rounded-full blur-3xl z-0" />
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">What Our Clients Say</h2>
        <div className="text-[#00FFB2] text-center text-lg font-semibold mb-10">— Real Businesses. Real results</div>
        <div className="relative w-full">
          <motion.div
            className="flex gap-8 w-max"
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 32,
              ease: 'linear',
            }}
            style={{ willChange: 'transform' }}
          >
            {marqueeTestimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-[340px] max-w-[340px] bg-white/5 border border-[#00FFB2]/20 rounded-2xl p-8 shadow-lg backdrop-blur-md flex flex-col items-start mx-2 hover:scale-[1.03] transition-transform duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full border-2 border-[#00FFB2]/40 shadow"
                  />
                  <div>
                    <div className="text-[#00FFB2] font-bold text-base">{t.name}</div>
                    <div className="text-white/60 text-xs">{t.role}</div>
                  </div>
                </div>
                <div className="text-white text-base font-medium mb-2">"{t.text}"</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import t1 from '@assets/testimonial-1.jpg';
import t2 from '@assets/testimonial-2.jpg';
import t3 from '@assets/testimonial-3.jpg';
import t4 from '@assets/testimonial-4.jpg';
import t5 from '@assets/testimonial-5.jpg';

const testimonials = [
  { id: 1, name: 'James Carter', role: 'CEO, Nexus Logic', image: t1, quote: "EWAARAA TECHNOLOGIES transformed our legacy systems into a modern, scalable platform. Their attention to detail and technical expertise is unmatched." },
  { id: 2, name: 'Sarah Chen', role: 'Founder, CloudScale', image: t2, quote: "Working with them felt like an extension of our own team. They delivered our mobile app ahead of schedule and the UI/UX was simply stunning." },
  { id: 3, name: 'Michael Ross', role: 'CTO, Vanguard Data', image: t3, quote: "Their deep understanding of cloud architecture saved us thousands in infrastructure costs while improving overall system performance." },
  { id: 4, name: 'Priya Sharma', role: 'Director, Innovate Corp', image: t4, quote: "From discovery to deployment, the process was seamless. They are highly responsive and truly care about the success of your product." },
  { id: 5, name: 'David Lee', role: 'VP Engineering, Quantum AI', image: t5, quote: "Finding a reliable development partner is hard, but EWAARAA makes it easy. Their code quality and testing standards are world-class." },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Client Feedback</h2>
        <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-16">
          What Our <span className="text-gradient">Clients Say</span>
        </h3>

        <div className="max-w-4xl mx-auto relative min-h-[300px]">
          <Quote className="absolute top-0 left-0 md:-left-8 text-white/5 w-24 h-24 rotate-180" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="flex gap-1 mb-8 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              
              <p className="text-2xl md:text-3xl text-white font-display leading-tight mb-12">
                "{testimonials[current].quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                />
                <div className="text-left">
                  <h4 className="text-white font-bold text-lg">{testimonials[current].name}</h4>
                  <p className="text-white/60 text-sm">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all cursor-none ${
                  i === current ? 'w-8 bg-primary' : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

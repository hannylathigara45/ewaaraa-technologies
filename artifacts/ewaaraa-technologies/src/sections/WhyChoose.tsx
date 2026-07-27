import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const features = [
  'Expert Team', 'Latest Technologies', 'Fast Delivery', 'Affordable Pricing', 
  'Scalable Architecture', '24/7 Support', 'Client-first Approach', 
  'Secure Development', 'Quality Assurance', 'Agile Methodology'
];

export function WhyChoose() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              The <span className="text-gradient">EWAARAA</span> Advantage
            </h3>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              We don't just build software; we build partnerships. Our commitment to excellence, transparency, and innovation ensures that your project is delivered on time, within budget, and above expectations.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
              {features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="text-accent">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-white/80 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto rounded-full border border-white/10 relative flex items-center justify-center animate-[spin_60s_linear_infinite]">
              <div className="absolute inset-4 rounded-full border border-white/5 border-dashed" />
              <div className="absolute inset-8 rounded-full border border-white/5" />
              <div className="absolute top-0 left-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_rgba(37,99,235,1)]" />
              <div className="absolute bottom-1/4 right-0 w-3 h-3 bg-accent rounded-full shadow-[0_0_20px_rgba(6,182,212,1)]" />
              <div className="absolute top-1/4 left-0 w-5 h-5 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,1)]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-32 h-32 bg-card rounded-full border border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-sm z-10">
                <span className="text-3xl font-display font-bold text-white">E<span className="text-primary">.</span></span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

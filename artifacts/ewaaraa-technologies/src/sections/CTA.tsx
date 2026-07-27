import React from 'react';
import { motion } from 'framer-motion';

export function CTA() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 px-6 md:px-12 container mx-auto">
      <div className="glass-card rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/10 to-accent/20 opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full bg-primary/20 blur-[100px] -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Ready to Build Something <br className="hidden md:block" />
            <span className="text-gradient">Extraordinary?</span>
          </h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Partner with EWAARAA TECHNOLOGIES and transform your vision into a powerful digital reality.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => scrollTo('#contact')}
              className="px-8 py-4 rounded-full bg-white text-background font-bold hover:bg-white/90 transition-colors cursor-none min-w-[200px]"
            >
              Get a Quote
            </button>
            <button 
              onClick={() => scrollTo('#portfolio')}
              className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors cursor-none min-w-[200px]"
            >
              View Portfolio
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

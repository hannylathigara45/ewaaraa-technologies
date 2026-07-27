import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  'Innovate Corp', 'TechFlow', 'Nexus Logic', 'Vanguard Data', 
  'CloudScale', 'Quantum AI', 'Stellar Dev', 'Nova Systems'
];

export function TrustedBy() {
  return (
    <section className="py-12 border-y border-white/5 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-sm font-medium text-white/40 uppercase tracking-widest">
          Trusted by innovative companies worldwide
        </p>
      </div>

      <div className="flex overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="flex items-center gap-16 px-8"
        >
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="text-2xl md:text-3xl font-display font-bold text-white/10 whitespace-nowrap flex-shrink-0">
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

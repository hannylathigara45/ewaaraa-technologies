import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import founderImg from '@assets/founder.jpg';

export function Founder() {
  return (
    <section id="founder" className="py-24 bg-secondary/30 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto glass-card rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />

          <div className="grid md:grid-cols-5 gap-12 items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 relative">
                <img 
                  src={founderImg} 
                  alt="Founder & CEO" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full blur-3xl -z-10" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-3"
            >
              <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-2">Leadership</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                Founder & CEO
              </h3>
              <p className="text-xl text-white/40 font-display mb-8">EWAARAA TECHNOLOGIES</p>
              
              <blockquote className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8 italic">
                "Our vision is to empower businesses through innovation, technology, and creativity while delivering world-class software solutions. We don't just write code; we engineer the future."
              </blockquote>
              
              <div className="flex items-center gap-4 mb-8">
                {[FaLinkedinIn, FaGithub, FaEnvelope].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white hover:border-primary transition-all cursor-none">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
              
              {/* Stylized Signature */}
              <div className="font-display text-4xl text-white/20 select-none opacity-50 font-script">
                Founder Signature
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

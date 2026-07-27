import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNodedotjs, SiPython, SiFlutter, 
  SiTypescript, SiPostgresql, SiMongodb, SiDocker, SiKubernetes, 
  SiNextdotjs, SiTailwindcss
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const techs = [
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiNextdotjs, name: 'Next.js', color: '#FFFFFF' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiPython, name: 'Python', color: '#3776AB' },
  { icon: SiFlutter, name: 'Flutter', color: '#02569B' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { icon: FaAws, name: 'AWS', color: '#FF9900' },
  { icon: SiDocker, name: 'Docker', color: '#2496ED' },
  { icon: SiKubernetes, name: 'Kubernetes', color: '#326CE5' },
];

export function TechStack() {
  return (
    <section className="py-24 bg-secondary/30 border-y border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Modern Stack</h2>
        <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-16">
          Powered By Modern <span className="text-gradient">Technologies</span>
        </h3>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-5xl mx-auto">
          {techs.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-3 group cursor-none"
              >
                <div className="w-20 h-20 rounded-2xl bg-card border border-white/5 flex items-center justify-center group-hover:border-white/20 transition-all duration-300 relative overflow-hidden">
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ backgroundColor: tech.color }}
                  />
                  <Icon size={32} style={{ color: tech.color }} className="relative z-10 grayscale group-hover:grayscale-0 transition-all duration-300" />
                </div>
                <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">{tech.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

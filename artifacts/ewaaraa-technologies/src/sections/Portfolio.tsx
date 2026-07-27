import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import portfolio1 from '@assets/portfolio-1.jpg';
import portfolio2 from '@assets/portfolio-2.jpg';
import portfolio3 from '@assets/portfolio-3.jpg';

const categories = ['All', 'Website', 'Mobile Apps', 'Dashboard', 'Software'];

const projects = [
  {
    id: 1,
    title: 'FinTech Analytics Dashboard',
    category: 'Dashboard',
    image: portfolio1,
    desc: 'Real-time financial analytics platform with complex data visualization.',
    tech: ['React', 'Node.js', 'PostgreSQL']
  },
  {
    id: 2,
    title: 'HealthTrack Mobile App',
    category: 'Mobile Apps',
    image: portfolio2,
    desc: 'Cross-platform mobile application for personalized health tracking.',
    tech: ['Flutter', 'Firebase', 'REST API']
  },
  {
    id: 3,
    title: 'Luxe E-Commerce Store',
    category: 'Website',
    image: portfolio3,
    desc: 'High-end fashion e-commerce platform with seamless checkout.',
    tech: ['Next.js', 'Stripe', 'Tailwind']
  },
  {
    id: 4,
    title: 'Enterprise ERP System',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    desc: 'Comprehensive resource planning software for manufacturing.',
    tech: ['Python', 'Django', 'React']
  },
  {
    id: 5,
    title: 'Crypto Trading Platform',
    category: 'Website',
    image: 'https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&q=80&w=800',
    desc: 'Secure cryptocurrency exchange platform with real-time sockets.',
    tech: ['TypeScript', 'AWS', 'WebSockets']
  },
  {
    id: 6,
    title: 'Smart Home Hub App',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    desc: 'IoT control center for smart home devices.',
    tech: ['React Native', 'IoT', 'Node.js']
  }
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Our Work</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
              Featured <span className="text-gradient">Projects</span>
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-none ${
                  activeFilter === cat 
                    ? 'bg-primary text-white' 
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group rounded-3xl bg-card border border-white/5 overflow-hidden flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 text-xs font-medium bg-black/50 backdrop-blur-md text-white rounded-full border border-white/10">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80 z-10" />
                </div>
                
                <div className="p-6 flex-1 flex flex-col relative z-20 bg-card -mt-4 rounded-t-2xl">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-white/60 text-sm mb-6 flex-1">{project.desc}</p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-xs font-medium text-white/40">
                          {t}{i < project.tech.length - 1 ? ' • ' : ''}
                        </span>
                      ))}
                    </div>
                    <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-primary transition-colors cursor-none">
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

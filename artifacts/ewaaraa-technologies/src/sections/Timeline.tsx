import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { id: '01', title: 'Discovery', desc: 'Understanding your vision, requirements, and business goals.' },
  { id: '02', title: 'Design', desc: 'Creating wireframes, prototypes, and user interfaces.' },
  { id: '03', title: 'Development', desc: 'Writing clean, scalable, and secure code architecture.' },
  { id: '04', title: 'Testing', desc: 'Rigorous QA testing for performance and security.' },
  { id: '05', title: 'Launch', desc: 'Deploying the solution to production environments.' },
  { id: '06', title: 'Support', desc: 'Continuous maintenance, updates, and monitoring.' },
];

export function Timeline() {
  return (
    <section className="py-24 bg-secondary/30 border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Our Process</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
            How We <span className="text-gradient">Work</span>
          </h3>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                    <div className={`p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/30 transition-colors w-full md:max-w-md ${isEven ? 'md:ml-12' : 'md:mr-12'}`}>
                      <h4 className="text-2xl font-bold text-white mb-3">{step.title}</h4>
                      <p className="text-white/60">{step.desc}</p>
                    </div>
                  </div>
                  
                  {/* Number Node */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                    <span className="text-sm font-bold text-white">{step.id}</span>
                  </div>

                  <div className="w-full md:w-1/2 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

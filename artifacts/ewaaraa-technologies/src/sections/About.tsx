import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { label: 'Projects Delivered', value: 30, suffix: '+' },
  { label: 'Happy Clients', value: 50, suffix: '+' },
  { label: 'Years Experience', value: 2, suffix: '+' },
  { label: 'Client Satisfaction', value: 100, suffix: '%' },
];

function Counter({ from, to, suffix }: { from: number, to: number, suffix: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = from;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / (to - from)));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === to) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }
    return undefined;
  }, [isInView, from, to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Building the <span className="text-gradient">digital backbone</span> of modern businesses.
            </h3>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              At EWAARAA TECHNOLOGIES, we go beyond writing code. We engineer scalable, secure, and intuitive digital experiences that solve real-world problems. Rooted in Gujarat, our vision is to empower global businesses through relentless innovation and uncompromising quality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="p-6 rounded-2xl bg-card border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h4 className="text-xl font-bold text-white mb-2">Our Mission</h4>
                <p className="text-white/60 text-sm">To deliver world-class software solutions that drive growth and digital transformation.</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h4 className="text-xl font-bold text-white mb-2">Our Vision</h4>
                <p className="text-white/60 text-sm">To be the most trusted technology partner for forward-thinking organizations globally.</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl flex flex-col items-center justify-center text-center relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                <h4 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  <Counter from={0} to={stat.value} suffix={stat.suffix} />
                </h4>
                <p className="text-sm text-white/60 font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

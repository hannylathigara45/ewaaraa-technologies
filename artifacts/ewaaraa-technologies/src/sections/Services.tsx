import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Smartphone, Palette, Cloud, Database, ShoppingCart, Users, Briefcase, Bot, PenTool, Wrench } from 'lucide-react';

const services = [
  { icon: Code, title: 'Custom Software', desc: 'Tailor-made enterprise software solutions built for scale and security.' },
  { icon: Globe, title: 'Web Development', desc: 'High-performance websites using the latest frontend technologies.' },
  { icon: PenTool, title: 'Web Applications', desc: 'Complex, interactive web apps that run seamlessly in the browser.' },
  { icon: Smartphone, title: 'Mobile Apps', desc: 'Native and cross-platform mobile experiences for iOS and Android.' },
  { icon: Palette, title: 'UI/UX Design', desc: 'User-centric interfaces that blend aesthetics with functionality.' },
  { icon: Cloud, title: 'Cloud Solutions', desc: 'Scalable cloud architecture and infrastructure deployment.' },
  { icon: Database, title: 'API Development', desc: 'Robust REST and GraphQL APIs for seamless system integration.' },
  { icon: ShoppingCart, title: 'E-Commerce', desc: 'End-to-end e-commerce platforms optimized for conversion.' },
  { icon: Users, title: 'CRM Solutions', desc: 'Custom Customer Relationship Management systems.' },
  { icon: Briefcase, title: 'ERP Solutions', desc: 'Enterprise Resource Planning software for business operations.' },
  { icon: Bot, title: 'AI Integration', desc: 'Integrating artificial intelligence to automate and enhance workflows.' },
  { icon: Wrench, title: 'Maintenance', desc: 'Ongoing technical support and software maintenance services.' },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Services() {
  return (
    <section id="services" className="py-24 relative bg-secondary/30">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Comprehensive <span className="text-gradient">Digital Services</span>
          </h3>
          <p className="text-white/60 text-lg">
            From concept to deployment, we provide end-to-end technology solutions designed to give your business a competitive edge.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/30 transition-all duration-300 relative overflow-hidden cursor-none"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
                
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300 relative z-10">
                  <Icon size={24} />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 relative z-10">{service.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed relative z-10">{service.desc}</p>
                
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

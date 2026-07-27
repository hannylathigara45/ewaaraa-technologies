import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-secondary/30 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
            Let's Discuss Your <span className="text-gradient">Project</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card p-8 rounded-3xl">
              <h4 className="text-2xl font-bold text-white mb-8">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm font-medium mb-1">Call Us</p>
                    <p className="text-white font-medium">+91 9664703388</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm font-medium mb-1">Email Us</p>
                    <p className="text-white font-medium">ewaaraatech@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm font-medium mb-1">Location</p>
                    <p className="text-white font-medium">Rajkot & Gandhinagar<br/>Gujarat, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm font-medium mb-1">Business Hours</p>
                    <p className="text-white font-medium">Mon - Sat: 10:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-48 rounded-3xl overflow-hidden border border-white/5 relative group">
              <div className="absolute inset-0 bg-[#121218] flex items-center justify-center">
                <MapPin size={32} className="text-primary opacity-50" />
                <span className="absolute bottom-4 text-xs font-medium text-white/40 uppercase tracking-widest">Gujarat, India</span>
              </div>
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
              
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60">Full Name</label>
                    <input type="text" className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors cursor-none" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60">Email Address</label>
                    <input type="email" className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors cursor-none" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60">Phone Number</label>
                    <input type="tel" className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors cursor-none" placeholder="+1 234 567 890" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60">Company</label>
                    <input type="text" className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors cursor-none" placeholder="Your Company Ltd." />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60">Service Needed</label>
                    <select className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors cursor-none appearance-none">
                      <option className="bg-background text-white">Custom Software</option>
                      <option className="bg-background text-white">Web Development</option>
                      <option className="bg-background text-white">Mobile App</option>
                      <option className="bg-background text-white">UI/UX Design</option>
                      <option className="bg-background text-white">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60">Budget Range</label>
                    <select className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors cursor-none appearance-none">
                      <option className="bg-background text-white">&lt; $5,000</option>
                      <option className="bg-background text-white">$5,000 - $10,000</option>
                      <option className="bg-background text-white">$10,000 - $25,000</option>
                      <option className="bg-background text-white">&gt; $25,000</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60">Project Details</label>
                  <textarea rows={4} className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors cursor-none resize-none" placeholder="Tell us about your project goals and requirements..."></textarea>
                </div>

                <button type="submit" className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-colors cursor-none relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10">Send Message</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

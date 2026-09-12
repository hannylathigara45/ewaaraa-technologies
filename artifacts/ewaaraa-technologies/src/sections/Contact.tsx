import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { sendContactEmail } from '@/lib/emailjs';

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: 'Custom Software',
    budget: '< $5,000',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        variant: 'destructive',
        title: 'Required Fields Missing',
        description: 'Please provide your name, email, and project details.',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await sendContactEmail(formData);
      setIsSubmitted(true);
      toast({
        title: 'Message Sent Successfully!',
        description: res.isDemoMode
          ? 'Your message was received! (Demo mode active: configure VITE_EMAILJS_* keys in .env for live email delivery).'
          : 'Thank you for reaching out! We have received your message and will get back to you shortly.',
      });
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        service: 'Custom Software',
        budget: '< $5,000',
        message: '',
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error: any) {
      console.error('Email send error:', error);
      toast({
        variant: 'destructive',
        title: 'Failed to Send',
        description:
          error?.message ||
          'Something went wrong. Please try again or reach out to ewaaraatechnologies@gmail.com directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                    <p className="text-white font-medium">ewaaraatechnologies@gmail.com</p>
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
              
              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors cursor-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors cursor-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors cursor-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors cursor-none"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60">Service Needed</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors cursor-none appearance-none"
                    >
                      <option className="bg-[#121218] text-white" value="Custom Software">Custom Software</option>
                      <option className="bg-[#121218] text-white" value="Web Development">Web Development</option>
                      <option className="bg-[#121218] text-white" value="Mobile App">Mobile App</option>
                      <option className="bg-[#121218] text-white" value="UI/UX Design">UI/UX Design</option>
                      <option className="bg-[#121218] text-white" value="Cloud Solutions">Cloud Solutions</option>
                      <option className="bg-[#121218] text-white" value="Other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors cursor-none appearance-none"
                    >
                      <option className="bg-[#121218] text-white" value="< $5,000">&lt; $5,000</option>
                      <option className="bg-[#121218] text-white" value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option className="bg-[#121218] text-white" value="$10,000 - $25,000">$10,000 - $25,000</option>
                      <option className="bg-[#121218] text-white" value="> $25,000">&gt; $25,000</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60">Project Details *</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors cursor-none resize-none"
                    placeholder="Tell us about your project goals and requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-colors cursor-none relative overflow-hidden group disabled:opacity-60 disabled:pointer-events-none flex items-center justify-center gap-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

export function Footer() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050508] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="text-2xl font-display font-bold tracking-tighter text-white mb-6">
              EWAARAA<span className="text-primary">.</span>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed">
              Building Digital Excellence. Powering Tomorrow. We design, develop, and scale modern software solutions for visionary businesses.
            </p>
            <div className="flex gap-4">
              {[FaLinkedinIn, FaGithub, FaTwitter, FaInstagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all cursor-none"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Portfolio', 'Founder', 'FAQs'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(`#${item.toLowerCase().replace(' ', '')}`)}
                    className="text-white/60 hover:text-primary transition-colors cursor-none"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3 text-white/60">
              <li>Custom Software</li>
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>UI/UX Design</li>
              <li>Cloud Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/60">
              <li>
                <strong className="block text-white/80 mb-1">Phone</strong>
                +91 9664703388
              </li>
              <li>
                <strong className="block text-white/80 mb-1">Email</strong>
                ewaaraatech@gmail.com
              </li>
              <li>
                <strong className="block text-white/80 mb-1">Location</strong>
                Rajkot & Gandhinagar, Gujarat, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} EWAARAA TECHNOLOGIES. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors cursor-none">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors cursor-none">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

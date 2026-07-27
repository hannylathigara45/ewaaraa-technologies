import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Why choose EWAARAA TECHNOLOGIES?",
    a: "We offer enterprise-grade development with a startup's agility. Our focus is on scalable architecture, clean code, and delivering high ROI digital solutions tailored to your specific business needs."
  },
  {
    q: "What technologies do you use?",
    a: "We specialize in modern stacks including React, Next.js, Node.js, Python, Flutter for mobile, and robust cloud infrastructure on AWS. We choose the right tool for your specific problem."
  },
  {
    q: "How long does development take?",
    a: "Timelines vary based on complexity. A simple web app might take 4-6 weeks, while a comprehensive enterprise ERP could take 3-6 months. We provide detailed timelines during the discovery phase."
  },
  {
    q: "Do you provide maintenance?",
    a: "Yes, we offer comprehensive post-launch support and maintenance packages to ensure your software remains secure, up-to-date, and fully operational."
  },
  {
    q: "Can you redesign existing software?",
    a: "Absolutely. We often help clients modernize legacy systems, improving both the user interface (UI/UX) and underlying architecture for better performance."
  },
  {
    q: "How much does a project cost?",
    a: "Costs depend entirely on project scope, features, and required technologies. We offer both fixed-price contracts for well-defined scopes and time & materials for agile projects."
  },
  {
    q: "Do you build mobile apps?",
    a: "Yes, we develop high-performance native and cross-platform mobile applications for both iOS and Android using technologies like Flutter and React Native."
  },
  {
    q: "Do you provide UI/UX design?",
    a: "Yes, our in-house design team creates intuitive, user-centric interfaces before a single line of code is written, ensuring a premium user experience."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Got Questions?</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === i ? 'bg-card border-primary/30' : 'bg-transparent border-white/5 hover:border-white/10'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-6 flex items-center justify-between text-left cursor-none"
              >
                <span className="text-lg font-medium text-white pr-8">{faq.q}</span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === i ? 'bg-primary text-white' : 'bg-white/5 text-white/60'}`}>
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-white/60 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

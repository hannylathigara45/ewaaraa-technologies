import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Wait a bit at 100%
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0B0B0F]"
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col items-center"
        >
          {/* Logo Mark */}
          <div className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white mb-8 loader-logo relative">
            EWAARAA
            <span className="text-primary absolute -right-4 -top-2 text-2xl">.</span>
          </div>
          
          {/* Progress Bar Container */}
          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-purple-500 to-accent"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.2 }}
            />
          </div>
          
          {/* Percentage */}
          <div className="mt-4 font-mono text-sm text-white/50 tracking-widest">
            {progress}%
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

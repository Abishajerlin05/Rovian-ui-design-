import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function LiveRobot({ scrolled }: { scrolled: boolean }) {
  const reduce = useReducedMotion();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate eye movement with bounds
  const eyeX = mousePosition.x * 8;
  const eyeY = mousePosition.y * 6;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 50, rotate: -20 }}
      animate={{ 
        opacity: scrolled ? 0 : 1, 
        scale: scrolled ? 0.8 : 1, 
        y: scrolled ? 50 : 0,
        rotate: scrolled ? 20 : 0
      }}
      transition={{ duration: 0.5, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 drop-shadow-2xl origin-bottom-right cursor-pointer"
    >
      {/* Floating Body */}
      <motion.div 
        animate={reduce ? {} : { y: [0, -12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex flex-col items-center"
      >
        {/* Speech Bubble */}
        <motion.div
          initial={{ opacity: 0, scale: 0, originX: 1, originY: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: "spring", bounce: 0.5, damping: 12 }}
          className="absolute -top-14 -left-44 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white border border-white/20 font-semibold px-5 py-3 rounded-2xl rounded-br-none shadow-[0_10px_40px_-10px_rgba(37,99,235,0.7)] z-40 whitespace-nowrap text-sm backdrop-blur-md flex items-center gap-2 tracking-wide"
        >
          <span className="text-lg">✨</span> Ready to master your exams?
        </motion.div>

        {/* Antenna */}
        <div className="relative w-1.5 h-6 bg-slate-300 dark:bg-slate-700 rounded-t-sm z-10">
          <motion.div 
            animate={{ backgroundColor: ["#3b82f6", "#60a5fa", "#3b82f6"] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute -top-3 -left-1.5 w-4 h-4 rounded-full shadow-[0_0_10px_#60a5fa]" 
          />
        </div>

        {/* Head */}
        <div className="w-32 h-28 bg-white dark:bg-slate-800 border-4 border-slate-200 dark:border-slate-700 rounded-3xl flex flex-col items-center justify-center shadow-xl relative overflow-hidden z-20">
          
          {/* Headphones / Ears */}
          <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-10 bg-blue-500 rounded-r-md" />
          <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-10 bg-blue-500 rounded-l-md" />

          {/* Screen / Visor */}
          <div className="w-24 h-14 bg-slate-900 rounded-2xl relative flex items-center justify-center gap-3 overflow-hidden shadow-inner">
            
            {/* Left Eye */}
            <motion.div 
              animate={reduce ? {} : { 
                x: eyeX, 
                y: eyeY,
                scaleY: [1, 1, 0.1, 1, 1] 
              }}
              transition={{
                scaleY: { duration: 4, repeat: Infinity, times: [0, 0.95, 0.96, 0.97, 1] },
                x: { type: "spring", stiffness: 150, damping: 20 },
                y: { type: "spring", stiffness: 150, damping: 20 }
              }}
              className="w-4 h-6 bg-blue-400 rounded-full shadow-[0_0_12px_#60a5fa]" 
            />

            {/* Right Eye */}
            <motion.div 
              animate={reduce ? {} : { 
                x: eyeX, 
                y: eyeY,
                scaleY: [1, 1, 0.1, 1, 1] 
              }}
              transition={{
                scaleY: { duration: 4, repeat: Infinity, times: [0, 0.95, 0.96, 0.97, 1] },
                x: { type: "spring", stiffness: 150, damping: 20 },
                y: { type: "spring", stiffness: 150, damping: 20 }
              }}
              className="w-4 h-6 bg-blue-400 rounded-full shadow-[0_0_12px_#60a5fa]" 
            />
          </div>

          {/* Smile / Mouth */}
          <div className="mt-3 w-8 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
        </div>

        {/* Waving Hand */}
        <motion.div
          animate={reduce ? {} : { rotate: [0, 40, -10, 40, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="absolute -right-6 top-12 w-8 h-8 origin-bottom-left z-30"
        >
          <div className="w-6 h-8 bg-blue-500 rounded-full border-2 border-white shadow-lg" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, Loader2, Sparkles, ArrowUpRight } from 'lucide-react';

const CurrentlyBuilding = () => {
  return (
    <section id="building" className="scroll-mt-32">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-card p-12 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 border-primary/20"
      >
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <div className="p-3 rounded-full bg-primary/10 animate-pulse">
                <Hammer size={24} />
              </div>
              <span className="font-bold uppercase tracking-[0.2em] text-xs">Currently Building</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-on-background leading-tight">
              Aurora <span className="text-gradient">OS Interface</span>
            </h2>
            
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl">
              A futuristic, web-based operating system concept focused on fluid motion, glassmorphism, and seamless multitasking. Integrating AI directly into the window management system.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                <Loader2 size={16} className="animate-spin" />
                In Progress (65%)
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-secondary bg-secondary/5 px-4 py-2 rounded-full border border-secondary/10">
                <Sparkles size={16} />
                Framer Motion + Three.js
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 aspect-square glass-card bg-surface-container-low flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-50"></div>
            <div className="z-10 flex flex-col items-center gap-4 group-hover:scale-110 transition-transform duration-700">
               <div className="w-24 h-24 rounded-2xl bg-white/40 backdrop-blur-md shadow-lg flex items-center justify-center border border-white/60">
                 <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary animate-pulse"></div>
               </div>
               <span className="text-xs font-bold text-outline uppercase tracking-widest">v0.4.2-alpha</span>
            </div>
            
            <button className="absolute bottom-4 right-4 p-3 rounded-full bg-white/80 border border-white shadow-lg text-primary hover:bg-primary hover:text-white transition-all duration-300">
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CurrentlyBuilding;

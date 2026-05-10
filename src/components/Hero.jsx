import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Briefcase, Hand, ChevronRight, MessageSquare } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[70vh] flex flex-col md:flex-row items-center justify-center gap-12 py-12">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 space-y-6 text-center md:text-left z-10"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 pill mb-4 border-primary/20 bg-primary/5 text-primary py-1.5 px-4"
        >
          <span className="text-sm">👋</span>
          <span className="text-[11px] font-bold">Welcome to my space</span>
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-on-background leading-tight tracking-tight">
          Hi, I'm <br className="hidden md:block"/>
          <span className="text-gradient">Shivam Jaiswal</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-semibold text-on-surface-variant max-w-2xl">
          Full-Stack Developer & AI Enthusiast.
        </p>
        
        <p className="text-lg text-outline max-w-2xl mx-auto md:mx-0 leading-relaxed">
          Crafting digital experiences with clean code and modern design. Currently studying at <span className="text-primary font-medium">Rajalakshmi Engineering College</span>.
        </p>
        
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
          <button className="btn-primary group">
            View My Work
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="btn-secondary group">
            Contact Me
            <MessageSquare size={16} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>
        
        <div className="flex items-center justify-center md:justify-start gap-6 pt-8">
          {[
            { icon: <Code2 size={24} />, href: "#" },
            { icon: <Terminal size={24} />, href: "#" },
            { icon: <Briefcase size={24} />, href: "#" },
          ].map((social, i) => (
            <motion.a 
              key={i}
              whileHover={{ scale: 1.2, color: 'var(--primary)' }}
              className="text-outline transition-colors"
              href={social.href}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 w-full flex justify-center z-10"
      >
        <div className="glass-card w-full max-w-md aspect-square p-8 flex items-center justify-center bg-gradient-to-br from-white/60 to-white/10 border-white/80">
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-3/4 h-3/4 border border-primary/30 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-1/2 h-1/2 border border-secondary/40 rounded-full"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="z-20 text-primary"
            >
              <Code2 size={120} className="drop-shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

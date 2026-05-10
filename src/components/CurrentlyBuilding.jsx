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
              AI Career <span className="text-gradient">Navigator 2026</span>
            </h2>

            <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl">
              Your personal AI-powered career mentor that reads your real GitHub, LeetCode, LinkedIn, and Resume profiles to provide personalized career guidance, skill gap analysis, and time-bound roadmaps.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {["Next.js 14", "FastAPI", "Supabase", "Gemini 2.5 Flash", "TypeScript", "Python"].map((tech) => (
                <span key={tech} className="pill text-[10px] bg-white/40">{tech}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                <Loader2 size={16} className="animate-spin" />
                In Active Development
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-secondary bg-secondary/5 px-4 py-2 rounded-full border border-secondary/10">
                <Sparkles size={16} />
                AI-Powered
              </div>
            </div>

            <a
              href="https://github.com/shivam499-pro/AI-CAREER-NAVIGATOR-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-secondary mt-2"
            >
              View on GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="w-full md:w-1/3 aspect-square glass-card bg-surface-container-low flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-50"></div>
            <div className="z-10 flex flex-col items-center gap-4 group-hover:scale-110 transition-transform duration-700">
              <div className="w-24 h-24 rounded-2xl bg-white/40 backdrop-blur-md shadow-lg flex items-center justify-center border border-white/60 text-5xl">
                🚀
              </div>
              <span className="text-xs font-bold text-outline uppercase tracking-widest">v1.0 — Coming Soon</span>
            </div>

            <a
              href="https://github.com/shivam499-pro/AI-CAREER-NAVIGATOR-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 p-3 rounded-full bg-white/80 border border-white shadow-lg text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CurrentlyBuilding;
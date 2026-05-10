import React from 'react';
import { motion } from 'framer-motion';
import { dsaPlatforms } from '../data/skills';
import { Terminal, Trophy, Binary, ChevronRight } from 'lucide-react';

const DSA = () => {
  const icons = {
    Code2: Terminal,
    Trophy: Trophy,
    Binary: Binary
  };

  return (
    <section id="dsa" className="scroll-mt-32">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-on-background mb-12"
      >
        DSA & Problem Solving
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-bento-gap mb-12">
        {[
          { label: 'Problems Solved', value: '500+', color: 'text-primary' },
          { label: 'Leetcoding since', value: '2022', color: 'text-secondary' },
          { label: 'Global Rank', value: 'Top 10%', color: 'text-tertiary' },
        ].map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 flex flex-col items-center text-center"
          >
            <span className={`text-4xl font-bold ${stat.color}`}>{stat.value}</span>
            <span className="text-xs font-bold text-outline mt-3 uppercase tracking-[0.2em]">{stat.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-bento-gap">
        {dsaPlatforms.map((platform, i) => {
          const Icon = icons[platform.icon] || Terminal;
          return (
            <motion.div 
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-8 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 mb-6 flex items-center justify-center bg-surface-variant/30 rounded-2xl group-hover:bg-primary/10 transition-colors duration-500">
                <Icon size={40} className="text-on-surface group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{platform.name}</h3>
              <p className="text-primary font-bold text-lg mb-4">{platform.solved}</p>
              
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {platform.tags.map(tag => (
                  <span key={tag} className="pill text-[9px] px-2 py-0.5">{tag}</span>
                ))}
              </div>
              
              <button className="btn-secondary w-full py-3 text-[10px] group/btn">
                View Profile
                <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default DSA;

import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { Briefcase, Code } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-32">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-on-background mb-12"
      >
        Work Experience
      </motion.h2>

      <div className="glass-card p-8 md:p-12 relative overflow-visible">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-12 bottom-12 w-0.5 bg-gradient-to-b from-primary/50 via-outline-variant to-primary/50 hidden md:block" />
        
        <div className="space-y-12">
          {experience.length > 0 ? (
            experience.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center justify-between md:justify-normal gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md md:-translate-x-1/2 z-10 hidden md:block" />

                <div className="w-full md:w-[45%] glass-card p-8 hover:shadow-xl transition-shadow border-white/40">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                    <h3 className="text-xl font-bold text-on-surface">{exp.title}</h3>
                    <span className="pill bg-primary/10 text-primary border-none py-1.5 px-4 text-[9px]">{exp.period}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4 text-secondary font-semibold">
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-on-surface-variant text-sm leading-relaxed">
                        <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-outline-variant/20">
                    {(exp.tags || exp.techStack || []).map(tag => (
                      <span key={tag} className="pill text-[9px] lowercase tracking-normal">#{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center py-12 text-center space-y-6"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary animate-bounce">
                <Briefcase size={40} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-on-surface">No internships yet — actively looking! 🚀</h3>
                <p className="text-outline max-w-md mx-auto">Focused on building impactful projects and mastering new technologies. Open to opportunities where I can contribute and grow.</p>
              </div>
              <div className="pill border-none bg-primary/10 text-primary shadow-sm flex items-center gap-2 py-2 px-6">
                <span className="pulse-dot"></span>
                <span className="text-xs font-bold uppercase tracking-wider">Available for Internships</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;

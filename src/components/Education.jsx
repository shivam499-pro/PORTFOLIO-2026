import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/experience';
import { School, GraduationCap, BookOpen, MapPin } from 'lucide-react';

const iconMap = {
  School: School,
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
};

const Education = () => {
  return (
    <section id="education" className="scroll-mt-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-on-background mb-12"
      >
        Education
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-bento-gap">
        {education.map((edu, i) => {
          const Icon = iconMap[edu.icon] || GraduationCap;
          const tags = edu.coursework || edu.subjects || [];

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-card p-10 group"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Icon size={32} />
                </div>
                <div className="text-right">
                  <span className="text-primary font-bold text-lg">{edu.period}</span>
                  <div className="flex items-center gap-1 text-outline text-xs mt-1 justify-end font-medium uppercase tracking-wider">
                    <MapPin size={12} />
                    {edu.location}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-on-surface leading-tight group-hover:text-primary transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-secondary font-bold text-lg flex items-center gap-2">
                  <GraduationCap size={20} />
                  {edu.institution}
                </p>
                <div className="w-12 h-1 bg-primary/30 group-hover:w-full transition-all duration-700 rounded-full" />
                <p className="text-on-surface-variant leading-relaxed">
                  {edu.details}
                </p>
              </div>

              {tags.length > 0 && (
                <div className="mt-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-outline mb-3">
                    {edu.coursework ? 'Key Coursework' : 'Subjects'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span key={tag} className="pill bg-white/40 text-[10px]">{tag}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 flex gap-4 flex-wrap">
                <div className="pill py-1.5 px-4 bg-emerald-50 text-emerald-700 border-emerald-100 uppercase tracking-widest text-[9px]">
                  {edu.score}
                </div>
                {edu.current && (
                  <div className="pill py-1.5 px-4 bg-blue-50 text-blue-700 border-blue-100 uppercase tracking-widest text-[9px]">
                    Class of 2026
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
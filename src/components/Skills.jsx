import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import * as Icons from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-32">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-on-background mb-12"
      >
        Skills & Tech Stack
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-bento-gap">
        {skillCategories.map((category, index) => {
          const Icon = Icons[category.icon] || Icons.Code2;
          const isWide = category.category === 'Frontend';
          
          return (
            <motion.div 
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-8 group transition-all duration-500 ${
                isWide ? 'md:col-span-8' : 'md:col-span-4'
              }`}
            >
              <div className={`flex items-center gap-4 mb-6 transition-colors duration-300 ${
                category.color === 'primary' ? 'text-primary' : 
                category.color === 'secondary' ? 'text-secondary' : 'text-tertiary'
              }`}>
                <div className="p-3 rounded-xl bg-current/10">
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-bold">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <span 
                    key={skill}
                    className="pill py-2 px-4 transition-all duration-300 hover:bg-white hover:shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;

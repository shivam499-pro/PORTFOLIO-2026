import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { Monitor, Server, Brain, Database, Settings2, Smartphone, Code2 } from 'lucide-react';

const iconMap = {
  Monitor,
  Server,
  Brain,
  Database,
  Settings2,
  Smartphone,
  Code2,
};

const colSpanMap = {
  'Frontend': 'md:col-span-6',
  'Backend': 'md:col-span-6',
  'AI & ML': 'md:col-span-4',
  'Database': 'md:col-span-4',
  'DevOps & Tools': 'md:col-span-4',
  'Mobile': 'md:col-span-12',
};

const colorMap = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
  'primary-container': 'text-primary',
  'on-secondary-container': 'text-secondary',
};

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
          const Icon = iconMap[category.icon] || Code2;
          const colSpan = colSpanMap[category.category] || 'md:col-span-4';
          const textColor = colorMap[category.color] || 'text-primary';

          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-8 group transition-all duration-500 hover:-translate-y-1 ${colSpan}`}
            >
              <div className={`flex items-center gap-4 mb-6 transition-colors duration-300 ${textColor}`}>
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
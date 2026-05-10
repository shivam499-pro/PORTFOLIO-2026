import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ExternalLink, Code2, Monitor } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-on-background">Featured Projects</h2>
          <p className="text-outline mt-2 text-lg">A showcase of my recent technical work.</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <button className="btn-secondary py-2">View All Projects</button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-card flex flex-col group"
          >
            {/* Project Image Placeholder */}
            <div className="relative w-full aspect-video bg-surface-variant/30 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Monitor size={64} className="text-outline/40 group-hover:scale-110 group-hover:text-primary/40 transition-all duration-700" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="pill bg-white/60 backdrop-blur-md border-none text-[9px]">{project.category}</span>
                {project.status && (
                  <span className="pill bg-primary/10 text-primary backdrop-blur-md border-none text-[9px] font-bold uppercase">{project.status}</span>
                )}
              </div>
            </div>

            <div className="p-8 flex flex-col flex-1 space-y-4">
              <h3 className="text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {project.techStack.map(tag => (
                  <span key={tag} className="text-[10px] font-bold text-outline uppercase tracking-wider bg-surface-container-low px-2 py-1 rounded border border-outline-variant/30">{tag}</span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto pt-6 border-t border-outline-variant/20">
                {project.live && (
                  <a href={project.live} className="btn-primary flex-1 py-3 text-[10px]" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} />
                    Demo
                  </a>
                )}
                <a href={project.github} className="btn-secondary flex-1 py-3 text-[10px]" target="_blank" rel="noopener noreferrer">
                  <Code2 size={14} />
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

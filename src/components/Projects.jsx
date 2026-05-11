import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ExternalLink, Code2 } from 'lucide-react';

const MAX_TAGS = 5;

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-on-background">
            Things I've Built
          </h2>
          <p className="text-outline mt-2 text-lg">
            Real projects. Real problems. No tutorial clones.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const visibleTags = project.techStack.slice(0, MAX_TAGS);
          const extraTags = project.techStack.length - MAX_TAGS;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card flex flex-col group hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Emoji Header Card */}
              <div className="relative w-full aspect-[3/1] bg-gradient-to-br from-primary/8 via-secondary/5 to-transparent flex items-center justify-center overflow-hidden">
                <motion.span
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
                  className="text-5xl select-none"
                >
                  {project.emoji}
                </motion.span>

                {/* Top badges */}
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                  <span className="pill bg-white/60 backdrop-blur-md border-none text-[9px]">
                    {project.category}
                  </span>
                  {project.status && (
                    <span className={`pill backdrop-blur-md border-none text-[9px] font-bold uppercase ${project.status === 'In Development'
                      ? 'bg-blue-100 text-blue-600'
                      : project.status === 'Hackathon Project'
                        ? 'bg-orange-100 text-orange-600'
                        : 'bg-emerald-100 text-emerald-600'
                      }`}>
                      {project.status}
                    </span>
                  )}
                  {project.badge && (
                    <span className="pill bg-yellow-100 text-yellow-700 backdrop-blur-md border-none text-[9px] font-bold uppercase">
                      🏆 {project.badge}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1 space-y-3">
                <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Stats if available */}
                {project.stats && (
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <span
                        key={key}
                        className="text-[10px] font-bold text-primary bg-primary/8 px-3 py-1.5 rounded-full border border-primary/20"
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {visibleTags.map(tag => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold text-outline uppercase tracking-wider bg-surface-container-low px-2 py-1 rounded border border-outline-variant/30"
                    >
                      {tag}
                    </span>
                  ))}
                  {extraTags > 0 && (
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
                      +{extraTags} more
                    </span>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex gap-4 mt-auto pt-6 border-t border-outline-variant/20">
                  {project.live && (
                    <a
                      href={project.live}
                      className="btn-primary flex-1 py-3 text-[10px]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    className="btn-secondary flex-1 py-3 text-[10px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code2 size={14} />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
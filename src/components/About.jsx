import React from 'react';
import { motion } from 'framer-motion';
import { User, Rocket, Code2, Briefcase, Mail } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Projects', value: '10+', color: 'text-primary' },
    { label: 'DSA Problems', value: '500+', color: 'text-secondary' },
    { label: 'Commits', value: '500+', color: 'text-tertiary' },
  ];

  return (
    <section id="about" className="scroll-mt-32">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-on-background mb-12"
      >
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-bento-gap">
        {/* Profile Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card md:col-span-4 p-8 flex flex-col items-center text-center space-y-6"
        >
          <div className="relative group">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white shadow-xl bg-surface-variant flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
               <User size={64} className="text-outline" />
            </div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 border-2 border-dashed border-primary/30 rounded-full"
            />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Shivam Jaiswal</h3>
            <p className="text-sm text-outline font-medium tracking-wide">Developer • Designer • Innovator</p>
          </div>

          <div className="w-full h-px bg-outline-variant/30"></div>
          
          <div className="pill border-primary/30 bg-primary/10 text-primary w-full justify-center py-2">
            <Rocket size={14} className="mr-2" />
            <span className="text-[10px]">Building AI Career Navigator '26</span>
          </div>

            <div className="flex gap-4 pt-2">
            {[Code2, Briefcase, Mail].map((Icon, i) => (
              <a key={i} href="#" className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors text-outline">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Bio & Stats */}
        <div className="md:col-span-8 flex flex-col gap-bento-gap">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 flex-1"
          >
            <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">
              I am a passionate software engineer with a strong foundation in <span className="text-primary font-semibold">full-stack development</span> and an active interest in <span className="text-secondary font-semibold">artificial intelligence</span>. I thrive on solving complex problems and turning ideas into scalable, user-centric applications.
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              My journey in tech is driven by curiosity and a commitment to continuous learning. When I'm not coding, you can find me exploring new design systems or participating in hackathons.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-bento-gap">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 flex flex-col items-center justify-center text-center"
              >
                <span className={`text-4xl font-bold ${stat.color}`}>{stat.value}</span>
                <span className="text-xs font-bold text-outline mt-2 uppercase tracking-widest">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

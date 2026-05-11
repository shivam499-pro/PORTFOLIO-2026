import React from 'react';
import { motion } from 'framer-motion';
import { User, Rocket, Mail } from 'lucide-react';

const stats = [
  { label: 'Projects Built', value: '6+', color: 'text-primary' },
  { label: 'DSA Problems', value: '35+', color: 'text-secondary' },
  { label: 'GitHub Repos', value: '14', color: 'text-tertiary' },
];

const languages = [
  { name: 'Hindi', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'Nepali', level: 'Fluent' },
];

const interests = ['Open Source', 'AI/ML', 'Hackathons', 'Building Products', 'Tech Communities'];

const About = () => {
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
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white shadow-xl transition-transform duration-500 group-hover:scale-105">
              <img
                src="/photo-6.jpeg"
                alt="Shivam Jaiswal"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 border-2 border-dashed border-primary/30 rounded-full"
            />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">Shivam Jaiswal</h3>
            <p className="text-sm text-outline font-medium tracking-wide">Full-Stack Developer • AI Enthusiast</p>
            <p className="text-xs text-outline">Chennai, Tamil Nadu, India 🇮🇳</p>
          </div>

          <div className="w-full h-px bg-outline-variant/30"></div>

          <div className="pill border-primary/30 bg-primary/10 text-primary w-full justify-center py-2">
            <Rocket size={14} className="mr-2" />
            <span className="text-[10px]">Building AI Career Navigator '26</span>
          </div>

          <div className="pill border-primary/30 bg-primary/10 text-primary w-full justify-center py-2">
            <Rocket size={14} className="mr-2" />
            <span className="text-[10px]">Completed Project UPI-SECURE-PAY</span>
          </div>

          <div className="pill border-primary/30 bg-primary/10 text-primary w-full justify-center py-2">
            <Rocket size={14} className="mr-2" />
            <span className="text-[10px]">Completed Project Cattle-breed-recognitions</span>
          </div>

          <div className="pill border-primary/30 bg-primary/10 text-primary w-full justify-center py-2">
            <Rocket size={14} className="mr-2" />
            <span className="text-[10px]"> Completed Explainable AI Credit Scoring System</span>
          </div>


          {/* Languages */}
          <div className="w-full space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-outline text-left">Languages</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {languages.map((lang) => (
                <span key={lang.name} className="pill text-[10px] bg-white/40">
                  {lang.name} · {lang.level}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-2">
            <a href="https://github.com/shivam499-pro" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors text-outline">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/shivam-jaiswal-425656337" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors text-outline">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="mailto:sj9988789@gmail.com"
              className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors text-outline">
              <Mail size={20} />
            </a>
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
              I am a passionate <span className="text-primary font-semibold">3rd year CSE student</span> at Rajalakshmi Engineering College, Chennai with a strong foundation in <span className="text-primary font-semibold">full-stack development</span> and an active interest in <span className="text-secondary font-semibold">artificial intelligence</span>. I build real-world projects that solve actual problems — not tutorial clones.
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Moved from Nepal to Chennai to study CS — best decision I've made so far. I'm the kind of person who can't just follow a tutorial. Every project I build has to solve something real. So far that's meant building a fraud detection engine for UPI payments, an AI that identifies cattle breeds for farmers, and a career guidance tool I wish existed when I was choosing my path. 3rd year at REC. Still figuring things out — but shipping code along the way.
            </p>

            {/* Interests */}
            <div className="mt-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-outline mb-3">Beyond the Code</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span key={interest} className="pill text-[10px] bg-white/40">{interest}</span>
                ))}
              </div>
            </div>
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
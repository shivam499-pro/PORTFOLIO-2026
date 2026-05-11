import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/personalinfo';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 py-24 md:py-12">

      {/* LEFT — Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex-1 space-y-6 text-center md:text-left z-10"
      >
        {/* Welcome badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 pill border-primary/20 bg-primary/5 text-primary py-1.5 px-4"
        >
          <span className="text-sm">👋</span>
          <span className="text-[11px] font-bold">Welcome to my space</span>
        </motion.div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-on-background leading-tight tracking-tight">
          Hi, I'm <br className="hidden md:block" />
          <span className="text-gradient">{personalInfo.name}</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl font-semibold text-on-surface-variant max-w-2xl">
          {personalInfo.taglines[0]} & {personalInfo.taglines[2]}.
        </p>

        {/* Bio */}
        <p className="text-lg text-outline max-w-2xl mx-auto md:mx-0 leading-relaxed">
          {personalInfo.bio}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
          <a href="#projects" className="btn-primary group">
            View My Work
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="btn-secondary group">
            Contact Me
            <MessageSquare size={16} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center md:justify-start gap-6 pt-2">
          {[
            {
              href: personalInfo.socials.github,
              label: 'GitHub',
              icon: (
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              ),
            },
            {
              href: personalInfo.socials.linkedin,
              label: 'LinkedIn',
              icon: (
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
            {
              href: personalInfo.socials.twitter,
              label: 'Twitter',
              icon: (
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              ),
            },
          ].map((social, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.2 }}
              className="text-outline hover:text-primary transition-colors"
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* RIGHT — Animated Code Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="w-full md:flex-1 flex justify-center z-10"
      >
        <div className="glass-card w-full max-w-xs md:max-w-md p-6 bg-gradient-to-br from-white/60 to-white/10 border-white/80 font-mono text-sm">

          {/* Terminal top bar */}
          <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/30">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-2 text-[10px] text-outline font-bold uppercase tracking-widest">shivam.js</span>
          </div>

          {/* Code content */}
          <div className="space-y-1 text-xs md:text-sm">
            <div>
              <span className="text-purple-500 font-bold">const </span>
              <span className="text-blue-600 font-bold">shivam</span>
              <span className="text-on-surface"> = {"{"}</span>
            </div>

            <div className="pl-4">
              <span className="text-teal-600">role</span>
              <span className="text-on-surface">: </span>
              <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} className="text-emerald-600">
                "Full Stack Dev"
              </motion.span>
              <span className="text-on-surface">,</span>
            </div>

            <div className="pl-4">
              <span className="text-teal-600">from</span>
              <span className="text-on-surface">: </span>
              <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} className="text-emerald-600">
                "Nepal 🇳🇵"
              </motion.span>
              <span className="text-on-surface">,</span>
            </div>

            <div className="pl-4">
              <span className="text-teal-600">based</span>
              <span className="text-on-surface">: </span>
              <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} className="text-emerald-600">
                "Chennai, India 🇮🇳"
              </motion.span>
              <span className="text-on-surface">,</span>
            </div>

            <div className="pl-4">
              <span className="text-teal-600">building</span>
              <span className="text-on-surface">: </span>
              <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.9 }} className="text-emerald-600">
                "AI Career Navigator"
              </motion.span>
              <span className="text-on-surface">,</span>
            </div>

            <div className="pl-4">
              <span className="text-teal-600">loves</span>
              <span className="text-on-surface">: [</span>
              <span className="text-orange-500">"React"</span>
              <span className="text-on-surface">, </span>
              <span className="text-orange-500">"AI"</span>
              <span className="text-on-surface">, </span>
              <span className="text-orange-500">"Python"</span>
              <span className="text-on-surface">],</span>
            </div>

            <div className="pl-4 flex items-center gap-1">
              <span className="text-teal-600">status</span>
              <span className="text-on-surface">: </span>
              <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-emerald-500 font-bold">
                "Open to work ✅"
              </motion.span>
            </div>

            <div>
              <span className="text-on-surface">{"}"}</span>
            </div>

            {/* Blinking cursor */}
            <div className="flex items-center gap-1 pt-2">
              <span className="text-outline text-xs">▶</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-primary rounded-sm"
              />
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
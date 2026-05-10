import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-on-background mb-12"
      >
        Get In Touch
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-bento-gap">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 space-y-8"
        >
          <div className="glass-card p-8 space-y-6">
            <h3 className="text-2xl font-bold text-on-surface">Let's discuss your next project</h3>
            <p className="text-on-surface-variant leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-4">
              <a href="mailto:sj9988789@gmail.com" className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors group">
                <div className="p-3 rounded-xl bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-outline">Personal Email</p>
                  <p className="font-semibold">sj9988789@gmail.com</p>
                </div>
              </a>

              <a href="mailto:shivamjaiswal.2024.cse@rajalakshmi.edu.in" className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors group">
                <div className="p-3 rounded-xl bg-secondary/5 group-hover:bg-secondary/10 transition-colors">
                  <Mail size={20} className="text-secondary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-outline">College Email</p>
                  <p className="font-semibold">shivamjaiswal.2024.cse@rajalakshmi.edu.in</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-on-surface-variant">
                <div className="p-3 rounded-xl bg-secondary/5">
                  <MessageSquare size={20} className="text-secondary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Socials</p>
                  <div className="flex gap-4">
                    {/* GitHub */}
                    <a href="https://github.com/shivam499-pro" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all hover:scale-110">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/shivam-jaiswal-425656337" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all hover:scale-110">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    {/* Twitter/X */}
                    <a href="https://x.com/Jaisuuuuuu" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all hover:scale-110">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 bg-primary/5 border-primary/20">
            <p className="text-primary font-bold text-sm mb-2 uppercase tracking-tighter">Current Availability</p>
            <p className="text-on-surface-variant text-sm">Open for internship opportunities starting <span className="font-bold text-on-surface">immediately</span>.</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7"
        >
          <form className="glass-card p-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-outline ml-1">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/50 border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-outline ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/50 border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-outline ml-1">Subject</label>
              <input
                type="text"
                placeholder="Project Inquiry / Internship Opportunity"
                className="w-full bg-white/50 border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-outline ml-1">Your Message</label>
              <textarea
                rows="5"
                placeholder="Tell me about your project or opportunity..."
                className="w-full bg-white/50 border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all resize-none"
              ></textarea>
            </div>

            <button className="btn-primary w-full py-4 group">
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
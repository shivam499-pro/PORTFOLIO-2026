import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Code2, Briefcase, MessageCircle } from 'lucide-react';

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
              <a href="mailto:shivam@example.com" className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors group">
                <div className="p-3 rounded-xl bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-outline">Email Me</p>
                  <p className="font-semibold">shivam.jaiswal@example.com</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 text-on-surface-variant group">
                <div className="p-3 rounded-xl bg-secondary/5 group-hover:bg-secondary/10 transition-colors">
                  <MessageSquare size={20} className="text-secondary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-outline">Socials</p>
                  <div className="flex gap-4 mt-1">
                    {[Code2, Briefcase, MessageCircle].map((Icon, i) => (
                      <a key={i} href="#" className="hover:text-primary transition-all hover:scale-110">
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 bg-primary/5 border-primary/20">
            <p className="text-primary font-bold text-sm mb-2 uppercase tracking-tighter">Current Availability</p>
            <p className="text-on-surface-variant text-sm">Open for internship opportunities starting <span className="font-bold text-on-surface">Fall 2026</span>.</p>
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
                placeholder="Project Inquiry"
                className="w-full bg-white/50 border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-outline ml-1">Your Message</label>
              <textarea 
                rows="5"
                placeholder="Tell me about your project..."
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

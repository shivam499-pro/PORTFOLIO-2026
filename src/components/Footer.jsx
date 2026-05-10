import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-outline-variant/20 py-12 px-margin-mobile md:px-margin-desktop bg-white/20 backdrop-blur-md">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-4 text-center md:text-left">
          <a href="#" className="text-2xl font-bold text-primary tracking-tighter">SJ</a>
          <p className="text-on-surface-variant text-sm max-w-xs">
            Designing and developing premium digital experiences with a focus on motion and AI.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-8 text-sm font-semibold text-outline">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <p className="text-outline text-xs flex items-center gap-1.5 font-medium">
            © 2026 Shivam Jaiswal. Made with <Heart size={12} className="text-red-500 fill-red-500" /> using React & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

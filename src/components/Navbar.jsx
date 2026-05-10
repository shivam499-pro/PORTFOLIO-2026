import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'DSA', href: '#dsa' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/40 backdrop-blur-xl border-b border-white/60 shadow-sm' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <a href="#" className="text-2xl font-bold text-primary tracking-tighter">SJ</a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4 border-l border-outline-variant/30 pl-8">
            <div className="pill border-none bg-surface-container-low shadow-sm scale-90">
              <span className="pulse-dot"></span>
              <span className="text-[10px] ml-1">Open to Internships</span>
            </div>
            <button className="btn-primary flex items-center gap-2 py-2">
              <Download size={14} />
              Resume
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-on-surface p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-outline-variant/30 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-on-surface-variant hover:text-primary py-2 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="btn-primary w-full mt-4">Download Resume</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

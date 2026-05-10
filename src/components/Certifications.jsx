import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      icon: <Award size={24} />,
      color: "text-orange-500"
    },
    {
      title: "Google Data Analytics",
      issuer: "Coursera",
      date: "2023",
      icon: <ShieldCheck size={24} />,
      color: "text-blue-500"
    },
    {
      title: "Full Stack Development",
      issuer: "FreeCodeCamp",
      date: "2023",
      icon: <Award size={24} />,
      color: "text-emerald-500"
    }
  ];

  return (
    <section id="certifications" className="scroll-mt-32">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-on-background mb-12"
      >
        Certifications
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-bento-gap">
        {certs.map((cert, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-card p-6 group"
          >
            <div className={`p-4 rounded-xl bg-current/10 mb-6 transition-colors duration-500 ${cert.color}`}>
              {cert.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
            <p className="text-on-surface-variant text-sm font-medium mb-4">{cert.issuer}</p>
            
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/10">
              <span className="text-xs font-bold text-outline">{cert.date}</span>
              <a href="#" className="text-primary hover:scale-110 transition-transform">
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

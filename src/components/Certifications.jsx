import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data/skills';

// Map type to colors
const typeStyles = {
  Hackathon: {
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  Internship: {
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  Course: {
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
};

const Certifications = () => {
  return (
    <section id="certifications" className="scroll-mt-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-on-background mb-4"
      >
        Certifications & Achievements
      </motion.h2>
      <p className="text-on-surface-variant mb-12">
        More certifications coming soon — actively learning! 🚀
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-bento-gap">
        {certifications.map((cert, i) => {
          const style = typeStyles[cert.type] || typeStyles["Course"];

          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`p-4 rounded-xl ${style.bgColor} ${style.color} shrink-0 text-2xl flex items-center justify-center w-14 h-14`}
                >
                  {cert.icon}
                </div>
                <div>
                  <span className="pill text-[9px] bg-white/40 mb-2 inline-block">
                    {cert.type}
                  </span>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-on-surface-variant text-sm font-medium mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                {cert.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
                <span className="text-xs font-bold text-outline">{cert.date}</span>
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:scale-110 transition-transform flex items-center gap-1 text-xs font-semibold"
                  >
                    View <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="text-xs text-outline italic">Physical Certificate</span>
                )}
              </div>
            </motion.div>
          );
        })}

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: certifications.length * 0.1 }}
          className="glass-card p-8 border-dashed border-outline-variant flex flex-col items-center justify-center text-center space-y-4 opacity-70 group"
        >
          <div className="w-14 h-14 rounded-full border-2 border-dashed border-outline-variant flex items-center justify-center text-outline group-hover:text-primary group-hover:border-primary transition-colors duration-500">
            <Award size={24} />
          </div>
          <div>
            <p className="text-outline font-semibold">More Coming Soon</p>
            <p className="text-xs text-outline mt-1">Actively pursuing NPTEL & cloud certs</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
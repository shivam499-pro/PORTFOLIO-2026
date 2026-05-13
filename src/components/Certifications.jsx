import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Trophy, BookOpen, Briefcase, Zap, Rocket } from 'lucide-react';
import { certifications } from '../data/skills';

const iconMap = {
  "🏆": { icon: Trophy, color: "text-orange-500", bgColor: "bg-orange-50" },
  "💼": { icon: Briefcase, color: "text-purple-600", bgColor: "bg-purple-50" },
  "⚡": { icon: Zap, color: "text-yellow-500", bgColor: "bg-yellow-50" },
  "🚀": { icon: Rocket, color: "text-blue-500", bgColor: "bg-blue-50" },
  "📜": { icon: BookOpen, color: "text-blue-600", bgColor: "bg-blue-50" },
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
      <p className="text-on-surface-variant mb-12">Real certificates. Still collecting more. 🎯</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-bento-gap">
        {certifications.map((cert, i) => {
          const mapped = iconMap[cert.icon] || { icon: Award, color: "text-primary", bgColor: "bg-primary/10" };
          const Icon = mapped.icon;

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
                <div className={`p-4 rounded-xl ${mapped.bgColor} ${mapped.color} shrink-0`}>
                  <Icon size={24} />
                </div>
                <div>
                  <span className="pill text-[9px] bg-white/40 mb-2 inline-block">{cert.type}</span>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-on-surface-variant text-sm font-medium mt-1">{cert.issuer}</p>
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
            <p className="text-xs text-outline mt-1">Pursuing NPTEL, AWS & cloud certs</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
import React from 'react';
import { motion } from 'framer-motion';
import { dsaPlatforms, dsaStats } from '../data/skills';
import { Terminal, Trophy, Binary, ChevronRight } from 'lucide-react';

const icons = {
  terminal: Terminal,
  leaderboard: Trophy,
  code: Binary,
};

const DSA = () => {
  const leetcode = dsaPlatforms.find(p => p.name === 'LeetCode');
  const hackerrank = dsaPlatforms.find(p => p.name === 'HackerRank');
  const github = dsaPlatforms.find(p => p.name === 'GitHub');

  const summaryStats = [
    { label: 'Problems Solved', value: `${leetcode?.solved}+`, color: 'text-primary' },
    { label: 'Acceptance Rate', value: leetcode?.acceptance, color: 'text-secondary' },
    { label: 'Max Streak', value: `${leetcode?.maxStreak} days`, color: 'text-tertiary' },
  ];

  return (
    <section id="dsa" className="scroll-mt-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-on-background mb-12"
      >
        DSA & Problem Solving
      </motion.h2>

      {/* Real Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-bento-gap mb-12">
        {summaryStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 flex flex-col items-center text-center"
          >
            <span className={`text-4xl font-bold ${stat.color}`}>{stat.value}</span>
            <span className="text-xs font-bold text-outline mt-3 uppercase tracking-[0.2em]">{stat.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Platform Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-bento-gap">

        {/* LeetCode Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0 }}
          whileHover={{ y: -8 }}
          className="glass-card p-8 flex flex-col group"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
              <Terminal size={28} className="text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">LeetCode</h3>
              <p className="text-xs text-outline">@{leetcode?.username}</p>
            </div>
          </div>

          {/* Solved count */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-semibold text-on-surface">Total Solved</span>
              <span className="text-primary font-bold">{leetcode?.solved} / {leetcode?.totalProblems}</span>
            </div>
          </div>

          {/* Easy / Medium / Hard breakdown */}
          <div className="space-y-2 mb-6">
            {[
              { label: 'Easy', count: leetcode?.breakdown?.easy, total: 943, color: 'bg-emerald-400' },
              { label: 'Medium', count: leetcode?.breakdown?.medium, total: 2054, color: 'bg-yellow-400' },
              { label: 'Hard', count: leetcode?.breakdown?.hard, total: 931, color: 'bg-red-400' },
            ].map(({ label, count, total, color }) => (
              <div key={label}>
                <div className="flex justify-between text-[10px] font-bold text-outline mb-1">
                  <span>{label}</span>
                  <span>{count} / {total}</span>
                </div>
                <div className="w-full h-1.5 bg-surface-variant/40 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(count / total) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className={`h-full rounded-full ${color}`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Extra stats */}
          <div className="grid grid-cols-2 gap-2 mb-6 text-center">
            <div className="bg-surface-variant/20 rounded-xl p-3">
              <p className="text-xs text-outline">Active Days</p>
              <p className="font-bold text-on-surface">{leetcode?.activeDays}</p>
            </div>
            <div className="bg-surface-variant/20 rounded-xl p-3">
              <p className="text-xs text-outline">Acceptance</p>
              <p className="font-bold text-on-surface">{leetcode?.acceptance}</p>
            </div>
          </div>

          <a
            href={leetcode?.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-full py-3 text-[10px] text-center mt-auto"
          >
            View Profile <ChevronRight size={14} className="inline ml-1" />
          </a>
        </motion.div>

        {/* HackerRank Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          whileHover={{ y: -8 }}
          className="glass-card p-8 flex flex-col group"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 flex items-center justify-center bg-secondary/10 rounded-2xl group-hover:bg-secondary/20 transition-colors">
              <Trophy size={28} className="text-secondary" />
            </div>
            <div>
              <h3 className="text-xl font-bold group-hover:text-secondary transition-colors">HackerRank</h3>
              <p className="text-xs text-outline">@{hackerrank?.username}</p>
            </div>
          </div>

          <p className="text-secondary font-bold text-lg mb-4">{hackerrank?.stars}</p>

          <div className="space-y-3 mb-6">
            <p className="text-[10px] font-bold text-outline uppercase tracking-widest">Badges Earned</p>
            <div className="flex flex-wrap gap-2">
              {hackerrank?.badges?.map(badge => (
                <span key={badge} className="pill text-[10px] bg-secondary/5 border-secondary/20 text-secondary">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <p className="text-[10px] font-bold text-outline uppercase tracking-widest">Strengths</p>
            <div className="flex flex-wrap gap-2">
              {hackerrank?.topicStrengths?.map(tag => (
                <span key={tag} className="pill text-[9px]">{tag}</span>
              ))}
            </div>
          </div>

          <a
            href={hackerrank?.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-full py-3 text-[10px] text-center mt-auto"
          >
            View Profile <ChevronRight size={14} className="inline ml-1" />
          </a>
        </motion.div>

        {/* GitHub Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ y: -8 }}
          className="glass-card p-8 flex flex-col group"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 flex items-center justify-center bg-on-surface/5 rounded-2xl group-hover:bg-on-surface/10 transition-colors">
              <Binary size={28} className="text-on-surface" />
            </div>
            <div>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">GitHub</h3>
              <p className="text-xs text-outline">@{github?.username}</p>
            </div>
          </div>

          {/* GitHub stats */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-surface-variant/20 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-on-surface">{github?.repos}</p>
              <p className="text-[10px] text-outline mt-1">Public Repos</p>
            </div>
            <div className="bg-surface-variant/20 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-on-surface">{github?.commits}</p>
              <p className="text-[10px] text-outline mt-1">Commits</p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <p className="text-[10px] font-bold text-outline uppercase tracking-widest">Top Languages</p>
            <div className="flex flex-wrap gap-2">
              {github?.topLanguages?.map(lang => (
                <span key={lang} className="pill text-[10px]">{lang}</span>
              ))}
            </div>
          </div>

          <a
            href={github?.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-full py-3 text-[10px] text-center mt-auto"
          >
            View Profile <ChevronRight size={14} className="inline ml-1" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default DSA;
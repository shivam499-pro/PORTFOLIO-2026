export const skills = [
  {
    category: "Frontend",
    icon: "Monitor",
    color: "primary",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  },
  {
    category: "Backend",
    icon: "Server",
    color: "secondary",
    items: ["Node.js", "Express.js", "FastAPI", "Python", "REST APIs"],
  },
  {
    category: "AI & ML",
    icon: "Brain",
    color: "tertiary",
    items: ["Gemini API", "LangChain", "TensorFlow", "LightGBM", "OpenAI API", "Hugging Face"],
  },
  {
    category: "Database",
    icon: "Database",
    color: "primary-container",
    items: ["MongoDB", "PostgreSQL", "Supabase", "Firebase", "Redis"],
  },
  {
    category: "DevOps & Tools",
    icon: "Settings2",
    color: "on-secondary-container",
    items: ["Git", "GitHub", "Docker", "Vercel", "Postman", "VS Code"],
  },
  {
    category: "Mobile",
    icon: "Smartphone",
    color: "secondary",
    items: ["Android", "Java", "Kotlin", "TFLite"],
  },
];

export const dsaStats = {
  totalSolved: "300+",
  platforms: [
    {
      name: "LeetCode",
      username: "Shivam1_Jaiswal",
      profileUrl: "https://leetcode.com/u/Shivam1_Jaiswal/",
      solved: 35,
      breakdown: { easy: 20, medium: 13, hard: 2 },
      totalProblems: 3928,
      acceptance: "95.45%",
      maxStreak: 8,
      activeDays: 23,
      rank: "3,131,018",
      language: "Java",
      topicStrengths: {
        advanced: ["Dynamic Programming", "Backtracking", "Trie"],
        intermediate: ["Hash Table", "Math", "Tree"],
        fundamental: ["Array", "String", "Two Pointers"],
      },
      color: "primary",
      icon: "terminal",
    },
    {
      name: "HackerRank",
      username: "shivamjaiswal_22",
      profileUrl: "https://www.hackerrank.com/profile/shivamjaiswal_22",
      stars: "5 Star Problem Solving", // TODO: Update if different
      badges: ["Problem Solving", "Python", "SQL"],
      topicStrengths: ["Problem Solving", "Python", "SQL"],
      color: "secondary",
      icon: "leaderboard",
    },
    {
      name: "GitHub",
      username: "shivam499-pro",
      profileUrl: "https://github.com/shivam499-pro",
      repos: "14",
      commits: "100+",
      topLanguages: ["TypeScript", "Python", "JavaScript", "Java"],
      color: "on-surface",
      icon: "code",
    },
  ],
};

// TODO: Add real internship/experience once you have one
// Leaving placeholder with honest framing for now
export const experience = [
  // Example structure when you get an internship:
  // {
  //   id: 1,
  //   role: "Software Development Intern",
  //   company: "Company Name",
  //   duration: "Jun 2025 – Aug 2025",
  //   type: "Internship",
  //   techStack: ["React", "Node.js", "PostgreSQL"],
  //   highlights: [
  //     "Built X feature that improved Y by Z%",
  //     "Collaborated with team of N engineers",
  //   ],
  //   color: "primary",
  // },
];

export const certifications = [
  {
    id: 1,
    name: "Smart India Hackathon 2025",
    issuer: "Ministry of Education, Govt. of India",
    date: "2025",
    description: "Participation certificate for building AI-powered Cattle Breed Recognition system for Ministry of Fisheries, Animal Husbandry & Dairying.",
    credentialUrl: null,
    icon: "🏆",
    type: "Hackathon",
  },
  {
    id: 2,
    name: "Java Programming Internship",
    issuer: "InternPe",
    date: "Jan 2026",
    description: "Internship Completion Certificate (CID: IPI#71079) for Java Programming domain.",
    credentialUrl: "https://www.internpe.in",
    icon: "💼",
    type: "Internship",
  },
  {
    id: 3,
    name: "SRM Hackathon 10.0",
    issuer: "SRM University, Kattankulathur",
    date: "2025",
    description: "Certificate of Participation in Hackathon 10.0 hosted by Team SRM Hackathon, Department of Networking and Communications.",
    credentialUrl: null,
    icon: "⚡",
    type: "Hackathon",
  },
  {
    id: 4,
    name: "HACK HUSTLE 2.0",
    issuer: "Saveetha Engineering College, Chennai",
    date: "April 2026",
    description: "Certificate of Participation for team Sentinel Squad at Hack Hustle 2.0 conducted by Tech Society, 29-30 April 2026.",
    credentialUrl: null,
    icon: "🚀",
    type: "Hackathon",
  },
  {
    id: 5,
    name: "LinkedIn Learning Course Completion",
    issuer: "LinkedIn",
    date: "2025",
    description: "Completed professional development course on LinkedIn Learning platform.",
    credentialUrl: "https://www.linkedin.com/in/shivam-jaiswal-425656337",
    icon: "📜",
    type: "Course",
  },
];
export const achievements = [
  {
    id: 1,
    title: "Smart India Hackathon 2025",
    description: "Built AI-powered Cattle Breed Recognition system for Ministry of Fisheries, Animal Husbandry & Dairying",
    icon: "🏆",
    type: "Hackathon",
    year: "2025",
  },
  {
    id: 2,
    title: "One-Day Hackathon Winner",
    description: "Built AI Credit Scoring System at Saveetha Engineering College hackathon",
    icon: "⚡",
    type: "Hackathon",
    year: "2025",
  },
  {
    id: 3,
    title: "300+ DSA Problems Solved",
    description: "Consistently solving problems on LeetCode across arrays, DP, graphs, and trees",
    icon: "🎯",
    type: "DSA",
    year: "2024–2026",
  },
  {
    id: 4,
    title: "14 Public GitHub Repositories",
    description: "Actively building and open-sourcing real-world projects",
    icon: "🌟",
    type: "GitHub",
    year: "2024–2026",
  },
];

export const currentlyBuilding = {
  title: "AI Career Navigator 2026",
  description:
    "An AI-powered platform helping students navigate career paths using personalized roadmaps, skill gap analysis, and job matching. Reads real GitHub, LeetCode, LinkedIn & Resume profiles.",
  githubUrl: "https://github.com/shivam499-pro/AI-CAREER-NAVIGATOR-2026",
  status: "In Development",
  techStack: ["Next.js 14", "FastAPI", "Supabase", "Gemini 2.5 Flash", "TypeScript", "Python"],
  learningNow: ["LangGraph", "AWS", "System Design", "Docker", "Redis"],
};

// Alias to match component import expectations
export const skillCategories = skills;

// Alias to match DSA.jsx import
export const dsaPlatforms = dsaStats.platforms;
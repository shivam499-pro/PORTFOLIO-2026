export const projects = [
  {
    id: 1,
    title: "AI Career Navigator 2026",
    emoji: "🚀",
    description:
      "Personal AI-powered career mentor that reads your real GitHub, LeetCode, LinkedIn, and Resume profiles to provide personalized career guidance, skill gap analysis, and roadmap generation.",
    longDescription:
      "Analyzes resumes, maps skills, and suggests personalized career trajectories using LLMs and vector search. Features job matching, interview prep with AI-generated questions, and weekly milestone roadmaps.",
    techStack: ["Next.js 14", "TypeScript", "FastAPI", "Python", "Supabase", "Gemini 2.5 Flash", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/shivam499-pro/AI-CAREER-NAVIGATOR-2026",
    live: null,
    featured: true,
    category: "AI/ML",
    status: "In Development",
  },
  {
    id: 2,
    title: "UPI Secure Pay",
    emoji: "🛡️",
    description:
      "Next-generation AI-powered fraud prevention system for India's UPI ecosystem. Real-time protection against financial fraud before money leaves your account.",
    longDescription:
      "Enterprise-grade fraud detection with 91.83% F1 Score trained on 6.3M PaySim transactions. Features a 3-tier ML cascade (LightGBM + Transformer + GNN), AI scam-call detection, fraud network intelligence with graph analysis, and explainable AI decisions.",
    techStack: ["Python", "FastAPI", "LightGBM", "PyTorch", "React", "Tailwind CSS", "D3.js", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/shivam499-pro/upi-secure-pay-2026",
    live: null,
    featured: true,
    category: "AI/ML",
    status: "Completed",
    stats: {
      f1Score: "91.83%",
      recall: "99.88%",
      trainingData: "6.3M transactions",
    },
  },
  {
    id: 3,
    title: "Cattle Breed Recognition",
    emoji: "🐄",
    description:
      "AI-powered image-based breed recognition system for cattle and buffaloes of India — built for Smart India Hackathon 2025 for Ministry of Fisheries, Animal Husbandry & Dairying.",
    longDescription:
      "Identifies 60 cattle and buffalo breeds using YOLO-Nano + MobileNetV2 architecture. 10x model compression (30MB → 2.92MB) via INT8 quantization for offline use on sub-$100 Android devices in rural areas. 99.5% mAP50 detection accuracy.",
    techStack: ["Python", "TensorFlow", "MobileNetV2", "YOLO-Nano", "TFLite", "Android", "Kotlin", "Flask", "Google Colab"],
    github: "https://github.com/shivam499-pro/Cattle-breed-recognitions",
    live: null,
    featured: true,
    category: "AI/ML",
    status: "Completed",
    badge: "SIH 2025",
    stats: {
      accuracy: "90%+",
      breeds: "60 classes",
      modelSize: "2.92 MB",
    },
  },
  {
    id: 4,
    title: "AI Credit Scoring System",
    emoji: "💳",
    description:
      "AI-powered credit scoring system built during a one-day hackathon at Saveetha Engineering College.",
    longDescription:
      "Rapid hackathon prototype demonstrating AI-driven credit scoring and risk assessment built in under 24 hours.",
    techStack: ["Python", "Machine Learning", "React", "FastAPI"],
    github: "https://github.com/shivam499-pro/saveetha-college",
    live: null,
    featured: false,
    category: "AI/ML",
    status: "Hackathon Project",
    badge: "Hackathon",
  },
  {
    id: 5,
    title: "Hardware Store App",
    emoji: "🏗️",
    description:
      "Professional Android mobile app for a construction materials catalog with direct WhatsApp ordering integration.",
    longDescription:
      "Mobile-first catalog app allowing users to browse construction materials and place orders directly via WhatsApp. Clean native Android UI with product listings, categories, and one-tap ordering.",
    techStack: ["Java", "Android", "WhatsApp API"],
    github: "https://github.com/shivam499-pro/Hardware-App",
    live: null,
    featured: false,
    category: "Mobile",
    status: "In Development",
  },
  {
    id: 6,
    title: "Bike Rental System",
    emoji: "🏍️",
    description:
      "Full-featured bike rental management system built as a 3rd semester academic project in Java.",
    longDescription:
      "A complete bike rental management solution with booking, inventory tracking, and user management built with core Java.",
    techStack: ["Java", "OOP", "JDBC"],
    github: "https://github.com/shivam499-pro/Third-Semester-Project-bike-rental-system",
    live: null,
    featured: false,
    category: "Full-Stack",
    status: "Completed",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
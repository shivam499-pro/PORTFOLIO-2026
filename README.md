<div align="center">

# 🌌 My Portfolio 

**A production-ready personal portfolio built with a modern AI-assisted workflow**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

[🌐 Live Demo](#) • [📄 Resume](https://drive.google.com/file/d/1I5uKcn2eCvqjZY9YpojK0NHgxGmeVlG4/view) • [💼 LinkedIn](https://www.linkedin.com/in/shivam-jaiswal-425656337) • [🐙 GitHub](https://github.com/shivam499-pro)

</div>

---

## ✨ What Makes This Different

Most dev portfolios are either Figma-to-code tutorial clones or bare-bones HTML pages. This one was built differently — using a full **AI-assisted design-to-code pipeline** that I actually had to engineer, debug, and refine myself.

> Designed in **Google Stitch** → Converted by **Google Antigravity** → Manually refined → Deployed on **Vercel**

Every section has real data. Every link works. Every number is honest.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 + Vite 8 |
| **Styling** | Tailwind CSS v4 (PostCSS, no CDN) |
| **Animations** | Framer Motion |
| **Package Manager** | pnpm |
| **Design Tool** | Google Stitch (Aurora UI export) |
| **AI IDE** | Google Antigravity (Gemini 3) |
| **Deployment** | Vercel |

---

## 🎨 Design System

**Aurora UI** — a light-base design aesthetic with:

- 🌈 Iridescent gradient blobs (purple → cyan → pink) animated in the background
- 🪟 **Glassmorphism cards** — `backdrop-blur`, semi-transparent white, subtle borders
- 📐 **Bento grid layouts** for Skills and Projects sections
- ✨ **Framer Motion** scroll-triggered animations on every section
- 🔤 Geist font, clean hierarchy, generous whitespace
- 🌙 Glowing borders on card hover

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky glass navbar + mobile menu
│   ├── Hero.jsx            # Animated code card + social links
│   ├── About.jsx           # Bio, stats, languages, interests
│   ├── Skills.jsx          # Bento grid skill categories
│   ├── Projects.jsx        # 6 real projects with GitHub links
│   ├── DSA.jsx             # LeetCode, HackerRank, GitHub stats
│   ├── Experience.jsx      # Timeline (ready for internships)
│   ├── Education.jsx       # All 3 education entries
│   ├── Certifications.jsx  # Real certifications + achievements
│   ├── CurrentlyBuilding.jsx # AI Career Navigator 2026
│   ├── Contact.jsx         # Form + real social links
│   └── Footer.jsx
├── data/
│   ├── personalInfo.js     # Name, bio, socials, resume link
│   ├── projects.js         # 6 real projects with metadata
│   ├── skills.js           # Skills, DSA stats, certifications
│   └── experience.js       # Education + experience entries
└── App.jsx
```

---

## 🗂️ Sections

| Section | Description |
|---|---|
| **Hero** | Animated JS object card showing real info + social links |
| **About** | Bio, languages (Hindi/English/Nepali), interests, real stats |
| **Skills** | Bento grid — Frontend, Backend, AI/ML, Database, DevOps, Mobile |
| **Projects** | 6 real projects: AI Career Navigator, UPI Secure Pay, Cattle Breed Recognition + more |
| **DSA & Problem Solving** | LeetCode (35 solved), HackerRank, GitHub (14 repos) |
| **Experience** | Timeline — ready to populate when internships happen |
| **Education** | REC Chennai (7.95 CGPA) + 2 schools from Nepal |
| **Certifications** | SIH 2025 + LinkedIn Learning |
| **Currently Building** | AI Career Navigator 2026 with live GitHub link |
| **Contact** | Real emails + social links + contact form |

---

## 🚀 Build Workflow

This portfolio wasn't just coded — it was **engineered through a pipeline**:

```
1. 📝 Prompt Engineering
   └── Crafted a detailed Aurora UI prompt for Google Stitch

2. 🎨 Google Stitch (AI Design)
   └── Generated 9 screen iterations with Aurora UI aesthetic
   └── Exported HTML + Tailwind CSS

3. 🤖 Google Antigravity (AI IDE)
   └── Converted HTML → React 19 + Vite 8 + Tailwind v4
   └── Created modular component architecture
   └── Added Framer Motion animations

4. 🔧 Manual Refinement
   └── Fixed all field name mismatches between data and components
   └── Replaced all placeholder data with real info
   └── Fixed mobile layout, brand icons (lucide-react v4 breaking changes)
   └── Built animated code card for hero section
   └── Wired real social links, resume download, GitHub links

5. 📦 GitHub → Vercel
   └── Zero-config deployment
```

---

## 🏃 Run Locally

```bash
# Clone the repo
git clone https://github.com/shivam499-pro/PORTFOLIO-2026.git
cd PORTFOLIO-2026

# Install dependencies (requires pnpm)
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build
```

> Requires **Node.js 18+** and **pnpm**. Install pnpm: `npm i -g pnpm`

---

## 📊 Real Stats (No Inflation)

| Metric | Value |
|---|---|
| LeetCode Problems Solved | 35 (Easy: 20, Med: 13, Hard: 2) |
| LeetCode Acceptance Rate | 95.45% |
| GitHub Repositories | 14 public |
| REC CGPA | 7.95 / 10 |
| Projects Built | 6 real-world |

---

## 🔄 Updating Your Data

All content lives in `src/data/` — no hunting through components:

```js
// src/data/personalInfo.js — update your bio, links, resume
// src/data/projects.js    — add/remove projects
// src/data/skills.js      — update DSA stats, skills
// src/data/experience.js  — add internships when you get them
```

---

## 📬 Contact

**Shivam Jaiswal**
- 📧 [sj9988789@gmail.com](mailto:sj9988789@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/shivam-jaiswal-425656337)
- 🐙 [GitHub](https://github.com/shivam499-pro)
- 🎯 [LeetCode](https://leetcode.com/u/Shivam1_Jaiswal/)
- 🐦 [Twitter/X](https://x.com/Jaisuuuuuu)

---

<div align="center">

**Built by Shivam Jaiswal with React, Tailwind, Framer Motion, Google Stitch & Google Antigravity**

</div>

import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 4,
    title: "AI Resume Analyzer Web Application",
    summary: "A comprehensive platform that evaluates resumes against job descriptions, providing ATS scores, skill gaps, and AI-driven improvement suggestions.",
    problem: "Recruiters and applicants need fast, actionable feedback on resumes; manual reviews are slow and inconsistent.",
    approach: "Built a scalable FastAPI backend to parse PDF/DOC resumes, extract entities, index embeddings in ChromaDB, and generate targeted feedback using OpenAI/Gemini LLMs. Implemented asynchronous processing with Celery + Redis and a responsive React + TypeScript front-end for uploads and progress tracking.",
    techStack: ["Python", "FastAPI", "Celery", "Redis", "PostgreSQL", "React", "TypeScript", "Docker", "ChromaDB", "OpenAI/Gemini APIs"],
    challenges: [
      "Reliable parsing and entity extraction across varied resume formats",
      "Designing an async pipeline for long-running LLM tasks with user feedback",
      "Keeping costs and latency manageable when calling large LLMs"
    ],
    learnings: [
      "Productionized an LLM-backed pipeline with background task orchestration",
      "Integrated vector DBs for retrieval-augmented generation (RAG)",
      "Improved robustness by adding retries, validation, and monitoring for async jobs"
    ],
    github: "https://github.com/saranyaaaa17/AI-Resume-analyzer",
    live: "https://ai-resume-frontend-574902955161.us-central1.run.app/",
    screenshot: "/screenshots/ai-resume-analyzer.png",
    screenshots: ["/screenshots/ai-resume-analyzer.png"]
  },
  {
    id: 1,
    title: "Multi-Agent AI Tutor",
    summary: "A production-ready multi-agent tutoring platform that provides staff-level mentorship at scale through coordinated specialized agents.",
    problem: "Traditional learning platforms provide generic responses that don't adapt to individual learning patterns.",
    approach: "Developed a multi-agent architecture where specialized agents handle different aspects of tutoring and communicate to build learner profiles and adaptive explanations.",
    techStack: ["JavaScript", "Node", "NLP", "Multi-Agent Systems"],
    challenges: ["Coordinating agents without response conflicts", "Designing adaptive feedback loops"],
    learnings: ["Modular AI design", "NLP for educational content"],
    github: "https://github.com/saranyaaaa17/Agentic-ai-tutor",
    live: "https://agentic-ai-tutor-rho.vercel.app/",
    screenshot: "/screenshots/agentic-ai-tutor.png",
    screenshots: ["/screenshots/agentic-ai-tutor.png"]
  },
  {
    id: 2,
    title: "Heart Disease Prediction Model",
    summary: "An enterprise-grade ML application that predicts cardiovascular risk from clinical metrics and offers explainable insights.",
    problem: "Manual risk assessment may miss subtle patterns; automated approaches can help identify high-risk individuals sooner.",
    approach: "Built and evaluated supervised models with careful preprocessing, feature selection, and validation.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Jupyter"],
    challenges: ["Missing data handling", "Class imbalance", "Feature selection"],
    learnings: ["Importance of preprocessing", "Evaluation beyond accuracy"],
    github: "https://github.com/saranyaaaa17/Heart-Disease-Prediction",
    live: null,
    screenshot: "/screenshots/heart-disease-prediction.png",
    screenshots: ["/screenshots/heart-disease-prediction.png"]
  },
  {
    id: 5,
    title: "CreatorFlow",
    summary: "An AI-powered creator management platform — an editorial OS for planning, scheduling and publishing content across social platforms.",
    problem: "Creators need streamlined tooling to manage content, scheduling, and distribution.",
    approach: "Built a TypeScript-based web app focusing on content flows, scheduling, and integrations.",
    techStack: ["TypeScript", "React", "Node"],
    challenges: ["Designing an intuitive content flow", "Integrating publishing endpoints"],
    learnings: ["UX for creator tools", "API integrations"],
    github: "https://github.com/saranyaaaa17/CreatorFlow",
    live: null,
    screenshot: "/screenshots/creatorflow.png",
    screenshots: ["/screenshots/creatorflow.png"]
  },
  {
    id: 6,
    title: "AUREON",
    summary: "A cinematic, luxury-inspired music anthology web app focused on high-fidelity visuals and editorial experiences.",
    problem: "Music platforms lack premium editorial presentation and immersive listening experiences for curated collections.",
    approach: "Built a Next.js + TypeScript frontend with cinematic transitions, a custom design system, and an immersive player. Focused on editorial layouts, radial gradient theming, and a mood-driven discovery grid.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    challenges: ["Designing a luxury visual system", "Delivering smooth animations without performance regressions"],
    learnings: ["Design system composition for immersive UI", "Performance budgeting with heavy visuals"],
    github: "https://github.com/saranyaaaa17/AUREON",
    live: null,
    screenshot: "/screenshots/aureon.png",
    screenshots: ["/screenshots/aureon.png"]
  },
  {
    id: 7,
    title: "devconnect",
    summary: "A portfolio showcase and networking hub that consolidates developer profiles and project listings.",
    problem: "Developers struggle to present a cohesive portfolio and connect with other developers in a discoverable way.",
    approach: "Implemented a Next.js frontend with Prisma-backed data models, GitHub OAuth authentication, and a flexible profile/project schema. Added search and filtering to surface relevant developers.",
    techStack: ["Next.js", "Prisma", "SQLite", "Tailwind CSS"],
    challenges: ["Auth and data syncing with GitHub", "Designing a performant filtering experience"],
    learnings: ["Prisma schema design for portfolios", "Server-side auth flows and session handling"],
    github: "https://github.com/saranyaaaa17/devconnect",
    live: null,
    screenshot: "/screenshots/devconnect.png",
    screenshots: ["/screenshots/devconnect.png"]
  },
  {
    id: 8,
    title: "YouTube Clone",
    summary: "A frontend replica of YouTube demonstrating responsive media layouts, listing pages, and player interactions.",
    problem: "Understanding complex media-driven UI patterns requires hands-on rebuilds of common platforms.",
    approach: "Reimplemented video listing, responsive player, and accessible control patterns as a learning exercise focused on layout and UX.",
    techStack: ["HTML", "CSS", "JavaScript"],
    challenges: ["Media responsiveness", "Keyboard and accessibility for player controls"],
    learnings: ["Accessible media controls", "Optimized responsive video layouts"],
    github: "https://github.com/saranyaaaa17/youtubeclone",
    live: null,
    screenshot: "/screenshots/youtubeclone.png",
    screenshots: ["/screenshots/youtubeclone.png"]
  }
];

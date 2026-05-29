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
    summary: "A TypeScript web project showcasing frontend architecture and interactions",
    problem: "Needed a structured frontend codebase to prototype interactions and components.",
    approach: "Implemented reusable components and modular styles in TypeScript.",
    techStack: ["TypeScript", "React", "Tailwind"],
    challenges: ["Component design", "State management"],
    learnings: ["Scalable component patterns", "TypeScript ergonomics"],
    github: "https://github.com/saranyaaaa17/AUREON",
    live: null
  },
  {
    id: 7,
    title: "devconnect",
    summary: "A portfolio showcase platform for developers",
    problem: "Developers need an easy way to showcase projects and profiles in one place.",
    approach: "Built a platform to list developer portfolios, projects, and contact links.",
    techStack: ["HTML", "CSS", "JavaScript"],
    challenges: ["Designing flexible portfolio layouts", "Filtering and search"],
    learnings: ["Design for showcase content", "Responsive layouts"],
    github: "https://github.com/saranyaaaa17/devconnect",
    live: null
  },
  {
    id: 8,
    title: "YouTube Clone",
    summary: "A frontend replica of YouTube to demonstrate UI and interaction patterns",
    problem: "Learning by rebuilding common interfaces helps understand frontend challenges.",
    approach: "Recreated key UI patterns, video listings, and responsive player layout.",
    techStack: ["HTML", "CSS", "JavaScript"],
    challenges: ["Responsive media layout", "Player controls"],
    learnings: ["Media layout patterns", "Accessible controls"],
    github: "https://github.com/saranyaaaa17/youtubeclone",
    live: null
  }
];

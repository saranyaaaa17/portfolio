import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Multi-Agent AI Tutor",
    summary: "An intelligent tutoring system using coordinated AI agents",
    problem: "Traditional learning platforms provide generic responses that don't adapt to individual learning patterns. Students often struggle with concepts because explanations lack personalization and context-awareness.",
    approach: "Developed a multi-agent architecture where specialized agents handle different aspects of tutoring—one for content delivery, another for adaptive feedback, and a third for knowledge assessment. The agents communicate to build a learner profile and adjust explanations based on demonstrated understanding.",
    techStack: ["Python", "TensorFlow", "NLP", "Multi-Agent Systems", "Machine Learning"],
    challenges: [
      "Coordinating multiple agents without creating response conflicts or redundancy",
      "Designing a feedback loop that genuinely adapts rather than just varying pre-written responses",
      "Managing agent communication overhead to keep response times acceptable"
    ],
    learnings: [
      "Learned how to structure modular AI systems where components work independently but share state",
      "Gained experience in natural language processing for educational content",
      "Understood the complexity of building truly adaptive systems versus rule-based ones"
    ],
    github: "https://github.com/saranyaaaa17/agentic-ai-tutor",
    live: null
  },
  {
    id: 2,
    title: "Heart Disease Prediction Model",
    summary: "A machine learning model for cardiovascular risk assessment",
    problem: "Early detection of heart disease risk can significantly improve patient outcomes, but manual risk assessment is time-consuming and may miss subtle patterns in health data. A data-driven approach could assist in identifying high-risk individuals.",
    approach: "Built a supervised learning model using logistic regression on structured health metrics (cholesterol, blood pressure, age, BMI, etc.). The model classifies individuals into risk categories based on historical patient data with known outcomes.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Seaborn", "Matplotlib", "Jupyter Notebook"],
    challenges: [
      "Handling missing data and deciding between imputation strategies or removal",
      "Addressing class imbalance in the dataset (fewer positive cases than negative)",
      "Selecting relevant features without overfitting to training data"
    ],
    learnings: [
      "Understood the importance of data preprocessing in model performance",
      "Learned to evaluate models beyond just accuracy—precision and recall matter significantly in medical contexts",
      "Gained practical experience with scikit-learn's pipeline architecture for reproducible workflows"
    ],
    github: "https://github.com/saranyaaaa17/Heart-Disease-Prediction",
    live: null
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    summary: "A modern, responsive portfolio to showcase projects and skills",
    problem: "Generic portfolio templates don't reflect individual personality or technical skills. I needed a custom solution that demonstrates both design sensibility and front-end development capabilities while remaining clean and professional.",
    approach: "Designed and built a custom React-based portfolio from scratch using modern web technologies. Focused on creating a premium user experience with smooth animations, responsive design, and accessible navigation.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Vite", "Responsive Design"],
    challenges: [
      "Balancing aesthetic design with performance—keeping animations smooth without heavy libraries",
      "Ensuring accessibility while using advanced visual effects",
      "Creating a cohesive design system that scales across all sections"
    ],
    learnings: [
      "Learned to use Framer Motion's declarative animation API for complex interactions",
      "Gained experience with modern build tools (Vite) and their performance benefits",
      "Understood the importance of responsive design patterns and mobile-first thinking"
    ],
    github: "https://github.com/saranyaaaa17/portfolio-v1",
    live: "https://saranyaa.me"
  }
];

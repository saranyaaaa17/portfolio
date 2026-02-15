import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  summary: string;
  problem: string;
  approach: string;
  techStack: string[];
  challenges: string[];
  learnings: string[];
  github: string;
  live: string | null;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  certificate: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  status?: string;
  highlights: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  icon: LucideIcon;
  link: string;
}

export interface Highlight {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  value: string;
  label: string;
  suffix: string;
}

export interface ThinkingProcessCard {
  id: number;
  title: string;
  summary: string;
  detail: string;
}

export interface ContactMethod {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string | null;
}

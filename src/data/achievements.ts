import { Award, Trophy, BookOpen } from 'lucide-react';
import { Certification, Highlight } from '../types';

export const certifications: Certification[] = [
  { name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", issuer: "Oracle University", icon: Trophy, link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=EB06C9DDF1443FFB918689F027331D0C1327329824115A8016EDDF007DE7A856" },
  { name: "Data Science", issuer: "GeeksforGeeks", icon: Award, link: "https://www.geeksforgeeks.org/certificate/c332f5e01804f1b075332f798816c160" },
  { name: "Machine Learning", issuer: "Internshala", icon: Award, link: "https://drive.google.com/file/d/10Fs8lqmXORQHnF9WMHGgYtVrzynP2lgN/view?usp=drive_link" },
  { name: "AI Tools", issuer: "GeeksforGeeks", icon: Trophy, link: "https://www.geeksforgeeks.org/certificate/b555eac0c11dd17132ba15eae6d5a1eb" },
  { name: "Python Programming", issuer: "GeeksforGeeks", icon: BookOpen, link: "https://www.geeksforgeeks.org/certificate/cd8640add9b6ca87f39ad6492b4c7ca0" },
  { name: "Java (Basic)", issuer: "HackerRank", icon: BookOpen, link: "https://www.hackerrank.com/certificates/16a33117eaa4" },
  { name: "CSS", issuer: "HackerRank", icon: BookOpen, link: "https://www.hackerrank.com/certificates/bf92cba3861f" },
  { name: "Python (Basic)", issuer: "HackerRank", icon: BookOpen, link: "https://www.hackerrank.com/certificates/a6c62d8b50f9" },
  { name: "Responsive Web Design Certification", issuer: "FreeCodeCamp", icon: Award, link: "https://www.freecodecamp.org/certification/saranyaaaa17/responsive-web-design" },
  { name: "JavaScript Algorithms and Data Structures", issuer: "FreeCodeCamp", icon: BookOpen, link: "https://www.freecodecamp.org/certification/saranyaaaa17/javascript-algorithms-and-data-structures-v8" },

  { name: "GitHub Actions Badge", issuer: "Microsoft Learn", icon: Trophy, link: "https://learn.microsoft.com/en-us/users/saranyapothina-1667/achievements/4lqv3hhk" }
];

export const highlights: Highlight[] = [
  {
    title: "NCC 'A' Certificate",
    description: "Awarded for demonstrating leadership and discipline",
    icon: Trophy
  },
  {
    title: "Figma Bootcamp",
    description: "NSDC in collaboration with ITM Edutech Training Pvt. Ltd.",
    icon: BookOpen
  },
  {
    title: "Visual Designer",
    description: "Designed visual content for college souvenir using Canva",
    icon: Award
  },
  {
    title: "AWS – The Cloud Summit",
    description: "Attended workshop organized by The Skill Shop",
    icon: Award
  }
];

export const hackathons: string[] = [
  "GDG WowVizag",
  "HackVortex",
  "Google Agentic AI",
  "Gen AI Exchange"
];

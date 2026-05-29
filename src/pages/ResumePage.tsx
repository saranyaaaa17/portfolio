import { SectionContainer } from '../components/ui';
import { contactMethods } from '../data/contact';
import { projects } from '../data/projects';
import { educationList } from '../data/education';
import { certifications } from '../data/achievements';
import Button from '../components/ui/Button';
import { Mail } from 'lucide-react';

const RESUME_CV_LINK = "https://drive.google.com/file/d/1-eWDwEBZo7CmSrGOS8GKJifP0cWztGFr/view?usp=drive_link";

const ResumePage = () => {
  return (
    <div className="pt-24 min-h-screen bg-black px-6 md:px-12 pb-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-4xl font-black text-white">SARANYA POTHINA</h1>
            <div className="text-sm text-gray-300 mt-2">
              Visakhapatnam • +91 8688161699 • saranyapothina07@gmail.com • github.com/saranyaaaa17
            </div>
          </div>

          <div className="space-y-2">
            <Button href={RESUME_CV_LINK} variant="primary" icon={Mail} iconPosition="left">Download CV</Button>
            <Button href="mailto:saranyapothina07@gmail.com" variant="outline">Email</Button>
          </div>
        </div>

        <SectionContainer background="white">
          <h2 className="text-xl font-bold text-gray-100 mb-4">Summary</h2>
          <p className="text-gray-200 leading-relaxed">
            AI/ML Engineer with experience building AI-powered applications, scalable backend systems, and full-stack web applications using Python, FastAPI, and React. Skilled in REST APIs, LLM integration, vector databases, cloud deployment, and machine learning workflows with strong problem-solving and debugging abilities.
          </p>

          <h2 className="text-xl font-bold text-gray-100 mt-8 mb-4">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Python', 'JavaScript', 'TypeScript', 'SQL', 'React', 'FastAPI', 'LangChain', 'OpenAI/Gemini', 'ChromaDB', 'Docker', 'PostgreSQL', 'Redis'].map((s) => (
              <div key={s} className="px-4 py-2 bg-black border border-neutral-800 rounded-lg text-sm text-gray-200">{s}</div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-100 mt-8 mb-4">Projects</h2>
          <div className="space-y-6">
            {projects.map((p) => (
              <div key={p.id} className="p-4 bg-black border border-neutral-800 rounded-xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-100">{p.title}</h3>
                  <div className="text-sm text-gray-400">{p.techStack.join(' • ')}</div>
                </div>
                <p className="text-sm text-gray-200 mt-2">{p.summary}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-100 mt-8 mb-4">Internships</h2>
          <div className="space-y-4">
            {/** use experience data where appropriate; simplified here */}
            <div className="p-4 bg-black border border-neutral-800 rounded-xl">
              <h4 className="font-semibold text-gray-100">Machine Learning Intern — Internshala</h4>
              <div className="text-sm text-gray-400">Apr 2025 - Jun 2025</div>
              <p className="text-sm text-gray-200 mt-2">Worked on preprocessing, feature engineering, model training, and evaluation workflows.</p>
            </div>
            <div className="p-4 bg-black border border-neutral-800 rounded-xl">
              <h4 className="font-semibold text-gray-100">Python Full Stack Trainee — ExcelR</h4>
              <div className="text-sm text-gray-400">Apr 2024 - Jun 2024</div>
              <p className="text-sm text-gray-200 mt-2">Worked on backend development, REST APIs, CRUD operations, debugging, and API integration.</p>
            </div>
            <div className="p-4 bg-black border border-neutral-800 rounded-xl">
              <h4 className="font-semibold text-gray-100">Web Development Intern — Apex Planet</h4>
              <div className="text-sm text-gray-400">Jun 2024 - Jul 2024</div>
              <p className="text-sm text-gray-200 mt-2">Built responsive web pages and improved frontend usability and UI structure.</p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-100 mt-8 mb-4">Education</h2>
          {educationList.map((ed, i) => (
            <div key={i} className="p-4 bg-black border border-neutral-800 rounded-xl mb-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-100">{ed.degree}</div>
                  <div className="text-sm text-gray-400">{ed.institution} • {ed.location}</div>
                </div>
                <div className="text-sm text-gray-400">{ed.period} • CGPA: {ed.cgpa}</div>
              </div>
            </div>
          ))}

          <h2 className="text-xl font-bold text-gray-100 mt-8 mb-4">Certifications & Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((c, i) => (
              <div key={i} className="p-3 bg-black border border-neutral-800 rounded-lg text-sm text-gray-200">{c.name} — <span className="text-gray-400">{c.issuer}</span></div>
            ))}
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

export default ResumePage;

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { certifications, highlights, hackathons } from '../data/achievements';
import { Award, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        {
          opacity: 0,
          y: 40,
          stagger: 0.1
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="achievements" 
      className="py-24 px-6 md:px-12 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-4">
            Recognition & Growth
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-100 tracking-tight mb-4">
            Achievements & Certifications
          </h3>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Committed to continuous learning through industry-recognized certifications and community engagement.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                ref={(el) => { if (el) cardsRef.current[index] = el; }}
                className="bg-black border border-neutral-800 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-900/30 rounded-xl mb-4">
                  <Icon className="w-7 h-7 text-blue-500" />
                </div>
                <h4 className="text-lg font-bold text-gray-100 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Certifications List */}
        <div className="bg-black border border-neutral-800 rounded-3xl p-8 md:p-12 shadow-sm">
          <h4 className="text-2xl font-bold text-gray-100 mb-8 flex items-center gap-3">
            <Award className="w-7 h-7 text-blue-500" />
            Professional Certifications
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  ref={(el) => { if (el) cardsRef.current[highlights.length + index] = el; }}
                  className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-200 border border-transparent hover:border-blue-500/50"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-900/40 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="font-semibold text-gray-100 leading-tight">
                        {cert.name}
                      </h5>
                      {cert.link && (
                        <a 
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100 ml-2 flex items-center gap-1 text-xs whitespace-nowrap"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Verify
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-gray-200">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hackathons Display */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="text-sm font-semibold text-gray-400 uppercase tracking-widest mr-2 flex items-center">
            Hackathons:
          </div>
          {hackathons.map((hackathon, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-blue-900/20 border border-blue-500/30 rounded-full text-sm text-blue-400 font-medium"
            >
              {hackathon}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

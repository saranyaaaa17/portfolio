import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import { revealUp, staggerContainer, staggerItem } from '../utils/motion';
import { MouseEvent } from 'react';

const Hero = () => {
    const scrollToProjects = (e: MouseEvent) => {
        e.preventDefault();
        const projectsElement = document.getElementById('projects');
        if (projectsElement) {
            projectsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black py-20">
            {/* Minimalist Depth Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Optional: Very subtle glow if needed, otherwise pure black */}
            </div>

            <div className="max-w-4xl mx-auto w-full relative z-10 text-center flex flex-col items-center">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="space-y-10"
                >
                    {/* Professional Status */}
                    <motion.div variants={staggerItem} className="flex justify-center">
                        <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-2xl border border-blue-500/10">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <span className="text-[10px] font-bold text-blue-400 tracking-[0.2em] uppercase">
                                Available for opportunities 2026
                            </span>
                        </div>
                    </motion.div>

                    {/* Refined Heading with Mask Reveal */}
                    <div className="space-y-6">
                        <div className="reveal-mask overflow-hidden">
                            <motion.h1 
                                variants={revealUp}
                                className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]"
                            >
                                Saranya <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600">Pothina</span>
                            </motion.h1>
                        </div>
                        
                    </div>

                    {/* Impactful Bio */}
                    <motion.p
                        variants={staggerItem}
                        className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light"
                    >
                        Developing at the intersection of <span className="text-white font-medium">Machine Learning</span> and <span className="text-white font-medium">Modern Web Architectures</span>. Focused on building reliable, data-driven solutions for the next generation.
                    </motion.p>

                    {/* Focused Actions */}
                    <motion.div
                        variants={staggerItem}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
                    >
                        <Button 
                            onClick={scrollToProjects}
                            variant="primary"
                            icon={ArrowRight}
                            iconPosition="right"
                            className="w-full sm:w-auto px-10 py-4 rounded-xl shadow-[0_20px_40px_rgba(59,130,246,0.2)] hover:shadow-blue-500/40 transition-all duration-500"
                        >
                            Explore Work
                        </Button>

                        <Button 
                            href="https://drive.google.com/file/d/1-eWDwEBZo7CmSrGOS8GKJifP0cWztGFr/view?usp=drive_link"
                            variant="outline"
                            icon={Download}
                            iconPosition="left"
                            className="w-full sm:w-auto px-10 py-4 rounded-xl border-neutral-800 hover:border-blue-500/40"
                        >
                            Download CV
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes scan {
                    0% { top: -10%; opacity: 0; }
                    50% { opacity: 1; }
                    100% { top: 110%; opacity: 0; }
                }
            `}} />
        </section>
    );
};

export default Hero;

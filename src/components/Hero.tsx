import { motion } from 'framer-motion';
import { Download, ArrowRight, Sparkles } from 'lucide-react';
import Button from './ui/Button';
import { revealUp, staggerContainer, staggerItem } from '../utils/motion';
import React, { MouseEvent } from 'react';
import { CelestialSphere } from './ui/celestial-sphere';

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
            <CelestialSphere
                hue={210}
                speed={0.4}
                zoom={1.2}
                particleSize={4}
                className="absolute inset-0 h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/45 pointer-events-none" />

            <div className="max-w-5xl mx-auto w-full relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8 text-center"
                >
                    {/* Professional Status */}
                    <motion.div variants={staggerItem} className="flex justify-center">
                        <div className="inline-flex items-center gap-3 rounded-full border accent-border bg-white/5 px-4 py-2 backdrop-blur-md">
                            <Sparkles className="h-4 w-4 text-white" />
                        </div>
                    </motion.div>

                    {/* Refined Heading with Mask Reveal */}
                    <div className="space-y-6">
                        <div className="reveal-mask overflow-hidden">
                            <motion.h1 
                                variants={revealUp}
                                className="text-5xl font-semibold tracking-tight leading-[0.95] text-white md:text-7xl"
                            >
                                Saranya Pothina
                            </motion.h1>
                        </div>
                        <motion.div variants={staggerItem} className="pt-2">
                            <p className="max-w-2xl text-sm uppercase tracking-[0.2em] text-gray-400 md:text-base">
                                Fresher · ML and full-stack
                            </p>
                        </motion.div>
                    </div>

                    {/* Focused Actions */}
                    <motion.div
                        variants={staggerItem}
                        className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row"
                    >
                        <Button 
                            onClick={scrollToProjects}
                            variant="primary"
                            icon={ArrowRight}
                            iconPosition="right"
                            className="w-full rounded-xl px-10 py-4 font-semibold sm:w-auto"
                        >
                            Explore my work
                        </Button>

                        <Button 
                            href="https://drive.google.com/file/d/1-eWDwEBZo7CmSrGOS8GKJifP0cWztGFr/view?usp=drive_link"
                            variant="primary"
                            icon={Download}
                            iconPosition="left"
                            className="w-full rounded-xl px-10 py-4 font-semibold sm:w-auto"
                        >
                            Resume
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;

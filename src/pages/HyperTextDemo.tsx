import HyperTextParagraph from '../components/ui/hyper-text-with-decryption';
import { motion } from 'framer-motion';

export default function HyperTextDemo() {
  const bio = "I build AI and web systems that scale; I love learning and shipping.";
  const triggers = ["AI", "web", "learning", "shipping"];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 md:p-12">
      <div className="max-w-4xl w-full relative z-10">
        <div className="flex justify-center mb-8">
          <div className="bg-white/5 border border-neutral-800 px-4 py-1.5 rounded-full flex items-center gap-2">
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Interactive Bio</span>
          </div>
        </div>

        <div className="bg-white/6 backdrop-blur-xl border border-white/5 shadow-lg rounded-2xl p-8 md:p-16">
          <HyperTextParagraph text={bio} highlightWords={triggers} className="text-2xl md:text-4xl text-white font-normal leading-[1.6]" />
        </div>

        <p className="text-center mt-8 text-gray-400 text-sm font-mono">Hover highlighted keywords to decrypt</p>
      </div>
    </div>
  );
}

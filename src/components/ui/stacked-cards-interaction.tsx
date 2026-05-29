import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '../../lib/utils';

interface CardData {
  image: string;
  title: string;
  description: string;
  github?: string;
  live?: string;
}

interface StackedCardsInteractionProps {
  cards: CardData[];
  className?: string;
  spreadDistance?: number;
  rotationAngle?: number;
  animationDelay?: number;
}

const ProjectCard = ({
  className,
  image,
  title,
  description,
  github,
  live,
  isActive,
  isHovering,
}: {
  className?: string;
  image: string;
  title: string;
  description: string;
  github?: string;
  live?: string;
  isActive: boolean;
  isHovering: boolean;
}) => {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#141414] shadow-[0_24px_90px_rgba(0,0,0,0.45)]',
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent opacity-95 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white/75 backdrop-blur-md">
          Featured
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 text-white">
          <h3 className="text-2xl font-black tracking-tight md:text-[2rem]">{title}</h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75 md:text-base">{description}</p>

          <div
            className={cn(
              'mt-4 flex flex-wrap gap-3 transition-all duration-300',
              isActive ? 'opacity-100 translate-y-0' : 'md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0'
            )}
          >
            {github ? (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/10"
              >
                <Github className="h-4 w-4" />
                View code
              </a>
            ) : null}

            {live ? (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:opacity-95"
              >
                <ExternalLink className="h-4 w-4" />
                View demo
              </a>
            ) : null}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-white/4 px-4 py-3 text-xs uppercase tracking-[0.26em] text-white/55">
        {isHovering ? 'Hover to spread' : 'Creative stack'}
      </div>
    </div>
  );
};

const StackedCardsInteraction = ({
  cards,
  className,
  spreadDistance = 36,
  rotationAngle = 5,
  animationDelay = 0.08,
}: StackedCardsInteractionProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const limitedCards = cards.slice(0, 3);

  return (
    <div className={cn('w-full', className)}>
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-4 rounded-[2rem] border border-white/10 bg-[#101010] px-4 py-6 shadow-[0_30px_100px_rgba(0,0,0,0.5)] md:px-8 md:py-10">
        <div className="flex w-full justify-between text-sm text-gray-400">
          <div className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-lime-500 shadow-[0_0_12px_rgba(132,204,22,0.75)]" />
            <span>Available for work</span>
          </div>
          <span className="hidden text-gray-500 md:inline-flex">Interactive project stack</span>
        </div>

        <div className="relative flex w-full items-center justify-center py-4 md:min-h-[470px]">
          <div className="relative w-full max-w-[350px] md:h-[400px] md:max-w-none">
            {limitedCards.map((card, index) => {
              const isFirst = index === 0;
              let xOffset = 0;
              let rotation = 0;

              if (limitedCards.length > 1) {
                if (index === 1) {
                  xOffset = -spreadDistance;
                  rotation = -rotationAngle;
                } else if (index === 2) {
                  xOffset = spreadDistance;
                  rotation = rotationAngle;
                }
              }

              return (
                <motion.div
                  key={`${card.title}-${index}`}
                  className={cn(
                    'group relative mb-5 md:mb-0 md:absolute md:left-1/2 md:top-1/2 md:w-[350px] md:-translate-x-1/2 md:-translate-y-1/2',
                    isFirst ? 'z-10' : 'z-0'
                  )}
                  initial={{ x: 0, rotate: 0, y: 0, opacity: 1 }}
                  animate={{
                    x: isHovering && !isFirst ? xOffset : 0,
                    y: isHovering ? (isFirst ? 0 : 0) : 0,
                    rotate: isHovering ? rotation : 0,
                    opacity: 1,
                    zIndex: isFirst ? 20 : 10,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                    delay: index * animationDelay,
                    type: 'spring',
                    stiffness: 240,
                    damping: 22,
                  }}
                  style={{ transformOrigin: 'center center' }}
                  {...(isFirst && {
                    onHoverStart: () => setIsHovering(true),
                    onHoverEnd: () => setIsHovering(false),
                    onFocus: () => setIsHovering(true),
                    onBlur: () => setIsHovering(false),
                  })}
                >
                  <ProjectCard
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    github={card.github}
                    live={card.live}
                    isActive={isHovering}
                    isHovering={isHovering}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-lime-500/20 bg-lime-400/90 px-5 py-3 text-sm font-semibold text-black shadow-[0_20px_60px_rgba(132,204,22,0.35)]">
          <span className="text-base">⚡</span>
          Currently high on creativity
        </div>
      </div>
    </div>
  );
};

export { StackedCardsInteraction };

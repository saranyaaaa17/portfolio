import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

/**
 * Smooth Blue Trailing Cursor
 * Professional, themed trailing effect that matching the UI
 */
const CursorFollower = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  // Create multiple springs for a smooth trailing effect
  const springConfig = { damping: 30, stiffness: 300 };
  const trailLength = 4; // Shorter trail for a cleaner look
  
  const points = Array.from({ length: trailLength }).map(() => ({
    x: useSpring(0, springConfig),
    y: useSpring(0, springConfig)
  }));

  // Shades of UI Blue for the trail
  const colors = [
    '#3B82F6', // blue-500
    '#2563EB', // blue-600
    '#1D4ED8', // blue-700
    '#1E3A8A'  // blue-900
  ];

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      points.forEach((point, index) => {
        setTimeout(() => {
          point.x.set(e.clientX);
          point.y.set(e.clientY);
        }, index * 25); // Smooth separation
      });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.closest('a') || 
          target.closest('button')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.closest('a') || 
          target.closest('button')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [points]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {points.map((point, index) => (
        <motion.div
          key={index}
          className="fixed top-0 left-0 rounded-full"
          style={{
            x: point.x,
            y: point.y,
            translateX: '-50%',
            translateY: '-50%',
            width: index === 0 ? 8 : 10 - index * 2,
            height: index === 0 ? 8 : 10 - index * 2,
            backgroundColor: colors[index],
            opacity: 1 - (index * 0.25),
            scale: isHovering ? 1.5 : 1,
            boxShadow: index === 0 ? `0 0 15px ${colors[0]}` : 'none'
          }}
        />
      ))}
      
      {/* Outer focus Ring */}
      <motion.div
        className="fixed top-0 left-0 border border-blue-500/30 rounded-full"
        style={{
          x: points[0].x,
          y: points[0].y,
          translateX: '-50%',
          translateY: '-50%',
          width: 32,
          height: 32
        }}
        animate={{
          scale: isHovering ? 1.4 : 1,
          opacity: isHovering ? 0.6 : 0.3
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default CursorFollower;

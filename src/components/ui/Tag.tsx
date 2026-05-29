import { HTMLAttributes, ReactNode } from 'react';

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'outline';
  className?: string; // override default
}

/**
 * Reusable Tag Component
 * For tech stack, skills, categories, etc.
 */
const Tag = ({ 
  children, 
  variant = 'default',
  className = '',
  ...props 
}: TagProps) => {
  const variants = {
    default: 'bg-black text-gray-200 border-zinc-800',
    primary: 'bg-white/5 text-gray-100 accent-border',
    outline: 'bg-transparent text-gray-200 border-zinc-700'
  };

  const baseStyles = "inline-block px-3 py-1.5 text-sm font-medium rounded-lg border transition-all duration-200 hover:shadow-sm";

  return (
    <span 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Tag;

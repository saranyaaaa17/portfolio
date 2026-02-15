import { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'default' | 'lg';
  hover?: boolean;
}

/**
 * Reusable Card Component
 * Provides consistent styling for card-based layouts
 */
const Card = ({ 
  children, 
  className = '',
  padding = 'default',
  hover = true,
  ...props 
}: CardProps) => {
  const paddingVariants = {
    sm: 'p-6',
    default: 'p-8',
    lg: 'p-10'
  };

  const baseStyles = "bg-black border border-neutral-700 rounded-xl shadow-sm transition-all duration-200";
  const hoverStyles = hover ? "hover:shadow-md hover:border-gray-300" : "";

  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${paddingVariants[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

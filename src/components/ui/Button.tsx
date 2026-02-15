import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  [key: string]: any;
}

/**
 * Reusable Button Component
 * Variants: primary, secondary, outline
 */
const Button = ({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  className = '',
  icon: Icon,
  iconPosition = 'right',
  ...props 
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-base font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-500 focus:ring-blue-500 shadow-sm hover:shadow-md",
    secondary: "bg-black text-white hover:bg-zinc-800 focus:ring-zinc-700 shadow-sm hover:shadow-md",
    outline: "bg-transparent text-gray-100 border border-neutral-700 hover:bg-white/5 hover:border-blue-500 focus:ring-neutral-700 shadow-sm hover:shadow-md"
  };

  const Component: any = href ? motion.a : motion.button;
  const extraProps = href ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: href.startsWith('http') ? 'noopener noreferrer' : undefined } : { onClick };

  return (
    <Component
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...extraProps}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 mr-2" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 ml-2" />}
    </Component>
  );
};

export default Button;

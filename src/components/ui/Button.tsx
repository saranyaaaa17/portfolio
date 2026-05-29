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
  const baseStyles = "inline-flex items-center justify-center px-6 py-2.5 text-sm md:px-8 md:py-3 md:text-base font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "accent-gradient-bg text-white hover:opacity-95 focus:ring-white/20 shadow-sm hover:shadow-md",
    secondary: "bg-black text-white hover:bg-zinc-800 focus:ring-zinc-700 shadow-sm hover:shadow-md",
    outline: "p-[1px] text-white focus:ring-white/20 shadow-sm hover:shadow-md accent-gradient-bg"
  };

  const Component: any = href ? motion.a : motion.button;
  const extraProps = href ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: href.startsWith('http') ? 'noopener noreferrer' : undefined } : { onClick };

  return (
    variant === 'outline' ? (
      <Component
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...extraProps}
        {...props}
      >
        <span className="inline-flex items-center justify-center rounded-[11px] bg-black px-6 py-2.5 text-sm font-semibold text-gray-100 md:px-8 md:py-3 md:text-base">
          {Icon && iconPosition === 'left' && <Icon className="mr-2 h-4 w-4" />}
          {children}
          {Icon && iconPosition === 'right' && <Icon className="ml-2 h-4 w-4" />}
        </span>
      </Component>
    ) : (
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
    )
  );
};

export default Button;

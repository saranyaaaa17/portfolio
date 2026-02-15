interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

/**
 * Section Header Component
 * Consistent heading structure across all sections
 */
const SectionHeader = ({ 
  label, 
  title, 
  subtitle,
  className = '' 
}: SectionHeaderProps) => {
  return (
    <div className={`mb-12 md:mb-20 ${className}`}>
      {label && (
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-blue-500/50"></span>
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.2em]">
            {label}
          </h2>
        </div>
      )}
      <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
        {title}
      </h3>
      {subtitle && (
        <p className="text-lg text-gray-400 mt-4 md:mt-6 leading-relaxed max-w-2xl font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

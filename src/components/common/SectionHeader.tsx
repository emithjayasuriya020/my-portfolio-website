import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title, className = '' }) => {
  return (
    <div className={`mb-12 ${className}`}>
      <span className="block font-mono text-sm text-gold uppercase tracking-[0.2em] mb-2">
        {label}
      </span>
      <h2 className="text-4xl md:text-5xl text-navy mb-4 font-serif">
        {title}
      </h2>
      <div className="h-0.5 w-16 bg-gold" />
    </div>
  );
};

export default SectionHeader;

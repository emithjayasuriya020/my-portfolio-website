"use client";

import React from 'react';

interface GoldButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'gold' | 'outline';
  className?: string;
}

const GoldButton: React.FC<GoldButtonProps> = ({ 
  label, 
  onClick, 
  variant = 'gold', 
  className = '' 
}) => {
  const isGold = variant === 'gold';
  
  const baseStyles = "px-6 py-3 rounded border transition-all duration-300 font-serif text-sm tracking-wide focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50 active:scale-95";
  const variants = isGold 
    ? "bg-gold border-gold text-navy hover:bg-gold-light hover:border-gold-light" 
    : "bg-transparent border-gold text-gold hover:bg-gold/10";

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants} ${className}`}
    >
      {label}
    </button>
  );
};

export default GoldButton;

import React from 'react';

interface TagProps {
  label: string;
}

const Tag: React.FC<TagProps> = ({ label }) => {
  return (
    <span className="inline-block bg-cream border border-border-ui px-2 py-1 rounded text-xs font-mono text-slate uppercase tracking-wider">
      {label}
    </span>
  );
};

export default Tag;

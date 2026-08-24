import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      {subtitle && <p className="text-text-secondary mt-1">{subtitle}</p>}
    </div>
  );
}

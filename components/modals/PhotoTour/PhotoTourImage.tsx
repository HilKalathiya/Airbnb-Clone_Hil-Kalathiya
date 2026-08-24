import React from 'react';
import Link from 'next/link';

interface PhotoTourImageProps {
  src: string;
  alt: string;
  index: number;
}

export function PhotoTourImage({ src, alt, index }: PhotoTourImageProps) {
  return (
    <Link
      href={`?modal=lightbox&image=${index}`}
      scroll={false}
      className="group relative block w-full outline-none focus-visible:ring-2 focus-visible:ring-[#222222] focus-visible:ring-offset-2 rounded-[8px]"
      style={{
        aspectRatio: '3 / 2',
        background: '#eeeeee',
        borderRadius: '8px',
        overflow: 'hidden'
      }}
      aria-label={`View larger photo: ${alt}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full block object-cover"
        style={{
          transition: 'transform 0.4s cubic-bezier(0.2, 0, 0, 1)'
        }}
      />
      {/* Hover Overlay & Scale Effect via inline styles handled by Tailwind group-hover */}
      <div 
        className="absolute inset-0 transition-colors duration-200 pointer-events-none group-hover:bg-[#00000014]"
      />
      <style dangerouslySetInnerHTML={{ __html: `
        .group:hover img {
          transform: scale(1.05);
        }
        .group:active img {
          transform: scale(1);
        }
      `}} />
    </Link>
  );
}

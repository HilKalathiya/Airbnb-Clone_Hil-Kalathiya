import React from 'react';
import { Grid } from 'lucide-react';
import Link from 'next/link';
import { listing } from '@/data/listing';

export function HeroGallery() {
  const images = listing.heroGallery.slice(0, 5);

  return (
    <div 
      className="relative"
      style={{
        width: '1120px',
        height: '494px',
        margin: '0 auto',
        padding: 0
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '560px 272px 272px',
          gridTemplateRows: '243px 243px',
          gap: '8px',
          borderRadius: '12px',
          overflow: 'hidden',
          width: '100%',
          height: '100%'
        }}
      >
        {/* Main Image (Image 1) - Maps to global index 3 (Living room 2) */}
        <Link 
          href="?modal=photo-tour&scrollTo=3"
          scroll={false}
          className="relative cursor-pointer block"
          style={{ gridRow: '1 / 3', gridColumn: '1 / 2' }}
        >
          <img 
            src={images[0].src} 
            alt={images[0].alt}
            className="w-full h-full object-cover transition-[filter] duration-200 hover:brightness-90"
            style={{ objectPosition: '50% 50%', borderRadius: '0' }}
          />
        </Link>

        {/* Top Middle (Image 2) - Maps to global index 4 (Living room 2) */}
        <Link 
          href="?modal=photo-tour&scrollTo=4"
          scroll={false}
          className="relative cursor-pointer block"
        >
          <img 
            src={images[1].src} 
            alt={images[1].alt}
            className="w-full h-full object-cover transition-[filter] duration-200 hover:brightness-90"
            style={{ objectPosition: '50% 50%', borderRadius: '0' }}
          />
        </Link>

        {/* Top Right (Image 3) - Maps to global index 9 (Living room 2) */}
        <Link 
          href="?modal=photo-tour&scrollTo=9"
          scroll={false}
          className="relative cursor-pointer block"
        >
          <img 
            src={images[2].src} 
            alt={images[2].alt}
            className="w-full h-full object-cover transition-[filter] duration-200 hover:brightness-90"
            style={{ objectPosition: '50% 50%', borderRadius: '0' }}
          />
        </Link>

        {/* Bottom Middle (Image 4) - Maps to global index 12 (Bedroom) */}
        <Link 
          href="?modal=photo-tour&scrollTo=12"
          scroll={false}
          className="relative cursor-pointer block"
        >
          <img 
            src={images[3].src} 
            alt={images[3].alt}
            className="w-full h-full object-cover transition-[filter] duration-200 hover:brightness-90"
            style={{ objectPosition: '50% 50%', borderRadius: '0' }}
          />
        </Link>

        {/* Bottom Right (Image 5) - Maps to global index 25 (Exterior) */}
        <Link 
          href="?modal=photo-tour&scrollTo=25"
          scroll={false}
          className="relative cursor-pointer block"
        >
          <img 
            src={images[4].src} 
            alt={images[4].alt}
            className="w-full h-full object-cover transition-[filter] duration-200 hover:brightness-90"
            style={{ objectPosition: '50% 50%', borderRadius: '0' }}
          />
        </Link>
      </div>

      <Link 
        href="?modal=photo-tour"
        scroll={false}
        className="absolute flex items-center justify-center hover:bg-[#f7f7f7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#222222]"
        style={{
          width: '143.3px',
          height: '32px',
          bottom: '24px',
          right: '24px',
          padding: '6px 13px',
          margin: 0,
          background: 'rgb(255, 255, 255)',
          border: '1px solid rgb(34, 34, 34)',
          borderRadius: '8px',
          fontFamily: '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
          fontSize: '12px',
          fontWeight: 600,
          lineHeight: '16px',
          color: 'rgb(34, 34, 34)'
        }}
      >
        <svg 
          viewBox="0 0 16 16" 
          xmlns="http://www.w3.org/2000/svg" 
          aria-hidden="true" 
          role="presentation" 
          focusable="false" 
          style={{ display: 'block', height: '14px', width: '14px', fill: 'currentcolor', marginRight: '8px' }}
        >
          <path d="M3 1a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm5 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm5 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-10 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm5 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm5 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-10 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm5 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm5 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"></path>
        </svg>
        <span>Show all photos</span>
      </Link>
    </div>
  );
}

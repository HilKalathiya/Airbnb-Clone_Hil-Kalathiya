import React from 'react';
import { listing } from '@/data/listing';

interface PhotoTourSidebarProps {
  activeRoom: string;
}

export function PhotoTourSidebar({ activeRoom }: PhotoTourSidebarProps) {
  const scrollToRoom = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Smooth scroll to the element. We don't need a huge offset because
      // the header is fixed above the scrolling container or the container itself is scrolling.
      // Wait, if the container scrolls, we scroll the container.
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div 
      className="hidden md:block" // Assuming it might hide on mobile, though spec is desktop-first
      style={{
        position: 'sticky',
        top: '100px'
      }}
    >
      <h2
        style={{
          fontFamily: '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
          fontSize: '32px',
          fontWeight: 500,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          color: 'rgb(34, 34, 34)',
          marginBottom: '24px' // Added some margin below the title
        }}
      >
        {listing.title}
      </h2>

      <nav aria-label="Photo categories" className="flex flex-col">
        {listing.photoTour.map((section) => {
          const isActive = activeRoom === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => scrollToRoom(e, section.id)}
              className="outline-none focus-visible:ring-2 focus-visible:ring-[#222222] rounded-md transition-opacity hover:opacity-100"
              style={{
                fontFamily: '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
                fontSize: '14px',
                fontWeight: isActive ? 600 : 400,
                lineHeight: '20px',
                color: 'rgb(34, 34, 34)',
                padding: '8px 10px',
                marginLeft: '-10px', // Offset padding to align text
                opacity: isActive ? 1 : 0.65
              }}
              aria-current={isActive ? 'step' : undefined}
            >
              {section.title}
            </a>
          );
        })}
      </nav>
    </div>
  );
}

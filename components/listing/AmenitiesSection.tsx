'use client';

import React from 'react';
import { listing } from '@/data/listing';
import { Utensils, Wifi, Briefcase, Car, Waves, Bath, PawPrint, Video, ShieldAlert, Flame } from 'lucide-react';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'kitchen': return <Utensils size={24} strokeWidth={1.5} color="#222222" />;
    case 'wifi': return <Wifi size={24} strokeWidth={1.5} color="#222222" />;
    case 'briefcase': return <Briefcase size={24} strokeWidth={1.5} color="#222222" />;
    case 'car': return <Car size={24} strokeWidth={1.5} color="#222222" />;
    case 'waves': return <Waves size={24} strokeWidth={1.5} color="#222222" />;
    case 'hot-tub': return <Bath size={24} strokeWidth={1.5} color="#222222" />;
    case 'paw-print': return <PawPrint size={24} strokeWidth={1.5} color="#222222" />;
    case 'camera': return <Video size={24} strokeWidth={1.5} color="#222222" />;
    case 'smoke-detector': return <ShieldAlert size={24} strokeWidth={1.5} color="#222222" />;
    case 'flame': return <Flame size={24} strokeWidth={1.5} color="#222222" />;
    default: return null;
  }
};

export function AmenitiesSection() {
  return (
    <div 
      style={{
        padding: '32px 0',
        width: '652px',
        fontFamily: '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif'
      }}
    >
      <h2 
        style={{
          fontSize: '22px',
          fontWeight: 500,
          color: '#222222',
          margin: '0 0 24px 0',
          lineHeight: '26px'
        }}
      >
        What this place offers
      </h2>

      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          columnGap: '16px',
          rowGap: '16px',
          marginBottom: '32px'
        }}
      >
        {listing.amenities.map((amenity, index) => (
          <div 
            key={index} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '16px',
              textDecoration: amenity.available ? 'none' : 'line-through',
              color: '#222222',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '20px'
            }}
          >
            <div style={{ flexShrink: 0 }}>
              {getIcon(amenity.icon)}
            </div>
            <span>{amenity.label}</span>
          </div>
        ))}
      </div>

      <a 
        href="?modal=amenities"
        onClick={(e) => {
          e.preventDefault();
          window.history.pushState({}, '', '?modal=amenities');
          // Dispatch a popstate event so Next.js router picks it up
          window.dispatchEvent(new Event('popstate'));
        }}
        style={{
          border: '1px solid #222222',
          borderRadius: '8px',
          padding: '13px 23px',
          fontSize: '16px',
          fontWeight: 600,
          color: '#222222',
          backgroundColor: '#FFFFFF',
          cursor: 'pointer',
          lineHeight: '20px',
          display: 'inline-block',
          textDecoration: 'none'
        }}
      >
        Show all 50 amenities
      </a>
    </div>
  );
}

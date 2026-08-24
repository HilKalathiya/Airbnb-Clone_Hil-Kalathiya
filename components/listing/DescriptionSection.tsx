import React from 'react';
import { listing } from '@/data/listing';
import { ChevronRight } from 'lucide-react';

export function DescriptionSection() {
  return (
    <div 
      style={{
        padding: '32px 0',
        width: '652px',
        fontFamily: '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif'
      }}
    >
      {/* Translation Notice */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#F7F7F7',
          padding: '16px',
          borderRadius: '8px',
          marginBottom: '24px',
          fontSize: '16px',
          color: '#222222',
          lineHeight: '20px'
        }}
      >
        <span style={{ fontWeight: 400 }}>Some info has been automatically translated.</span>
        <button 
          style={{ 
            fontWeight: 600, 
            textDecoration: 'underline', 
            marginLeft: '4px',
            background: 'none',
            border: 'none',
            padding: 0,
            color: '#222222',
            cursor: 'pointer'
          }}
        >
          Show original
        </button>
      </div>

      {/* Description Text */}
      <div 
        style={{
          fontSize: '16px',
          lineHeight: '24px',
          color: '#222222',
          fontWeight: 400,
          whiteSpace: 'pre-wrap',
          display: '-webkit-box',
          WebkitLineClamp: 6,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}
      >
        {listing.description}
      </div>

      {/* Show more button */}
      <button 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          marginTop: '16px',
          background: 'none',
          border: 'none',
          padding: 0,
          color: '#222222',
          cursor: 'pointer',
          outline: 'none'
        }}
      >
        <span style={{ fontSize: '16px', fontWeight: 600, textDecoration: 'underline', lineHeight: '20px' }}>
          Show more
        </span>
        <ChevronRight size={16} strokeWidth={2.5} style={{ marginTop: '2px' }} />
      </button>
    </div>
  );
}

import React from 'react';
import { Share, Heart } from 'lucide-react';
import { listing } from '@/data/listing';

export function ListingTitle() {
  return (
    <div 
      className="flex justify-between items-end"
      style={{
        width: '1120px',
        height: '84px',
        padding: '32px 0 18px',
        margin: '0 auto'
      }}
    >
      <h1 
        style={{
          fontFamily: '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
          fontSize: '26px',
          fontWeight: 500,
          lineHeight: '30px',
          letterSpacing: 'normal',
          color: 'rgb(34, 34, 34)',
          margin: 0
        }}
      >
        {listing.title}
      </h1>
      
      <div 
        className="flex"
        style={{
          width: '158.2px',
          height: '34px'
        }}
      >
        <button 
          className="flex items-center justify-center hover:bg-[#f7f7f7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#222222]"
          style={{
            width: '81.2px',
            height: '34px',
            padding: '8px 10px',
            borderRadius: '8px',
            margin: 0,
            fontFamily: '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '18px',
            color: 'rgb(34, 34, 34)',
            backgroundColor: 'transparent',
            transition: 'background-color 0.2s ease'
          }}
        >
          <Share size={16} strokeWidth={2} style={{ marginRight: '6px' }} />
          <span>Share</span>
        </button>
        
        <div style={{ width: '2px' }}></div>
        
        <button 
          className="flex items-center justify-center hover:bg-[#f7f7f7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#222222]"
          style={{
            width: '75px',
            height: '34px',
            padding: '8px 10px',
            borderRadius: '8px',
            margin: 0,
            fontFamily: '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '18px',
            color: 'rgb(34, 34, 34)',
            backgroundColor: 'transparent',
            transition: 'background-color 0.2s ease'
          }}
        >
          <Heart size={16} strokeWidth={2} style={{ marginRight: '6px' }} />
          <span>Save</span>
        </button>
      </div>
    </div>
  );
}

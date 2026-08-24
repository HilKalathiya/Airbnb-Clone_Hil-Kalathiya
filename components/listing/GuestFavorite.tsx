import React from 'react';
import { listing } from '@/data/listing';

export function GuestFavorite() {
  return (
    <div 
      style={{
        marginTop: '8px',
        marginBottom: '32px', // Add spacing before divider
        width: '652px',
        height: '81.17px',
        padding: '16px 28px',
        display: 'flex',
        alignItems: 'center',
        gap: '22px',
        border: '1px solid #DDDDDD',
        borderRadius: '16px',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        fontFamily: '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif'
      }}
    >
      {/* Badge Area */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '36px', width: '116.97px', flexShrink: 0 }}>
        <img src="/ui/laurel-left.png" alt="" style={{ height: '100%', objectFit: 'contain' }} />
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '1.2',
            color: '#222222',
            margin: '0 4px',
            textTransform: 'none'
          }}
        >
          <span>Guest</span>
          <span>favourite</span>
        </div>
        <img src="/ui/laurel-right.png" alt="" style={{ height: '100%', objectFit: 'contain' }} />
      </div>

      {/* Description Area */}
      <div style={{ flex: 1, fontSize: '16px', fontWeight: 500, lineHeight: '20px', color: '#222222' }}>
        One of the most loved homes on Airbnb, according to guests
      </div>

      {/* Rating & Reviews Area */}
      <div style={{ display: 'flex', alignItems: 'center', width: '152.92px', justifyContent: 'flex-end', flexShrink: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '16px' }}>
          <span style={{ fontSize: '18px', fontWeight: 500, lineHeight: '20px', color: '#222222' }}>{listing.rating}</span>
          <div style={{ display: 'flex', gap: '2px', marginTop: '2px' }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '9px', width: '9px', fill: 'rgb(34, 34, 34)' }}>
                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path>
              </svg>
            ))}
          </div>
        </div>
        
        <div style={{ width: '1px', height: '36px', backgroundColor: '#DDDDDD', marginRight: '16px' }}></div>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: '18px', fontWeight: 500, lineHeight: '20px', color: '#222222' }}>{listing.reviewCount}</span>
          <span style={{ fontSize: '12px', fontWeight: 400, color: '#222222' }}>Reviews</span>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { listing } from '@/data/listing';

export function SleepingSection() {
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
        Where you&apos;ll sleep
      </h2>

      <div style={{ display: 'flex', gap: '16px', overflowX: 'auto' }}>
        {listing.sleepingArrangements.map((arrangement, index) => (
          <div 
            key={index}
            style={{
              width: '318px',
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '12px',
              border: '1px solid #DDDDDD',
              overflow: 'hidden'
            }}
          >
            <div style={{ width: '100%', height: '212px' }}>
              <img 
                src={arrangement.image} 
                alt={arrangement.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '24px' }}>
              <div style={{ fontSize: '16px', fontWeight: 500, color: '#222222', lineHeight: '20px' }}>
                {arrangement.name}
              </div>
              <div style={{ fontSize: '14px', fontWeight: 400, color: '#717171', lineHeight: '18px', marginTop: '4px' }}>
                {arrangement.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

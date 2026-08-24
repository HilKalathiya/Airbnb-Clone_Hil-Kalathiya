import React from 'react';
import { listing } from '@/data/listing';

export function HostSummary() {
  return (
    <div 
      style={{
        width: '652px',
        height: '98px',
        padding: '26px 0',
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        fontFamily: '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif'
      }}
    >
      {/* Avatar */}
      <div style={{ marginRight: '16px' }}>
        <img 
          src={listing.host.avatar || ''} 
          alt={listing.host.name}
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            objectFit: 'cover'
          }}
        />
      </div>

      {/* Details */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ fontSize: '16px', fontWeight: 500, color: '#222222', lineHeight: '20px' }}>
          Hosted by {listing.host.name}
        </div>
        <div style={{ fontSize: '14px', fontWeight: 400, color: '#717171', lineHeight: '18px' }}>
          {listing.host.yearsHosting} years hosting
        </div>
      </div>
    </div>
  );
}

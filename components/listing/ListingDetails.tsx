import React from 'react';
import { listing } from '@/data/listing';

export function ListingDetails({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Basic Details Section */}
      <div style={{ marginBottom: '24px' }}>
        <h2 
          style={{
            fontFamily: '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
            fontSize: '22px',
            fontWeight: 500,
            lineHeight: '26px',
            color: 'rgb(34, 34, 34)',
            margin: 0,
            padding: 0
          }}
        >
          {listing.subtitle}
        </h2>
        <p
          style={{
            fontFamily: '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '22.88px',
            marginTop: '6px',
            color: '#222222',
            margin: '6px 0 0 0',
            padding: 0
          }}
        >
          {listing.guests} guests · {listing.bedrooms} bedroom · {listing.beds} bed · {listing.bathrooms} bathroom
        </p>
      </div>
      
      {children}
    </div>
  );
}

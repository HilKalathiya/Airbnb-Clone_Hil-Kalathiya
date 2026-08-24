import React from 'react';
import { listing } from '@/data/listing';
import { Sun, Fan, Key } from 'lucide-react';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'outdoor': return <Sun size={24} color="rgb(34,34,34)" strokeWidth={1.5} />;
    case 'fan': return <Fan size={24} color="rgb(34,34,34)" strokeWidth={1.5} />;
    case 'key': return <Key size={24} color="rgb(34,34,34)" strokeWidth={1.5} />;
    default: return null;
  }
};

export function FeaturesList() {
  return (
    <div 
      style={{
        padding: '32px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '652px',
        fontFamily: '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif'
      }}
    >
      {listing.keyFeatures.map((feature, index) => (
        <div key={index} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
          <div style={{ flexShrink: 0, marginTop: '2px' }}>
            {getIcon(feature.icon)}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ fontSize: '16px', fontWeight: 500, color: '#222222', lineHeight: '20px' }}>
              {feature.title}
            </div>
            <div style={{ fontSize: '14px', fontWeight: 400, color: '#717171', lineHeight: '20px' }}>
              {feature.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

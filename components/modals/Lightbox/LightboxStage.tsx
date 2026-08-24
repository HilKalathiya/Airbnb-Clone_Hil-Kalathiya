import React from 'react';
import { GalleryImage } from '@/data/listing';

interface LightboxStageProps {
  image: GalleryImage;
}

export function LightboxStage({ image }: LightboxStageProps) {
  return (
    <div 
      className="w-full h-full flex justify-center items-center"
      style={{
        padding: '88px 96px',
        width: '100%',
        height: '100%'
      }}
    >
      <img 
        src={image.src} 
        alt={image.alt || 'Property image'} 
        style={{
          objectFit: 'contain',
          objectPosition: '50% 50%',
          borderRadius: '0',
          maxWidth: 'min(1100px, 100%)',
          maxHeight: '100%',
          display: 'block'
        }}
      />
    </div>
  );
}

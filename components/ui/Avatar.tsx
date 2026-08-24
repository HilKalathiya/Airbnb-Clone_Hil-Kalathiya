import React from 'react';
import Image from 'next/image';

interface AvatarProps {
  src: string | null;
  initial: string;
  size?: 'sm' | 'md' | 'lg';
  alt?: string;
}

export function Avatar({ src, initial, size = 'md', alt = 'Avatar' }: AvatarProps) {
  return (
    <div className={`avatar-container size-${size}`}>
      {src ? (
        <Image src={src} alt={alt} width={40} height={40} className="rounded-full" />
      ) : (
        <span className="avatar-initial">{initial}</span>
      )}
    </div>
  );
}

import React from 'react';
import { X } from 'lucide-react';

interface LightboxHeaderProps {
  onClose: () => void;
  category?: string;
}

export function LightboxHeader({ onClose, category }: LightboxHeaderProps) {
  const buttonStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    border: 'none',
    backgroundColor: 'transparent',
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.16s, transform 0.08s',
    cursor: 'pointer',
    color: 'rgb(34, 34, 34)',
    position: 'absolute',
    top: '16px',
    right: '24px',
    zIndex: 5
  };

  return (
    <div 
      className="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-center z-[5]"
      style={{ pointerEvents: 'none' }} // Let clicks pass through the container except for elements inside
    >
      {category && (
        <span 
          className="text-[#222222] text-[16px] leading-[20px] font-medium"
          style={{ fontFamily: '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif' }}
        >
          {category}
        </span>
      )}
      <button 
        onClick={onClose}
        aria-label="Close"
        className="hover:bg-[#f7f7f7] active:scale-90 outline-none focus-visible:ring-2 focus-visible:ring-[#222222]"
        style={{ ...buttonStyle, pointerEvents: 'auto' }}
      >
        <span style={{ width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <X size={18} strokeWidth={2} />
        </span>
      </button>
    </div>
  );
}

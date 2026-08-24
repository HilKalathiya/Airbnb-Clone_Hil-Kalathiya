import React from 'react';
import { ChevronLeft, Share, Heart } from 'lucide-react';

interface PhotoTourHeaderProps {
  onClose: () => void;
}

export function PhotoTourHeader({ onClose }: PhotoTourHeaderProps) {
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
    color: 'rgb(34, 34, 34)'
  };

  return (
    <header 
      style={{
        flexShrink: 0,
        zIndex: 5,
        height: '88px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 32px',
        backgroundColor: '#fff',
        position: 'relative'
      }}
    >
      <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-start' }}>
        <button 
          onClick={onClose}
          aria-label="Back"
          className="hover:bg-[#f7f7f7] active:scale-90 outline-none focus-visible:ring-2 focus-visible:ring-[#222222]"
          style={buttonStyle}
        >
          <span style={{ width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ChevronLeft size={18} strokeWidth={2.5} />
          </span>
        </button>
      </div>

      <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
        <span style={{ 
          fontFamily: 'Airbnb Cereal VF, sans-serif', 
          fontSize: '16px', 
          fontWeight: 500, 
          lineHeight: '20px', 
          color: 'rgb(34, 34, 34)' 
        }}>
          Photo tour
        </span>
      </div>

      <div style={{ flex: '1', display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
        <button 
          aria-label="Share"
          className="hover:bg-[#f7f7f7] active:scale-90 outline-none focus-visible:ring-2 focus-visible:ring-[#222222]"
          style={buttonStyle}
        >
          <span style={{ width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Share size={18} strokeWidth={2} />
          </span>
        </button>
        <button 
          aria-label="Save"
          className="hover:bg-[#f7f7f7] active:scale-90 outline-none focus-visible:ring-2 focus-visible:ring-[#222222]"
          style={buttonStyle}
        >
          <span style={{ width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Heart size={18} strokeWidth={2} />
          </span>
        </button>
      </div>
    </header>
  );
}

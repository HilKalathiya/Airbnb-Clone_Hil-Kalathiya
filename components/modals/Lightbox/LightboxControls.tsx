import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxControlsProps {
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export function LightboxControls({ onPrev, onNext, hasPrev, hasNext }: LightboxControlsProps) {
  const baseButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    width: '40px',
    height: '40px',
    border: 'none',
    backgroundColor: '#FFFFFF',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'translateY(-50%)',
    zIndex: 3,
    transition: 'background-color 0.16s, transform 0.08s',
    cursor: 'pointer',
    color: 'rgb(34, 34, 34)',
    boxShadow: '0 0 0 1px transparent, 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)'
  };

  return (
    <>
      <button
        onClick={onPrev}
        disabled={!hasPrev}
        aria-label="Previous"
        className="hover:bg-[#f7f7f7] active:scale-90 outline-none focus-visible:ring-2 focus-visible:ring-[#222222]"
        style={{
          ...baseButtonStyle,
          left: '20px',
          opacity: hasPrev ? 1 : 0.28,
          cursor: hasPrev ? 'pointer' : 'not-allowed'
        }}
      >
        <ChevronLeft size={20} strokeWidth={2} />
      </button>

      <button
        onClick={onNext}
        disabled={!hasNext}
        aria-label="Next"
        className="hover:bg-[#f7f7f7] active:scale-90 outline-none focus-visible:ring-2 focus-visible:ring-[#222222]"
        style={{
          ...baseButtonStyle,
          right: '20px',
          opacity: hasNext ? 1 : 0.28,
          cursor: hasNext ? 'pointer' : 'not-allowed'
        }}
      >
        <ChevronRight size={20} strokeWidth={2} />
      </button>
    </>
  );
}

'use client';

import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FONT_FAMILY = '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, "system-ui", Roboto, "Helvetica Neue", sans-serif';

const STAYS = [
  { id: 1, image: '/similar/s1.jpeg', title: 'Entire villa in Candolim', rating: '4.91', price: '₹22,500' },
  { id: 2, image: '/similar/s2.jpeg', title: 'Entire home in Calangute', rating: '4.85', price: '₹18,200' },
  { id: 3, image: '/similar/s3.jpeg', title: 'Entire apartment in Arpora', rating: '4.95', price: '₹12,000' },
  { id: 4, image: '/similar/s4.jpeg', title: 'Entire villa in Anjuna', rating: '5.0', price: '₹35,000' },
  { id: 5, image: '/similar/s5.jpeg', title: 'Entire home in Baga', rating: '4.78', price: '₹15,500' },
  { id: 6, image: '/similar/s6.jpeg', title: 'Entire villa in Assagao', rating: '4.92', price: '₹28,000' },
  { id: 7, image: '/similar/s1.jpeg', title: 'Entire cottage in Morjim', rating: '4.88', price: '₹14,000' },
  { id: 8, image: '/similar/s2.jpeg', title: 'Entire villa in Vagator', rating: '4.96', price: '₹32,000' }
];

export function SimilarStaysSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -1120, behavior: 'smooth' });
      setPage(prev => Math.max(1, prev - 1));
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 1120, behavior: 'smooth' });
      // 8 items, 5 visible at a time. Total scroll width = (8 * 208) + (7 * 20) = 1664 + 140 = 1804.
      // Visible = 1120. Max pages ~ 2.
      setPage(prev => Math.min(2, prev + 1));
    }
  };

  return (
    <div style={{ width: '1120px', padding: '0', margin: '0', display: 'block', position: 'static', backgroundColor: '#FFFFFF', fontFamily: FONT_FAMILY }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 500, lineHeight: '26px', color: '#222222', margin: '0' }}>
          More stays nearby
        </h2>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '14px', fontWeight: 400, color: '#222222' }}>
            {page}/2
          </span>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              onClick={scrollLeft}
              style={{
                width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#FFFFFF',
                border: '1px solid #B0B0B0', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#222222'
              }}
            >
              <ChevronLeft size={16} strokeWidth={2} />
            </button>
            <button 
              onClick={scrollRight}
              style={{
                width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#FFFFFF',
                border: '1px solid #B0B0B0', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#222222'
              }}
            >
              <ChevronRight size={16} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <style>{`
        #simTrack::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div 
        id="simTrack"
        ref={trackRef}
        style={{ 
          width: '1120px', 
          display: 'flex', 
          gap: '20px', 
          overflowX: 'auto',
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none'
        }}
      >
        {STAYS.map((stay) => (
          <div key={stay.id} style={{ width: '208px', flexShrink: 0, padding: '0', margin: '0' }}>
            <img 
              src={stay.image} 
              alt={stay.title} 
              style={{ width: '208px', height: '208px', borderRadius: '12px', objectFit: 'cover', objectPosition: '50% 50%', marginBottom: '10px' }} 
            />
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '14px', fontWeight: 500, lineHeight: '20.02px', color: '#222222', flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {stay.title}
              </div>
              <div style={{ fontSize: '13px', fontWeight: 400, lineHeight: '18.59px', color: '#222222', display: 'flex', alignItems: 'center', gap: '2px', marginLeft: '8px' }}>
                <svg viewBox="0 0 32 32" style={{ fill: 'currentcolor', height: '10px', width: '10px' }}>
                  <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path>
                </svg>
                {stay.rating}
              </div>
            </div>
            
            <div style={{ fontSize: '13px', fontWeight: 400, lineHeight: '18.59px', color: '#222222', marginTop: '4px' }}>
              <span style={{ fontWeight: 500 }}>{stay.price}</span> night
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

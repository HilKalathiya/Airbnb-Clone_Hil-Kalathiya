'use client';

import React, { useState, useEffect } from 'react';
import { listing } from '@/data/listing';

const NAV_ITEMS = [
  { id: 'photos', label: 'Photos', width: '61.92px' },
  { id: 'amenities', label: 'Amenities', width: '82.95px' },
  { id: 'reviews', label: 'Reviews', width: '69.75px' },
  { id: 'location', label: 'Location', width: '73.36px' }
];

export function ScrollListingNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('photos');

  useEffect(() => {
    const handleScroll = () => {
      // Show secondary nav after scrolling past Hero Gallery
      // Hero starts at 89px (header) + 84px (title) + 494px (gallery) ~= 667px
      if (window.scrollY > 660) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Simple intersection observer alternative for active sections
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      
      let currentActive = 'photos'; // default fallback
      
      // We check from bottom to top so that the lowest visible section takes priority
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          // If the section top is close to the fixed header (67px + small offset)
          if (rect.top <= 100) {
            currentActive = NAV_ITEMS[i].id;
            break;
          }
        }
      }
      
      setActiveTab(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset by 67px (header height) + a small buffer
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '67px',
        backgroundColor: 'rgb(255, 255, 255)',
        borderBottom: '1px solid rgb(235, 235, 235)',
        zIndex: 45,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.25s ease, opacity 0.25s ease',
        pointerEvents: isVisible ? 'auto' : 'none' // Prevent clicks when hidden
      }}
    >
      <div 
        style={{
          maxWidth: '1280px',
          height: '66px',
          margin: '0 auto',
          padding: '0 80px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <nav 
          style={{
            display: 'flex',
            height: '64px'
          }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#222222]"
              style={{
                width: `calc(${item.width} + 2.8px)`,
                height: '54px',
                padding: '23px 8px',
                fontFamily: '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '20px',
                color: 'rgb(34, 34, 34)',
                display: 'block',
                textDecoration: 'none'
              }}
            >
              {item.label}
              {activeTab === item.id && (
                <div 
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: 'rgb(34, 34, 34)'
                  }}
                />
              )}
            </a>
          ))}
        </nav>

        <div 
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div 
            style={{
              textAlign: 'right',
              marginRight: '20px', // Spacing between text and button
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <div 
              style={{
                fontFamily: '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
                color: 'rgb(34, 34, 34)'
              }}
            >
              <span style={{ fontSize: '14.8px', fontWeight: 600 }}>{listing.pricing.currencySymbol}{listing.pricing.totalPrice.toLocaleString('en-IN')}</span>
              <span style={{ fontSize: '13px', fontWeight: 400, marginLeft: '4px' }}>for {listing.pricing.totalNights} nights</span>
            </div>
            <div 
              style={{
                fontFamily: '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
                fontSize: '12.3px',
                color: 'rgb(34, 34, 34)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                marginTop: '0px'
              }}
            >
              <span style={{ display: 'inline-block', fontSize: '14.7px', marginRight: '2px' }}>★</span>
              <span style={{ fontWeight: 400, marginRight: '4px' }}>{listing.rating}</span>
              <span style={{ fontWeight: 400, marginRight: '4px' }}>·</span>
              <span 
                className=""
                style={{ color: 'rgba(0, 0, 0, 1)', fontWeight: 400 }}
              >
                {listing.reviewCount} reviews
              </span>
            </div>
          </div>

          <button
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#222222]"
            style={{
              width: '92.78px',
              height: '40px',
              padding: '0 20px',
              border: 'none',
              borderRadius: '999px',
              fontFamily: '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: 'rgb(255, 255, 255)',
              backgroundColor: 'transparent',
              background: 'linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)',
              cursor: 'pointer',
              transition: 'filter 0.15s, transform 0.05s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'brightness(0.95)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'none';
            }}
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}

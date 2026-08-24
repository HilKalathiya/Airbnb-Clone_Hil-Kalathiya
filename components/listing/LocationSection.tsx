import React from 'react';
import { Search, Plus, Minus, Home } from 'lucide-react';

const FONT_FAMILY = '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, "system-ui", Roboto, "Helvetica Neue", sans-serif';

export function LocationSection() {
  return (
    <div style={{ width: '1120px', padding: '0', margin: '0', display: 'block', position: 'static', backgroundColor: 'transparent', fontFamily: FONT_FAMILY }}>
      
      {/* Title */}
      <h2 style={{ fontSize: '22px', fontWeight: 500, lineHeight: '26px', letterSpacing: 'normal', color: '#222222', margin: '0 0 24px 0' }}>
        Where you&apos;ll be
      </h2>

      {/* Address */}
      <div style={{ fontSize: '16px', fontWeight: 400, lineHeight: '22.88px', letterSpacing: 'normal', color: '#222222', margin: '0 0 24px 0' }}>
        Candolim, Goa, India
      </div>

      {/* Map Container */}
      <div style={{ 
        width: '1120px', 
        height: '480px', 
        position: 'relative', 
        borderRadius: '12px', 
        overflow: 'hidden', 
        border: 'none',
        background: `
          radial-gradient(circle at 35% 38%, #CFE3C8 0%, #CFE3C8 42px, transparent 43px),
          radial-gradient(circle at 62% 48%, #CFE3C8 0%, #CFE3C8 52px, transparent 53px),
          linear-gradient(to right, rgba(0,0,0,0.035) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.035) 1px, transparent 1px),
          linear-gradient(108deg, #ACD3E6 33.5%, #E9F0E4 33.7%)
        `,
        backgroundSize: '100% 100%, 100% 100%, 112px 112px, 112px 112px, 100% 100%',
        marginBottom: '18px'
      }}>
        
        {/* Search Control */}
        <button style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          width: '40px',
          height: '40px',
          backgroundColor: '#FFFFFF',
          border: 'none',
          borderRadius: '50%',
          boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: '#222222'
        }}>
          <Search size={16} strokeWidth={2.5} />
        </button>

        {/* Zoom Controls */}
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          width: '40px',
          height: '88px',
          backgroundColor: '#FFFFFF',
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0',
          overflow: 'hidden'
        }}>
          <button style={{ flex: 1, width: '100%', border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#222222', borderBottom: '1px solid #EBEBEB' }}>
            <Plus size={16} strokeWidth={2.5} />
          </button>
          <button style={{ flex: 1, width: '100%', border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#222222' }}>
            <Minus size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* Property Marker */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '56px',
          height: '56px',
          backgroundColor: '#222222',
          borderRadius: '50%',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Home size={26} strokeWidth={2} color="#FFFFFF" />
        </div>
      </div>

      {/* Disclaimer */}
      <div style={{ height: '20.02px', fontSize: '14px', fontWeight: 400, lineHeight: '20.02px', color: '#222222', margin: '0 0 40px 0' }}>
        Exact location will be provided after booking.
      </div>

      {/* Neighbourhood Highlights */}
      <h3 style={{ fontSize: '18px', fontWeight: 500, lineHeight: '25.74px', color: '#222222', margin: '0 0 12px 0' }}>
        Neighbourhood highlights
      </h3>
      <div style={{ fontSize: '15px', fontWeight: 400, lineHeight: '22.5px', color: '#222222', margin: '0 0 18px 0' }}>
        Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
      </div>

      {/* Show more */}
      <button style={{
        display: 'inline-flex',
        width: '104.23px',
        height: '21px',
        fontSize: '16px',
        fontWeight: 500,
        color: '#222222',
        textDecoration: 'underline',
        cursor: 'pointer',
        background: 'transparent',
        border: 'none',
        padding: '0'
      }}>
        Show more
        <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '12px', width: '12px', display: 'block', fill: 'currentcolor', marginLeft: '4px', marginTop: '4px' }}>
          <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path>
        </svg>
      </button>

    </div>
  );
}

import React from 'react';
import { listing } from '@/data/listing';

export function BookingSidebar() {
  return (
    <div style={{ position: 'sticky', top: '100px', width: '372px', display: 'flex', flexDirection: 'column', gap: '24px', fontFamily: '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif' }}>
      
      {/* Promo Box */}
      <div style={{ padding: '16px', border: '1px solid #DDDDDD', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#FFFFFF' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '28px', height: '28px', flexShrink: 0, position: 'relative' }}>
            <img src="/ui/discount.svg" alt="Discount" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '14.9px', fontWeight: 400, color: '#222222', lineHeight: '20px' }}>Get 10% off your next stay.</span>
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#222222', textDecoration: 'underline', lineHeight: '18px', cursor: 'pointer' }}>Terms apply</span>
          </div>
        </div>
        <button style={{ padding: '6px 14px', borderRadius: '8px', backgroundColor: '#f7f7f7ff', fontSize: '14px', fontWeight: 500, color: '#222222', cursor: 'pointer' }}>
          Claim
        </button>
      </div>

      {/* Main Booking Widget */}
      <div style={{ padding: '24px', border: '1px solid #DDDDDD', borderRadius: '12px', backgroundColor: '#FFFFFF', boxShadow: '0 6px 16px rgba(0,0,0,0.12)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '24px' }}>
          <span style={{ fontSize: '22px', fontWeight: 600, color: '#222222', textDecoration: 'underline' }}>{listing.pricing.currencySymbol}{listing.pricing.totalPrice.toLocaleString('en-IN')}</span>
          <span style={{ fontSize: '16px', fontWeight: 400, color: '#222222' }}>for {listing.pricing.totalNights} nights</span>
        </div>

        <div style={{ border: '1px solid #B0B0B0', borderRadius: '8px', overflow: 'hidden', marginBottom: '16px' }}>
          <div style={{ display: 'flex', borderBottom: '1px solid #B0B0B0' }}>
            <div style={{ flex: 1, padding: '10px 12px', borderRight: '1px solid #B0B0B0' }}>
              <div style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', color: '#222222' }}>Check-in</div>
              <div style={{ fontSize: '14px', color: '#222222', marginTop: '2px' }}>10/18/2026</div>
            </div>
            <div style={{ flex: 1, padding: '10px 12px' }}>
              <div style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', color: '#222222' }}>Checkout</div>
              <div style={{ fontSize: '14px', color: '#222222', marginTop: '2px' }}>10/23/2026</div>
            </div>
          </div>
          <div style={{ padding: '10px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', color: '#222222' }}>Guests</div>
              <div style={{ fontSize: '14px', color: '#222222', marginTop: '2px' }}>2 guests</div>
            </div>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2003/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: '4', overflow: 'visible' }}>
              <path fill="none" d="M28 12L16.2929 23.7071C16.1054 23.8946 15.8015 23.8946 15.614 23.7071L4 12"></path>
            </svg>
          </div>
        </div>

        <div style={{ backgroundColor: '#F7F7F7', padding: '12px', borderRadius: '8px', marginBottom: '16px', textAlign: 'center' }}>
          <span style={{ fontSize: '14px', color: '#717171' }}>Free cancellation before <span style={{ fontWeight: 600, color: '#222222' }}>17 October</span></span>
        </div>

        <button style={{ 
          width: '100%', 
          padding: '14px', 
          background: 'linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)', 
          color: '#FFFFFF', 
          border: 'none', 
          borderRadius: '50px', 
          fontSize: '16px', 
          fontWeight: 600, 
          cursor: 'pointer', 
          marginBottom: '16px', 
          transition: 'background-color 0.2s' 
        }}>
          Reserve
        </button>

        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '14px', color: '#717171' }}>You won&apos;t be charged yet</span>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '-8px' }}>
        <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#717171', textDecoration: 'underline' }}>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2003/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '16px', width: '16px', fill: 'currentcolor' }}>
            <path d="M28 6H17V3a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v26a1 1 0 0 0 2 0v-6h11v3a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"></path>
          </svg>
          Report this listing
        </button>
      </div>
    </div>
  );
}

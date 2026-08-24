import React from 'react';
import { listing } from '@/data/listing';
import { ChevronLeft, ChevronRight, Keyboard } from 'lucide-react';

export function CalendarSection() {
  const checkinDate = new Date(listing.pricing.checkin);
  const checkoutDate = new Date(listing.pricing.checkout);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  // Helper to generate days in a month.
  const generateMonthDays = (year: number, month: number) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();
    const days = [];
    for (let i = 0; i < firstDayIndex; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(new Date(year, month, i));
    return days;
  };

  const octDays = generateMonthDays(2026, 9);
  const novDays = generateMonthDays(2026, 10);

  const renderMonth = (title: string, days: (Date | null)[]) => (
    <div style={{ width: '308px', flexShrink: 0 }}>
      <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 500, color: '#222222', marginBottom: '24px' }}>
        {title}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', rowGap: '2px', textAlign: 'center' }}>
        {daysOfWeek.map(d => (
          <div key={d} style={{ fontSize: '12px', fontWeight: 500, color: '#717171', paddingBottom: '8px' }}>
            {d}
          </div>
        ))}
        {days.map((date, index) => {
          if (!date) return <div key={index} style={{ width: '44px', height: '44px' }} />;
          
          const isCheckin = date.getTime() === checkinDate.getTime();
          const isCheckout = date.getTime() === checkoutDate.getTime();
          const isSelected = date > checkinDate && date < checkoutDate;
          const isPast = date < new Date('2026-10-18');
          
          let cellBg = 'transparent';
          if (isSelected) cellBg = '#F7F7F7';
          else if (isCheckin) cellBg = 'linear-gradient(to right, transparent 50%, #F7F7F7 50%)';
          else if (isCheckout) cellBg = 'linear-gradient(to left, transparent 50%, #F7F7F7 50%)';

          let circleBg = 'transparent';
          let color = '#222222';
          let fontWeight = 500;
          let textDecoration = 'none';

          if (isCheckin || isCheckout) {
            circleBg = '#222222';
            color = '#FFFFFF';
            fontWeight = 600;
          } else if (isPast) {
            color = '#DDDDDD';
            textDecoration = 'line-through';
            fontWeight = 400;
          }

          return (
            <div 
              key={index} 
              style={{
                width: '100%',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: cellBg,
                position: 'relative'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: circleBg,
                  color: color,
                  borderRadius: '50%',
                  fontSize: '14px',
                  fontWeight: fontWeight,
                  textDecoration: textDecoration,
                  cursor: isPast ? 'default' : 'pointer',
                  zIndex: 1
                }}
              >
                {date.getDate()}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div 
      style={{
        padding: '32px 0',
        width: '652px',
        fontFamily: '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif'
      }}
    >
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 500, color: '#222222', margin: '0 0 4px 0', lineHeight: '26px' }}>
          {listing.pricing.totalNights} nights in {listing.location.city}
        </h2>
        <div style={{ fontSize: '14px', color: '#717171', fontWeight: 400, lineHeight: '18px' }}>
          {formatDate(checkinDate)} - {formatDate(checkoutDate)}
        </div>
      </div>

      <div style={{ position: 'relative', marginTop: '32px' }}>
        {/* Month Navigation Controls */}
        <div style={{ position: 'absolute', top: '-4px', left: '-8px', right: '-8px', display: 'flex', justifyContent: 'space-between', zIndex: 2 }}>
          <button style={{ width: '32px', height: '32px', borderRadius: '50%', border: 'none', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#222222' }}>
            <ChevronLeft size={20} strokeWidth={2} />
          </button>
          <button style={{ width: '32px', height: '32px', borderRadius: '50%', border: 'none', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#222222' }}>
            <ChevronRight size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Dual Calendar Grid */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {renderMonth('October 2026', octDays)}
          {renderMonth('November 2026', novDays)}
        </div>
      </div>

      {/* Footer Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
        <button style={{ background: 'transparent', border: 'none', padding: 0, color: '#222222', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <Keyboard size={24} strokeWidth={1.5} />
        </button>
        <button style={{ background: 'transparent', border: 'none', padding: 0, textDecoration: 'underline', color: '#222222', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
          Clear dates
        </button>
      </div>
    </div>
  );
}

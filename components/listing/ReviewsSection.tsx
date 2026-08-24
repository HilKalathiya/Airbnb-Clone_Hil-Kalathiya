import React from 'react';
import { SprayCan, CheckCircle, Key, MessageSquare, Map, Tag } from 'lucide-react';

const FONT_FAMILY = '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, "system-ui", Roboto, "Helvetica Neue", sans-serif';

const PILLS = [
  { label: 'Comfort', score: 6, icon: '/chips/comfort.png', width: '135.2px' },
  { label: 'Accuracy', score: 5, icon: '/chips/accuracy.png', width: '139.9px' },
  { label: 'Hot tub', score: 5, icon: '/chips/hot-tub.png', width: '128.25px' },
  { label: 'Condition', score: 4, icon: '/chips/condition.png', width: '143.52px' },
  { label: 'Hospitality', score: 8, icon: '/chips/hospitality.png', width: '149.92px' },
  { label: 'Cleanliness', score: 4, icon: '/chips/cleanliness.png', width: '152.31px' },
  { label: 'Amenities', score: 2, icon: '/chips/amenities.png', width: '144.86px' },
  { label: 'Decor', score: '', icon: '/chips/decor.png', width: '118.55px' },
  { label: 'Indoor spaces', score: '', icon: '/chips/indoor-spaces.png', width: '170.36px' },
  { label: 'Location', score: '', icon: '/chips/location.png', width: '135.27px' },
];

const REVIEWS = [
  {
    name: 'Amit',
    date: '2 months on Airbnb',
    time: '1 week ago',
    avatar: null,
    initial: 'A',
    color: '#F5E2C8',
    text: 'Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.',
    showMore: false
  },
  {
    name: 'Aheesh',
    date: '3 years on Airbnb',
    time: '2 weeks ago',
    avatar: '/avatars/rev1.jpeg',
    initial: '',
    color: '',
    text: 'We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.',
    showMore: true
  },
  {
    name: 'Samiksha',
    date: '8 months on Airbnb',
    time: 'May 2026',
    avatar: '/avatars/rev3.jpeg',
    initial: '',
    color: '',
    text: 'the host nitish was really great help',
    showMore: false
  },
  {
    name: 'Vedant',
    date: '4 years on Airbnb',
    time: 'May 2026',
    avatar: null,
    initial: 'V',
    color: '#E8E1F4',
    text: 'We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine....',
    showMore: true
  },
  {
    name: 'Vaibhav S',
    date: '3 years on Airbnb',
    time: 'May 2026',
    avatar: '/avatars/rev4.jpeg',
    initial: '',
    color: '',
    text: 'Great great experience living out there , can\'t expect more , will always look for it in the future and will recommend my friends too.',
    showMore: false
  },
  {
    name: 'Mohd',
    date: '5 years on Airbnb',
    time: 'May 2026',
    avatar: '/avatars/rev5.jpeg',
    initial: '',
    color: '',
    text: 'Great place. Exactly as described in the listing.',
    showMore: false
  }
];

export function ReviewsSection() {
  return (
    <div style={{ width: '1120px', padding: '0', margin: '0', display: 'block', position: 'static', backgroundColor: 'transparent', fontFamily: FONT_FAMILY }}>
      
      {/* Main Rating Block */}
      <div style={{ width: '1120px', height: '312.97px', padding: '8px 0 40px', margin: '0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '143px', marginBottom: '16px' }}>
          <img src="/ui/laurel-left.png" alt="" style={{ height: '112px', marginRight: '16px', objectFit: 'contain' }} />
          <div style={{ width: '186.92px', height: '143px', fontSize: '100px', fontWeight: 500, lineHeight: '143px', letterSpacing: '-3px', color: '#222222', textAlign: 'center' }}>
            4.95
          </div>
          <img src="/ui/laurel-right.png" alt="" style={{ height: '112px', marginLeft: '16px', objectFit: 'contain' }} />
        </div>
        <div style={{ fontSize: '22px', fontWeight: 500, lineHeight: '31.46px', color: '#222222', textAlign: 'center', marginBottom: '8px' }}>
          Guest favourite
        </div>
        <div style={{ width: '420px', height: '40.5px', fontSize: '15px', fontWeight: 400, lineHeight: '20.25px', color: '#222222', textAlign: 'center', marginBottom: '16px' }}>
          This home is a guest favourite based on ratings, reviews and reliability
        </div>
        <div style={{ width: '131.78px', height: '20px', fontSize: '14px', fontWeight: 500, color: '#222222', textAlign: 'center', cursor: 'pointer', textDecoration: 'underline' }}>
          How reviews work
        </div>
      </div>

      {/* Rating Breakdown */}
      <div style={{ width: '1120px', height: '177.80px', padding: '8px 0 40px', display: 'grid', gridTemplateColumns: '211.2px 150.9px 150.9px 150.9px 154.4px 150.9px 150.9px', columnGap: 0, rowGap: 0 }}>
        {/* Overall Rating */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '14px', fontWeight: 500, color: '#222222', marginBottom: '16px' }}>Overall rating</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} style={{ display: 'flex', alignItems: 'center', gap: '8px', height: '12px' }}>
                <span style={{ fontSize: '12px', width: '8px', textAlign: 'right', fontWeight: 500, color: '#222222' }}>{star}</span>
                <div style={{ flex: 1, height: '4px', backgroundColor: '#DDDDDD', borderRadius: '2px', position: 'relative', maxWidth: '122px' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', backgroundColor: '#222222', borderRadius: '2px', width: star === 5 ? '100%' : star === 4 ? '5%' : '0%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Categories */}
        {[
          { label: 'Cleanliness', score: '5.0', icon: <SprayCan size={32} strokeWidth={1.5} color="#222222" /> },
          { label: 'Accuracy', score: '5.0', icon: <CheckCircle size={32} strokeWidth={1.5} color="#222222" /> },
          { label: 'Check-in', score: '5.0', icon: <Key size={32} strokeWidth={1.5} color="#222222" /> },
          { label: 'Communication', score: '5.0', icon: <MessageSquare size={32} strokeWidth={1.5} color="#222222" /> },
          { label: 'Location', score: '4.8', icon: <Map size={32} strokeWidth={1.5} color="#222222" /> },
          { label: 'Value', score: '4.8', icon: <Tag size={32} strokeWidth={1.5} color="#222222" /> },
        ].map((cat, idx) => (
          <div key={idx} style={{ display: 'flex', flexDirection: 'column', borderLeft: '1px solid #DDDDDD', paddingLeft: '24px' }}>
            <div style={{ fontSize: '14px', fontWeight: 500, color: '#222222', marginBottom: '16px' }}>{cat.label}</div>
            <div style={{ fontSize: '18px', fontWeight: 500, color: '#222222', marginBottom: '16px' }}>{cat.score}</div>
            <div>{cat.icon}</div>
          </div>
        ))}
      </div>

      {/* Review Filter Pills */}
      <style>{`
        .hide-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="hide-scroll" style={{ width: '1120px', height: '82px', display: 'flex', gap: '12px', overflowX: 'auto', overflowY: 'hidden', padding: '4px 0 30px', margin: '0', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {PILLS.map((pill, idx) => (
          <div key={idx} style={{ 
            height: '48px', 
            width: pill.width,
            flexShrink: 0,
            border: '1px solid #DDDDDD', 
            borderRadius: '16px', 
            backgroundColor: '#FFFFFF', 
            padding: '13px 18px 13px 14px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            fontSize: '14px', 
            fontWeight: 500, 
            color: '#222222' 
          }}>
            <img src={pill.icon} alt={pill.label} style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
            <span>{pill.label}</span>
            {pill.score && <span style={{ color: '#717171', fontWeight: 400, marginLeft: 'auto' }}>{pill.score}</span>}
          </div>
        ))}
      </div>

      {/* Review Grid */}
      <div style={{ width: '1120px', height: '631.77px', display: 'grid', gridTemplateColumns: '520px 520px', columnGap: '80px', rowGap: '48px', paddingBottom: '40px' }}>
        {REVIEWS.map((rev, idx) => (
          <div key={idx} style={{ width: '520px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
              {rev.avatar ? (
                <img src={rev.avatar} alt={rev.name} style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover' }} />
              ) : (
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: rev.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 600, color: '#222222' }}>
                  {rev.initial}
                </div>
              )}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '15px', fontWeight: 500, lineHeight: '21.45px', color: '#222222' }}>{rev.name}</span>
                <span style={{ fontSize: '14px', fontWeight: 400, color: '#717171' }}>{rev.date}</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '14px', fontWeight: 400, color: '#222222' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} viewBox="0 0 32 32" style={{ height: '10px', width: '10px', fill: '#222222' }}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path></svg>
                ))}
              </div>
              <span style={{ fontSize: '12px' }}>·</span>
              <span style={{ fontSize: '14px' }}>{rev.time}</span>
            </div>
            <div style={{ fontSize: '16px', fontWeight: 400, lineHeight: '24px', color: '#222222', wordWrap: 'break-word', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: rev.showMore ? 3 : 'unset', WebkitBoxOrient: 'vertical' }}>
              {rev.text}
            </div>
            {rev.showMore && (
              <div style={{ marginTop: '8px' }}>
                <span style={{ fontSize: '16px', fontWeight: 500, color: '#222222', textDecoration: 'underline', cursor: 'pointer' }}>Show more</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Show All Reviews Button */}
      <button style={{ 
        width: '190px', 
        height: '49px', 
        padding: '13px 23px', 
        margin: '0', 
        border: '1px solid #222222', 
        borderRadius: '12px', 
        backgroundColor: '#FFFFFF', 
        fontFamily: FONT_FAMILY, 
        fontSize: '16px', 
        fontWeight: 500, 
        color: '#222222', 
        cursor: 'pointer' 
      }}>
        Show all 19 reviews
      </button>

    </div>
  );
}

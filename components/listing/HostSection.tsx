import React from 'react';
import { Shield } from 'lucide-react';

const FONT_FAMILY = '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, "system-ui", Roboto, "Helvetica Neue", sans-serif';

const CO_HOSTS = [
  { name: 'Sharath', avatar: '/avatars/co1.jpg' },
  { name: 'Aman Dev Pahwa', avatar: '/avatars/co2.jpg' },
  { name: 'Maria Karen Priyanka', avatar: '/avatars/co3.jpg' },
  { name: 'Simran', avatar: '/avatars/rev2.jpeg' },
  { name: 'Pallavi', avatar: '/avatars/rev4.jpeg' },
  { name: 'Sanyukta', avatar: '/avatars/rev5.jpeg' },
  { name: 'Shruti', initial: 'S', color: '#FCE8EF' },
  { name: 'Amisha', initial: 'A', color: '#EAF0F6' }
];

export function HostSection() {
  return (
    <div style={{ width: '1120px', padding: '0', margin: '0', display: 'block', position: 'static', backgroundColor: 'transparent', fontFamily: FONT_FAMILY }}>
      
      {/* Heading */}
      <h2 style={{ width: '1120px', height: '26px', margin: '0 0 24px 0', fontSize: '22px', fontWeight: 500, lineHeight: '26px', letterSpacing: 'normal', color: '#222222' }}>
        Meet your host
      </h2>

      {/* Main Content Layout */}
      <div style={{ display: 'flex', width: '1120px' }}>
        
        {/* Left Column (340px) */}
        <div style={{ width: '340px' }}>
          
          {/* Host Card */}
          <div style={{ 
            width: '340px', 
            height: '261.25px', 
            padding: '30px 24px', 
            borderRadius: '20px', 
            border: '1px solid rgba(0,0,0,0.08)', 
            boxShadow: '0 6px 16px rgba(0,0,0,0.12)', 
            display: 'grid', 
            gridTemplateColumns: '1fr 100px', 
            backgroundColor: '#FFFFFF',
            boxSizing: 'border-box'
          }}>
            {/* Host Info */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'relative', marginBottom: '8px' }}>
                <img src="/avatars/host.jpeg" alt="Host" style={{ width: '88px', height: '88px', borderRadius: '50%', objectFit: 'cover' }} />
                {/* Red Verification Badge */}
                <div style={{ position: 'absolute', bottom: '0', right: '0', width: '28px', height: '28px', backgroundColor: '#E31C5F', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #FFFFFF' }}>
                  <svg viewBox="0 0 16 16" style={{ fill: '#FFFFFF', width: '14px', height: '14px' }}>
                    <path d="M13.1 3.5l-6.8 6.8-3.4-3.4c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4.1 4.1c.2.2.5.3.7.3s.5-.1.7-.3l7.5-7.5c.4-.4.4-1 0-1.4s-1-.4-1.4 0z"></path>
                  </svg>
                </div>
              </div>
              <div style={{ fontSize: '32px', fontWeight: 700, lineHeight: '36px', color: '#222222', textAlign: 'center', letterSpacing: '-0.02em' }}>
                Mirashya<br/>Homes
              </div>
              <div style={{ fontSize: '13px', fontWeight: 400, lineHeight: '18.59px', color: '#222222', marginTop: '4px' }}>
                Host
              </div>
            </div>
            
            {/* Host Metrics */}
            <div style={{ width: '120px', paddingLeft: '20px', borderLeft: '1px solid #EBEBEB', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ paddingBottom: '10px', borderBottom: '1px solid #EBEBEB' }}>
                <div style={{ fontSize: '19px', fontWeight: 500, lineHeight: '20.02px', color: '#222222' }}>1,463</div>
                <div style={{ fontSize: '12px', fontWeight: 400, lineHeight: '17.16px', color: '#222222' }}>Reviews</div>
              </div>
              <div style={{ paddingTop: '10px', paddingBottom: '10px', borderBottom: '1px solid #EBEBEB' }}>
                <div style={{ fontSize: '19px', fontWeight: 500, lineHeight: '20.02px', color: '#222222', display: 'flex', alignItems: 'center', gap: '2px' }}>
                  4.68 <svg viewBox="0 0 32 32" style={{ fill: 'currentcolor', height: '14px', width: '14 px' }}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path></svg>
                </div>
                <div style={{ fontSize: '12px', fontWeight: 400, lineHeight: '17.16px', color: '#222222' }}>Rating</div>
              </div>
              <div style={{ paddingTop: '10px' }}>
                <div style={{ fontSize: '19px', fontWeight: 500, lineHeight: '20.02px', color: '#222222' }}>2</div>
                <div style={{ fontSize: '12px', fontWeight: 400, lineHeight: '17.16px', color: '#222222' }}>Years hosting</div>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div style={{ marginTop: '22px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Balloon row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '340px', height: '24px' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '24px', height: '24px', color: '#222222' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-2.485 0-4.5-2.015-4.5-4.5 0-.936.321-1.802.859-2.5C7 11.5 6 9 6 6a6 6 0 1 1 12 0c0 3-1 5.5-2.359 8 .538.698.859 1.564.859 2.5 0 2.485-2.015 4.5-4.5 4.5zM12 21v1M12 21a2 2 0 0 0 2-2M12 21a2 2 0 0 1-2-2"></path>
              </svg>
              <div style={{ fontSize: '15px', fontWeight: 400, lineHeight: '21.45px', color: '#222222' }}>Born in the 80s</div>
            </div>
            {/* School row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '340px', height: '24px' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '24px', height: '24px', color: '#222222' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M22 10L12 5 2 10l10 5 10-5zm0 0v5M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
              </svg>
              <div style={{ fontSize: '15px', fontWeight: 400, lineHeight: '21.45px', color: '#222222' }}>Where I went to school: NICMAR GOA</div>
            </div>
          </div>
        </div>

        {/* Gap (48px) */}
        <div style={{ width: '48px', flexShrink: 0 }}></div>

        {/* Right Column (732px) */}
        <div style={{ width: '732px' }}>
          
          <h3 style={{ fontSize: '18px', fontWeight: 500, lineHeight: '25.74px', color: '#222222', margin: '0 0 16px 0' }}>
            Co-Hosts
          </h3>

          {/* Co-Host Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '238.67px 238.67px 238.67px', columnGap: '8px', rowGap: '16px' }}>
            {CO_HOSTS.map((co, idx) => (
              <div key={idx} style={{ width: '238.67px', height: '34px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                {co.avatar ? (
                  <img src={co.avatar} alt={co.name} style={{ width: '34px', height: '34px', borderRadius: '50%', objectFit: 'cover' }} />
                ) : (
                  <div style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: co.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 600, color: '#222222' }}>
                    {co.initial}
                  </div>
                )}
                <div style={{ fontSize: '14px', fontWeight: 400, lineHeight: '20.02px', color: '#222222', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {co.name}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '32px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 500, lineHeight: '25.74px', color: '#222222', margin: '0 0 16px 0' }}>
              Host details
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '14px', fontWeight: 400, lineHeight: '20.02px', color: '#222222' }}>Response rate: 100%</span>
              <span style={{ fontSize: '14px', fontWeight: 400, lineHeight: '20.02px', color: '#222222',marginTop:"4px" }}>Responds within an hour</span>
            </div>

            <button style={{ 
              width: '144.95px', 
              height: '47px', 
              padding: '14px 24px', 
              marginTop: '18px', 
              backgroundColor: '#F2F2F2', 
              border: 'none', 
              borderRadius: '8px', 
              fontFamily: FONT_FAMILY,
              fontSize: '15px', 
              fontWeight: 500, 
              color: '#222222', 
              cursor: 'pointer' 
            }}>
              Message host
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginTop: '24px' }}>
            <Shield size={24} color="#4d4c4cff" style={{ flexShrink: 0 }} strokeWidth={1.5} />
            <span style={{ fontSize: '13px', fontWeight: 400, lineHeight: '18px', color: '#5f5f5fff', marginTop: '2px', maxWidth: '600px' }}>
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

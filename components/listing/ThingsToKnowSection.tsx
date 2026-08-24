import React from 'react';
import { CalendarX, Clock, Shield } from 'lucide-react';

const FONT_FAMILY = '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, "system-ui", Roboto, "Helvetica Neue", sans-serif';

export function ThingsToKnowSection() {
  return (
    <div style={{ width: '1120px', padding: '0', margin: '0', display: 'block', position: 'static', backgroundColor: 'transparent', fontFamily: FONT_FAMILY }}>
      
      <h2 style={{ fontSize: '22px', fontWeight: 500, lineHeight: '26px', color: '#222222', margin: '0 0 24px 0', padding: '0' }}>
        Things to know
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '352px 352px 352px', columnGap: '32px', width: '1120px', padding: '0', margin: '0' }}>
        
        {/* Column 1: Cancellation policy */}
        <div style={{ width: '352px', padding: '0', margin: '0', display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '14px' }}>
            {/* Note: User specified 24x24 SVG with color #222222 */}
            <CalendarX size={24} color="#222222" strokeWidth={1.5} />
          </div>
          <div style={{ fontSize: '16px', fontWeight: 500, lineHeight: '22.88px', color: '#222222', marginBottom: '14px' }}>
            Cancellation policy
          </div>
          <div style={{ fontSize: '14px', fontWeight: 400, lineHeight: '21px', color: '#222222', marginBottom: '8px' }}>
            Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.
          </div>
          <div style={{ fontSize: '14px', fontWeight: 400, lineHeight: '21px', color: '#222222', marginBottom: '8px' }}>
            Review this host’s full policy for details.
          </div>
          <div style={{ fontSize: '14px', fontWeight: 500, lineHeight: '20.02px', color: '#222222', textDecoration: 'underline', cursor: 'pointer', marginTop: 'auto' }}>
            Learn more
          </div>
        </div>

        {/* Column 2: House rules */}
        <div style={{ width: '352px', padding: '0', margin: '0', display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '14px' }}>
            <Clock size={24} color="#222222" strokeWidth={1.5} />
          </div>
          <div style={{ fontSize: '16px', fontWeight: 500, lineHeight: '22.88px', color: '#222222', marginBottom: '14px' }}>
            House rules
          </div>
          <div style={{ fontSize: '14px', fontWeight: 400, lineHeight: '21px', color: '#222222', marginBottom: '8px' }}>
            Check-in after 2:00 pm
          </div>
          <div style={{ fontSize: '14px', fontWeight: 400, lineHeight: '21px', color: '#222222', marginBottom: '8px' }}>
            Checkout before 11:00 am
          </div>
          <div style={{ fontSize: '14px', fontWeight: 400, lineHeight: '21px', color: '#222222', marginBottom: '8px' }}>
            3 guests maximum
          </div>
          <div style={{ fontSize: '14px', fontWeight: 500, lineHeight: '20.02px', color: '#222222', textDecoration: 'underline', cursor: 'pointer', marginTop: 'auto' }}>
            Learn more
          </div>
        </div>

        {/* Column 3: Safety & property */}
        <div style={{ width: '352px', padding: '0', margin: '0', display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '14px' }}>
            <Shield size={24} color="#222222" strokeWidth={1.5} />
          </div>
          <div style={{ fontSize: '16px', fontWeight: 500, lineHeight: '22.88px', color: '#222222', marginBottom: '14px' }}>
            Safety & property
          </div>
          <div style={{ fontSize: '14px', fontWeight: 400, lineHeight: '21px', color: '#222222', marginBottom: '8px' }}>
            Carbon monoxide alarm not reported
          </div>
          <div style={{ fontSize: '14px', fontWeight: 400, lineHeight: '21px', color: '#222222', marginBottom: '8px' }}>
            Smoke alarm not reported
          </div>
          <div style={{ fontSize: '14px', fontWeight: 400, lineHeight: '21px', color: '#222222', marginBottom: '8px' }}>
            Exterior security cameras on property
          </div>
          <div style={{ fontSize: '14px', fontWeight: 500, lineHeight: '20.02px', color: '#222222', textDecoration: 'underline', cursor: 'pointer', marginTop: 'auto' }}>
            Learn more
          </div>
        </div>

      </div>
    </div>
  );
}

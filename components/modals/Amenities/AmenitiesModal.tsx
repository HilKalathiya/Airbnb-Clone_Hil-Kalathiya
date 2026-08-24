'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { listing } from '@/data/listing';
import { 
  Utensils, Wifi, Briefcase, Car, Waves, Bath, PawPrint, Video, ShieldAlert, Flame,
  Monitor, Wind, DoorOpen, Coffee, CookingPot, Dumbbell, Sun, Shirt, Thermometer
} from 'lucide-react';

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Kitchen and dining': return <Utensils size={24} strokeWidth={1.5} color="#222222" />;
    case 'Bedroom and laundry': return <Shirt size={24} strokeWidth={1.5} color="#222222" />;
    case 'Bathroom': return <Bath size={24} strokeWidth={1.5} color="#222222" />;
    case 'Heating and cooling': return <Thermometer size={24} strokeWidth={1.5} color="#222222" />;
    case 'Internet and office': return <Wifi size={24} strokeWidth={1.5} color="#222222" />;
    case 'Location features': return <DoorOpen size={24} strokeWidth={1.5} color="#222222" />;
    case 'Outdoor': return <Sun size={24} strokeWidth={1.5} color="#222222" />;
    case 'Parking and facilities': return <Car size={24} strokeWidth={1.5} color="#222222" />;
    case 'Home safety': return <ShieldAlert size={24} strokeWidth={1.5} color="#222222" />;
    default: return <Utensils size={24} strokeWidth={1.5} color="#222222" />;
  }
};

const getAmenityIcon = (label: string) => {
  const l = label.toLowerCase();
  if (l.includes('wifi') || l.includes('internet')) return <Wifi size={24} strokeWidth={1.5} color="#222222" />;
  if (l.includes('kitchen') || l.includes('cook') || l.includes('fridge') || l.includes('freezer') || l.includes('microwave') || l.includes('toaster') || l.includes('blender') || l.includes('kettle') || l.includes('coffee') || l.includes('wine') || l.includes('crockery')) return <Utensils size={24} strokeWidth={1.5} color="#222222" />;
  if (l.includes('workspace')) return <Briefcase size={24} strokeWidth={1.5} color="#222222" />;
  if (l.includes('parking') || l.includes('car')) return <Car size={24} strokeWidth={1.5} color="#222222" />;
  if (l.includes('pool') || l.includes('waves')) return <Waves size={24} strokeWidth={1.5} color="#222222" />;
  if (l.includes('tub') || l.includes('bath') || l.includes('shower') || l.includes('shampoo') || l.includes('hair dryer') || l.includes('towels') || l.includes('hot water')) return <Bath size={24} strokeWidth={1.5} color="#222222" />;
  if (l.includes('pet')) return <PawPrint size={24} strokeWidth={1.5} color="#222222" />;
  if (l.includes('camera')) return <Video size={24} strokeWidth={1.5} color="#222222" />;
  if (l.includes('smoke') || l.includes('carbon monoxide') || l.includes('alarm') || l.includes('safety')) return <ShieldAlert size={24} strokeWidth={1.5} color="#222222" />;
  if (l.includes('fire') || l.includes('flame')) return <Flame size={24} strokeWidth={1.5} color="#222222" />;
  if (l.includes('tv')) return <Monitor size={24} strokeWidth={1.5} color="#222222" />;
  if (l.includes('air conditioning') || l.includes('fan') || l.includes('cool') || l.includes('heat')) return <Wind size={24} strokeWidth={1.5} color="#222222" />;
  if (l.includes('entrance')) return <DoorOpen size={24} strokeWidth={1.5} color="#222222" />;
  if (l.includes('gym') || l.includes('exercise')) return <Dumbbell size={24} strokeWidth={1.5} color="#222222" />;
  if (l.includes('bed') || l.includes('linen') || l.includes('clothes') || l.includes('cot') || l.includes('hanger') || l.includes('iron') || l.includes('blind')) return <Shirt size={24} strokeWidth={1.5} color="#222222" />;
  if (l.includes('outdoor') || l.includes('patio') || l.includes('balcony')) return <Sun size={24} strokeWidth={1.5} color="#222222" />;
  
  return <Utensils size={24} strokeWidth={1.5} color="#222222" />; // fallback
};

export function AmenitiesModal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const isOpen = searchParams.get('modal') === 'amenities';
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        router.replace(pathname, { scroll: false });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, router, pathname]);

  if (!mounted || !isOpen) return null;

  const closeModal = () => {
    router.replace(pathname, { scroll: false });
  };

  // Compile all unique amenities
  const allAmenitiesSet = new Set<string>();
  const amenityMap = new Map<string, boolean>();

  // From highlights
  listing.amenities.forEach(a => {
    allAmenitiesSet.add(a.label);
    amenityMap.set(a.label, a.available);
  });

  // From photo tour
  listing.photoTour.forEach(room => {
    room.amenities.forEach(a => {
      allAmenitiesSet.add(a);
      if (!amenityMap.has(a)) amenityMap.set(a, true); // Assume available if in room list
    });
  });
  
  // From safety info
  listing.safetyInfo.forEach(a => {
    allAmenitiesSet.add(a);
    if (a.toLowerCase().includes('not reported') || a.toLowerCase().includes('not available')) {
      amenityMap.set(a, false);
    } else {
      amenityMap.set(a, true);
    }
  });

  const categories: Record<string, { label: string, available: boolean }[]> = {
    'Internet and office': [],
    'Kitchen and dining': [],
    'Bedroom and laundry': [],
    'Bathroom': [],
    'Entertainment': [],
    'Heating and cooling': [],
    'Location features': [],
    'Outdoor': [],
    'Parking and facilities': [],
    'Home safety': [],
    'Not included': [],
  };

  allAmenitiesSet.forEach(label => {
    const l = label.toLowerCase();
    const available = amenityMap.get(label) ?? true;
    const item = { label, available };

    if (!available) {
      categories['Not included'].push(item);
      return;
    }

    if (l.includes('wifi') || l.includes('internet') || l.includes('workspace')) {
      categories['Internet and office'].push(item);
    } else if (l.includes('kitchen') || l.includes('cook') || l.includes('fridge') || l.includes('freezer') || l.includes('microwave') || l.includes('toaster') || l.includes('blender') || l.includes('kettle') || l.includes('coffee') || l.includes('wine') || l.includes('crockery')) {
      categories['Kitchen and dining'].push(item);
    } else if (l.includes('bed') || l.includes('linen') || l.includes('clothes') || l.includes('cot') || l.includes('hanger') || l.includes('iron') || l.includes('blind') || l.includes('clean') || l.includes('long-term')) {
      categories['Bedroom and laundry'].push(item);
    } else if (l.includes('bath') || l.includes('shower') || l.includes('shampoo') || l.includes('hair dryer') || l.includes('towels') || l.includes('hot water')) {
      categories['Bathroom'].push(item);
    } else if (l.includes('tv') || l.includes('entertainment')) {
      categories['Entertainment'].push(item);
    } else if (l.includes('air conditioning') || l.includes('fan') || l.includes('cool') || l.includes('heat')) {
      categories['Heating and cooling'].push(item);
    } else if (l.includes('entrance') || l.includes('location')) {
      categories['Location features'].push(item);
    } else if (l.includes('outdoor') || l.includes('patio') || l.includes('balcony')) {
      categories['Outdoor'].push(item);
    } else if (l.includes('parking') || l.includes('car') || l.includes('pool') || l.includes('hot tub') || l.includes('gym') || l.includes('exercise')) {
      categories['Parking and facilities'].push(item);
    } else if (l.includes('smoke') || l.includes('carbon monoxide') || l.includes('alarm') || l.includes('safety') || l.includes('camera')) {
      categories['Home safety'].push(item);
    } else {
      // Fallback
      categories['Internet and office'].push(item);
    }
  });

  return (
    <div 
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 120,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif'
      }}
      onClick={closeModal}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '780px',
          height: '85vh',
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 8px 28px rgba(0,0,0,0.28)',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div 
          style={{
            flexShrink: 0,
            height: '72px',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid #EBEBEB'
          }}
        >
          <button 
            onClick={closeModal}
            style={{
              background: 'transparent',
              border: 'none',
              padding: '8px',
              cursor: 'pointer',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#222222',
              marginLeft: '-8px'
            }}
            aria-label="Close amenities"
          >
            <X size={20} strokeWidth={2.5} />
          </button>
        </div>

        <div 
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '24px',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div style={{ width: '100%' }}>
            <h2 style={{ fontSize: '26px', fontWeight: 600, color: '#222222', marginBottom: '40px', lineHeight: '30px' }}>
              What this place offers
            </h2>

          {Object.entries(categories).map(([category, items]) => {
            if (items.length === 0) return null;
            return (
              <div key={category} style={{ marginBottom: '40px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#222222', marginBottom: '24px' }}>
                  {category}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {items.map((item, idx) => (
                    <div 
                      key={idx} 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '16px',
                        paddingBottom: '24px',
                        marginBottom: '24px',
                        borderBottom: '1px solid #EBEBEB',
                        textDecoration: item.available ? 'none' : 'line-through',
                        color: '#222222',
                        fontSize: '16px',
                        fontWeight: 400
                      }}
                    >
                      <div style={{ flexShrink: 0 }}>
                        {getAmenityIcon(item.label)}
                      </div>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
}

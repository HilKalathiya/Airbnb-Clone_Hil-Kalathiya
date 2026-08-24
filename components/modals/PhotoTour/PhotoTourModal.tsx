'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { PhotoTourHeader } from './PhotoTourHeader';
import { PhotoTourGallery } from './PhotoTourGallery';
import { listing } from '@/data/listing';

export function PhotoTourModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const isOpen = searchParams.get('modal') === 'photo-tour';
  const scrollTo = searchParams.get('scrollTo');
  
  // Track animation state for entry/exit
  const [shouldRender, setShouldRender] = useState(false);
  const [activeRoom, setActiveRoom] = useState(listing.photoTour[0]?.id || '');

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      document.body.style.overflow = 'hidden';
      
      // Handle jump to specific image
      if (scrollTo) {
        // Wait a tick for the DOM to render the modal content
        setTimeout(() => {
          const container = document.querySelector('.overflow-y-auto');
          const el = document.getElementById(`photo-tour-image-${scrollTo}`);
          if (container && el) {
            const containerTop = container.getBoundingClientRect().top;
            const elTop = el.getBoundingClientRect().top;
            container.scrollTo({ top: container.scrollTop + elTop - containerTop - 100, behavior: 'instant' });
            
            // Clean up the URL so it doesn't jump again if we close and reopen
            router.replace(`${pathname}?modal=photo-tour`, { scroll: false });
          }
        }, 50);
      }
    } else {
      // Allow exit animation to play before unmounting
      const timer = setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = '';
      }, 300); // 300ms matches our transition
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }
  }, [isOpen, scrollTo, pathname, router]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        router.push(pathname, { scroll: false });
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, router, pathname]);

  const handleClose = () => {
    router.push(pathname, { scroll: false });
  };

  if (!shouldRender) return null;

  return (
    <div 
      aria-label="Photo tour"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[120] bg-white flex flex-col"
      style={{
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? 'visible' : 'hidden',
        transform: isOpen ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.3s cubic-bezier(0.2, 0, 0, 1), transform 0.3s cubic-bezier(0.2, 0, 0, 1), visibility 0s linear ' + (isOpen ? '0s' : '0.3s')
      }}
    >
      <PhotoTourHeader onClose={handleClose} />

      <div className="flex-1 overflow-y-auto pt-8">
        <div 
          className="mx-auto px-[32px] md:px-0 w-full"
          style={{ maxWidth: '1120px' }}
        >
          {/* Category Thumbnails */}
          <div className="flex flex-wrap gap-[16px] pb-16 justify-start w-full">
            {listing.photoTour.map((section) => (
              <button 
                key={section.id}
                onClick={() => {
                  const el = document.getElementById(`tour-room-${section.id}`);
                  if (el) {
                    // When scrolling within the modal, we need to scroll the container, not the window
                    const container = document.querySelector('.overflow-y-auto');
                    if (container) {
                      const containerTop = container.getBoundingClientRect().top;
                      const elTop = el.getBoundingClientRect().top;
                      container.scrollTo({ top: container.scrollTop + elTop - containerTop - 100, behavior: 'smooth' });
                    }
                  }
                }}
                className="flex flex-col gap-2 group cursor-pointer w-[126px]"
              >
                <div className="w-full aspect-[106/100] rounded-[8px] overflow-hidden bg-[#EEEEEE] relative">
                  {section.images[0] && (
                    <img 
                      src={section.images[0].src} 
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <span className="text-[14px] text-[#222222] font-normal self-start text-left">
                  {section.title}
                </span>
              </button>
            ))}
          </div>

          {/* Room Sections */}
          <PhotoTourGallery onActiveRoomChange={setActiveRoom} />
        </div>
      </div>
    </div>
  );
}

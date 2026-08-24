'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { LightboxHeader } from './LightboxHeader';
import { LightboxControls } from './LightboxControls';
import { LightboxStage } from './LightboxStage';
import { globalImages } from '@/data/listing';

export function LightboxModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const isOpen = searchParams.get('modal') === 'lightbox';
  const imageParam = searchParams.get('image');
  
  // Track animation state for entry/exit
  const [shouldRender, setShouldRender] = useState(false);

  // Initialize index from URL or default to 0
  const initialIndex = imageParam ? parseInt(imageParam, 10) : 0;
  const activeIndex = (isNaN(initialIndex) || initialIndex < 0 || initialIndex >= globalImages.length) ? 0 : initialIndex;

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = '';
      }, 250); 
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    router.push(pathname, { scroll: false });
  }, [router, pathname]);

  const handleNext = useCallback(() => {
    if (activeIndex < globalImages.length - 1) {
      router.replace(`${pathname}?modal=lightbox&image=${activeIndex + 1}`, { scroll: false });
    }
  }, [activeIndex, router, pathname]);

  const handlePrev = useCallback(() => {
    if (activeIndex > 0) {
      router.replace(`${pathname}?modal=lightbox&image=${activeIndex - 1}`, { scroll: false });
    }
  }, [activeIndex, router, pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose, handleNext, handlePrev]);

  if (!shouldRender) return null;

  const activeImage = globalImages[activeIndex];

  return (
    <div 
      aria-label="Photo viewer"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[140] bg-[#FFFFFF] flex flex-col"
      style={{
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? 'visible' : 'hidden',
        transition: 'opacity 0.25s'
      }}
    >
      <LightboxHeader onClose={handleClose} category={activeImage?.category} />
      
      <LightboxControls 
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={activeIndex > 0}
        hasNext={activeIndex < globalImages.length - 1}
      />
      
      {activeImage && (
        <LightboxStage image={activeImage} />
      )}
    </div>
  );
}

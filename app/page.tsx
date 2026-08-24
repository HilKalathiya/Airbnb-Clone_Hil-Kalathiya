import React from 'react';

// Layout
import { Header } from '@/components/layout/Header';

import { ScrollListingNav } from '@/components/layout/ScrollListingNav';

// Listing
import { ListingTitle } from '@/components/listing/ListingTitle';
import { HeroGallery } from '@/components/listing/HeroGallery';
import { ListingDetails } from '@/components/listing/ListingDetails';
import { GuestFavorite } from '@/components/listing/GuestFavorite';
import { HostSummary } from '@/components/listing/HostSummary';
import { FeaturesList } from '@/components/listing/FeaturesList';
import { DescriptionSection } from '@/components/listing/DescriptionSection';
import { SleepingSection } from '@/components/listing/SleepingSection';
import { AmenitiesSection } from '@/components/listing/AmenitiesSection';
import { CalendarSection } from '@/components/listing/CalendarSection';
import { BookingSidebar } from '@/components/listing/BookingSidebar';
import { ReviewsSection } from '@/components/listing/ReviewsSection';
import { LocationSection } from '@/components/listing/LocationSection';
import { HostSection } from '@/components/listing/HostSection';
import { ThingsToKnowSection } from '@/components/listing/ThingsToKnowSection';
import { SimilarStaysSection } from '@/components/listing/SimilarStaysSection';

// Modals
import { PhotoTourModal } from '@/components/modals/PhotoTour/PhotoTourModal';
import { LightboxModal } from '@/components/modals/Lightbox/LightboxModal';
import { AmenitiesModal } from '@/components/modals/Amenities/AmenitiesModal';

// UI
import { Divider } from '@/components/ui/Divider';

export default function ListingPage() {
  return (
    <>
      <Header />
      <ScrollListingNav />

      <main>
        <div id="photos" className="w-full">
          <ListingTitle />
          <HeroGallery />

          <div 
            className="pt-[48px]"
            style={{
              width: '1120px',
              margin: '0 auto',
              paddingLeft: 0,
              paddingRight: 0,
              display: 'grid',
              gridTemplateColumns: '652px 372px',
              columnGap: '96px',
              backgroundColor: 'transparent'
            }}
          >
            {/* Left Column - Main Details */}
            <div 
              style={{
                width: '652px',
                display: 'block',
                padding: 0,
                margin: 0,
                overflow: 'visible'
              }}
            >
              <ListingDetails>
                <GuestFavorite />
                <Divider />
                <HostSummary />
                <Divider />
                <FeaturesList />
                <Divider />
                <DescriptionSection />
                <Divider />
                <SleepingSection />
                <Divider />
                <div id="amenities">
                  <AmenitiesSection />
                </div>
                <Divider />
                <CalendarSection />
              </ListingDetails>
            </div>

            {/* Right Column - Booking Sidebar */}
            <div style={{ width: '372px', position: 'relative' }}>
              <BookingSidebar />
            </div>
          </div>
        </div>

        {/* Full-width sections (internally constrained by page-container) */}
        <div id="reviews" className="border-t border-border-default mt-12">
          <div className="page-container py-12">
            <ReviewsSection />
          </div>
        </div>
        
        <div id="location" className="border-t border-border-default">
          <div className="page-container py-12">
            <LocationSection />
          </div>
        </div>
        
        <div className="border-t border-border-default">
          <div className="page-container py-12">
            <HostSection />
          </div>
        </div>
        
        <div className="border-t border-border-default">
          <div className="page-container py-12">
            <ThingsToKnowSection />
          </div>
        </div>

        {/* Similar Stays usually has a different background or spacing in some references, 
            but keeping consistent structure for now */}
        <div className="border-t border-border-default">
          <div className="page-container py-12">
            <SimilarStaysSection />
          </div>
        </div>
      </main>

      {/* Modals are hidden by default, state will be managed locally or at page level */}
      <React.Suspense fallback={null}>
        <PhotoTourModal />
        <LightboxModal />
        <AmenitiesModal />
      </React.Suspense>


    </>
  );
}

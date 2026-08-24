import React, { useRef } from 'react';
import { listing, GalleryImage } from '@/data/listing';
import { PhotoTourImage } from './PhotoTourImage';

interface PhotoTourGalleryProps {
  onActiveRoomChange: (roomId: string) => void;
}

export function PhotoTourGallery({ onActiveRoomChange }: PhotoTourGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  type ChunkRow = 
    | { type: 'large'; image: GalleryImage; originalIndex: number }
    | { type: 'small-pair'; images: { image: GalleryImage; originalIndex: number }[] };

  const chunkImages = (images: GalleryImage[]): ChunkRow[] => {
    const rows: ChunkRow[] = [];
    let i = 0;
    while (i < images.length) {
      if (i % 3 === 0) {
        // Large image row
        rows.push({ type: 'large', image: images[i], originalIndex: i });
        i += 1;
      } else {
        // Small images row (pairs)
        const pair = [{ image: images[i], originalIndex: i }];
        if (i + 1 < images.length) {
          pair.push({ image: images[i + 1], originalIndex: i + 1 });
        }
        rows.push({ type: 'small-pair', images: pair });
        i += 2;
      }
    }
    return rows;
  };

  // Canonical index now matches Photo Tour 1:1
  let absoluteImageCounter = 0;

  return (
    <div ref={containerRef} className="flex flex-col w-full items-start">
      {listing.photoTour.map((section) => {
        const rows = chunkImages(section.images);

        return (
          <section
            key={section.id}
            id={`tour-room-${section.id}`}
            data-tour-section
            className="w-full max-w-[976px] grid grid-cols-[458px_458px] gap-[120px] pt-[32px] pb-[64px]"
            style={{ scrollMarginTop: '100px' }}
          >
            {/* Left Column: Title and Amenities */}
            <div className="w-[458px] relative">
              <div className="sticky top-[120px] flex flex-col gap-[8px]">
                <h2 className="text-[32px] font-medium leading-[1.1] tracking-[-0.02em] text-[#222222]">
                  {section.title}
                </h2>
                {section.amenities.length > 0 && (
                  <p className="text-[16px] leading-[1.4] text-[#717171] font-normal break-words mt-[8px]">
                    {section.amenities.join(' · ')}
                  </p>
                )}
              </div>
            </div>

            {/* Right Column: Image Gallery */}
            <div className="w-[458px] flex flex-col gap-[12px]">
              {rows.map((row, rowIndex) => {
                if (row.type === 'large') {
                  const absIndex = absoluteImageCounter++;
                  return (
                    <div key={rowIndex} className="w-full" id={`photo-tour-image-${absIndex}`}>
                      <PhotoTourImage
                        src={row.image.src}
                        alt={row.image.alt}
                        index={absIndex}
                      />
                    </div>
                  );
                } else if (row.type === 'small-pair') {
                  return (
                    <div key={rowIndex} className="grid grid-cols-2 gap-[12px] w-full">
                      {row.images.map((item) => {
                        const absIndex = absoluteImageCounter++;
                        return (
                          <div key={item.originalIndex} className="w-full" id={`photo-tour-image-${absIndex}`}>
                            <PhotoTourImage
                              src={item.image.src}
                              alt={item.image.alt}
                              index={absIndex}
                            />
                          </div>
                        );
                      })}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

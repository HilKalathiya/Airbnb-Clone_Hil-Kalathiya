import { useState, useEffect } from 'react';

// Placeholder for Photo Tour scroll spy logic to be implemented later
export function usePhotoTourScrollSpy(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    // Implementation deferred to Photo Tour chunk
    if (sectionIds.length > 0) {
      setActiveSection(sectionIds[0]);
    }
  }, [sectionIds]);

  return activeSection;
}

import React from 'react';
import { Star } from 'lucide-react';

interface RatingBadgeProps {
  rating: number;
  reviewCount: number;
}

export function RatingBadge({ rating, reviewCount }: RatingBadgeProps) {
  return (
    <div className="flex items-center gap-1 font-semibold">
      <Star size={14} className="fill-current" />
      <span>{rating}</span>
      {reviewCount > 0 && <span className="text-text-secondary font-normal underline">{reviewCount} reviews</span>}
    </div>
  );
}

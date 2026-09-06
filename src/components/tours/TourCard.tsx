import Link from 'next/link';
import Image from 'next/image';
import { Tour } from '@/lib/data/tours';
import { getTourImage } from '@/lib/images';
import { formatPrice } from '@/lib/utils';

interface TourCardProps {
  tour: Tour;
  viewMode?: 'grid' | 'list';
}

export function TourCard({ tour, viewMode = 'grid' }: TourCardProps) {
  const imageUrl = getTourImage(tour.slug, tour.category);
  
  if (viewMode === 'list') {
    return (
      <Link href={`/tours/${tour.slug}`} className="block group">
        <div className="flex flex-col sm:flex-row bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl overflow-hidden transition-all duration-[var(--transition-fast)] hover:border-[var(--color-border-hover)] hover:shadow-lg h-full">
          {/* Image Area */}
          <div className="relative w-full sm:w-[300px] shrink-0 aspect-[4/3] sm:aspect-auto sm:h-full overflow-hidden bg-zinc-900">
            <Image
              src={imageUrl}
              alt={tour.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 300px"
            />
            <div className="absolute top-4 left-4 bg-[var(--color-primary)]/90 text-black rounded-full text-xs uppercase px-3 py-1 font-semibold tracking-wide">
              {tour.categoryLabel}
            </div>
          </div>
          
          {/* Content Area */}
          <div className="p-5 flex flex-col flex-1 justify-between">
            <div>
              <h3 className="font-semibold text-lg text-white line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors">
                {tour.name}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] line-clamp-3 mt-2">
                {tour.description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4 pt-4 border-t border-[var(--color-border)]/50">
              <div className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span className="truncate max-w-[140px]">{tour.duration}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-2">
                <span className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">From</span>
                <span className="text-lg font-bold text-[var(--color-primary)]">
                  {formatPrice(tour.price)}
                </span>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-[var(--color-primary)] font-medium group-hover:underline flex items-center gap-1">
              View Details
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/tours/${tour.slug}`} className="block group h-full">
      <div className="flex flex-col bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl overflow-hidden transition-all duration-[var(--transition-fast)] hover:border-[var(--color-border-hover)] hover:shadow-lg h-full">
        {/* Image Area */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900">
          <Image
            src={imageUrl}
            alt={tour.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-4 left-4 bg-[var(--color-primary)]/90 text-black rounded-full text-xs uppercase px-3 py-1 font-semibold tracking-wide">
            {tour.categoryLabel}
          </div>
        </div>
        
        {/* Content Area */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-semibold text-lg text-white line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors">
            {tour.name}
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)] line-clamp-3 mt-2 flex-1">
            {tour.description}
          </p>
          
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[var(--color-border)]/50">
            <div className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span className="truncate">{tour.duration}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">From</span>
              <span className="text-xl font-bold text-[var(--color-primary)]">
                {formatPrice(tour.price)}
              </span>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-[var(--color-primary)] font-medium group-hover:underline flex items-center gap-1">
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

import Image from 'next/image';
import { type Tour } from '@/lib/data/tours';
import { getTourImage } from '@/lib/images';
import { formatPrice } from '@/lib/utils';

export function BookingSummary({ tour }: { tour: Tour }) {
  const imageUrl = getTourImage(tour.slug, tour.category);
  
  return (
    <div className="bg-[var(--color-bg-card)] rounded-2xl border border-[var(--color-border)] overflow-hidden sticky top-[100px]">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={tour.name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="font-playfair text-xl text-white mb-2">{tour.name}</h3>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm text-[var(--color-text-secondary)] gap-2">
            <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <span>{tour.categoryLabel}</span>
          </div>
          
          <div className="flex items-center text-sm text-[var(--color-text-secondary)] gap-2">
            <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{tour.duration}</span>
          </div>
          
          <div className="flex items-center text-sm text-[var(--color-text-secondary)] gap-2">
            <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{tour.destinationLabel || 'Dubai, UAE'}</span>
          </div>
        </div>

        <div className="border-t border-[var(--color-border)] pt-4 mb-4">
          <div className="flex justify-between items-center mb-2 text-sm">
            <span className="text-[var(--color-text-secondary)]">Price per person</span>
            <span className="text-white">{formatPrice(tour.price)}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-[var(--color-text-secondary)]">Child price (approx)</span>
            <span className="text-white">{formatPrice(tour.price * 0.5)}</span>
          </div>
        </div>
        
        <div className="bg-[var(--color-bg-secondary)] rounded-xl p-4 flex justify-between items-center border border-[var(--color-border)]">
          <div>
            <span className="block text-sm text-[var(--color-text-secondary)]">Total Estimate</span>
            <span className="text-xs text-[var(--color-text-secondary)]">Final price confirmed on chat</span>
          </div>
          <span className="text-xl font-semibold text-[var(--color-primary)]">
            {formatPrice(tour.price)}
          </span>
        </div>

        <div className="mt-6 text-center text-sm">
          <span className="text-[var(--color-text-secondary)]">Need help? </span>
          <a href="tel:+971551401665" className="text-[var(--color-primary)] hover:underline">
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
}

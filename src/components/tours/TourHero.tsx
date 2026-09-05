import Image from 'next/image';
import Link from 'next/link';
import { type Tour } from '@/lib/data/tours';
import { getTourImage } from '@/lib/images';
import { formatPrice } from '@/lib/utils';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

interface TourHeroProps {
  tour: Tour;
}

export function TourHero({ tour }: TourHeroProps) {
  const imageUrl = getTourImage(tour.slug, tour.category);
  
  return (
    <div className="relative w-full h-[60vh] min-h-[400px] flex flex-col justify-end">
      <Image
        src={imageUrl}
        alt={tour.name}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
      
      <div className="relative z-10 container mx-auto px-6 pb-12">
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tours', href: '/tours' },
            { label: tour.categoryLabel, href: `/tours?category=${encodeURIComponent(tour.category)}` },
            { label: tour.name }
          ]}
        />
        
        <div className="mt-4">
          <span className="inline-block bg-[var(--color-primary)] text-black px-3 py-1 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
            {tour.categoryLabel}
          </span>
          <div className="w-[80px] h-[1px] bg-[var(--color-primary)] mb-6"></div>
          
          <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
            {tour.name}
          </h1>
          
          <p className="text-lg text-white/80 max-w-2xl mb-6">
            {tour.description}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 mb-8 text-white/90">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{tour.duration}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span>From {formatPrice(tour.price)}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="capitalize">{tour.destinationLabel || 'Dubai, UAE'}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              href={`/booking/${tour.slug}`}
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-black px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Book Now
            </Link>
            <Link 
              href="/contact"
              className="border border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { destinations } from '@/lib/data/tours';
import { destinationImages } from '@/lib/images';

export default function DestinationsSection() {
  const displayDestinations = Object.entries(destinations).slice(0, 4);

  return (
    <section className="py-[var(--space-section)] w-full">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center md:text-left">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-5xl text-[var(--color-text-primary)]">
            Discover Your Destination
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayDestinations.map(([slug, destination]) => {
            const imageUrl = destinationImages[slug as keyof typeof destinationImages] || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80';
            
            return (
              <Link 
                key={slug} 
                href={`/destinations/${slug}`}
                className="group relative overflow-hidden rounded-2xl min-h-[240px] sm:min-h-0 aspect-[16/9] block"
              >
                <Image
                  src={imageUrl}
                  alt={destination.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                
                <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end">
                  <h3 className="font-[family-name:var(--font-playfair)] text-white text-xl sm:text-2xl md:text-3xl mb-2">
                    {destination.label}
                  </h3>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-white/80 text-lg">
                      {destination.tagline}
                    </p>
                    
                    <span className="text-[var(--color-primary)] font-medium inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                      Explore {destination.label} 
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

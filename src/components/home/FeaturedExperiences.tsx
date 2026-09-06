import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedTours } from '@/lib/data/tours';
import { formatPrice, cn } from '@/lib/utils';
import { getTourImage } from '@/lib/images';

export default function FeaturedExperiences() {
  const featuredTours = getFeaturedTours().slice(0, 5); // 1 large + 2 medium + 2 small = 5 or display all as specified

  return (
    <section className="py-[var(--space-section)] container mx-auto px-4 w-full">
      <div className="mb-12 text-center md:text-left">
        <span className="text-[var(--color-primary)] tracking-widest text-sm uppercase font-medium mb-3 block">
          CURATED FOR YOU
        </span>
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-5xl text-[var(--color-text-primary)]">
          Experiences Worth Remembering
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredTours.map((tour, index) => {
          // Layout: First tour as large feature card (col-span-2 on desktop, row-span-2)
          // Next 2 as medium/small
          const isLarge = index === 0;
          const imageUrl = getTourImage(tour.slug) || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80';

          return (
            <Link 
              key={tour.id} 
              href={`/tours/${tour.slug}`}
              className={cn(
                "group relative overflow-hidden rounded-2xl cursor-pointer block",
                isLarge ? "md:col-span-2 md:row-span-2 min-h-[400px] lg:min-h-[500px]" : "min-h-[300px]"
              )}
            >
              <Image
                src={imageUrl}
                alt={tour.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="mb-auto mt-2">
                  <span className="bg-[var(--color-primary)] text-black rounded-full px-3 py-1 text-xs uppercase font-bold tracking-wider inline-block">
                    {tour.categoryLabel}
                  </span>
                </div>
                
                <h3 className={cn("text-white font-semibold mb-2 line-clamp-2", isLarge ? "text-2xl md:text-3xl" : "text-xl")}>
                  {tour.name}
                </h3>
                
                <div className="flex items-center justify-between mt-2">
                  <div className="flex flex-col">
                    <span className="text-white/80 text-sm">
                      {tour.duration}
                    </span>
                    <span className="text-[var(--color-primary)] font-medium text-lg">
                      {formatPrice(tour.price)}
                    </span>
                  </div>
                  
                  <span className="text-white font-medium opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    View Experience →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

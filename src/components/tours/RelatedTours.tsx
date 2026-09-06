import { type Tour } from '@/lib/data/tours';
import { TourCard } from '@/components/tours/TourCard';

interface RelatedToursProps {
  tours: Tour[];
}

export function RelatedTours({ tours }: RelatedToursProps) {
  if (!tours || tours.length === 0) return null;

  return (
    <section className="mt-16 border-t border-[var(--color-border)] pt-16">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="font-playfair text-2xl sm:text-3xl text-white mb-2">You Might Also Like</h2>
          <p className="text-[var(--color-text-secondary)]">Similar experiences to add to your itinerary</p>
        </div>
      </div>
      
      <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6 pb-6 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 hide-scrollbar snap-x">
        {tours.map(tour => (
          <div key={tour.id} className="min-w-[280px] lg:min-w-0 snap-start">
            <TourCard tour={tour} viewMode="grid" />
          </div>
        ))}
      </div>
    </section>
  );
}

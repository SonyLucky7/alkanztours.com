import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { TourCard } from '@/components/tours/TourCard';
import { destinations, getToursByDestination, type Destination } from '@/lib/data/tours';
import { destinationImages } from '@/lib/images';
import Image from 'next/image';
import Link from 'next/link';

export function generateStaticParams() {
  return Object.keys(destinations).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const { slug } = params;
  if (!(slug in destinations)) {
    return { title: 'Destination Not Found' };
  }
  
  const destData = destinations[slug as Destination];
  return {
    title: `${destData.label} Tours & Experiences | Holidayys Tours`,
    description: `Explore the best tours and experiences in ${destData.label} with Holidayys Tours.`,
  };
}

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  if (!(slug in destinations)) {
    notFound();
  }

  const destData = destinations[slug as Destination];
  const destinationTours = getToursByDestination(slug as Destination);
  
  const imageSrc = destinationImages[slug as Destination] || `https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80`;

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="relative h-[400px] flex items-center justify-center border-b border-[var(--color-border)] mb-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src={imageSrc}
              alt={destData.label}
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] to-transparent"></div>
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-7xl text-white mb-4 font-[family-name:var(--font-playfair)]">
              {destData.label}
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              {destData.description}
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl text-white font-[family-name:var(--font-playfair)]">
              Experiences in {destData.label}
            </h2>
            <span className="text-[var(--color-text-secondary)]">
              {destinationTours.length} {destinationTours.length === 1 ? 'Tour' : 'Tours'}
            </span>
          </div>
          
          {destinationTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {destinationTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} viewMode="grid" />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-[var(--color-bg-secondary)] rounded-lg border border-[var(--color-border)]">
              <h3 className="text-xl text-white mb-2">No experiences found</h3>
              <p className="text-[var(--color-text-secondary)]">We are currently updating our offerings for {destData.label}.</p>
            </div>
          )}
          
          <div className="mt-16 text-center">
            <Link 
              href="/tours"
              className="inline-block bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-primary)] text-white font-medium py-3 px-8 rounded-md transition-colors"
            >
              View All Tours
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
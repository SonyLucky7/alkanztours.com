import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { destinations, type Destination } from '@/lib/data/tours';
import { destinationImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Destinations in UAE | Holidayys Tours',
  description: 'Explore the stunning destinations of the UAE with Holidayys Tours, including Dubai, Abu Dhabi, and more.',
};

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="relative h-[300px] flex items-center justify-center bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] mb-16">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 font-[family-name:var(--font-playfair)]">
              Explore Our Destinations
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Discover the unique beauty and culture of the United Arab Emirates.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(Object.entries(destinations) as [Destination, typeof destinations[Destination]][]).map(([slug, data]) => {
              const imageSrc = destinationImages[slug] || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80';

              return (
                <Link 
                  key={slug}
                  href={`/destinations/${slug}`}
                  className="group relative block overflow-hidden rounded-xl aspect-[4/3] bg-neutral-900 border border-[var(--color-border)]"
                >
                  <Image
                    src={imageSrc}
                    alt={data.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
                    <h2 className="text-3xl text-white font-[family-name:var(--font-playfair)] mb-1">
                      {data.label}
                    </h2>
                    <p className="text-sm text-[var(--color-primary)] font-medium mb-2">{data.tagline}</p>
                    <p className="text-gray-300 mb-4 transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {data.description}
                    </p>
                    <div className="inline-flex items-center text-[var(--color-primary)] font-medium">
                      Explore experiences 
                      <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
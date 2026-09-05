import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { tours, getTourBySlug, getRelatedTours } from '@/lib/data/tours';
import { TourHero } from '@/components/tours/TourHero';
import { TourContent } from '@/components/tours/TourContent';
import { BookingSidebar } from '@/components/tours/BookingSidebar';
import { RelatedTours } from '@/components/tours/RelatedTours';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getTourImage } from '@/lib/images';

export async function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  
  if (!tour) return { title: 'Tour Not Found' };

  return {
    title: `${tour.name} | Holidayys Tours`,
    description: tour.description,
    openGraph: {
      title: `${tour.name} | Holidayys Tours`,
      description: tour.description,
      images: [{ url: getTourImage(tour.category, tour.name) }],
    }
  };
}

export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  
  if (!tour) {
    notFound();
  }

  const relatedTours = getRelatedTours(tour, 4);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'Product'],
    name: tour.name,
    description: tour.description,
    image: getTourImage(tour.category, tour.name),
    offers: {
      '@type': 'Offer',
      price: tour.price,
      priceCurrency: 'AED',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Navbar />
      
      <main className="min-h-screen bg-[var(--color-bg)] pb-20">
        <TourHero tour={tour} />
        
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-[65%]">
              <TourContent tour={tour} />
            </div>
            
            <div className="w-full lg:w-[35%]">
              <BookingSidebar tour={tour} />
            </div>
          </div>

          <RelatedTours tours={relatedTours} />
        </div>
      </main>
      
      <Footer />
    </>
  );
}

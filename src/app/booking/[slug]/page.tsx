import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { tours, getTourBySlug } from '@/lib/data/tours';
import { BookingForm } from '@/components/booking/BookingForm';
import { BookingSummary } from '@/components/booking/BookingSummary';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export async function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  
  if (!tour) return { title: 'Not Found' };

  return {
    title: `Book ${tour.name} | Alkanz Tours`,
    description: `Complete your booking for ${tour.name}.`,
    robots: {
      index: false,
      follow: false,
    }
  };
}

export default async function BookingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  
  if (!tour) {
    notFound();
  }

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-[var(--color-bg)] pb-20 pt-[120px]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-playfair text-3xl md:text-5xl text-white font-bold mb-8 md:mb-12">
              Complete Your Booking
            </h1>
            
            <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12">
              <div className="w-full lg:w-[60%]">
                <BookingForm tour={tour} />
              </div>
              
              <div className="w-full lg:w-[40%]">
                <BookingSummary tour={tour} />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}

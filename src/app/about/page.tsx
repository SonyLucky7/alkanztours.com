import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Holidayys Tours',
  description: 'Learn about Holidayys Tours, helping travelers discover memorable experiences across the UAE.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="relative h-[300px] flex items-center justify-center bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] mb-16">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 font-[family-name:var(--font-playfair)]">
              About Holidayys Tours
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Helping travelers discover memorable experiences across the UAE.
            </p>
          </div>
        </section>
        
        <div className="container mx-auto px-4 max-w-4xl space-y-24">
          <section className="space-y-6">
            <h2 className="text-3xl text-[var(--color-brand-primary)] font-[family-name:var(--font-playfair)] mb-6 border-b border-[var(--color-border)] pb-2 inline-block">Our Story</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
              At Holidayys Tours, we believe that travel is about creating connections and unforgettable memories. We are dedicated to showcasing the incredible diversity of the United Arab Emirates, from the soaring skyline of Dubai to the cultural richness of Abu Dhabi and the natural beauty of the surrounding emirates.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
              Our team of local experts is passionate about delivering authentic experiences. Whether you are seeking a thrilling desert safari, a serene dhow cruise, or a comprehensive city tour, we ensure every journey is crafted with care and precision.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl text-[var(--color-brand-primary)] font-[family-name:var(--font-playfair)] mb-6 border-b border-[var(--color-border)] pb-2 inline-block">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[var(--color-bg-secondary)] p-6 rounded-lg border border-[var(--color-border)]">
                <h3 className="text-xl text-white mb-3 font-[family-name:var(--font-playfair)]">City Tours</h3>
                <p className="text-[var(--color-text-secondary)]">Explore the iconic landmarks and hidden gems of the UAE's most vibrant cities.</p>
              </div>
              <div className="bg-[var(--color-bg-secondary)] p-6 rounded-lg border border-[var(--color-border)]">
                <h3 className="text-xl text-white mb-3 font-[family-name:var(--font-playfair)]">Desert Safaris</h3>
                <p className="text-[var(--color-text-secondary)]">Experience the thrill of the dunes and the magic of Arabian nights in the desert.</p>
              </div>
              <div className="bg-[var(--color-bg-secondary)] p-6 rounded-lg border border-[var(--color-border)]">
                <h3 className="text-xl text-white mb-3 font-[family-name:var(--font-playfair)]">Cruises & Watersports</h3>
                <p className="text-[var(--color-text-secondary)]">Set sail on traditional dhows or enjoy modern aquatic adventures along the coastline.</p>
              </div>
              <div className="bg-[var(--color-bg-secondary)] p-6 rounded-lg border border-[var(--color-border)]">
                <h3 className="text-xl text-white mb-3 font-[family-name:var(--font-playfair)]">Theme Parks</h3>
                <p className="text-[var(--color-text-secondary)]">Access the world's most exciting entertainment destinations and family attractions.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl text-[var(--color-brand-primary)] font-[family-name:var(--font-playfair)] mb-6 border-b border-[var(--color-border)] pb-2 inline-block">Our Promise</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
              We are committed to providing premium, hassle-free travel experiences. From seamless booking processes to exceptional on-ground service, Holidayys Tours prioritizes your comfort, safety, and satisfaction. Every experience we offer is carefully vetted to meet our high standards of quality and excellence.
            </p>
          </section>
          
          <div className="text-center pt-12 pb-8">
            <h3 className="text-2xl text-white mb-6 font-[family-name:var(--font-playfair)]">Ready to explore?</h3>
            <Link 
              href="/destinations"
              className="inline-block bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-dark)] text-[var(--color-bg)] font-medium py-4 px-8 rounded-md transition-colors text-lg"
            >
              Browse our experiences
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
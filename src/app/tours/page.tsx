import { Suspense } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { TourCatalogue } from '@/components/tours/TourCatalogue';

export const metadata: Metadata = {
  title: 'Tours & Experiences | Alkanz Tours',
  description: 'Discover unforgettable experiences across Dubai and the UAE with Alkanz Tours.',
};

export default function ToursPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--color-bg)] text-white">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative pt-[100px] h-[300px] flex items-center justify-center overflow-hidden">
        {/* Background dark gradient/texture */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black z-0" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <nav className="flex items-center justify-center gap-2 text-sm text-[var(--color-text-secondary)] mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
            <span className="text-[var(--color-primary)]">Tours</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
            Tours & Experiences
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Discover unforgettable experiences across Dubai and the UAE.
          </p>
        </div>
      </div>

      <div className="flex-1 border-t border-[var(--color-border)]/50">
        <Suspense fallback={<div className="h-96 flex items-center justify-center text-[var(--color-primary)]">Loading experiences...</div>}>
          <TourCatalogue />
        </Suspense>
      </div>

      <Footer />
    </main>
  );
}

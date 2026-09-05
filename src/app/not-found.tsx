import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | Holidayys Tours',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center pt-24 pb-16 px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-8xl md:text-9xl font-[family-name:var(--font-playfair)] bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-brand-primary)] to-[#fcd971] mb-6">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl text-white font-[family-name:var(--font-playfair)] mb-4">
            This Journey Doesn't Exist
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg mb-10">
            The page you're looking for may have moved or no longer exists. 
            Let's get you back on track to exploring the UAE.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/tours"
              className="w-full sm:w-auto bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-dark)] text-[#080808] font-medium py-3 px-8 rounded-md transition-colors"
            >
              Explore Tours
            </Link>
            <Link 
              href="/"
              className="w-full sm:w-auto bg-transparent border border-[var(--color-border)] hover:border-white text-white font-medium py-3 px-8 rounded-md transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
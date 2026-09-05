import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Cookie Policy | Holidayys Tours',
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="relative h-[300px] flex items-center justify-center bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] mb-16">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 font-[family-name:var(--font-playfair)]">
              Cookie Policy
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)]">Last updated: [CONFIGURE]</p>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-3xl prose prose-invert prose-gold">
          <p className="text-[var(--color-text-secondary)]">
            This Cookie Policy explains how Holidayys Tours uses cookies and similar tracking technologies on our website.
          </p>
          
          <h2 className="text-2xl text-white font-[family-name:var(--font-playfair)] mt-8 mb-4">1. What Are Cookies</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Cookies are small text files that are stored on your device when you visit our website. They help us improve your experience and understand how our site is being used.
          </p>
          
          <h2 className="text-2xl text-white font-[family-name:var(--font-playfair)] mt-8 mb-4">2. How We Use Cookies</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">[CONFIGURE: Details on essential, performance, and marketing cookies.]</p>
          
          <h2 className="text-2xl text-white font-[family-name:var(--font-playfair)] mt-8 mb-4">3. Managing Cookies</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">[CONFIGURE: Instructions on how users can manage or disable cookies in their browsers.]</p>
          
          <h2 className="text-2xl text-white font-[family-name:var(--font-playfair)] mt-8 mb-4">4. Updates to This Policy</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            We may update this Cookie Policy from time to time. Please review it regularly.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Alkanz Tours',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="relative h-[300px] flex items-center justify-center bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] mb-16">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 font-[family-name:var(--font-playfair)]">
              Terms & Conditions
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)]">Last updated: [CONFIGURE]</p>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-3xl prose prose-invert prose-gold">
          <p className="text-[var(--color-text-secondary)]">
            Please read these Terms and Conditions carefully before using the Alkanz Tours website or booking our services.
          </p>
          
          <h2 className="text-2xl text-white font-[family-name:var(--font-playfair)] mt-8 mb-4">1. Booking & Payments</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">[CONFIGURE: Details about payment methods, booking confirmation, and pricing.]</p>
          
          <h2 className="text-2xl text-white font-[family-name:var(--font-playfair)] mt-8 mb-4">2. Cancellations & Refunds</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">[CONFIGURE: Cancellation policies, refund eligibility, and procedures.]</p>
          
          <h2 className="text-2xl text-white font-[family-name:var(--font-playfair)] mt-8 mb-4">3. Tour Operations</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">[CONFIGURE: Information on itinerary changes, weather conditions, and operational delays.]</p>
          
          <h2 className="text-2xl text-white font-[family-name:var(--font-playfair)] mt-8 mb-4">4. Liability</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">[CONFIGURE: Limitations of liability and user responsibilities during tours.]</p>
          
          <h2 className="text-2xl text-white font-[family-name:var(--font-playfair)] mt-8 mb-4">5. Contact Information</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            For questions regarding these Terms, please contact us at info@alkanztours.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
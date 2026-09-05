import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Holidayys Tours',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="relative h-[300px] flex items-center justify-center bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] mb-16">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 font-[family-name:var(--font-playfair)]">
              Privacy Policy
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)]">Last updated: [CONFIGURE]</p>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-3xl prose prose-invert prose-gold">
          <p className="text-[var(--color-text-secondary)]">
            This Privacy Policy describes how Holidayys Tours ("we," "us," or "our") collects, uses, and shares your personal information when you visit or make a booking on our website.
          </p>
          
          <h2 className="text-2xl text-white font-[family-name:var(--font-playfair)] mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">[CONFIGURE: Details about data collection, such as name, email, phone number, booking details.]</p>
          
          <h2 className="text-2xl text-white font-[family-name:var(--font-playfair)] mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">[CONFIGURE: Explanation of data usage, e.g., to process bookings, communicate with you, improve our services.]</p>
          
          <h2 className="text-2xl text-white font-[family-name:var(--font-playfair)] mt-8 mb-4">3. Sharing Your Information</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">[CONFIGURE: Details on third-party sharing, service providers, or legal requirements.]</p>
          
          <h2 className="text-2xl text-white font-[family-name:var(--font-playfair)] mt-8 mb-4">4. Your Rights</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">[CONFIGURE: Information about user rights regarding their data (access, deletion, etc.).]</p>
          
          <h2 className="text-2xl text-white font-[family-name:var(--font-playfair)] mt-8 mb-4">5. Contact Us</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            If you have questions about this Privacy Policy, please contact us at info@holidayys.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
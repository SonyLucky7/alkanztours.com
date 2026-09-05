import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { faqData, type FAQCategory } from '@/lib/data/faq';
import Link from 'next/link';
import { getWhatsAppLink } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Holidayys Tours',
  description: 'Find answers to commonly asked questions about booking tours, payments, travel in the UAE, and more.',
};

export default function FAQPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.flatMap(category => 
      category.items.map((q: { question: string; answer: string }) => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: q.answer
        }
      }))
    )
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="relative h-[300px] flex items-center justify-center bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] mb-16">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 font-[family-name:var(--font-playfair)]">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Find answers to commonly asked questions about our tours and services.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-4xl">
          <FAQAccordion categories={faqData} />
          
          <div className="mt-16 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg p-8 text-center">
            <h2 className="text-2xl text-white font-[family-name:var(--font-playfair)] mb-4">Still have questions?</h2>
            <p className="text-[var(--color-text-secondary)] mb-6 max-w-lg mx-auto">
              If you couldn't find the answer to your question, our support team is always ready to help you out.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact"
                className="bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-brand-primary)] text-white font-medium py-3 px-8 rounded-md transition-colors w-full sm:w-auto"
              >
                Contact Us
              </Link>
              <a 
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-dark)] text-[#080808] font-medium py-3 px-8 rounded-md transition-colors w-full sm:w-auto"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
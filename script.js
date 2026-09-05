const fs = require('fs');
const path = require('path');

const srcDir = path.join('d:', 'Antigravity projects', 'Holidayys.com', 'holidayys', 'src');

const files = {
  'app/about/page.tsx': `import type { Metadata } from 'next';
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
}`,

  'app/contact/page.tsx': `import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ContactForm';
import { BRAND, getTelLink, getMailtoLink, getWhatsAppLink } from '@/lib/utils';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | Holidayys Tours',
  description: 'Get in touch with Holidayys Tours for bookings, inquiries, and support.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="relative h-[300px] flex items-center justify-center bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] mb-16">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 font-[family-name:var(--font-playfair)]">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              We're here to help you plan your perfect UAE experience.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column: Form */}
            <div>
              <h2 className="text-2xl text-white font-[family-name:var(--font-playfair)] mb-6">Send us a message</h2>
              <ContactForm />
            </div>

            {/* Right Column: Info & Map */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl text-white font-[family-name:var(--font-playfair)] mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <a href={getTelLink()} className="bg-[var(--color-bg-secondary)] p-6 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-brand-primary)] transition-colors group block">
                    <div className="text-[var(--color-brand-primary)] mb-4">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-medium mb-1">Phone</h3>
                    <p className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors">{BRAND.phone}</p>
                  </a>

                  <a href={getMailtoLink()} className="bg-[var(--color-bg-secondary)] p-6 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-brand-primary)] transition-colors group block">
                    <div className="text-[var(--color-brand-primary)] mb-4">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-medium mb-1">Email</h3>
                    <p className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors">{BRAND.email}</p>
                  </a>

                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="bg-[var(--color-bg-secondary)] p-6 rounded-lg border border-[var(--color-border)] hover:border-[#25D366] transition-colors group block">
                    <div className="text-[#25D366] mb-4">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <h3 className="text-white font-medium mb-1">WhatsApp</h3>
                    <p className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors">Chat with us</p>
                  </a>

                  <div className="bg-[var(--color-bg-secondary)] p-6 rounded-lg border border-[var(--color-border)] group block">
                    <div className="text-[var(--color-brand-primary)] mb-4">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-medium mb-1">Operating Hours</h3>
                    <p className="text-[var(--color-text-secondary)]">Contact us anytime</p>
                  </div>
                </div>

                <div className="mt-6 bg-[var(--color-bg-secondary)] p-6 rounded-lg border border-[var(--color-border)]">
                  <div className="text-[var(--color-brand-primary)] mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-medium mb-1">Address</h3>
                  <p className="text-[var(--color-text-secondary)]">{BRAND.address}</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-[var(--color-bg-secondary)] rounded-lg border border-[var(--color-border)] h-[300px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[#080808]/50 z-10"></div>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d14434.773347102148!2d55.2647716960144!3d25.23880468087955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42e47c1f885f%3A0xc6c4f3f01c0c2dc4!2sAl%20Mina%20-%202nd%20December%20St%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae" 
                  className="absolute inset-0 w-full h-full border-0 grayscale opacity-40 z-0" 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="relative z-20 text-center px-4">
                  <div className="inline-block p-4 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] mb-4">
                    <svg className="w-8 h-8 text-[var(--color-brand-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <p className="text-white font-medium">Located in the heart of Dubai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}`,

  'components/ContactForm.tsx': `'use client';

import { useState } from 'react';
import { getMailtoLink, BRAND } from '@/lib/utils';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'General',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      
      const subject = \`\${formData.inquiryType} Inquiry from \${formData.name}\`;
      const body = \`Name: \${formData.name}\\nEmail: \${formData.email}\\nPhone: \${formData.phone}\\n\\nMessage:\\n\${formData.message}\`;
      
      const mailtoUrl = getMailtoLink(subject) + '&body=' + encodeURIComponent(body);
      window.location.href = mailtoUrl;
      
      setTimeout(() => {
        setSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiryType: 'General',
          message: '',
        });
      }, 5000);
    }, 800);
  };

  return (
    <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 rounded-lg border border-[var(--color-border)]">
      {success ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-[var(--color-brand-primary)]/20 text-[var(--color-brand-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-[family-name:var(--font-playfair)] text-white mb-2">Thank You</h3>
          <p className="text-[var(--color-text-secondary)]">Thank you for your inquiry. We will respond shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors"
                placeholder="+971 50 123 4567"
              />
            </div>
            <div>
              <label htmlFor="inquiryType" className="block text-sm font-medium text-white mb-2">Inquiry Type</label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors appearance-none"
              >
                <option value="General">General</option>
                <option value="Booking">Booking</option>
                <option value="Tours">Tours</option>
                <option value="Transfers">Transfers</option>
                <option value="Group Booking">Group Booking</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message *</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors resize-y"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-dark)] text-[#080808] font-medium py-3 px-6 rounded-md transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Inquiry'}
          </button>
        </form>
      )}
    </div>
  );
}`,

  'app/faq/page.tsx': `import type { Metadata } from 'next';
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
      category.questions.map(q => ({
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
}`,

  'components/FAQAccordion.tsx': `'use client';

import { useState } from 'react';
import { type FAQCategory } from '@/lib/data/faq';
import { cn } from '@/lib/utils';

interface FAQAccordionProps {
  categories: FAQCategory[];
}

export default function FAQAccordion({ categories }: FAQAccordionProps) {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]?.title || '');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const activeCategoryData = categories.find(c => c.title === activeCategory);

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.title}
            onClick={() => setActiveCategory(category.title)}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-colors border",
              activeCategory === category.title
                ? "bg-[var(--color-brand-primary)] text-[#080808] border-[var(--color-brand-primary)]"
                : "bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:text-white hover:border-[var(--color-text-secondary)]"
            )}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Accordion Items */}
      <div className="space-y-4">
        {activeCategoryData?.questions.map((q, idx) => {
          const id = \`\${activeCategory}-\${idx}\`;
          const isOpen = openItems[id];
          return (
            <div 
              key={id} 
              className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(id)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-white pr-8">{q.question}</span>
                <span className={cn(
                  "flex-shrink-0 text-[var(--color-brand-primary)] transition-transform duration-300",
                  isOpen ? "rotate-45" : ""
                )}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="p-6 pt-0 text-[var(--color-text-secondary)] leading-relaxed border-t border-[var(--color-border)] mt-2">
                  {q.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}`,

  'app/destinations/page.tsx': `import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { destinations } from '@/lib/data/tours';
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
            {destinations.map((destination) => {
              const imageInfo = destinationImages[destination as keyof typeof destinationImages];
              const imageSrc = imageInfo?.url || \`https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80\`;
              
              const names = {
                'dubai': 'Dubai',
                'abu-dhabi': 'Abu Dhabi',
                'fujairah': 'Fujairah',
                'musandam': 'Musandam'
              };
              
              const descriptions = {
                'dubai': 'A city of skyscrapers, luxury shopping, and ultra-modern architecture.',
                'abu-dhabi': 'The majestic capital offering cultural landmarks and thrilling theme parks.',
                'fujairah': 'Known for its beaches and the Hajar Mountains, perfect for nature lovers.',
                'musandam': 'The Norway of Arabia, famous for its dramatic fjords and dolphin watching.'
              };

              return (
                <Link 
                  key={destination}
                  href={\`/destinations/\${destination}\`}
                  className="group relative block overflow-hidden rounded-xl aspect-[4/3] bg-neutral-900 border border-[var(--color-border)]"
                >
                  <Image
                    src={imageSrc}
                    alt={names[destination as keyof typeof names]}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
                    <h2 className="text-3xl text-white font-[family-name:var(--font-playfair)] mb-2">
                      {names[destination as keyof typeof names]}
                    </h2>
                    <p className="text-gray-300 mb-4 transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {descriptions[destination as keyof typeof descriptions]}
                    </p>
                    <div className="inline-flex items-center text-[var(--color-brand-primary)] font-medium">
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
}`,

  'app/destinations/[slug]/page.tsx': `import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TourCard from '@/components/tours/TourCard';
import { destinations, getToursByDestination } from '@/lib/data/tours';
import { destinationImages } from '@/lib/images';
import Image from 'next/image';
import Link from 'next/link';

export function generateStaticParams() {
  return destinations.map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const { slug } = params;
  if (!destinations.includes(slug as any)) {
    return { title: 'Destination Not Found' };
  }
  
  const formattedName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return {
    title: \`\${formattedName} Tours & Experiences | Holidayys Tours\`,
    description: \`Explore the best tours and experiences in \${formattedName} with Holidayys Tours.\`,
  };
}

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  if (!destinations.includes(slug as any)) {
    notFound();
  }

  const formattedName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const destinationTours = getToursByDestination(slug as any);
  
  const imageInfo = destinationImages[slug as keyof typeof destinationImages];
  const imageSrc = imageInfo?.url || \`https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80\`;
  
  const introTexts = {
    'dubai': 'Experience the perfect blend of traditional culture and futuristic innovation in Dubai. From soaring skyscrapers to vast desert landscapes, Dubai offers unforgettable adventures for every traveler.',
    'abu-dhabi': 'Discover the rich heritage and modern marvels of the UAE capital. Abu Dhabi combines magnificent cultural landmarks with world-class entertainment and theme parks.',
    'fujairah': 'Escape to the tranquil eastern coast of the UAE. Fujairah is celebrated for its pristine beaches, vibrant marine life, and the rugged beauty of the Hajar Mountains.',
    'musandam': 'Embark on a journey to the "Norway of Arabia." Musandam offers breathtaking fjords, crystal-clear waters perfect for dhow cruises, and playful dolphins.'
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="relative h-[400px] flex items-center justify-center border-b border-[var(--color-border)] mb-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src={imageSrc}
              alt={formattedName}
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] to-transparent"></div>
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-7xl text-white mb-4 font-[family-name:var(--font-playfair)]">
              {formattedName}
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              {introTexts[slug as keyof typeof introTexts]}
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl text-white font-[family-name:var(--font-playfair)]">
              Experiences in {formattedName}
            </h2>
            <span className="text-[var(--color-text-secondary)]">
              {destinationTours.length} {destinationTours.length === 1 ? 'Tour' : 'Tours'}
            </span>
          </div>
          
          {destinationTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {destinationTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-[var(--color-bg-secondary)] rounded-lg border border-[var(--color-border)]">
              <h3 className="text-xl text-white mb-2">No experiences found</h3>
              <p className="text-[var(--color-text-secondary)]">We are currently updating our offerings for {formattedName}.</p>
            </div>
          )}
          
          <div className="mt-16 text-center">
            <Link 
              href="/tours"
              className="inline-block bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-brand-primary)] text-white font-medium py-3 px-8 rounded-md transition-colors"
            >
              View All Tours
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}`,

  'app/not-found.tsx': `import Link from 'next/link';
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
}`,

  'app/privacy/page.tsx': `import type { Metadata } from 'next';
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
}`,

  'app/terms/page.tsx': `import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Holidayys Tours',
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
            Please read these Terms and Conditions carefully before using the Holidayys Tours website or booking our services.
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
            For questions regarding these Terms, please contact us at info@holidayys.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}`,

  'app/cookies/page.tsx': `import type { Metadata } from 'next';
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
}`
};

for (const [relPath, content] of Object.entries(files)) {
  const fullPath = path.join(srcDir, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
}
console.log('Done');

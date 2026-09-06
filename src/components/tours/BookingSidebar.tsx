'use client';

import { useState } from 'react';
import { type Tour } from '@/lib/data/tours';
import { useCart } from '@/lib/context/CartContext';
import { useCurrency } from '@/lib/context/CurrencyContext';
import { useRouter } from 'next/navigation';
import { getWhatsAppLink } from '@/lib/utils';

export function BookingSidebar({ tour }: { tour: Tour }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const { formatPrice, convertPrice } = useCurrency();
  
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [date, setDate] = useState('');

  const totalAED = (adults * tour.price) + (children * tour.price * 0.5);

  const handleBookNow = () => {
    addToCart({
      tour,
      date: date || new Date().toISOString().split('T')[0],
      adults,
      children,
      pricePerAdult: tour.price,
      pricePerChild: tour.price * 0.5,
    });
    router.push('/checkout');
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block sticky top-[100px] bg-[var(--color-bg-card)] rounded-2xl border border-[var(--color-border)] p-6">
        <h3 className="font-playfair text-xl text-white mb-2">{tour.name}</h3>
        <div className="text-3xl text-[var(--color-primary)] font-semibold mb-1">
          {formatPrice(tour.price)}
        </div>
        <p className="text-[var(--color-text-secondary)] text-sm mb-6">per person</p>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm text-[var(--color-text-secondary)] mb-1">Date</label>
            <input 
              type="date" 
              min={new Date().toISOString().split('T')[0]}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={{ colorScheme: 'dark' }}
              className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)]"
            />
          </div>

          <div className="flex justify-between items-center bg-[var(--color-bg-secondary)] rounded-xl p-3 border border-[var(--color-border)]">
            <span className="text-white">Adults</span>
            <div className="flex items-center gap-3">
              <button onClick={() => setAdults(Math.max(1, adults - 1))} className="w-8 h-8 flex items-center justify-center bg-[var(--color-bg)] rounded-full text-white hover:text-[var(--color-primary)]">-</button>
              <span className="text-white w-4 text-center">{adults}</span>
              <button onClick={() => setAdults(adults + 1)} className="w-8 h-8 flex items-center justify-center bg-[var(--color-bg)] rounded-full text-white hover:text-[var(--color-primary)]">+</button>
            </div>
          </div>

          <div className="flex justify-between items-center bg-[var(--color-bg-secondary)] rounded-xl p-3 border border-[var(--color-border)]">
            <span className="text-white">Children</span>
            <div className="flex items-center gap-3">
              <button onClick={() => setChildren(Math.max(0, children - 1))} className="w-8 h-8 flex items-center justify-center bg-[var(--color-bg)] rounded-full text-white hover:text-[var(--color-primary)]">-</button>
              <span className="text-white w-4 text-center">{children}</span>
              <button onClick={() => setChildren(children + 1)} className="w-8 h-8 flex items-center justify-center bg-[var(--color-bg)] rounded-full text-white hover:text-[var(--color-primary)]">+</button>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6 pt-4 border-t border-[var(--color-border)]">
          <span className="text-white font-semibold">Total</span>
          <span className="text-xl text-[var(--color-primary)] font-semibold">{formatPrice(totalAED)}</span>
        </div>

        <button 
          onClick={handleBookNow}
          className="btn-gold w-full mb-3"
        >
          Book Now
        </button>

        <a 
          href={getWhatsAppLink({ tourName: tour.name })}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold-outline w-full"
        >
          Chat on WhatsApp
        </a>

        <div className="flex justify-center gap-4 mt-6 text-[var(--color-text-secondary)]">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-label="Secure Payment"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-label="Instant Confirmation"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-label="24/7 Support"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        </div>
      </div>

      {/* Mobile Fixed Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] px-4 sm:px-6 z-40 border-t border-[var(--color-border)]">
        <div className="flex justify-between items-center max-w-md mx-auto">
          <div>
            <div className="text-[var(--color-text-secondary)] text-xs">Price from</div>
            <div className="text-lg text-[var(--color-primary)] font-semibold">{formatPrice(tour.price)}</div>
          </div>
          <button 
            onClick={handleBookNow}
            className="btn-gold btn-gold-sm"
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}

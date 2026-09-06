import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CurrencySwitcher } from './CurrencySwitcher';

export default function CheckoutLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen text-white font-[family-name:var(--font-inter)] relative">
      {/* Fixed Video Background */}
      <div className="fixed inset-0 z-[-2]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=50"
          className="w-full h-full object-cover"
        >
          <source src="/videos/checkout.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Dark Overlay for readability */}
      <div className="fixed inset-0 bg-[#080808]/80 z-[-1]"></div>

      <header className="border-b border-[var(--color-border)]/50 bg-[#080808]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8 h-[80px] flex items-center justify-between">
          <Link href="/" className="relative block w-32 h-8 md:w-40 md:h-10 overflow-hidden">
            <Image 
              src="/logo.png" 
              alt="Holidayys" 
              fill
              className="object-cover object-center"
            />
          </Link>

          <div className="flex items-center gap-4">
            <CurrencySwitcher />
            <Link 
              href="/"
              className="w-10 h-10 flex items-center justify-center bg-[var(--color-bg)] rounded-md hover:text-[var(--color-primary)] transition-colors text-white/70 border border-[var(--color-border)]"
              aria-label="Close Checkout"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </Link>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}

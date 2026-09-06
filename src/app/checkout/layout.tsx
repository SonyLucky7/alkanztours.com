import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CurrencySwitcher } from './CurrencySwitcher';

export default function CheckoutLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen text-white font-[family-name:var(--font-inter)] relative overflow-hidden">
      {/* Fixed Video Background */}
      <div className="fixed inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/videos/checkout.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Dark Overlay for readability */}
      <div className="fixed inset-0 bg-[#080808]/80 z-[1]"></div>

      <header className="border-b border-[var(--color-border)]/50 bg-[#080808]/80 backdrop-blur-md sticky top-0 z-50 relative">
        <div className="container mx-auto px-4 lg:px-8 h-[80px] flex items-center justify-between">
          <Link href="/" className="relative block w-[280px] h-[110px] md:w-[380px] md:h-[150px] overflow-hidden">
            <Image 
              src="/logo-alkanz.png" 
              alt="Alkanz Tours" 
              fill
              className="object-contain object-left"
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
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

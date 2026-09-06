'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 h-[var(--nav-height,80px)] ${
          isScrolled
            ? 'bg-[var(--color-bg,#080808)]/90 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 h-full flex items-center justify-between relative">
          <Link
            href="/"
            className="relative block w-[140px] h-[55px] md:w-[200px] md:h-[80px] lg:w-[280px] lg:h-[110px] overflow-hidden"
          >
            <Image 
              src="/logo-alkanz.png" 
              alt="Alkanz Tours" 
              fill
              className="object-contain object-left"
              priority 
            />
          </Link>

          {/* Desktop Nav - Absolutely Centered */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/tours" className="text-white/70 hover:text-white transition-colors">Tours</Link>
            <Link href="/destinations" className="text-white/70 hover:text-white transition-colors">Destinations</Link>
            <Link href="/about" className="text-white/70 hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/tours"
              className="btn-gold btn-gold-sm"
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-white p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Open menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

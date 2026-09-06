'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Drawer */}
      <div 
        className="relative w-full max-w-sm h-full bg-[#080808] flex flex-col p-6 overflow-y-auto animate-in slide-in-from-right duration-300"
      >
        <div className="flex items-center justify-between mb-12">
          <Link 
            href="/" 
            onClick={onClose}
            className="relative block w-[160px] h-[65px] overflow-hidden cursor-pointer"
          >
            <Image 
              src="/logo-alkanz.png" 
              alt="Alkanz Tours" 
              fill 
              className="object-contain object-left" 
            />
          </Link>
          <button 
            onClick={onClose}
            className="text-white/70 hover:text-white p-2"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <nav className="flex flex-col gap-6 mb-12 flex-1">
          <Link href="/tours" onClick={onClose} className="text-2xl font-medium text-white hover:text-[var(--color-primary,#cd9e38)] transition-colors animate-in slide-in-from-right-4 fade-in duration-500 delay-75">Tours</Link>
          <Link href="/destinations" onClick={onClose} className="text-2xl font-medium text-white hover:text-[var(--color-primary,#cd9e38)] transition-colors animate-in slide-in-from-right-4 fade-in duration-500 delay-100">Destinations</Link>
          <Link href="/about" onClick={onClose} className="text-2xl font-medium text-white hover:text-[var(--color-primary,#cd9e38)] transition-colors animate-in slide-in-from-right-4 fade-in duration-500 delay-200">About</Link>
          <Link href="/contact" onClick={onClose} className="text-2xl font-medium text-white hover:text-[var(--color-primary,#cd9e38)] transition-colors animate-in slide-in-from-right-4 fade-in duration-500 delay-300">Contact</Link>
        </nav>

        <div className="flex flex-col gap-4 animate-in slide-in-from-bottom-4 fade-in duration-500 delay-300">
          <a href="tel:+971551401665" className="flex items-center gap-3 text-white/80 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            +971 06 5393325
          </a>
          <a href="mailto:info@alkanztours.com" className="flex items-center gap-3 text-white/80 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            info@alkanztours.com
          </a>
          <a href="https://wa.me/971551401665" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-[#25D366]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

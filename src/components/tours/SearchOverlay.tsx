'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Tour, searchTours, getAllCategories } from '@/lib/data/tours';
import { TourCard } from './TourCard';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Tour[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const categories = getAllCategories();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
      setResults([]);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (query.trim().length > 1) {
      const found = searchTours(query);
      setResults(found.slice(0, 6)); // limit to 6 results for overlay
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/tours?search=${encodeURIComponent(query)}`);
      onClose();
    }
  };

  const handleCategoryClick = (category: string) => {
    router.push(`/tours?category=${encodeURIComponent(category)}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col h-full">
        <div className="flex justify-end mb-4">
          <button 
            onClick={onClose}
            className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-white transition-colors"
          >
            <span className="text-sm">Press ESC to close</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSearch} className="relative mb-12">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="absolute left-0 top-1/2 -translate-y-1/2 text-[var(--color-primary)]"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for tours, destinations, or experiences..."
            className="w-full bg-transparent text-3xl md:text-5xl text-white placeholder-[var(--color-text-secondary)] border-b-2 border-[var(--color-border)] focus:border-[var(--color-primary)] outline-none pl-12 pb-4 transition-colors font-serif"
          />
        </form>

        <div className="flex-1 overflow-y-auto pb-8">
          {query.trim().length > 1 ? (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-white">Search Results</h3>
                {results.length > 0 && (
                  <button 
                    onClick={handleSearch}
                    className="text-sm text-[var(--color-primary)] hover:underline"
                  >
                    View all results
                  </button>
                )}
              </div>
              
              {results.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.map(tour => (
                    <div key={tour.id} onClick={onClose}>
                      <TourCard tour={tour} viewMode="grid" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-xl text-[var(--color-text-secondary)]">No experiences found matching "{query}"</p>
                  <p className="mt-2 text-[var(--color-text-secondary)]/70">Try adjusting your search terms or browse our categories.</p>
                </div>
              )}
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-medium text-white mb-6">Popular Categories</h3>
              <div className="flex flex-wrap gap-3">
                {categories.slice(0, 8).map(cat => (
                  <button
                    key={cat.value}
                    onClick={() => handleCategoryClick(cat.value)}
                    className="px-5 py-2.5 rounded-full border border-[var(--color-border)] text-white hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-colors capitalize"
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

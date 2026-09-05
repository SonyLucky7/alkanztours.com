'use client';

import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Category, Destination } from '@/lib/data/tours';
import { FilterState } from './FilterSidebar';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  categories: Array<{ value: Category; label: string; count: number }>;
  destinations: Array<{ value: Destination; label: string }>;
  onClear: () => void;
}

const priceRanges = [
  { id: 'under-100', label: 'Under AED 100' },
  { id: '100-300', label: 'AED 100 - 300' },
  { id: '300-500', label: 'AED 300 - 500' },
  { id: '500-1000', label: 'AED 500 - 1000' },
  { id: 'over-1000', label: 'Over AED 1000' },
];

const durationRanges = [
  { id: 'under-1', label: 'Under 1 hour' },
  { id: '1-3', label: '1 to 3 hours' },
  { id: '3-6', label: '3 to 6 hours' },
  { id: '6-plus', label: '6+ hours' },
  { id: 'full-day', label: 'Full day' },
];

export function FilterDrawer({ isOpen, onClose, filters, setFilters, categories, destinations, onClear }: FilterDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCategoryChange = (cat: Category) => {
    setFilters(prev => {
      const current = prev.selectedCategory;
      if (current.includes(cat)) {
        return { ...prev, selectedCategory: current.filter(c => c !== cat) };
      } else {
        return { ...prev, selectedCategory: [...current, cat] };
      }
    });
  };

  const handleDestinationChange = (dest: Destination) => {
    setFilters(prev => {
      const current = prev.selectedDestination;
      if (current.includes(dest)) {
        return { ...prev, selectedDestination: current.filter(d => d !== dest) };
      } else {
        return { ...prev, selectedDestination: [...current, dest] };
      }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end lg:hidden">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-h-[85vh] bg-[var(--color-bg)] rounded-t-2xl flex flex-col shadow-2xl animate-in slide-in-from-bottom-full duration-300">
        <div className="flex items-center justify-between p-5 border-b border-[var(--color-border)]">
          <h2 className="text-xl font-semibold text-white font-serif">Filters</h2>
          <button 
            onClick={onClose}
            className="p-2 -mr-2 text-[var(--color-text-secondary)] hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-8">
          {/* Destination */}
          <div>
            <h3 className="font-medium text-white mb-4">Destination</h3>
            <div className="space-y-4">
              {destinations.map(dest => {
                const isChecked = filters.selectedDestination.includes(dest.value);
                return (
                  <label key={dest.value} className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only" 
                      checked={isChecked} 
                      onChange={() => handleDestinationChange(dest.value)} 
                    />
                    <div className={cn(
                      "w-6 h-6 rounded border flex items-center justify-center transition-colors",
                      isChecked 
                        ? "bg-[var(--color-primary)] border-[var(--color-primary)]" 
                        : "border-[var(--color-border)] bg-transparent"
                    )}>
                      {isChecked && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      )}
                    </div>
                    <span className={cn("text-base transition-colors", isChecked ? "text-white" : "text-[var(--color-text-secondary)]")}>
                      {dest.label}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Category */}
          <div>
            <h3 className="font-medium text-white mb-4">Category</h3>
            <div className="space-y-4">
              {categories.map(cat => {
                const isChecked = filters.selectedCategory.includes(cat.value);
                return (
                  <label key={cat.value} className="flex flex-1 items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        className="sr-only" 
                        checked={isChecked} 
                        onChange={() => handleCategoryChange(cat.value)} 
                    />
                      <div className={cn(
                        "w-6 h-6 rounded border flex items-center justify-center transition-colors",
                        isChecked 
                          ? "bg-[var(--color-primary)] border-[var(--color-primary)]" 
                          : "border-[var(--color-border)] bg-transparent"
                      )}>
                        {isChecked && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        )}
                      </div>
                      <span className={cn("text-base transition-colors", isChecked ? "text-white" : "text-[var(--color-text-secondary)]")}>
                        {cat.label}
                      </span>
                    </div>
                    <span className="text-sm text-[var(--color-text-secondary)] bg-[var(--color-bg)] px-2.5 py-1 rounded-full">
                      {cat.count}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Price */}
          <div>
            <h3 className="font-medium text-white mb-4">Price Range</h3>
            <div className="space-y-4">
              {priceRanges.map(range => {
                const isChecked = filters.priceRange === range.id;
                return (
                  <label key={range.id} className="flex items-center gap-3 cursor-pointer">
                    <div className={cn(
                      "w-6 h-6 rounded-full border flex items-center justify-center transition-colors",
                      isChecked 
                        ? "border-[var(--color-primary)]" 
                        : "border-[var(--color-border)] bg-transparent"
                    )}>
                      {isChecked && (
                        <div className="w-3 h-3 rounded-full bg-[var(--color-primary)]" />
                      )}
                    </div>
                    <span className={cn("text-base transition-colors", isChecked ? "text-white" : "text-[var(--color-text-secondary)]")}>
                      {range.label}
                    </span>
                    <input 
                      type="radio" 
                      name="mobilePriceRange" 
                      className="sr-only" 
                      checked={isChecked}
                      onChange={() => setFilters(prev => ({ ...prev, priceRange: isChecked ? null : range.id }))}
                      onClick={(e) => {
                        if (isChecked) {
                          e.preventDefault();
                          setFilters(prev => ({ ...prev, priceRange: null }));
                        }
                      }}
                    />
                  </label>
                );
              })}
            </div>
          </div>

          {/* Duration */}
          <div>
            <h3 className="font-medium text-white mb-4">Duration</h3>
            <div className="space-y-4">
              {durationRanges.map(range => {
                const isChecked = filters.durationRange === range.id;
                return (
                  <label key={range.id} className="flex items-center gap-3 cursor-pointer">
                    <div className={cn(
                      "w-6 h-6 rounded-full border flex items-center justify-center transition-colors",
                      isChecked 
                        ? "border-[var(--color-primary)]" 
                        : "border-[var(--color-border)] bg-transparent"
                    )}>
                      {isChecked && (
                        <div className="w-3 h-3 rounded-full bg-[var(--color-primary)]" />
                      )}
                    </div>
                    <span className={cn("text-base transition-colors", isChecked ? "text-white" : "text-[var(--color-text-secondary)]")}>
                      {range.label}
                    </span>
                    <input 
                      type="radio" 
                      name="mobileDurationRange" 
                      className="sr-only" 
                      checked={isChecked}
                      onChange={() => setFilters(prev => ({ ...prev, durationRange: isChecked ? null : range.id }))}
                      onClick={(e) => {
                        if (isChecked) {
                          e.preventDefault();
                          setFilters(prev => ({ ...prev, durationRange: null }));
                        }
                      }}
                    />
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        <div className="p-5 border-t border-[var(--color-border)] bg-[var(--color-bg)] flex gap-4">
          <button 
            onClick={onClear}
            className="flex-1 py-3 text-white font-medium border border-[var(--color-border)] rounded-xl hover:bg-[var(--color-bg-card)] transition-colors"
          >
            Clear All
          </button>
          <button 
            onClick={onClose}
            className="flex-[2] py-3 bg-[var(--color-primary)] text-black font-semibold rounded-xl hover:bg-[var(--color-primary)]/90 transition-colors"
          >
            Show Results
          </button>
        </div>
      </div>
    </div>
  );
}

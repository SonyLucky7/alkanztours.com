import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Category, Destination } from '@/lib/data/tours';

export interface FilterState {
  searchQuery: string;
  selectedCategory: Category[];
  selectedDestination: Destination[];
  priceRange: string | null;
  durationRange: string | null;
  sortBy: string;
}

interface FilterSidebarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  categories: Array<{ value: Category; label: string; count: number }>;
  destinations: Array<{ value: Destination; label: string }>;
  onClear: () => void;
  className?: string;
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

export function FilterSidebar({ filters, setFilters, categories, destinations, onClear, className }: FilterSidebarProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    category: true,
    destination: true,
    price: true,
    duration: true,
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

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

  const FilterSection = ({ title, id, children }: { title: string, id: string, children: React.ReactNode }) => {
    const isOpen = openSections[id];
    return (
      <div className="py-5 border-b border-[var(--color-border)] last:border-0">
        <button 
          onClick={() => toggleSection(id)}
          className="flex items-center justify-between w-full text-left font-medium text-white hover:text-[var(--color-primary)] transition-colors"
        >
          {title}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className={cn("transition-transform duration-200", isOpen ? "rotate-180" : "")}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div 
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-[500px] opacity-100 mt-4 overflow-y-auto" : "max-h-0 opacity-0 mt-0"
          )}
        >
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className={cn("w-full max-w-[280px] shrink-0 sticky top-[100px]", className)}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white font-serif">Filters</h2>
        <button 
          onClick={onClear}
          className="text-sm font-medium text-[var(--color-primary)] hover:underline"
        >
          Clear All
        </button>
      </div>

      <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-5">
        <FilterSection title="Destination" id="destination">
          <div className="space-y-3">
            {destinations.map(dest => {
              const isChecked = filters.selectedDestination.includes(dest.value);
              return (
                <label key={dest.value} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    className="sr-only" 
                    checked={isChecked} 
                    onChange={() => handleDestinationChange(dest.value)} 
                  />
                  <div className={cn(
                    "w-5 h-5 rounded border flex items-center justify-center transition-colors",
                    isChecked 
                      ? "bg-[var(--color-primary)] border-[var(--color-primary)]" 
                      : "border-[var(--color-border)] bg-transparent group-hover:border-[var(--color-primary)]"
                  )}>
                    {isChecked && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    )}
                  </div>
                  <span className={cn("text-sm transition-colors", isChecked ? "text-white" : "text-[var(--color-text-secondary)] group-hover:text-white")}>
                    {dest.label}
                  </span>
                </label>
              );
            })}
          </div>
        </FilterSection>

        <FilterSection title="Category" id="category">
          <div className="space-y-3">
            {categories.map(cat => {
              const isChecked = filters.selectedCategory.includes(cat.value);
              return (
                <label key={cat.value} className="flex flex-1 items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      className="sr-only" 
                      checked={isChecked} 
                      onChange={() => handleCategoryChange(cat.value)} 
                    />
                    <div className={cn(
                      "w-5 h-5 rounded border flex items-center justify-center transition-colors shrink-0",
                      isChecked 
                        ? "bg-[var(--color-primary)] border-[var(--color-primary)]" 
                        : "border-[var(--color-border)] bg-transparent group-hover:border-[var(--color-primary)]"
                    )}>
                      {isChecked && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      )}
                    </div>
                    <span className={cn("text-sm transition-colors", isChecked ? "text-white" : "text-[var(--color-text-secondary)] group-hover:text-white")}>
                      {cat.label}
                    </span>
                  </div>
                  <span className="text-xs text-[var(--color-text-secondary)] bg-[var(--color-bg)] px-2 py-0.5 rounded-full">
                    {cat.count}
                  </span>
                </label>
              );
            })}
          </div>
        </FilterSection>

        <FilterSection title="Price Range" id="price">
          <div className="space-y-3">
            {priceRanges.map(range => {
              const isChecked = filters.priceRange === range.id;
              return (
                <label key={range.id} className="flex items-center gap-3 cursor-pointer group">
                  <div className={cn(
                    "w-5 h-5 rounded-full border flex items-center justify-center transition-colors",
                    isChecked 
                      ? "border-[var(--color-primary)]" 
                      : "border-[var(--color-border)] bg-transparent group-hover:border-[var(--color-primary)]"
                  )}>
                    {isChecked && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]" />
                    )}
                  </div>
                  <span className={cn("text-sm transition-colors", isChecked ? "text-white" : "text-[var(--color-text-secondary)] group-hover:text-white")}>
                    {range.label}
                  </span>
                  <input 
                    type="radio" 
                    name="priceRange" 
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
        </FilterSection>

        <FilterSection title="Duration" id="duration">
          <div className="space-y-3">
            {durationRanges.map(range => {
              const isChecked = filters.durationRange === range.id;
              return (
                <label key={range.id} className="flex items-center gap-3 cursor-pointer group">
                  <div className={cn(
                    "w-5 h-5 rounded-full border flex items-center justify-center transition-colors",
                    isChecked 
                      ? "border-[var(--color-primary)]" 
                      : "border-[var(--color-border)] bg-transparent group-hover:border-[var(--color-primary)]"
                  )}>
                    {isChecked && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]" />
                    )}
                  </div>
                  <span className={cn("text-sm transition-colors", isChecked ? "text-white" : "text-[var(--color-text-secondary)] group-hover:text-white")}>
                    {range.label}
                  </span>
                  <input 
                    type="radio" 
                    name="durationRange" 
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
        </FilterSection>
      </div>
    </div>
  );
}

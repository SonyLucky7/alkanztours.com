'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { tours, getAllCategories, getAllDestinations, Category, Destination } from '@/lib/data/tours';
import { TourCard } from './TourCard';
import { FilterSidebar, FilterState } from './FilterSidebar';
import { FilterDrawer } from './FilterDrawer';

export function TourCatalogue() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const categories = useMemo(() => getAllCategories(), []);
  const destinations = useMemo(() => getAllDestinations(), []);

  // Initial state from URL
  const initialCategory = searchParams.get('category') as Category;
  const initialDestination = searchParams.get('destination') as Destination;
  const initialSearch = searchParams.get('search') || '';

  const [filters, setFilters] = useState<FilterState>({
    searchQuery: initialSearch,
    selectedCategory: initialCategory && categories.some(c => c.value === initialCategory) ? [initialCategory] : [],
    selectedDestination: initialDestination && destinations.some(d => d.value === initialDestination) ? [initialDestination] : [],
    priceRange: null,
    durationRange: null,
    sortBy: 'recommended',
  });

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Update state when URL changes (for deep links / search overlay)
  useEffect(() => {
    const search = searchParams.get('search');
    const cat = searchParams.get('category') as Category;
    const dest = searchParams.get('destination') as Destination;

    setFilters(prev => ({
      ...prev,
      searchQuery: search || '',
      selectedCategory: cat && categories.some(c => c.value === cat) ? [cat] : [],
      selectedDestination: dest && destinations.some(d => d.value === dest) ? [dest] : [],
    }));
  }, [searchParams, categories, destinations]);

  const handleClearFilters = () => {
    setFilters({
      searchQuery: '',
      selectedCategory: [],
      selectedDestination: [],
      priceRange: null,
      durationRange: null,
      sortBy: 'recommended',
    });
    router.replace('/tours', { scroll: false });
  };

  const filteredAndSortedTours = useMemo(() => {
    let result = [...tours];

    // Search query
    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      result = result.filter(t => 
        t.name.toLowerCase().includes(q) || 
        t.description.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.destination.toLowerCase().includes(q) ||
        t.tags.some(tag => tag.toLowerCase().includes(q))
      );
    }

    // Categories
    if (filters.selectedCategory.length > 0) {
      result = result.filter(t => filters.selectedCategory.includes(t.category));
    }

    // Destinations
    if (filters.selectedDestination.length > 0) {
      result = result.filter(t => filters.selectedDestination.includes(t.destination));
    }

    // Price range
    if (filters.priceRange) {
      result = result.filter(t => {
        switch (filters.priceRange) {
          case 'under-100': return t.price < 100;
          case '100-300': return t.price >= 100 && t.price <= 300;
          case '300-500': return t.price >= 300 && t.price <= 500;
          case '500-1000': return t.price >= 500 && t.price <= 1000;
          case 'over-1000': return t.price > 1000;
          default: return true;
        }
      });
    }

    // Duration range (approximate logic based on string)
    if (filters.durationRange) {
      result = result.filter(t => {
        const hMatch = t.duration.match(/(\d+)\s*hour/i);
        const dMatch = t.duration.match(/day/i);
        const hours = hMatch ? parseInt(hMatch[1]) : (dMatch ? 8 : 0);
        
        switch (filters.durationRange) {
          case 'under-1': return hours < 1 && !dMatch;
          case '1-3': return hours >= 1 && hours <= 3;
          case '3-6': return hours > 3 && hours <= 6;
          case '6-plus': return hours > 6 && !dMatch;
          case 'full-day': return !!dMatch;
          default: return true;
        }
      });
    }

    // Sorting
    result.sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'name-asc': return a.name.localeCompare(b.name);
        case 'duration-asc': {
          const ah = a.duration.includes('Day') ? 8 : parseInt(a.duration) || 0;
          const bh = b.duration.includes('Day') ? 8 : parseInt(b.duration) || 0;
          return ah - bh;
        }
        case 'duration-desc': {
          const ah = a.duration.includes('Day') ? 8 : parseInt(a.duration) || 0;
          const bh = b.duration.includes('Day') ? 8 : parseInt(b.duration) || 0;
          return bh - ah;
        }
        case 'recommended':
        default:
          return 0; // Default order
      }
    });

    return result;
  }, [filters]);

  const activeFiltersCount = 
    filters.selectedCategory.length + 
    filters.selectedDestination.length + 
    (filters.priceRange ? 1 : 0) + 
    (filters.durationRange ? 1 : 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-serif text-white mb-2">Explore Experiences</h1>
          <p className="text-[var(--color-text-secondary)]">
            Showing {filteredAndSortedTours.length} {filteredAndSortedTours.length === 1 ? 'result' : 'results'}
            {filters.searchQuery && <span> for "{filters.searchQuery}"</span>}
          </p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          {/* Mobile Filter Button */}
          <button 
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden flex-1 md:flex-none flex items-center justify-center gap-2 py-2.5 px-4 border border-[var(--color-border)] rounded-xl text-white font-medium bg-[var(--color-bg-card)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
            Filters
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 flex items-center justify-center bg-[var(--color-primary)] text-black text-xs font-bold rounded-full ml-1">
                {activeFiltersCount}
              </span>
            )}
          </button>

          <div className="flex items-center gap-3 flex-1 md:flex-none md:w-auto">
            {/* Sort Dropdown */}
            <div className="relative flex-1 md:flex-none">
              <select 
                value={filters.sortBy}
                onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
                className="w-full md:w-auto appearance-none bg-[var(--color-bg-card)] border border-[var(--color-border)] text-white py-2.5 pl-4 pr-10 rounded-xl outline-none focus:border-[var(--color-primary)] transition-colors cursor-pointer"
              >
                <option value="recommended">Recommended</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="duration-asc">Duration: Shortest</option>
                <option value="duration-desc">Duration: Longest</option>
                <option value="name-asc">Name: A-Z</option>
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)] pointer-events-none">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>

            {/* View Toggle (Desktop only) */}
            <div className="hidden md:flex bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl p-1">
              <button 
                onClick={() => setViewMode('grid')}
                className={cn("p-2 rounded-lg transition-colors", viewMode === 'grid' ? "bg-[var(--color-bg)] text-[var(--color-primary)] shadow-sm" : "text-[var(--color-text-secondary)] hover:text-white")}
                aria-label="Grid view"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={cn("p-2 rounded-lg transition-colors", viewMode === 'list' ? "bg-[var(--color-bg)] text-[var(--color-primary)] shadow-sm" : "text-[var(--color-text-secondary)] hover:text-white")}
                aria-label="List view"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3.01" y2="6"></line>
                  <line x1="3" y1="12" x2="3.01" y2="12"></line>
                  <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Sidebar */}
        <FilterSidebar 
          filters={filters} 
          setFilters={setFilters} 
          categories={categories}
          destinations={destinations}
          onClear={handleClearFilters}
          className="hidden lg:block"
        />

        {/* Main Content */}
        <div className="flex-1">
          {/* Active Filters tags */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {filters.selectedCategory.map(cat => (
                <span key={cat} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 text-sm capitalize">
                  {cat.replace(/-/g, ' ')}
                  <button onClick={() => setFilters(prev => ({ ...prev, selectedCategory: prev.selectedCategory.filter(c => c !== cat) }))} className="hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </span>
              ))}
              {filters.selectedDestination.map(dest => (
                <span key={dest} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 text-sm">
                  {dest}
                  <button onClick={() => setFilters(prev => ({ ...prev, selectedDestination: prev.selectedDestination.filter(d => d !== dest) }))} className="hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </span>
              ))}
              {filters.priceRange && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 text-sm">
                  Price Filter
                  <button onClick={() => setFilters(prev => ({ ...prev, priceRange: null }))} className="hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </span>
              )}
              {filters.durationRange && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 text-sm">
                  Duration Filter
                  <button onClick={() => setFilters(prev => ({ ...prev, durationRange: null }))} className="hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </span>
              )}
            </div>
          )}

          {filteredAndSortedTours.length > 0 ? (
            <div className={cn(
              "grid gap-6",
              viewMode === 'grid' 
                ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" 
                : "grid-cols-1"
            )}>
              {filteredAndSortedTours.map(tour => (
                <TourCard key={tour.id} tour={tour} viewMode={viewMode} />
              ))}
            </div>
          ) : (
            <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-text-secondary)] mb-4">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <h3 className="text-xl font-semibold text-white mb-2">No experiences found</h3>
              <p className="text-[var(--color-text-secondary)] max-w-md mx-auto mb-6">
                Try adjusting your filters or search for another experience.
              </p>
              <button 
                onClick={handleClearFilters}
                className="px-6 py-2.5 bg-[var(--color-primary)] text-black font-semibold rounded-xl hover:bg-[var(--color-primary)]/90 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      <FilterDrawer 
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        filters={filters}
        setFilters={setFilters}
        categories={categories}
        destinations={destinations}
        onClear={handleClearFilters}
      />
    </div>
  );
}

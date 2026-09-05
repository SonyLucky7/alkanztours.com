'use client';

import { useState } from 'react';
import { type FAQCategory, type FAQItem } from '@/lib/data/faq';
import { cn } from '@/lib/utils';

interface FAQAccordionProps {
  categories: FAQCategory[];
}

export default function FAQAccordion({ categories }: FAQAccordionProps) {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]?.name || '');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const activeCategoryData = categories.find(c => c.name === activeCategory);

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-colors border",
              activeCategory === category.name
                ? "bg-[var(--color-primary)] text-[#080808] border-[var(--color-primary)]"
                : "bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:text-white hover:border-[var(--color-text-secondary)]"
            )}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Accordion Items */}
      <div className="space-y-4">
        {activeCategoryData?.items.map((q: FAQItem, idx: number) => {
          const id = `${activeCategory}-${idx}`;
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
                  "flex-shrink-0 text-[var(--color-primary)] transition-transform duration-300",
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
}
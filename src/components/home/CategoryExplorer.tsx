import Image from 'next/image';
import Link from 'next/link';
import { categories } from '@/lib/data/tours';
import { categoryImages } from '@/lib/images';

export default function CategoryExplorer() {
  return (
    <section className="py-[var(--space-section)] bg-[var(--color-bg-secondary)] w-full">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[var(--color-text-primary)]">
            Explore by Category
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {Object.entries(categories).map(([slug, category]) => {
            const imageUrl = categoryImages[slug as keyof typeof categoryImages] || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80';
            
            return (
              <Link 
                key={slug} 
                href={`/tours?category=${slug}`}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] block"
              >
                <Image
                  src={imageUrl}
                  alt={category.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                
                <div className="absolute inset-0 p-4 md:p-6 flex flex-col items-center justify-center text-center">
                  <h3 className="text-white font-semibold text-lg md:text-xl mb-1">
                    {category.label}
                  </h3>
                  <p className="text-white/70 text-sm transition-opacity">
                    Explore Experiences
                  </p>
                  
                  <div className="absolute bottom-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

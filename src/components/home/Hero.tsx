import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=50"
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center mt-12 w-full flex-grow">
        <span className="text-[var(--color-primary)] uppercase tracking-[0.3em] text-sm font-medium mb-6">
          DISCOVER THE UAE
        </span>
        
        <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,5vw,4.5rem)] leading-tight text-white max-w-4xl mb-6">
          Your Next Unforgettable Experience Starts Here
        </h1>
        
        <p className="text-lg text-white/80 max-w-2xl mb-10">
          Explore Dubai, Abu Dhabi and the UAE through unforgettable attractions, adventures and experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/tours" 
            className="btn-gold"
          >
            Explore Tours
          </Link>
          <Link 
            href="/contact" 
            className="btn-gold-outline"
          >
            Plan Your Experience
          </Link>
        </div>
      </div>
    </section>
  );
}

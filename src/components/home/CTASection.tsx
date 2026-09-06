import Image from 'next/image';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="relative w-full min-h-[380px] md:min-h-[500px] flex items-center justify-center py-16 md:py-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1920&q=80"
          alt="Dubai Skyline at Sunset"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
        <div className="max-w-3xl">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-5xl text-white mb-6">
            Your Next Adventure Is Waiting
          </h2>
          
          <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-10 leading-relaxed">
            From Dubai's iconic skyline to desert adventures and Abu Dhabi's cultural landmarks, discover experiences designed to make your trip unforgettable.
          </p>
          
          <Link 
            href="/tours" 
            className="btn-gold"
          >
            Explore All Experiences
          </Link>
        </div>
      </div>
    </section>
  );
}

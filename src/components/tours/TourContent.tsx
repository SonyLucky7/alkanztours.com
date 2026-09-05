import { type Tour } from '@/lib/data/tours';

interface TourContentProps {
  tour: Tour;
}

export function TourContent({ tour }: TourContentProps) {
  // Simple keyword extraction for "What to Expect"
  const getExpectations = (desc: string) => {
    const sentences = desc.split('. ').filter(s => s.length > 10);
    return sentences.slice(0, 4).map(s => s + (s.endsWith('.') ? '' : '.'));
  };

  return (
    <div className="space-y-6">
      <section className="bg-[var(--color-bg-card)] rounded-2xl p-8 border border-[var(--color-border)]">
        <h2 className="font-playfair text-2xl text-white mb-4">About This Experience</h2>
        <div className="text-[var(--color-text-secondary)] space-y-4 leading-relaxed">
          <p>{tour.description}</p>
          <p>Immerse yourself in this unforgettable {tour.category.toLowerCase()} experience. Our expert guides will ensure you have a safe, enjoyable, and memorable time throughout the duration of {tour.duration}.</p>
        </div>
      </section>
      
      <section className="bg-[var(--color-bg-card)] rounded-2xl p-8 border border-[var(--color-border)]">
        <h2 className="font-playfair text-2xl text-white mb-4">What to Expect</h2>
        <ul className="space-y-3">
          {getExpectations(tour.description).map((expectation, i) => (
            <li key={i} className="flex gap-3 text-[var(--color-text-secondary)]">
              <svg className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{expectation}</span>
            </li>
          ))}
          <li className="flex gap-3 text-[var(--color-text-secondary)]">
            <svg className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Professional English-speaking guide</span>
          </li>
        </ul>
      </section>

      <section className="bg-[var(--color-bg-card)] rounded-2xl p-8 border border-[var(--color-border)]">
        <h2 className="font-playfair text-2xl text-white mb-4">Important Information</h2>
        <ul className="space-y-3">
          {[
            'Please arrive 15 minutes before the scheduled start time.',
            'Bring a valid ID or passport for verification.',
            'Wear comfortable clothing suitable for the activity.',
            'Subject to favorable weather conditions.',
            'Free cancellation up to 24 hours in advance.'
          ].map((info, i) => (
            <li key={i} className="flex gap-3 text-[var(--color-text-secondary)]">
              <svg className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{info}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

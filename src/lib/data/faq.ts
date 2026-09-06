// ============================================================
// Alkanz Tours — FAQ Data
// Note: Answers use neutral wording where exact company policy
// is unknown. Content marked [CONFIGURE] should be updated
// when official policies are confirmed.
// ============================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  name: string;
  slug: string;
  items: FAQItem[];
}

export const faqData: FAQCategory[] = [
  {
    name: 'Booking',
    slug: 'booking',
    items: [
      {
        question: 'How do I book a tour or experience?',
        answer: 'You can book directly through our website by selecting your preferred experience, choosing your date and number of guests, and completing the booking form. Alternatively, you can contact us via WhatsApp or phone to make a booking.',
      },
      {
        question: 'Can I book for a group?',
        answer: 'Yes, we accommodate group bookings for most experiences. Please contact us directly for group rates and availability.',
      },
      {
        question: 'Do I need to book in advance?',
        answer: 'We recommend booking in advance, especially during peak season (October to April), to secure your preferred dates and experiences.',
      },
      {
        question: 'Can I modify or cancel my booking?',
        answer: 'Modification and cancellation policies vary by experience. Please contact our team for assistance with any changes to your booking. [CONFIGURE: Add specific cancellation policy when confirmed]',
      },
      {
        question: 'Will I receive a booking confirmation?',
        answer: 'Yes, you will receive a confirmation via email and/or WhatsApp with your booking details and any relevant instructions.',
      },
    ],
  },
  {
    name: 'Tours',
    slug: 'tours',
    items: [
      {
        question: 'What should I bring on a desert safari?',
        answer: 'We recommend comfortable clothing, sunscreen, sunglasses, and a camera. For evening safaris, a light jacket may be useful as desert temperatures can drop after sunset.',
      },
      {
        question: 'Are the experiences suitable for children?',
        answer: 'Most of our experiences are family-friendly. Age and height restrictions may apply to certain activities such as skydiving, jet skiing, and some theme park rides. Check individual tour details for specific requirements.',
      },
      {
        question: 'What is included in the tour price?',
        answer: 'Inclusions vary by experience and are listed on each tour\'s detail page. Generally, the listed price includes the main activity. Transfers, meals, and additional services may or may not be included depending on the specific experience.',
      },
      {
        question: 'Are tours available in multiple languages?',
        answer: 'Many of our experiences are available in English. Some tours may offer guides in additional languages. Please contact us to enquire about language availability for specific experiences.',
      },
      {
        question: 'What happens if the weather affects my tour?',
        answer: 'In the event of adverse weather conditions, we will work with you to reschedule your experience or provide alternative options where possible.',
      },
    ],
  },
  {
    name: 'Payments',
    slug: 'payments',
    items: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept various payment methods. Please contact our team for current payment options. [CONFIGURE: Add specific payment methods when confirmed]',
      },
      {
        question: 'Are prices listed per person?',
        answer: 'Yes, unless otherwise stated, prices shown are per person. Some experiences such as private transfers may be priced per vehicle.',
      },
      {
        question: 'Do prices include VAT?',
        answer: 'Pricing details including tax information are specified on each tour\'s detail page. Please contact us if you need clarification on any pricing.',
      },
      {
        question: 'Is there a deposit required?',
        answer: 'Deposit requirements vary by experience. Our team will inform you of any deposit requirements during the booking process.',
      },
    ],
  },
  {
    name: 'Travel',
    slug: 'travel',
    items: [
      {
        question: 'Do I need a visa to visit Dubai?',
        answer: 'Visa requirements depend on your nationality. Many nationalities receive a visa on arrival in the UAE. We recommend checking with the UAE immigration authority or your nearest UAE embassy for the most current visa requirements.',
      },
      {
        question: 'What is the best time to visit Dubai?',
        answer: 'The most comfortable weather is from October to April, with temperatures ranging from 20°C to 30°C. Summer months (June to September) can be very hot, but indoor attractions and water activities remain popular.',
      },
      {
        question: 'Is Dubai safe for tourists?',
        answer: 'The UAE is considered one of the safest destinations in the world for tourists. Standard travel precautions are recommended.',
      },
      {
        question: 'What currency is used in the UAE?',
        answer: 'The official currency is the UAE Dirham (AED). Most places accept major credit cards, and currency exchange is widely available.',
      },
    ],
  },
  {
    name: 'Transfers',
    slug: 'transfers',
    items: [
      {
        question: 'How do airport transfers work?',
        answer: 'Our private airport transfer service includes a professional driver who will meet you at the airport or hotel. You will receive driver details and meeting instructions after booking.',
      },
      {
        question: 'Can I book a transfer for a specific time?',
        answer: 'Yes, transfers can be scheduled for your preferred time. For airport pickups, we recommend allowing sufficient time for immigration and baggage collection.',
      },
      {
        question: 'What type of vehicles are used for transfers?',
        answer: 'We use comfortable, well-maintained vehicles for all transfers. Contact us if you have specific vehicle requirements.',
      },
    ],
  },
  {
    name: 'General',
    slug: 'general',
    items: [
      {
        question: 'How can I contact Alkanz Tours?',
        answer: 'You can reach us by phone at +971 06 5393325, by email at info@alkanztours.com, or via WhatsApp. Our team is happy to assist with any enquiries.',
      },
      {
        question: 'Where is Alkanz Tours based?',
        answer: 'We are based at 2nd December Street, Dubai, UAE.',
      },
      {
        question: 'Do you offer travel insurance?',
        answer: 'We recommend that all travellers obtain appropriate travel insurance before their trip. We can advise on available options upon request.',
      },
      {
        question: 'Can you create a custom itinerary?',
        answer: 'Yes, we can help plan a customised UAE experience based on your preferences, budget, and schedule. Contact us to discuss your requirements.',
      },
    ],
  },
];

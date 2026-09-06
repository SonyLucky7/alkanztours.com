// ============================================================
// Alkanz Tours — Utility Functions
// ============================================================

const WHATSAPP_NUMBER = '971551401665';
const BRAND = {
  name: 'ALKANZ TOURS',
  phone: '+971 06 5393325',
  mobile: '+971 55 140 1665',
  email: 'info@alkanztours.com',
  address: 'Al Reem Building No 2, Opposite Industrial Area 17, Kalba Road, Sharjah, UAE',
  whatsapp: WHATSAPP_NUMBER,
} as const;

export { BRAND };

/**
 * Generate a WhatsApp deep link with pre-filled message
 */
export function getWhatsAppLink(params?: {
  tourName?: string;
  date?: string;
  guests?: number;
  customerName?: string;
}): string {
  let message = 'Hi Alkanz';
  if (params?.tourName) {
    message += `, I am interested in booking ${params.tourName}`;
    if (params.date) message += ` for ${params.date}`;
    if (params.guests) message += ` for ${params.guests} guest${params.guests > 1 ? 's' : ''}`;
    if (params.customerName) message += `. My name is ${params.customerName}`;
    message += '.';
  } else {
    message += ', I would like to enquire about your tours and experiences.';
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Format price with currency
 */
export function formatPrice(price: number, currency = 'AED'): string {
  if (price % 1 === 0) {
    return `${currency} ${price.toLocaleString()}`;
  }
  return `${currency} ${price.toFixed(2)}`;
}

/**
 * Format duration for display
 */
export function formatDuration(duration: string): string {
  return duration;
}

/**
 * Generate mailto link
 */
export function getMailtoLink(subject?: string): string {
  const base = `mailto:${BRAND.email}`;
  if (subject) {
    return `${base}?subject=${encodeURIComponent(subject)}`;
  }
  return base;
}

/**
 * Generate tel link
 */
export function getTelLink(): string {
  return `tel:${BRAND.phone.replace(/\s/g, '')}`;
}

/**
 * Clamp text to a certain number of words
 */
export function truncateText(text: string, maxWords: number): string {
  const words = text.split(' ');
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '…';
}

/**
 * Generate a slug from text
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * cn utility - combine class names (lightweight clsx alternative)
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

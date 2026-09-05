'use client';

import { useCurrency, type Currency } from '@/lib/context/CurrencyContext';

const currencies: Currency[] = ['AED', 'USD', 'EUR', 'GBP', 'INR'];

export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();

  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value as Currency)}
      className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-white rounded-md px-3 py-2 outline-none focus:border-[var(--color-primary)] text-sm cursor-pointer"
    >
      {currencies.map(c => (
        <option key={c} value={c}>{c}</option>
      ))}
    </select>
  );
}

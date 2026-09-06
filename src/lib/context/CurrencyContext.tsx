'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Currency = 'AED' | 'USD' | 'EUR' | 'GBP' | 'INR';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  convertPrice: (priceInAED: number) => number;
  formatPrice: (priceInAED: number) => string;
}

const EXCHANGE_RATES: Record<Currency, number> = {
  AED: 1,
  USD: 0.27,
  EUR: 0.25,
  GBP: 0.21,
  INR: 22.7,
};

const SYMBOLS: Record<Currency, string> = {
  AED: 'AED',
  USD: '$',
  EUR: '€',
  GBP: '£',
  INR: '₹',
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>('AED');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('currency') as Currency;
    if (saved && Object.keys(EXCHANGE_RATES).includes(saved)) {
      setCurrencyState(saved);
    }
  }, []);

  const setCurrency = (curr: Currency) => {
    setCurrencyState(curr);
    localStorage.setItem('currency', curr);
  };

  const convertPrice = (priceInAED: number) => {
    return priceInAED * EXCHANGE_RATES[currency];
  };

  const formatPrice = (priceInAED: number) => {
    // Avoid hydration mismatch by returning AED on server
    const activeCurrency = mounted ? currency : 'AED';
    const converted = priceInAED * EXCHANGE_RATES[activeCurrency];
    const sym = SYMBOLS[activeCurrency];
    
    if (activeCurrency === 'AED') return `AED ${converted.toFixed(2)}`;
    return `${sym}${converted.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convertPrice, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}

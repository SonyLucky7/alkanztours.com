'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { type Tour } from '@/lib/data/tours';

export interface CartItem {
  id: string; // unique ID for cart item instance
  tour: Tour;
  date: string;
  adults: number;
  children: number;
  pricePerAdult: number;
  pricePerChild: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  totalAED: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('cart');
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('cart', JSON.stringify(items));
    }
  }, [items, mounted]);

  const addToCart = (item: Omit<CartItem, 'id'>) => {
    const newItem = { ...item, id: crypto.randomUUID() };
    setItems(prev => [...prev, newItem]);
  };

  const removeFromCart = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const clearCart = () => setItems([]);

  const totalAED = items.reduce((total, item) => {
    return total + (item.adults * item.pricePerAdult) + (item.children * item.pricePerChild);
  }, 0);

  return (
    <CartContext.Provider value={{ items: mounted ? items : [], addToCart, removeFromCart, clearCart, totalAED }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

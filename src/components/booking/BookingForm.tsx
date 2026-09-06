'use client';

import { useState } from 'react';
import { type Tour } from '@/lib/data/tours';
import { getWhatsAppLink } from '@/lib/utils';

export function BookingForm({ tour }: { tour: Tour }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    adults: 1,
    children: 0,
    requests: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCounter = (field: 'adults' | 'children', increment: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: Math.max(field === 'adults' ? 1 : 0, prev[field] + increment)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API delay
    setTimeout(() => {
      try {
        window.open(getWhatsAppLink({ tourName: tour.name, date: formData.date, guests: formData.adults + formData.children, customerName: formData.name }), '_blank');
        setStatus('success');
      } catch {
        setStatus('error');
      }
    }, 1000);
  };

  if (status === 'success') {
    return (
      <div className="bg-[var(--color-bg-card)] rounded-2xl p-8 border border-[var(--color-border)] text-center">
        <div className="w-16 h-16 bg-[var(--color-primary)]/20 text-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-playfair text-2xl text-white mb-2">Booking Request Sent!</h3>
        <p className="text-[var(--color-text-secondary)] mb-6">We have received your request and will contact you shortly to confirm.</p>
        <button onClick={() => setStatus('idle')} className="text-[var(--color-primary)] hover:underline">
          Book another tour
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[var(--color-bg-card)] rounded-2xl p-6 lg:p-8 border border-[var(--color-border)]">
      {status === 'error' && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-500 rounded-xl p-4 mb-6">
          Something went wrong. Please try again or contact us directly.
        </div>
      )}

      <div className="space-y-6">
        <div>
          <label className="block text-sm text-[var(--color-text-secondary)] mb-2" htmlFor="name">Full Name *</label>
          <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-white rounded-xl px-4 py-3 focus:border-[var(--color-primary)] outline-none" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-[var(--color-text-secondary)] mb-2" htmlFor="email">Email *</label>
            <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-white rounded-xl px-4 py-3 focus:border-[var(--color-primary)] outline-none" />
          </div>
          <div>
            <label className="block text-sm text-[var(--color-text-secondary)] mb-2" htmlFor="phone">Phone Number *</label>
            <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-white rounded-xl px-4 py-3 focus:border-[var(--color-primary)] outline-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-[var(--color-text-secondary)] mb-2" htmlFor="date">Travel Date *</label>
            <input required type="date" min={new Date().toISOString().split('T')[0]} id="date" name="date" value={formData.date} onChange={handleChange} style={{ colorScheme: 'dark' }} className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-white rounded-xl px-4 py-3 focus:border-[var(--color-primary)] outline-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-between items-center bg-[var(--color-bg-secondary)] rounded-xl p-3 border border-[var(--color-border)]">
            <span className="text-white">Adults</span>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => handleCounter('adults', -1)} className="w-8 h-8 flex items-center justify-center bg-[var(--color-bg)] rounded-full text-white hover:text-[var(--color-primary)]">-</button>
              <span className="text-white w-4 text-center">{formData.adults}</span>
              <button type="button" onClick={() => handleCounter('adults', 1)} className="w-8 h-8 flex items-center justify-center bg-[var(--color-bg)] rounded-full text-white hover:text-[var(--color-primary)]">+</button>
            </div>
          </div>

          <div className="flex justify-between items-center bg-[var(--color-bg-secondary)] rounded-xl p-3 border border-[var(--color-border)]">
            <span className="text-white">Children</span>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => handleCounter('children', -1)} className="w-8 h-8 flex items-center justify-center bg-[var(--color-bg)] rounded-full text-white hover:text-[var(--color-primary)]">-</button>
              <span className="text-white w-4 text-center">{formData.children}</span>
              <button type="button" onClick={() => handleCounter('children', 1)} className="w-8 h-8 flex items-center justify-center bg-[var(--color-bg)] rounded-full text-white hover:text-[var(--color-primary)]">+</button>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm text-[var(--color-text-secondary)] mb-2" htmlFor="requests">Special Requests (Optional)</label>
          <textarea id="requests" name="requests" rows={4} value={formData.requests} onChange={handleChange} className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-white rounded-xl px-4 py-3 focus:border-[var(--color-primary)] outline-none resize-none"></textarea>
        </div>
      </div>

      <div className="mt-8">
        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-black rounded-full py-4 text-lg font-semibold transition-colors disabled:opacity-70"
        >
          {status === 'submitting' ? 'Sending...' : 'Request Booking'}
        </button>
        <div className="text-center mt-4">
          <span className="text-[var(--color-text-secondary)] text-sm">Or contact us at </span>
          <a href="tel:+971523435050" className="text-white hover:text-[var(--color-primary)] text-sm font-semibold">+971 523435050</a>
        </div>
      </div>
    </form>
  );
}

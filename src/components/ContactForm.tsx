'use client';

import { useState } from 'react';
import { getMailtoLink, BRAND } from '@/lib/utils';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'General',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      
      const subject = `${formData.inquiryType} Inquiry from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
      
      const mailtoUrl = getMailtoLink(subject) + '&body=' + encodeURIComponent(body);
      window.location.href = mailtoUrl;
      
      setTimeout(() => {
        setSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiryType: 'General',
          message: '',
        });
      }, 5000);
    }, 800);
  };

  return (
    <div className="bg-[var(--color-bg-secondary)] p-6 md:p-8 rounded-lg border border-[var(--color-border)]">
      {success ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-[var(--color-brand-primary)]/20 text-[var(--color-brand-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-[family-name:var(--font-playfair)] text-white mb-2">Thank You</h3>
          <p className="text-[var(--color-text-secondary)]">Thank you for your inquiry. We will respond shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors"
                placeholder="+971 50 123 4567"
              />
            </div>
            <div>
              <label htmlFor="inquiryType" className="block text-sm font-medium text-white mb-2">Inquiry Type</label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors appearance-none"
              >
                <option value="General">General</option>
                <option value="Booking">Booking</option>
                <option value="Tours">Tours</option>
                <option value="Transfers">Transfers</option>
                <option value="Group Booking">Group Booking</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message *</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors resize-y"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-dark)] text-[#080808] font-medium py-3 px-6 rounded-md transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Inquiry'}
          </button>
        </form>
      )}
    </div>
  );
}
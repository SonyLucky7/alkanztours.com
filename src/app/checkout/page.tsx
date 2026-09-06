'use client';

import { useState } from 'react';
import { useCart } from '@/lib/context/CartContext';
import { useCurrency } from '@/lib/context/CurrencyContext';
import { getWhatsAppLink } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { items, totalAED, removeFromCart, clearCart } = useCart();
  const { formatPrice, currency } = useCurrency();
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: 'Mr',
    firstName: '',
    lastName: '',
    email: '',
    phoneCode: '+971',
    phone: '',
  });

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Finalize booking
      handleFinalize();
    }
  };

  const handleFinalize = () => {
    // Generate WhatsApp text for all cart items
    let message = `*New Booking Request*\n\n*Customer Details:*\nName: ${formData.title} ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phoneCode} ${formData.phone}\n\n*Order Summary:*\n`;
    
    items.forEach((item, index) => {
      message += `\n${index + 1}. *${item.tour.name}*\nDate: ${item.date}\nGuests: ${item.adults} Adults, ${item.children} Children\nPrice: ${formatPrice((item.adults * item.pricePerAdult) + (item.children * item.pricePerChild))}\n`;
    });

    message += `\n*Total Payable: ${formatPrice(totalAED)}*`;

    // Clear cart and open WA
    clearCart();
    
    const waUrl = `https://wa.me/971523435050?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
    router.push('/');
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-playfair text-3xl mb-6">Your Cart is Empty</h1>
        <p className="text-[var(--color-text-secondary)] mb-8">Looks like you haven't added any experiences yet.</p>
        <Link href="/tours" className="bg-[var(--color-primary)] text-black font-semibold rounded-full px-8 py-4 inline-block">
          Explore Experiences
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 lg:py-16">
      
      {/* Stepper */}
      <div className="max-w-4xl mx-auto mb-16 px-4">
        <div className="relative flex justify-between items-center">
          <div className="absolute left-0 top-1/2 w-full h-[2px] bg-[var(--color-border)] -z-10 -translate-y-1/2"></div>
          
          <div className="flex flex-col items-center">
            <div className={`w-6 h-6 rounded-full border-[6px] border-[var(--color-bg)] ${step >= 1 ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-border)]'}`}></div>
            <span className={`text-sm mt-2 ${step >= 1 ? 'text-[var(--color-primary)] font-medium' : 'text-[var(--color-text-secondary)]'}`}>Contact details</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className={`w-6 h-6 rounded-full border-[6px] border-[var(--color-bg)] ${step >= 2 ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-border)]'}`}></div>
            <span className={`text-sm mt-2 ${step >= 2 ? 'text-[var(--color-primary)] font-medium' : 'text-[var(--color-text-secondary)]'}`}>Review & Book</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
        
        {/* Left Column: Forms */}
        <div className="flex-1">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Main traveller's contact details</h2>
              <form id="checkout-form" onSubmit={handleContinue} className="bg-[#111111]/80 backdrop-blur-md border border-[var(--color-border)] rounded-2xl p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Title <span className="text-red-500">*</span></label>
                    <select 
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-white rounded-xl px-4 py-3 outline-none focus:border-[var(--color-primary)]"
                    >
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Ms">Ms</option>
                    </select>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">First name <span className="text-red-500">*</span></label>
                    <input 
                      required
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-white rounded-xl px-4 py-3 outline-none focus:border-[var(--color-primary)]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Last name <span className="text-red-500">*</span></label>
                    <input 
                      required
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-white rounded-xl px-4 py-3 outline-none focus:border-[var(--color-primary)]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Your email address <span className="text-red-500">*</span></label>
                    <input 
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-white rounded-xl px-4 py-3 outline-none focus:border-[var(--color-primary)]"
                    />
                  </div>

                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-medium">Phone number <span className="text-red-500">*</span></label>
                    <div className="flex gap-2">
                      <select 
                        value={formData.phoneCode}
                        onChange={(e) => setFormData({...formData, phoneCode: e.target.value})}
                        className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-white rounded-xl px-2 sm:px-4 py-3 outline-none focus:border-[var(--color-primary)] w-[100px] sm:w-32 shrink-0"
                      >
                        <option value="+971">🇦🇪 +971</option>
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+33">🇫🇷 +33</option>
                      </select>
                      <input 
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-white rounded-xl px-4 py-3 outline-none focus:border-[var(--color-primary)] flex-1 min-w-0"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Review & Book</h2>
              <div className="bg-[#111111]/80 backdrop-blur-md border border-[var(--color-border)] rounded-2xl p-6 md:p-8 mb-6">
                <h3 className="font-playfair text-xl mb-4">Contact Details</h3>
                <div className="space-y-2 text-[var(--color-text-secondary)]">
                  <p><span className="text-white">Name:</span> {formData.title} {formData.firstName} {formData.lastName}</p>
                  <p><span className="text-white">Email:</span> {formData.email}</p>
                  <p><span className="text-white">Phone:</span> {formData.phoneCode} {formData.phone}</p>
                </div>
                <button onClick={() => setStep(1)} className="text-[var(--color-primary)] text-sm font-medium mt-4 hover:underline">
                  Edit Details
                </button>
              </div>

              <div className="bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 rounded-2xl p-6 text-[var(--color-primary)]">
                <p className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Clicking "Complete Booking" will open WhatsApp so our team can securely finalize your reservation and arrange payment.
                </p>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-end">
            <button 
              type="submit"
              form="checkout-form"
              onClick={step === 2 ? handleContinue : undefined}
              className="inline-flex items-center justify-center bg-[var(--color-primary)] text-black font-semibold uppercase tracking-wider text-sm sm:text-base rounded-full px-10 py-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(205,158,56,0.4)] w-full sm:w-auto"
            >
              {step === 1 ? 'Continue' : 'Complete Booking via WhatsApp'}
            </button>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="w-full lg:w-[400px]">
          <div className="bg-[#111111]/80 backdrop-blur-md border border-[var(--color-border)] rounded-2xl p-6 sticky top-[100px]">
            <h3 className="font-playfair text-xl mb-6 pb-4 border-b border-[var(--color-border)]">Order Summary</h3>
            
            <div className="space-y-6 mb-6">
              {items.map((item) => (
                <div key={item.id} className="relative border-b border-[var(--color-border)]/50 pb-6 last:border-0 last:pb-0">
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-0 right-0 text-[var(--color-text-secondary)] hover:text-red-500 transition-colors"
                    aria-label="Remove item"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </button>
                  
                  <h4 className="font-semibold text-[15px] pr-6 mb-1">{item.tour.name}</h4>
                  <p className="text-[13px] text-[var(--color-text-secondary)] mb-3">{new Date(item.date).toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' })}</p>
                  
                  {item.adults > 0 && (
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[var(--color-text-secondary)]">{item.adults} Adult{item.adults > 1 ? 's' : ''}</span>
                      <span>{formatPrice(item.adults * item.pricePerAdult)}</span>
                    </div>
                  )}
                  {item.children > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-[var(--color-text-secondary)]">{item.children} Child{item.children > 1 ? 'ren' : ''}</span>
                      <span>{formatPrice(item.children * item.pricePerChild)}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="border-t border-[var(--color-border)] pt-6 space-y-4 mb-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Gift Card</label>
                <div className="flex gap-2">
                  <input type="text" className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg px-3 py-2 flex-1 text-sm outline-none focus:border-[var(--color-primary)]" />
                  <button className="bg-[var(--color-border)] text-[var(--color-text-secondary)] px-4 py-2 rounded-lg text-sm font-medium">Apply</button>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Promo Code</label>
                <div className="flex gap-2">
                  <input type="text" className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg px-3 py-2 flex-1 text-sm outline-none focus:border-[var(--color-primary)]" />
                  <button className="bg-[var(--color-border)] text-[var(--color-text-secondary)] px-4 py-2 rounded-lg text-sm font-medium">Apply</button>
                </div>
              </div>
            </div>

            <div className="border-t border-[var(--color-border)] pt-4">
              <div className="flex justify-between items-end">
                <span className="font-medium">Total</span>
                <span className="text-2xl font-bold text-[var(--color-primary)]">{formatPrice(totalAED)}</span>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] text-right mt-1">including taxes and fees</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

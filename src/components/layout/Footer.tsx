import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/10 pt-16 pb-8 text-white/70">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="relative block w-56 h-14 overflow-hidden"
            >
              <Image 
                src="/logo.png" 
                alt="Holidayys Tours" 
                fill 
                className="object-cover object-center" 
              />
            </Link>
            <p className="leading-relaxed">
              Discover the UAE through carefully selected experiences, adventures, and attractions.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[var(--color-primary,#C9A227)] hover:text-white transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[var(--color-primary,#C9A227)] hover:text-white transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[var(--color-primary,#C9A227)] hover:text-white transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide">EXPLORE</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/tours" className="hover:text-[var(--color-primary,#C9A227)] transition-colors">Tours</Link></li>
              <li><Link href="/destinations" className="hover:text-[var(--color-primary,#C9A227)] transition-colors">Destinations</Link></li>
              <li><Link href="/tours" className="hover:text-[var(--color-primary,#C9A227)] transition-colors">Experiences</Link></li>
              <li><Link href="/about" className="hover:text-[var(--color-primary,#C9A227)] transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide">SUPPORT</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/contact" className="hover:text-[var(--color-primary,#C9A227)] transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-[var(--color-primary,#C9A227)] transition-colors">FAQ</Link></li>
              <li><Link href="/tours" className="hover:text-[var(--color-primary,#C9A227)] transition-colors">Booking</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide">CONTACT</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-1"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+971523435050" className="hover:text-[var(--color-primary,#C9A227)] transition-colors">+971 523435050</a>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-1"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <a href="mailto:info@holidayys.com" className="hover:text-[var(--color-primary,#C9A227)] transition-colors">info@holidayys.com</a>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-1"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>2nd December Street, Dubai, UAE</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} Holidayys Tours. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-white/20">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span className="text-white/20">|</span>
            <Link href="/cookie" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

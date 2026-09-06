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
              <a href="https://x.com/holidayysC" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white hover:text-black transition-colors" aria-label="X (Twitter)">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
              </a>
              <a href="https://www.instagram.com/holidayys_com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-[#E1306C] hover:text-white transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/holidayys-com/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-[#0077b5] hover:text-white transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://www.youtube.com/@holidayys_" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-[#FF0000] hover:text-white transition-colors" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide">EXPLORE</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/tours" className="hover:text-[var(--color-primary,#cd9e38)] transition-colors">Tours</Link></li>
              <li><Link href="/destinations" className="hover:text-[var(--color-primary,#cd9e38)] transition-colors">Destinations</Link></li>
              <li><Link href="/about" className="hover:text-[var(--color-primary,#cd9e38)] transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide">SUPPORT</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/contact" className="hover:text-[var(--color-primary,#cd9e38)] transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-[var(--color-primary,#cd9e38)] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide">CONTACT</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-1"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+971523435050" className="hover:text-[var(--color-primary,#cd9e38)] transition-colors">+971 523435050</a>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-1"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <a href="mailto:info@holidayys.com" className="hover:text-[var(--color-primary,#cd9e38)] transition-colors">info@holidayys.com</a>
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
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

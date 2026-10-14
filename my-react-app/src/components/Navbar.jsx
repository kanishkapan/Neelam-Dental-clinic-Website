import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X, Calendar } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Doctor', href: '#about-doctor' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8FAF9]/92 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border-b border-[#E2E8F0]/70 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Neelam Dental Clinic Home"
          >
            <div className="w-9 h-9 rounded-md bg-[#0D7C66] text-white flex items-center justify-center font-serif text-xl font-bold tracking-tighter shadow-sm group-hover:scale-105 transition-transform duration-200">
              N
            </div>
            <div className="flex items-baseline tracking-wider">
              <span className="font-extrabold text-[17px] text-[#0F172A] tracking-[0.08em] font-sans">
                NEELAM
              </span>
              <span className="font-medium text-[17px] text-[#0D7C66]/85 tracking-[0.14em] ml-1.5 font-sans">
                DENTAL
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[14.5px] font-medium text-[#4B5563] hover:text-[#0D7C66] transition-colors relative py-1 hover:font-semibold"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Items (Desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:09009590693"
              className="flex items-center gap-2 text-[#0F172A] hover:text-[#0D7C66] transition-colors group font-sans"
              title="Call Neelam Dental Clinic"
            >
              <Phone className="w-4 h-4 text-[#0D7C66] stroke-[2.2] group-hover:rotate-12 transition-transform" />
              <span className="text-[15px] font-bold tracking-tight text-[#0F172A]">
                09009590693
              </span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-[#0D7C66] hover:bg-[#0A6654] text-white px-5 py-2.5 rounded-full text-[14px] font-semibold shadow-[0_2px_8px_rgba(13,124,102,0.25)] hover:shadow-[0_4px_16px_rgba(13,124,102,0.35)] transition-all duration-200 active:scale-95 cursor-pointer group"
            >
              <span>Book appointment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.2]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="tel:09009590693"
              className="p-2 text-[#0D7C66] bg-[#EBF7F4] rounded-full hover:bg-[#d6efe8] transition-colors"
              aria-label="Call clinic"
            >
              <Phone className="w-4 h-4 stroke-[2.2]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-[#0D7C66] hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-xl px-5 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-medium text-gray-700 hover:text-[#0D7C66] hover:bg-[#F0FDF4] px-3 py-2 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <a
                href="tel:09009590693"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#EBF7F4] text-[#0D7C66] font-bold text-sm"
              >
                <Phone className="w-4 h-4 stroke-[2.2]" />
                <span>Call 09009590693</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 w-full bg-[#0D7C66] text-white py-3 px-4 rounded-full font-semibold text-sm shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

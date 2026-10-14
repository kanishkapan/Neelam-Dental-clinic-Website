import React from 'react';
import { Phone, MapPin, Clock, ArrowUp, Heart } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-[#0D7C66] text-white flex items-center justify-center font-serif text-xl font-bold tracking-tighter">
                N
              </div>
              <div className="flex items-baseline tracking-wider">
                <span className="font-extrabold text-[18px] text-white tracking-[0.08em] font-sans">
                  NEELAM
                </span>
                <span className="font-medium text-[18px] text-teal-400 tracking-[0.14em] ml-1.5 font-sans">
                  DENTAL
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Led by Dr. Neelam Dwivedi (BDS, MDS). Providing ethical, gentle, and technologically advanced dental healthcare to families across Indore.
            </p>

            <div className="pt-2 flex items-center gap-3 text-sm text-gray-300">
              <Phone className="w-4 h-4 text-teal-400 shrink-0" />
              <a href="tel:09009590693" className="hover:text-teal-300 font-bold">
                09009590693
              </a>
            </div>

            <div className="flex items-start gap-3 text-sm text-gray-300">
              <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <span>1433, Kayasth Mohalla Rd, Near Bhawarlal, Bombay Bazar, Hari Phatak, Indore, M.P. 453441</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#home" className="hover:text-teal-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors">Dental Treatments</a>
              </li>
              <li>
                <a href="#about-doctor" className="hover:text-teal-400 transition-colors">About Dr. Neelam Dwivedi</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-teal-400 transition-colors">Patient Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-400 transition-colors">Clinic Contact & Hours</a>
              </li>
            </ul>
          </div>

          {/* Treatments List */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Specialties</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Single-Sitting Painless Root Canal</li>
              <li>• Permanent Titanium Dental Implants</li>
              <li>• Cosmetic Smile Designing & Veneers</li>
              <li>• Clear Invisible Teeth Aligners</li>
              <li>• Ultrasonic Scaling & Laser Whitening</li>
              <li>• Children & Pediatric Dental Care</li>
            </ul>

            <div className="pt-3">
              <button
                onClick={onOpenBooking}
                className="bg-[#0D7C66] hover:bg-[#0A6654] text-white text-xs font-bold py-2.5 px-5 rounded-full shadow-md transition-all cursor-pointer"
              >
                Book Appointment Online
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Neelam Dental Clinic. All Rights Reserved. Reg. Dental Surgeon Indore.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-teal-400 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

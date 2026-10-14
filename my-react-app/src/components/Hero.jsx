import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import doctorImg from '../assets/doctor-neelam.png';

export default function Hero({ onOpenBooking }) {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-br from-[#F8FAF9] via-[#FAFDFB] to-[#EDF8F5]"
    >
      {/* Background Decorative Rings / Ellipses matching reference */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft radial mint glow in top right */}
        <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-[#D4F1E9]/40 rounded-full blur-[100px] -z-10" />

        {/* Concentric vector lines positioned gracefully behind portrait */}
        <svg
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[720px] lg:w-[860px] h-[860px] opacity-75 hidden sm:block pointer-events-none"
          viewBox="0 0 850 850"
          fill="none"
        >
          {/* Outer mint circle */}
          <circle
            cx="580"
            cy="460"
            r="380"
            stroke="#92E1D2"
            strokeWidth="1.2"
            strokeOpacity="0.55"
          />

          {/* Inner golden/sand arc curving to the left */}
          <circle
            cx="480"
            cy="500"
            r="320"
            stroke="#DEC4A4"
            strokeWidth="1.3"
            strokeOpacity="0.75"
          />

          {/* Subtle secondary mint arc */}
          <circle
            cx="600"
            cy="440"
            r="260"
            stroke="#A7EBE0"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Subtitle & Conversion CTAs */}
          <div className="lg:col-span-7 pt-2 lg:pt-0">
            {/* Pill badge: YOUR SMILE, THOUGHTFULLY CARED FOR */}
            <div className="inline-flex items-center gap-2 mb-5 sm:mb-8">
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EAB308] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#EAB308]"></span>
              </span>
              <span className="text-[11px] sm:text-[13px] font-bold tracking-[0.14em] sm:tracking-[0.16em] text-[#0D7C66] uppercase font-sans">
                YOUR SMILE, THOUGHTFULLY CARED FOR
              </span>
            </div>

            {/* Main Headline matching exact text and layout */}
            <h1 className="text-[32px] xs:text-[38px] sm:text-[52px] md:text-[62px] lg:text-[72px] font-bold text-[#141B2D] leading-[1.1] tracking-[-0.035em]">
              Confidence <br />
              begins with a <br />
              <span className="text-[#0D8B75] font-semibold">healthy</span> smile.
            </h1>

            {/* Subtitle matching exact text */}
            <p className="mt-4 sm:mt-7 text-[15px] sm:text-[17.5px] text-[#556377] leading-[1.65] max-w-xl font-normal">
              Personalised dental care in Indore, led by Dr. Neelam Dwivedi.
              <br className="hidden sm:inline" />
              Modern treatment, a gentle touch, and a team that listens.
            </p>

            {/* Action Buttons: Book an appointment & Call now */}
            <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-6">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 bg-[#0D7C66] hover:bg-[#0A6654] text-white px-7 py-3.5 rounded-full text-[15px] font-semibold shadow-[0_4px_18px_rgba(13,124,102,0.28)] hover:shadow-[0_8px_25px_rgba(13,124,102,0.38)] transition-all duration-300 active:scale-95 group cursor-pointer"
              >
                <span>Book an appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200 stroke-[2.2]" />
              </button>

              <a
                href="tel:09009590693"
                className="inline-flex items-center justify-center gap-3 text-[#141B2D] hover:text-[#0D7C66] transition-colors py-2 px-3 rounded-full group font-sans"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E2F5F0] text-[#0D7C66] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#d4efe8] transition-all duration-200">
                  <Phone className="w-4 h-4 stroke-[2.4]" />
                </div>
                <span className="font-semibold text-[15px] sm:text-[15.5px] text-[#141B2D] group-hover:text-[#0D7C66] transition-colors">
                  Call now
                </span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-7 border-t border-[#E2E8F0]/80 grid grid-cols-3 max-w-lg gap-2 sm:gap-4">
              <div>
                <div className="text-base sm:text-2xl font-bold text-[#141B2D]">12+</div>
                <div className="text-[10px] sm:text-[13px] text-[#64748B]">Years Experience</div>
              </div>
              <div>
                <div className="text-base sm:text-2xl font-bold text-[#141B2D]">10,000+</div>
                <div className="text-[10px] sm:text-[13px] text-[#64748B]">Happy Smiles</div>
              </div>
              <div>
                <div className="text-base sm:text-2xl font-bold text-[#0D7C66]">4.9 ★</div>
                <div className="text-[10px] sm:text-[13px] text-[#64748B]">Google Indore</div>
              </div>
            </div>

          </div>

          {/* Right Column: Arched Doctor Portrait with plenty of breathing room */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-end pt-8 lg:pt-0">
            <div className="relative w-full max-w-[280px] xs:max-w-[330px] sm:max-w-[390px] lg:max-w-[430px]">
              
              {/* Arched image container matching reference with smooth arch shape */}
              <div className="relative z-10 w-full overflow-hidden hero-arch-mask shadow-[0_20px_45px_-12px_rgba(13,124,102,0.18)] bg-zinc-800">
                <img
                  src={doctorImg}
                  alt="Dr. Neelam Dwivedi - Chief Dental Surgeon at Neelam Dental Clinic Indore"
                  className="w-full h-auto object-cover object-top block transform hover:scale-[1.02] transition-transform duration-500"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              {/* Floating clinic verification badge cleanly positioned */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:-bottom-5 sm:-left-5 z-20 bg-white/95 backdrop-blur-md py-2 px-3 sm:py-3 sm:px-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 sm:gap-3 animate-soft-float max-w-[calc(100vw-2.5rem)] sm:max-w-none">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#EBF7F4] flex items-center justify-center text-[#0D7C66] font-bold text-base sm:text-lg shrink-0">
                  ✓
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs font-semibold text-[#0D7C66] uppercase tracking-wider truncate">Verified Clinic</div>
                  <div className="text-xs sm:text-sm font-bold text-[#141B2D] truncate">Dr. Neelam Dwivedi</div>
                  <div className="text-[10px] sm:text-[11px] text-[#64748B] truncate">Senior Dental Surgeon (Indore)</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Award, ArrowRight } from 'lucide-react';
import doctorAboutImg from '../assets/doctor-about.png';

export default function AboutDoctor({ onOpenBooking }) {
  return (
    <section id="about-doctor" className="py-20 lg:py-28 bg-[#FAFDFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Doctor Image with rounded card & floating badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Doctor portrait card with rounded corners */}
              <div className="relative z-10 w-full overflow-hidden rounded-[32px] sm:rounded-[36px] bg-white shadow-[0_16px_40px_-12px_rgba(0,0,0,0.06)] border border-[#E8EFF0]">
                <img
                  src={doctorAboutImg}
                  alt="Dr. Neelam Dwivedi - Chief Dentist at Neelam Dental Clinic"
                  className="w-full h-auto object-cover object-top block transform hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Floating Badge: Doctor-led care */}
              <div className="absolute -bottom-4 right-2 sm:-bottom-5 sm:-right-4 z-20 bg-white/98 backdrop-blur-md py-3.5 px-5 rounded-2xl shadow-[0_12px_30px_-6px_rgba(0,0,0,0.12)] border border-[#EBF2F3] flex items-center gap-3.5 animate-soft-float">
                <div className="w-10 h-10 rounded-xl bg-[#E6F5F1] text-[#0D7C66] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#141B2D] leading-tight">
                    Doctor-led care
                  </h4>
                  <p className="text-[12px] text-[#64748B] mt-0.5 leading-tight">
                    Every visit, every detail
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Copy, Quote, Statistics & Link */}
          <div className="lg:col-span-7 pt-4 lg:pt-0">
            
            {/* Tagline */}
            <div className="text-[12px] sm:text-[13px] font-bold tracking-[0.18em] text-[#0D7C66] uppercase mb-4 font-sans">
              MEET YOUR DENTIST
            </div>

            {/* Headline matching exact two-tone styling */}
            <h2 className="text-[38px] sm:text-[46px] lg:text-[54px] font-bold text-[#141B2D] leading-[1.08] tracking-[-0.035em]">
              Care that feels <span className="text-[#0D8B75]">personal.</span>
            </h2>

            {/* Quote statement */}
            <p className="text-[17px] sm:text-[19px] font-bold text-[#141B2D] leading-[1.4] mt-6 sm:mt-7 mb-3">
              “Your comfort is not an extra. It is the foundation of good dentistry.”
            </p>

            {/* Bio paragraph */}
            <p className="text-[15px] sm:text-[16px] text-[#556377] leading-[1.68] max-w-xl mb-9">
              Dr. Neelam Dwivedi believes the best dental care starts with a conversation. Her approach combines precise clinical expertise with the warmth and patience that make every patient feel heard.
            </p>

            {/* 3 Metrics: 12+ / 8 / 2k+ */}
            <div className="flex flex-wrap items-center gap-8 sm:gap-14 mb-9 pt-2">
              <div>
                <div className="text-[32px] sm:text-[38px] font-extrabold text-[#0D7C66] leading-none tracking-tight">
                  12+
                </div>
                <div className="text-[13px] text-[#64748B] font-medium mt-1.5">
                  Years experience
                </div>
              </div>

              <div>
                <div className="text-[32px] sm:text-[38px] font-extrabold text-[#0D7C66] leading-none tracking-tight">
                  8
                </div>
                <div className="text-[13px] text-[#64748B] font-medium mt-1.5">
                  Specialities
                </div>
              </div>

              <div>
                <div className="text-[32px] sm:text-[38px] font-extrabold text-[#0D7C66] leading-none tracking-tight">
                  2k+
                </div>
                <div className="text-[13px] text-[#64748B] font-medium mt-1.5">
                  Smiles helped
                </div>
              </div>
            </div>

            {/* Action Link: Meet your smile care team */}
            <div>
              <button
                onClick={() => onOpenBooking && onOpenBooking('Consultation with Dr. Neelam Dwivedi')}
                className="inline-flex items-center gap-2 text-[15px] font-bold text-[#0D7C66] hover:text-[#0A6654] transition-colors group cursor-pointer"
              >
                <span>Meet your smile care team</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200 stroke-[2.4]" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

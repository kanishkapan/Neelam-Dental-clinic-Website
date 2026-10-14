import React from 'react';
import {
  Stethoscope,
  Syringe,
  Sparkles,
  ShieldCheck,
  Heart,
  Zap,
  Baby,
  Clock,
  ArrowRight,
} from 'lucide-react';

const servicesData = [
  {
    id: 'general-checkup',
    title: 'General Checkup',
    description: 'A gentle, thorough look at your oral health.',
    icon: Stethoscope,
  },
  {
    id: 'root-canal',
    title: 'Root Canal',
    description: 'Comfort-first care to save your natural tooth.',
    icon: Syringe,
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    description: 'Subtle, beautiful changes that feel like you.',
    icon: Sparkles,
  },
  {
    id: 'implants',
    title: 'Implants',
    description: 'Strong, natural-looking solutions made to last.',
    icon: ShieldCheck,
  },
  {
    id: 'braces-aligners',
    title: 'Braces & Aligners',
    description: 'A clear path to your confident new smile.',
    icon: Heart,
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    description: 'A brighter smile for your next big moment.',
    icon: Zap,
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    description: 'Warm, reassuring care for little smiles.',
    icon: Baby,
  },
  {
    id: 'emergency-care',
    title: 'Emergency Care',
    description: 'Prompt support when your smile needs it most.',
    icon: Clock,
  },
];

export default function Services({ onOpenBooking }) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F6FAF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 lg:mb-16">
          <div className="max-w-2xl">
            {/* Tagline */}
            <div className="text-[12px] sm:text-[13px] font-bold tracking-[0.18em] text-[#0D7C66] uppercase mb-4 font-sans">
              OUR SERVICES
            </div>

            {/* Headline matching exact 2-line styling */}
            <h2 className="text-[36px] sm:text-[44px] lg:text-[50px] font-bold leading-[1.12] tracking-[-0.03em]">
              <span className="text-[#141B2D] block">Thoughtful care for every</span>
              <span className="text-[#8B98A9] block font-medium">stage of your smile.</span>
            </h2>
          </div>

          {/* Right Subtitle matching exact text */}
          <div className="max-w-md lg:pb-2">
            <p className="text-[15px] sm:text-[16px] text-[#64748B] leading-[1.65]">
              From your first check-up to a complete smile transformation, every visit is designed around your comfort.
            </p>
          </div>
        </div>

        {/* 8-Card Grid matching exact 2x4 layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => onOpenBooking && onOpenBooking(service.title)}
                className="group bg-white rounded-[26px] p-7 transition-all duration-300 hover:shadow-[0_14px_34px_-10px_rgba(13,124,102,0.14)] hover:-translate-y-1 cursor-pointer border border-[#E9EEF0] flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  {/* Icon Container */}
                  <div className="w-11 h-11 rounded-xl bg-[#E6F5F1] text-[#0D7C66] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#0D7C66] group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[19px] font-bold text-[#141B2D] mb-2 group-hover:text-[#0D7C66] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13.5px] text-[#64748B] leading-[1.6]">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Right Arrow */}
                <div className="flex justify-end pt-5">
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#0D7C66] group-hover:translate-x-1 transition-all duration-200 stroke-[2]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

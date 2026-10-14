import React from 'react';
import { Heart, Sparkles, Clock, ShieldCheck, Zap, Award } from 'lucide-react';

const differenceItems = [
  {
    icon: Heart,
    title: 'Gentle treatment',
    description: 'A calm pace and a soft touch, from check-in to aftercare.',
  },
  {
    icon: Sparkles,
    title: 'Modern equipment',
    description: 'Thoughtful technology for accurate, comfortable treatment.',
  },
  {
    icon: Clock,
    title: 'Flexible timings',
    description: 'Your schedule matters. We make finding time for care easier.',
  },
  {
    icon: ShieldCheck,
    title: 'Sterile environment',
    description: 'The highest standards of hygiene, every single time.',
  },
  {
    icon: Zap,
    title: 'Emergency support',
    description: 'When you need us, we make space for you.',
  },
  {
    icon: Award,
    title: 'Clear guidance',
    description: 'No jargon. Just honest advice and transparent options.',
  },
];

export default function Difference() {
  return (
    <section className="py-20 lg:py-28 bg-[#F4F9F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 lg:mb-16">
          <div>
            {/* Tagline */}
            <div className="text-[12px] sm:text-[13px] font-bold tracking-[0.18em] text-[#0D7C66] uppercase mb-4 font-sans">
              THE NEELAM DIFFERENCE
            </div>

            {/* Headline matching exact two-tone styling */}
            <h2 className="text-[38px] sm:text-[46px] lg:text-[52px] font-bold leading-[1.1] tracking-[-0.035em]">
              <span className="text-[#141B2D]">Designed around </span>
              <span className="text-[#0D8B75]">you.</span>
            </h2>
          </div>

          {/* Right Subtitle matching exact text */}
          <div className="max-w-xs lg:pb-1">
            <p className="text-[14.5px] sm:text-[15.5px] text-[#64748B] leading-[1.6]">
              A calmer, clearer way to experience modern dentistry.
            </p>
          </div>
        </div>

        {/* 2x3 Architectural Grid with Thin Internal Divider Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#D5E8E2] rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm shadow-[0_4px_24px_-4px_rgba(13,124,102,0.04)]">
          {differenceItems.map((item, index) => {
            const Icon = item.icon;
            
            // Grid border logic for exact 2x3 layout
            const hasRightBorder = (index % 3) !== 2;
            const hasBottomBorderMd = index < 3;
            const hasBottomBorderMobile = index !== differenceItems.length - 1;

            return (
              <div
                key={index}
                className={`p-8 sm:p-9 transition-colors duration-200 hover:bg-[#F9FCFB] flex flex-col justify-between min-h-[200px] ${
                  hasRightBorder ? 'md:border-r border-[#D5E8E2]' : ''
                } ${
                  hasBottomBorderMd ? 'md:border-b border-[#D5E8E2]' : ''
                } ${
                  hasBottomBorderMobile ? 'border-b md:border-b-0 border-[#D5E8E2]' : ''
                }`}
              >
                <div>
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-[#E6F5F1] text-[#0D7C66] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[18px] font-bold text-[#141B2D] mb-2.5">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13.5px] text-[#64748B] leading-[1.6]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: 'What happens at my first visit?',
    answer:
      'We listen first, then complete a gentle examination and explain every option clearly. You leave with a simple, personalised plan.',
  },
  {
    id: 2,
    question: 'Do you accept insurance?',
    answer:
      'Yes, we support major health insurance networks and corporate reimbursement schemes. Our clinic provides all required dental diagnostic notes and itemized bills for seamless claim processing.',
  },
  {
    id: 3,
    question: 'Are emergency appointments available?',
    answer:
      'Yes. We reserve daily emergency slots for sudden severe toothaches, facial swelling, chipped teeth, and sports injuries. Call our helpline at 09009590693 for immediate assistance.',
  },
  {
    id: 4,
    question: 'Do you offer payment plans?',
    answer:
      'Yes. For comprehensive treatments such as dental implants, clear aligners, and complete smile rehabilitations, we provide flexible zero-interest EMI options and staged payment schedules.',
  },
];

export default function FAQ() {
  // First item open by default matching reference
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column matching exact reference */}
          <div className="lg:col-span-5">
            {/* Tagline */}
            <div className="text-[12px] sm:text-[13px] font-bold tracking-[0.18em] text-[#0D7C66] uppercase mb-4 font-sans">
              COMMON QUESTIONS
            </div>

            {/* Main Headline */}
            <h2 className="text-[30px] xs:text-[36px] sm:text-[46px] lg:text-[54px] font-bold text-[#141B2D] leading-[1.1] tracking-[-0.035em]">
              A little more <br />
              <span className="text-[#0D8B75]">peace of mind.</span>
            </h2>

            {/* Subtext with phone link */}
            <p className="mt-6 text-[15px] sm:text-[16px] text-[#64748B]">
              Can't find your answer? Call our team on{' '}
              <a
                href="tel:09009590693"
                className="font-bold text-[#0D7C66] hover:underline"
              >
                09009590693
              </a>
              .
            </p>
          </div>

          {/* Right Column: Clean Accordion */}
          <div className="lg:col-span-7 space-y-2">
            {faqData.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="border-b border-gray-200/80 py-5 transition-colors"
                >
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full flex items-center justify-between text-left group focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[17px] sm:text-[18px] font-bold text-[#141B2D] group-hover:text-[#0D7C66] transition-colors pr-4">
                      {item.question}
                    </span>
                    <span className="shrink-0 text-[#0D7C66]">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 stroke-[2.2]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 stroke-[2] text-gray-500 group-hover:text-[#0D7C66]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3.5 pr-6 animate-fadeIn">
                      <p className="text-[14.5px] sm:text-[15.5px] text-[#556377] leading-[1.68]">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

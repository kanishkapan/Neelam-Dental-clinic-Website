import React from 'react';
import { MapPin, Clock, Phone, MessageSquare, ArrowRight, ExternalLink } from 'lucide-react';

export default function VisitUs() {
  const addressQuery = encodeURIComponent(
    '1433, Kayasth Mohalla Rd, Near Bhawarlal, Bombay Bazar, Hari Phatak, Indore, Madhya Pradesh 453441'
  );
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;
  const mapEmbedUrl = `https://maps.google.com/maps?q=${addressQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#F4F9F7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Address, Hours, Phone & WhatsApp */}
          <div className="lg:col-span-5">
            {/* Tagline */}
            <div className="text-[12px] sm:text-[13px] font-bold tracking-[0.18em] text-[#0D7C66] uppercase mb-4 font-sans">
              VISIT US
            </div>

            {/* Main Headline */}
            <h2 className="text-[40px] sm:text-[48px] lg:text-[54px] font-bold text-[#141B2D] leading-[1.08] tracking-[-0.035em] mb-10">
              Come say <span className="text-[#0D8B75]">hello.</span>
            </h2>

            {/* 3 Detail Items */}
            <div className="space-y-7 sm:space-y-8">
              
              {/* Item 1: Address */}
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#0D7C66]">
                  <MapPin className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#141B2D]">
                    1433, Kayasth Mohalla Rd
                  </h4>
                  <p className="text-[14px] text-[#64748B] mt-0.5 leading-relaxed">
                    Near Bhawarlal, Bombay Bazar, <br />
                    Hari Phatak, Indore, M.P. 453441
                  </p>
                </div>
              </div>

              {/* Item 2: Timings */}
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#0D7C66]">
                  <Clock className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#141B2D]">
                    Mon – Sat · 9:00 AM – 7:00 PM
                  </h4>
                  <p className="text-[14px] text-[#64748B] mt-0.5">
                    Sunday by appointment
                  </p>
                </div>
              </div>

              {/* Item 3: Phone */}
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#0D7C66]">
                  <Phone className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <a
                    href="tel:09009590693"
                    className="text-[16px] font-bold text-[#141B2D] hover:text-[#0D7C66] transition-colors block"
                  >
                    09009590693
                  </a>
                  <p className="text-[14px] text-[#64748B] mt-0.5">
                    We're happy to help
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom WhatsApp Link */}
            <div className="mt-10 pt-2">
              <a
                href="https://wa.me/9109009590693?text=Hello%20Dr.%20Neelam%20Dwivedi,%20I%20would%20like%20to%20visit%20your%20clinic%20in%20Bombay%20Bazar,%20Indore."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 text-[15px] font-bold text-[#0D7C66] hover:text-[#0A6654] transition-colors group cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 stroke-[2.4]" />
                <span>Chat with us on WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform stroke-[2.4]" />
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Container with Interactive Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-[0_16px_45px_-12px_rgba(0,0,0,0.1)] border border-[#E2EBE6] bg-white h-[380px] sm:h-[420px] lg:h-[450px]">
              
              {/* Google Maps Iframe showing exact location in Bombay Bazar Indore */}
              <iframe
                title="Neelam Dental Clinic Location Indore"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              />

              {/* Floating Google Map Card matching reference UI */}
              <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-gray-100 max-w-[280px] sm:max-w-[310px] hidden sm:block">
                <h4 className="text-[15px] font-bold text-[#141B2D] leading-snug">
                  Bombay Bazar
                </h4>
                <p className="text-[12px] text-gray-500 mt-0.5 truncate">
                  Bombay Bazar, Indore, Madhya Pradesh...
                </p>
                <div className="text-[11px] text-gray-400 mt-0.5">
                  Neelam Dental Clinic
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#1A73E8] hover:bg-[#1557b0] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in Maps</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

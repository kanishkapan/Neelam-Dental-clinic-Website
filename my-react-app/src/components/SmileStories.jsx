import React, { useState } from 'react';
import { Sparkles, Eye, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Play } from 'lucide-react';

// Only using real images provided by the doctor/user in Images folder
import patientAfterSmile from '../assets/gallery/photo-6.jpg'; // Radiant smiling patient
import patientJoyLaugh from '../assets/gallery/photo-2.jpg';   // Overjoyed patient in clinic chair
import clinicalBridge from '../assets/gallery/photo-5.jpg';    // Precision ceramic bridge
import digital3DScan from '../assets/gallery/photo-7.jpg';     // 3D digital oral impression
import fullMouthAfter from '../assets/gallery/photo-1.jpg';    // Full mouth aesthetic smile
import digitalXray from '../assets/gallery/photo-4.jpg';       // Digital RVG X-ray
import beforeFullCase from '../assets/gallery/photo-3.jpg';    // Clinical before edentulous
import beforeBridgeCase from '../assets/gallery/photo-9.jpg';  // Clinical before missing teeth

export default function SmileStories({ onOpenBooking }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const realGallery = [
    {
      id: 1,
      image: patientAfterSmile,
      title: 'Full Smile Ceramic Restoration',
      category: 'Patient Smiles',
      tag: 'Smile Makeover',
      subtitle: 'Indore Patient',
      description: 'Restored natural aesthetics, radiant shade matching, and full chewing function.',
    },
    {
      id: 2,
      image: patientJoyLaugh,
      title: 'The Joy of a Confident Smile',
      category: 'Patient Smiles',
      tag: 'Senior Dental Care',
      subtitle: 'Clinic Treatment',
      description: 'Painless, gentle treatment giving our senior patient a reason to laugh without hesitation.',
    },
    {
      id: 3,
      image: clinicalBridge,
      title: 'Precision Fixed Ceramic Bridge',
      category: 'Restorations',
      tag: 'Fixed Prosthodontics',
      subtitle: 'Clinical Excellence',
      description: 'Seamless tooth contouring and natural gum margin adaptation.',
    },
    {
      id: 4,
      image: fullMouthAfter,
      title: 'Complete Aesthetic Alignment',
      category: 'Restorations',
      tag: 'Full Mouth Rehab',
      subtitle: 'Finished Outcome',
      description: 'Even bite force distribution with long-lasting ceramic durability.',
    },
    {
      id: 5,
      image: digital3DScan,
      title: 'Advanced 3D Digital Impressions',
      category: 'Technology',
      tag: '3D Diagnostics',
      subtitle: 'Zero Discomfort',
      description: 'No messy pastes — ultra-precise digital computer scans for custom crowns.',
    },
    {
      id: 6,
      image: digitalXray,
      title: 'Digital RVG Single-Sitting RCT',
      category: 'Technology',
      tag: 'Painless RCT',
      subtitle: 'Precision Root Canal',
      description: 'High-resolution digital verification showing complete apex obturation and preserved tooth structure.',
    },
  ];

  const filteredGallery =
    activeFilter === 'all'
      ? realGallery
      : realGallery.filter((item) => item.category === activeFilter);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FAFDFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section matching reference */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            {/* Tagline */}
            <div className="text-[12px] sm:text-[13px] font-bold tracking-[0.18em] text-[#0D7C66] uppercase mb-4 font-sans">
              REAL SMILE STORIES • INDORE CLINIC
            </div>

            {/* Headline */}
            <h2 className="text-[38px] sm:text-[46px] lg:text-[54px] font-bold leading-[1.08] tracking-[-0.035em]">
              <span className="text-[#141B2D] block">Small changes.</span>
              <span className="text-[#8B98A9] block font-medium">Big confidence.</span>
            </h2>
          </div>

          {/* Right Subtitle */}
          <div className="max-w-sm lg:pb-1">
            <p className="text-[14.5px] sm:text-[15.5px] text-[#64748B] leading-[1.6]">
              Real outcomes from Dr. Neelam Dwivedi's clinic. Beautiful outcomes begin with listening carefully and treating gently.
            </p>
          </div>
        </div>

        {/* Mosaic Layout using ONLY real clinic images */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch mb-16">
          
          {/* Left Tall Card: Patient Happy Smile */}
          <div
            onClick={() => setSelectedImage(patientAfterSmile)}
            className="md:col-span-5 relative group overflow-hidden rounded-[28px] sm:rounded-[34px] bg-zinc-900 shadow-[0_16px_36px_-10px_rgba(13,124,102,0.12)] min-h-[380px] lg:min-h-[480px] cursor-pointer"
          >
            <img
              src={patientAfterSmile}
              alt="Indore Patient Smile Result"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end p-6 sm:p-8">
              <div className="text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-[#0D7C66] text-white px-3 py-1 rounded-full mb-2.5 inline-block shadow-sm">
                  Real Indore Patient
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">Radiant Ceramic Smile</h3>
                <p className="text-xs sm:text-sm text-white/85 mt-1 max-w-sm">
                  Natural shade matching, seamless alignment, and comfortable chewing restored.
                </p>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Eye className="w-4 h-4" />
            </div>
          </div>

          {/* Center Column: Patient Laughing & Ceramic Bridge */}
          <div className="md:col-span-3 flex flex-col gap-5 sm:gap-6">
            {/* Overjoyed laughing patient */}
            <div
              onClick={() => setSelectedImage(patientJoyLaugh)}
              className="relative group overflow-hidden rounded-[24px] sm:rounded-[28px] bg-zinc-900 shadow-md h-full min-h-[220px] cursor-pointer"
            >
              <img
                src={patientJoyLaugh}
                alt="Happy Patient at Neelam Dental Clinic"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <div>
                  <span className="text-[10px] font-bold text-teal-300 uppercase tracking-wider">
                    Painless Care
                  </span>
                  <p className="text-xs sm:text-sm text-white font-bold">Pure Patient Joy</p>
                </div>
              </div>
            </div>

            {/* Ceramic Bridge */}
            <div
              onClick={() => setSelectedImage(clinicalBridge)}
              className="relative group overflow-hidden rounded-[24px] sm:rounded-[28px] bg-zinc-900 shadow-md h-full min-h-[220px] cursor-pointer"
            >
              <img
                src={clinicalBridge}
                alt="Fixed Ceramic Bridge"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <div>
                  <span className="text-[10px] font-bold text-teal-300 uppercase tracking-wider">
                    Restoration
                  </span>
                  <p className="text-xs sm:text-sm text-white font-bold">Custom Fixed Bridge</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Digital Scan & Full Mouth Alignment */}
          <div className="md:col-span-4 flex flex-col gap-5 sm:gap-6">
            {/* 3D Digital Technology */}
            <div
              onClick={() => setSelectedImage(digital3DScan)}
              className="relative group overflow-hidden rounded-[24px] sm:rounded-[28px] bg-zinc-900 shadow-md min-h-[200px] cursor-pointer"
            >
              <img
                src={digital3DScan}
                alt="3D Digital Scanner Impression"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-4">
                <div>
                  <span className="text-[10px] font-bold text-teal-300 uppercase tracking-wider">
                    Modern Tech
                  </span>
                  <p className="text-xs sm:text-sm text-white font-bold">3D Intraoral Digital Scan</p>
                </div>
              </div>
            </div>

            {/* Full Mouth Rehabilitation */}
            <div
              onClick={() => setSelectedImage(fullMouthAfter)}
              className="relative group overflow-hidden rounded-[24px] sm:rounded-[28px] bg-zinc-900 shadow-md min-h-[240px] cursor-pointer"
            >
              <img
                src={fullMouthAfter}
                alt="Full Mouth Rehabilitation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-4">
                <div>
                  <span className="text-[10px] font-bold text-teal-300 uppercase tracking-wider">
                    Full Smile Rehab
                  </span>
                  <p className="text-xs sm:text-sm text-white font-bold">Permanent Bite Restoration</p>
                  <p className="text-[11px] text-white/80">Balanced chewing & natural aesthetics</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Real Clinical Cases Gallery with Filter Pills */}
        <div className="pt-4 border-t border-gray-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-[#141B2D]">
                Verified Clinical Cases from Indore
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Performed by Dr. Neelam Dwivedi using single-sitting painless protocols.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {['all', 'Patient Smiles', 'Restorations', 'Technology'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeFilter === cat
                      ? 'bg-[#0D7C66] text-white shadow-sm'
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-[#0D7C66]/40'
                  }`}
                >
                  {cat === 'all' ? 'All Clinic Photos' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item.image)}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-200/80 hover:border-[#0D7C66]/50 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 overflow-hidden bg-zinc-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#0D7C66] shadow-sm">
                      {item.tag}
                    </div>
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <span className="bg-white/25 backdrop-blur-md p-2.5 rounded-full">
                        <Eye className="w-5 h-5" />
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-[11px] font-bold text-[#0D7C66] uppercase tracking-wider mb-1">
                      {item.subtitle}
                    </div>
                    <h4 className="text-[17px] font-bold text-[#141B2D] mb-2 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[13px] text-[#64748B] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0D7C66]">
                  <span>Click to view in HD</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Before / After Case Highlight Box */}
        <div className="mt-16 bg-gradient-to-br from-[#0D7C66] to-[#085546] rounded-3xl p-8 sm:p-10 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-xs font-bold uppercase tracking-wider text-teal-100 mb-3">
                Full Mouth Restoration Highlight
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold leading-snug">
                From missing teeth to complete smiling freedom
              </h3>
              <p className="mt-3 text-teal-100 text-sm sm:text-base leading-relaxed">
                Whether replacing one tooth or transforming an entire arch, Dr. Neelam Dwivedi designs every restoration to look natural, feel comfortable, and last for years.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold">
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-teal-300" /> Painless Procedure
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-teal-300" /> Natural Translucency
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-teal-300" /> Long-Term Warranty
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-end">
              <button
                onClick={() => onOpenBooking && onOpenBooking('Smile Transformation Assessment')}
                className="w-full sm:w-auto bg-white text-[#0D7C66] hover:bg-teal-50 px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer text-center"
              >
                Book Your Assessment
              </button>
              <a
                href="tel:09009590693"
                className="w-full sm:w-auto border border-white/30 text-white hover:bg-white/10 px-6 py-3.5 rounded-full font-bold text-sm transition-all text-center"
              >
                Call 09009590693
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* High-Definition Lightbox Preview Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-3xl max-h-[90vh] bg-zinc-900 rounded-3xl overflow-hidden p-2 shadow-2xl">
            <img
              src={selectedImage}
              alt="High definition clinical photo"
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
            />
            <div className="text-center py-3 text-xs text-gray-400 font-medium">
              Click anywhere to close full screen
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

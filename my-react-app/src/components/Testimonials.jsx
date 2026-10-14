import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

const reviews = [
  {
    name: 'Pooja Sharma',
    location: 'Vijay Nagar, Indore',
    rating: 5,
    treatment: 'Root Canal & Ceramic Crown',
    review:
      'I was terrified of getting a root canal, but Dr. Neelam made it completely painless! She explained every step patiently and the clinic is immaculately clean. Highly recommend her to anyone looking for a genuine dental doctor in Indore.',
  },
  {
    name: 'Rahul Verma',
    location: 'Palasia, Indore',
    rating: 5,
    treatment: 'Dental Implant & Smile Correction',
    review:
      'Had an implant done here last month. The precision and digital technology Dr. Neelam uses is world class. Minimal swelling, no pain, and my tooth feels totally natural. Superb doctor and courteous staff.',
  },
  {
    name: 'Anjali Agrawal',
    location: 'Bhawarkua, Indore',
    rating: 5,
    treatment: 'Teeth Whitening & Scaling',
    review:
      'Got laser whitening before my brother’s wedding. The results exceeded my expectations! My teeth look naturally bright and spotless. Very reasonable pricing with premium five-star clinic standards.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF7F4] text-[#0D7C66] text-xs font-bold tracking-wider uppercase mb-3">
              Patient Experiences
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141B2D] tracking-tight">
              Stories behind confident smiles
            </h2>
          </div>

          {/* Overall Rating Card */}
          <div className="flex items-center gap-4 bg-[#F8FAF9] border border-gray-200/80 rounded-2xl p-4 shrink-0 shadow-sm">
            <div className="text-3xl font-extrabold text-[#0D7C66]">4.9</div>
            <div>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                Based on 320+ verified Google Indore reviews
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAF9] rounded-3xl p-8 border border-gray-100 flex flex-col justify-between hover:shadow-lg hover:border-[#0D7C66]/30 transition-all duration-300"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#0D7C66]/20" />
                </div>

                <p className="text-[#475569] text-[15px] leading-relaxed italic mb-6">
                  "{item.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200/60">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h4 className="font-bold text-[#141B2D] text-base">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.location}</p>
                  </div>
                  <span className="text-[11px] font-semibold text-[#0D7C66] bg-[#EBF7F4] px-2.5 py-1 rounded-full whitespace-nowrap">
                    {item.treatment}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

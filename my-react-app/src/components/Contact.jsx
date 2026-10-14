import React, { useState } from 'react';
import { Calendar, Phone, Check, Shield, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dateTime: '',
    service: '',
    notes: '',
  });

  const servicesList = [
    'General Checkup & Consultation',
    'Single-Sitting Root Canal (Painless)',
    'Cosmetic Dentistry & Veneers',
    'Dental Implants & Fixed Bridge',
    'Clear Aligners & Braces',
    'Laser Teeth Whitening & Cleaning',
    'Pediatric Dentistry (Kids Care)',
    'Emergency Care & Toothache Relief',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Dr. Neelam Dwivedi,\nI would like to request an appointment at Neelam Dental Clinic.\n\n👤 Full Name: ${formData.name}\n📞 Phone: ${formData.phone}\n✉️ Email: ${formData.email || 'Not provided'}\n⏰ Preferred Date & Time: ${formData.dateTime || 'Flexible'}\n🦷 Service: ${formData.service || 'General Checkup'}\n📝 Notes: ${formData.notes || 'None'}`
    );
    return `https://wa.me/9109009590693?text=${text}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-br from-[#F3FAF7] via-[#F8FCFA] to-[#EAF6F2] relative overflow-hidden">
      {/* Soft background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D1F2E8]/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C6ECE0]/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column matching exact reference */}
          <div className="lg:col-span-5">
            {/* Tagline */}
            <div className="text-[12px] sm:text-[13px] font-bold tracking-[0.18em] text-[#0D7C66] uppercase mb-4 font-sans">
              YOUR NEXT STEP
            </div>

            {/* Main Heading with 'smile?' highlighted in teal */}
            <h2 className="text-[30px] xs:text-[36px] sm:text-[48px] lg:text-[54px] font-bold text-[#141B2D] leading-[1.1] tracking-[-0.035em]">
              Ready to feel good <br />
              about your <span className="text-[#0D8B75]">smile?</span>
            </h2>

            {/* Subtext */}
            <p className="mt-4 sm:mt-5 text-[15px] sm:text-[16.5px] text-[#64748B] leading-[1.65] max-w-md">
              Share a few details and our team will call you to find a time that feels right.
            </p>

            <div className="w-full h-[1px] bg-gray-200/80 my-6 sm:my-8 max-w-md" />

            {/* Trust point 1 */}
            <div className="flex items-start gap-3.5 mb-6 sm:mb-7">
              <div className="mt-0.5 text-[#0D7C66]">
                <Check className="w-5 h-5 stroke-[2.8]" />
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-[#141B2D]">
                  No pressure, ever.
                </h4>
                <p className="text-[13px] text-[#64748B] mt-0.5">
                  Just a friendly conversation about your care.
                </p>
              </div>
            </div>

            {/* Trust point 2: Prefer to talk now? */}
            <div className="flex items-start gap-3.5">
              <div className="mt-0.5 text-[#0D7C66]">
                <Phone className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <div className="text-[14px] font-semibold text-[#0D7C66]">
                  Prefer to talk now?
                </div>
                <a
                  href="tel:09009590693"
                  className="text-[17px] font-bold text-[#141B2D] hover:text-[#0D7C66] transition-colors mt-0.5 block tracking-tight"
                >
                  09009590693
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Form Card matching reference */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[28px] sm:rounded-[36px] p-5 sm:p-10 shadow-[0_20px_50px_-12px_rgba(13,124,102,0.12)] border border-[#E5EFEA] relative">
              
              {/* Card Header: BOOK AN APPOINTMENT + Calendar Icon */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.16em] text-[#0D7C66] uppercase">
                  BOOK AN APPOINTMENT
                </span>
                <Calendar className="w-5 h-5 text-[#0D7C66] stroke-[2]" />
              </div>

              {/* Card Title */}
              <h3 className="text-[24px] sm:text-[30px] font-bold text-[#141B2D] mb-5 sm:mb-6 tracking-tight">
                Let's find your time.
              </h3>

              {submitted ? (
                <div className="py-8 text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#EBF7F4] text-[#0D7C66] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-9 h-9 stroke-[2.4]" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#141B2D]">Appointment Requested!</h4>
                  <p className="text-[#64748B] text-sm mt-2 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Our clinic team will reach you at <strong>{formData.phone}</strong> shortly to confirm your slot.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-full text-sm shadow-md transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send to Doctor via WhatsApp</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          dateTime: '',
                          service: '',
                          notes: '',
                        });
                      }}
                      className="py-3 px-6 text-gray-500 hover:text-gray-800 text-sm font-semibold"
                    >
                      Book Another Slot
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Row 1: Full name & Phone number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">
                        Full name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200/90 bg-[#F9FBFA] focus:bg-white text-[16px] sm:text-sm text-[#141B2D] focus:border-[#0D7C66] focus:ring-2 focus:ring-[#0D7C66]/15 outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="09009 590693"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200/90 bg-[#F9FBFA] focus:bg-white text-[16px] sm:text-sm text-[#141B2D] focus:border-[#0D7C66] focus:ring-2 focus:ring-[#0D7C66]/15 outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email address & Preferred date & time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">
                        Email address
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200/90 bg-[#F9FBFA] focus:bg-white text-[16px] sm:text-sm text-[#141B2D] focus:border-[#0D7C66] focus:ring-2 focus:ring-[#0D7C66]/15 outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">
                        Preferred date & time
                      </label>
                      <input
                        type="datetime-local"
                        value={formData.dateTime}
                        onChange={(e) => setFormData({ ...formData, dateTime: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200/90 bg-[#F9FBFA] focus:bg-white text-[16px] sm:text-sm text-[#141B2D] focus:border-[#0D7C66] focus:ring-2 focus:ring-[#0D7C66]/15 outline-none transition-all text-gray-600"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service needed */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Service needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200/90 bg-[#F9FBFA] focus:bg-white text-[16px] sm:text-sm text-[#141B2D] focus:border-[#0D7C66] focus:ring-2 focus:ring-[#0D7C66]/15 outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      {servicesList.map((svc) => (
                        <option key={svc} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Row 4: Notes (optional) */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Notes <span className="text-xs font-normal text-gray-400">(optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us anything that would help us prepare..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200/90 bg-[#F9FBFA] focus:bg-white text-[16px] sm:text-sm text-[#141B2D] focus:border-[#0D7C66] focus:ring-2 focus:ring-[#0D7C66]/15 outline-none transition-all placeholder:text-gray-400 resize-none"
                    />
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-[#0D7C66] hover:bg-[#0A6654] text-white py-4 px-6 rounded-2xl sm:rounded-full font-bold text-[15px] shadow-[0_6px_20px_rgba(13,124,102,0.25)] hover:shadow-[0_8px_25px_rgba(13,124,102,0.35)] transition-all duration-200 active:scale-98 cursor-pointer"
                    >
                      <span>Request my appointment</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.4]" />
                    </button>
                  </div>

                  {/* Privacy statement */}
                  <div className="text-center pt-2">
                    <p className="text-[11.5px] text-gray-400 flex items-center justify-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-gray-400" />
                      <span>Your details are private and only used to arrange your appointment.</span>
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

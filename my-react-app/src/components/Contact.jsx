import React, { useState } from 'react';
import { Phone, MapPin, Clock, Mail, CheckCircle2, Send, MessageSquare } from 'lucide-react';

export default function Contact({ onOpenBooking }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#F8FAF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF7F4] text-[#0D7C66] text-xs font-bold tracking-wider uppercase mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141B2D] tracking-tight">
            Visit Neelam Dental Clinic
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B]">
            Conveniently located in Indore. Book your slot online or call us directly for prompt assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Clinic Contact & Hours Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0D7C66] to-[#085546] text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Clinic Information</h3>
              <p className="text-teal-100 text-sm mb-8">
                Dr. Neelam Dwivedi and team are here to answer all your dental queries.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-teal-200" />
                  </div>
                  <div>
                    <div className="text-xs text-teal-200 uppercase font-semibold">Direct Call / WhatsApp</div>
                    <a
                      href="tel:09009590693"
                      className="text-lg font-bold hover:underline hover:text-white transition-colors"
                    >
                      09009590693
                    </a>
                    <div className="text-xs text-teal-100/80 mt-0.5">Quick telephone appointments available</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-teal-200" />
                  </div>
                  <div>
                    <div className="text-xs text-teal-200 uppercase font-semibold">Location</div>
                    <p className="text-[15px] font-medium leading-snug">
                      Neelam Dental Clinic, Near Main Square, Indore, Madhya Pradesh
                    </p>
                    <div className="text-xs text-teal-100/80 mt-0.5">Ample patient parking available</div>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-teal-200" />
                  </div>
                  <div>
                    <div className="text-xs text-teal-200 uppercase font-semibold">Consultation Hours</div>
                    <p className="text-sm font-semibold">Mon – Sat:</p>
                    <p className="text-xs text-teal-100">Morning: 10:00 AM – 2:00 PM</p>
                    <p className="text-xs text-teal-100">Evening: 5:00 PM – 9:00 PM</p>
                    <p className="text-xs text-teal-200 font-semibold mt-1">Sunday: By Pre-appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action */}
            <div className="mt-8 pt-6 border-t border-white/15">
              <a
                href="https://wa.me/9109009590693?text=Hello%20Dr.%20Neelam%20Dwivedi,%20I%20would%20like%20to%20inquire%20about%20a%20dental%20appointment."
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg transition-colors cursor-pointer text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp (09009590693)</span>
              </a>
            </div>
          </div>

          {/* Quick Message / Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#141B2D]">Send a Quick Message</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Have a question about fees, procedure, or availability? Drop a note below.
                  </p>
                </div>
              </div>

              {submitted ? (
                <div className="bg-[#EBF7F4] border border-[#0D7C66]/30 text-[#0D7C66] p-6 rounded-2xl flex items-center gap-4 animate-fadeIn">
                  <CheckCircle2 className="w-8 h-8 shrink-0" />
                  <div>
                    <h4 className="font-bold text-base">Message Sent Successfully!</h4>
                    <p className="text-xs text-[#0D7C66]/90 mt-1">
                      Our clinic reception will call or WhatsApp you at {formData.phone || 'your number'} shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Patel"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0D7C66] focus:ring-2 focus:ring-[#0D7C66]/10 text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0987654321"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0D7C66] focus:ring-2 focus:ring-[#0D7C66]/10 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      How Can We Help You?
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your toothache, required treatment, or preferred appointment slot..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0D7C66] focus:ring-2 focus:ring-[#0D7C66]/10 text-sm transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0D7C66] hover:bg-[#0A6654] text-white px-8 py-3.5 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                    
                    <span className="text-xs text-gray-500">
                      Or call directly: <strong className="text-[#0D7C66]">09009590693</strong>
                    </span>
                  </div>
                </form>
              )}
            </div>

            {/* Emergency Notice */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center gap-1.5 font-medium text-amber-700">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                Dental Emergency? Priority slots available daily.
              </span>
              <button
                type="button"
                onClick={onOpenBooking}
                className="text-[#0D7C66] font-bold underline cursor-pointer"
              >
                Instant Book
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

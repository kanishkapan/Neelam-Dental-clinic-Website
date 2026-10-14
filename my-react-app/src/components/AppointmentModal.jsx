import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';

export default function AppointmentModal({ isOpen, onClose, initialService }) {
  const [step, setStep] = useState('form'); // 'form' or 'confirmed'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService || 'General Consultation & Digital Checkup',
    date: new Date().toISOString().split('T')[0],
    slot: 'Evening: 6:00 PM - 7:00 PM',
    note: '',
  });

  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const services = [
    'General Checkup',
    'Root Canal',
    'Cosmetic Dentistry',
    'Implants',
    'Braces & Aligners',
    'Teeth Whitening',
    'Pediatric Dentistry',
    'Emergency Care',
    'General Consultation & Digital Checkup',
  ];

  const slots = [
    'Morning: 10:30 AM - 11:30 AM',
    'Morning: 12:00 PM - 1:00 PM',
    'Evening: 5:30 PM - 6:30 PM',
    'Evening: 6:30 PM - 7:30 PM',
    'Evening: 7:30 PM - 8:30 PM',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('confirmed');
  };

  const resetAndClose = () => {
    setStep('form');
    onClose();
  };

  const getWhatsAppBookingUrl = () => {
    const text = encodeURIComponent(
      `Hello Dr. Neelam Dwivedi,\nI would like to book an appointment at Neelam Dental Clinic.\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n🦷 Service: ${formData.service}\n📅 Date: ${formData.date}\n⏰ Slot: ${formData.slot}\n📝 Note: ${formData.note || 'None'}`
    );
    return `https://wa.me/9109009590693?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100 transform transition-all"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 text-gray-500 hover:text-gray-900 hover:bg-gray-200 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold text-[#0D7C66] tracking-wider uppercase bg-[#EBF7F4] px-3 py-1 rounded-full">
                Neelam Dental Clinic • Indore
              </span>
              <h3 className="text-2xl font-bold text-[#141B2D] mt-2.5">
                Book Your Dental Appointment
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Consult with Dr. Neelam Dwivedi. No advance payment required.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#0D7C66] focus:ring-2 focus:ring-[#0D7C66]/15 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Phone Number (For Confirmation) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#0D7C66] focus:ring-2 focus:ring-[#0D7C66]/15 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Dental Concern / Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:border-[#0D7C66] focus:ring-2 focus:ring-[#0D7C66]/15 outline-none"
                >
                  {services.map((svc) => (
                    <option key={svc} value={svc}>
                      {svc}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#0D7C66] focus:ring-2 focus:ring-[#0D7C66]/15 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Time Slot
                  </label>
                  <select
                    value={formData.slot}
                    onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:border-[#0D7C66] focus:ring-2 focus:ring-[#0D7C66]/15 outline-none"
                  >
                    {slots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Additional Note (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Bleeding gum, mild sensitivity..."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 text-sm focus:border-[#0D7C66] focus:ring-2 focus:ring-[#0D7C66]/15 outline-none"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#0D7C66] hover:bg-[#0A6654] text-white py-3.5 px-6 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer active:scale-95"
                >
                  <span>Confirm Appointment Slot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-[#EBF7F4] text-[#0D7C66] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>

            <h3 className="text-2xl font-bold text-[#141B2D]">Appointment Requested!</h3>
            <p className="text-gray-600 text-sm mt-2 max-w-sm mx-auto">
              Thank you, <strong>{formData.name}</strong>. Dr. Neelam Dwivedi’s clinic reception has received your request for:
            </p>

            <div className="bg-[#F8FAF9] border border-gray-200 rounded-2xl p-4 my-6 text-left text-sm space-y-1.5">
              <div className="flex justify-between">
                <span className="text-gray-500">Service:</span>
                <span className="font-semibold text-gray-800">{formData.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Date:</span>
                <span className="font-semibold text-gray-800">{formData.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Slot:</span>
                <span className="font-semibold text-gray-800">{formData.slot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Clinic Helpline:</span>
                <span className="font-bold text-[#0D7C66]">09009590693</span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-full text-sm shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send to Doctor via WhatsApp</span>
              </a>

              <button
                onClick={resetAndClose}
                className="w-full py-2.5 text-gray-500 hover:text-gray-800 text-sm font-medium cursor-pointer"
              >
                Done / Return to Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

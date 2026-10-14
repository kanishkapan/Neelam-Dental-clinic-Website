import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Difference from './components/Difference';
import AboutDoctor from './components/AboutDoctor';
import SmileStories from './components/SmileStories';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import VisitUs from './components/VisitUs';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import { Phone, Calendar } from 'lucide-react';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenBooking = (service = '') => {
    setSelectedService(service);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#1E293B] flex flex-col font-sans selection:bg-[#0D7C66] selection:text-white relative">
      {/* Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Exact Hero Section as in reference */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Specialized Dental Services matching reference */}
        <Services onOpenBooking={(service) => handleOpenBooking(service)} />

        {/* The Neelam Difference matching reference */}
        <Difference />

        {/* Detailed Profile of Dr. Neelam Dwivedi */}
        <AboutDoctor onOpenBooking={() => handleOpenBooking()} />

        {/* Smile Stories matching exact reference layout + real clinic photos */}
        <SmileStories onOpenBooking={(service) => handleOpenBooking(service)} />

        {/* Verified Patient Reviews */}
        <Testimonials />

        {/* Book Appointment Section (Before FAQ as requested) */}
        <Contact onOpenBooking={() => handleOpenBooking()} />

        {/* Common Questions / FAQ matching exact reference */}
        <FAQ />

        {/* Come Say Hello / Location & Google Map (After FAQ as requested) */}
        <VisitUs />
      </main>

      {/* Clinic Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking Modal */}
      <AppointmentModal
        isOpen={bookingOpen}
        initialService={selectedService}
        onClose={() => setBookingOpen(false)}
      />

      {/* Floating Call & Appointment Bar for Mobile Users */}
      <aside aria-label="Mobile quick actions" className="sm:hidden fixed bottom-4 left-4 right-4 z-40 flex items-center gap-2 p-1.5 bg-white/95 backdrop-blur-md rounded-full shadow-2xl border border-gray-200">
        <a
          href="tel:09009590693"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#EBF7F4] text-[#0D7C66] font-bold text-xs"
        >
          <Phone className="w-4 h-4 stroke-[2.2]" />
          <span>Call 09009590693</span>
        </a>
        <button
          onClick={() => setBookingOpen(true)}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-4 rounded-full bg-[#0D7C66] text-white font-bold text-xs shadow-md"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Slot</span>
        </button>
      </aside>
    </div>
  );
}
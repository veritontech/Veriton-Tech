import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function InfoPanel() {
  return (
    <div className="bg-gradient-to-r from-[#5063aa] to-[#a03593] text-white rounded-2xl p-8 text-white shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
      <p className="text-blue-100 mb-8 leading-relaxed">
        Have questions about our programs? We're here to help you start your journey in STEM education.
      </p>

      <div className="space-y-6">
        {/* Address */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin size={24} />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Visit Us</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Office Aid Building, S.T.P.I, Chikalthana,Aurangabad.Maharshtra, 431007
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail size={24} />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Email Us</h3>
            <a href="mailto:info@veriton.tech" className="text-blue-100 text-sm hover:text-white transition-colors">
              info@veriton.tech
            </a>
            {/* <br />
            <a href="mailto:admissions@veriton.edu" className="text-blue-100 text-sm hover:text-white transition-colors">
              admissions@veriton.tech
            </a> */}
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Phone size={24} />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Call Us</h3>
            <a href="tel:+1234567890" className="text-blue-100 text-sm hover:text-white transition-colors">
              +91 8055 7777 04
            </a>
            {/* <br />
            <span className="text-blue-100 text-sm">
              Toll Free: 1-800-VERITON
            </span> */}
          </div>
        </div>

        {/* Hours */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Clock size={24} />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Office Hours</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 4:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-8 pt-8 border-t border-white/20">
        <h3 className="font-semibold mb-4">Connect With Us</h3>
        <div className="flex gap-3">
          <a
            href="#"
            className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

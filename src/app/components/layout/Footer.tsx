import {Facebook,Twitter,Linkedin,Instagram,Mail,Phone,MapPin,} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div
              className="flex items-center cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <img
                src="/img/logoveri.png"
                alt="Veriton Logo"
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-gray-400 mb-4">
              Empowering the next generation with industry-aligned STEM education
              and real-world skills.
            </p>

            <div className="flex gap-3">
              <a className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
              <a className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>AI & Machine Learning</li>
              <li>Robotics</li>
              <li>IoT Systems</li>
              <li>Drone Technology</li>
              <li>Data Science</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-blue-400" />
                <span>
                  Office Aid Building, S.T.P.I, Chikalthana, Aurangabad,
                  Maharshtra, 431007
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0 text-blue-400" />
                <a
                  href="mailto:info@veriton.edu"
                  className="hover:text-blue-400 transition-colors"
                >
                  info@veriton.tech
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0 text-blue-400" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-blue-400 transition-colors"
                >
                  +91 8055 7777 04
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-gray-400">
            © 2026 Veriton. All rights reserved.
          </div>
          <div className="flex gap-6 text-gray-400">
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('terms')}
              className="hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onNavigate('cookies')}
              className="hover:text-blue-400 transition-colors"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

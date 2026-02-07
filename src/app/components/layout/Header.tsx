import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'Programs', page: 'programs' },
    { label: 'Market Needs', page: 'market-needs' },
    { label: 'Solutions', page: 'solutions' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <header className="sticky top-0 bg-[#f8f9fa] border-b border-gray-800/50 backdrop-blur-lg z-40 shadow-xl shadow-[#5063aa]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img
              src="/img/logoveri.png"   // change path if needed
              alt="Veriton Logo"
              className="h-13 w-auto object-contain"
            />
          </div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`text-sm font-medium transition-colors relative ${
                  currentPage === item.page
                    ? 'text-[#a03593]'
                    : 'text-gray-800 hover:text-[#a03593]'
                }`}
              >
                {item.label}
                {currentPage === item.page && (
                  <div className="absolute -bottom-6 left-0 right-0 h-1 bg-gradient-to-r from-[#5063aa] to-[#a03593] rounded-full"></div>
                )}
              </button>
            ))}

            {/* Sign In Button (Desktop) */}
            <button
              onClick={() => window.open('https://lms.veriton.tech/userlogin/', '_blank')}
              className="ml-4 px-5 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-[#5063aa] to-[#a03593] hover:opacity-90 transition"
            >
              Sign In
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f8f9fa] border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  onNavigate(item.page);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  currentPage === item.page
                    ? 'bg-gradient-to-r from-[#5063aa] to-[#a03593] text-white'
                    : 'bg-[#0a0a0f] text-gray-300 hover:bg-[#2a2a3e] border border-gray-700/50'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Sign In Button (Mobile) */}
            <button
              onClick={() => {
                window.open('https://lms.veriton.tech/userlogin/', '_blank');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-[#5063aa] to-[#a03593] hover:opacity-90 transition"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

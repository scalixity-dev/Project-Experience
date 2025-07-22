import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Course', 'Pricing', 'Tutor', 'Admission', 'About'];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'glass shadow-lg border-b border-white/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 animate-fade-in">
            <h1 className="text-2xl lg:text-3xl font-black text-gray-900 tracking-tight">
              EduFlex<span className="text-gradient">.</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <li 
                  key={item}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-900 hover:text-[#AC8E60] font-medium text-sm tracking-wide transition-all duration-300 hover:scale-105 link-hover uppercase"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="hidden lg:block bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-[#AC8E60] transition-all duration-300 magnetic-btn ripple-button shadow-lg hover:shadow-xl">
              Contact
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 rounded-xl text-gray-900 hover:text-[#AC8E60] hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-500 ease-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-6 space-y-4 glass rounded-2xl mx-4 mb-4 px-6">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 text-gray-900 hover:text-[#AC8E60] rounded-lg font-medium transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
              </a>
            ))}
            <button className="w-full mt-6 bg-gradient-to-r from-[#AC8E60] to-[#B59F84] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg">
              Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
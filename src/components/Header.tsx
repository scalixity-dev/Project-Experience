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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 animate-fade-in">
            <h1 className="text-2xl lg:text-3xl font-bold text-violet-500">
              EduFlex<span className="text-violet-400">.</span>
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
                    className="text-gray-600 hover:text-violet-600 font-medium transition-all duration-300 hover:scale-105 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="hidden lg:block border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-full font-medium hover:border-violet-500 hover:text-violet-600 transition-all duration-300 hover:scale-105 hover:shadow-md animate-fade-in">
              Contact
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-violet-600 hover:bg-gray-100 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-3">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 text-gray-600 hover:text-violet-600 hover:bg-violet-50 rounded-lg font-medium transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full mt-4 border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-full font-medium hover:border-violet-500 hover:text-violet-600 transition-all duration-300">
              Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
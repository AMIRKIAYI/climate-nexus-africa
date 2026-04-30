
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Leaf, Map, BookOpen, Phone, Mail, Clock } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '/about',
      dropdown: [
        { name: 'Our Team', path: '/team' },
        { name: 'Vision & Mission', path: '/vision-mission' },
        { name: 'Our Impact', path: '/impact' },
      ]
    },
    { 
      name: 'Programs', 
      path: '/programs',
      dropdown: [
        { name: 'Climate Resilience', path: '/programs/climate-resilience', icon: Leaf },
        { name: 'GIS Training', path: '/programs/gis-training', icon: Map },
        { name: 'Digital Literacy', path: '/programs/digital-literacy', icon: BookOpen },
        { name: 'Teacher Training', path: '/training' },
      ]
    },
    { name: 'Training', path: '/training' },
    { name: 'Community', path: '/community' },
    { name: 'Contact', path: '/contact' },
  ];

  // Handle Partner With Us click - navigates to contact with partnership subject
  const handlePartnerClick = () => {
    // Store the partnership intent in sessionStorage
    sessionStorage.setItem('contactSubject', 'Partnership');
    // Navigate to contact page
    window.location.href = '/contact';
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-emerald-800 to-teal-800 text-white text-xs sm:text-sm">
        <div className="container-custom">
          <div className="flex justify-between items-center h-8 sm:h-10">
            {/* Left side - Contact Info - Hidden on mobile, shown on sm and up */}
            <div className="hidden sm:flex items-center space-x-4 md:space-x-6">
              <a href="tel:+254746743936" className="flex items-center space-x-1 md:space-x-2 hover:text-emerald-300 transition-colors">
                <Phone size={12} className="text-emerald-300" />
                <span>+254 746 743 936</span>
              </a>
              <a href="mailto:info@climatenexusafrica.org" className="flex items-center space-x-1 md:space-x-2 hover:text-emerald-300 transition-colors">
                <Mail size={12} className="text-emerald-300" />
                <span className="hidden lg:inline">info@climatenexusafrica.org</span>
                <span className="lg:hidden">Email</span>
              </a>
              <div className="hidden md:flex items-center space-x-2">
                <Clock size={12} className="text-emerald-300" />
                <span>Mon-Fri: 8AM-5PM</span>
              </div>
            </div>

            {/* Mobile Contact Toggle - Visible only on mobile */}
            <div className="sm:hidden flex items-center">
              <button 
                onClick={() => setShowContactInfo(!showContactInfo)}
                className="flex items-center space-x-1 text-white/90 hover:text-white"
              >
                <Phone size={14} />
                <span>Contact</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${showContactInfo ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Right side - Social Links or Quick Actions */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Link to="/training" className="hover:text-emerald-300 transition-colors font-medium">
                <span className="hidden xs:inline">BOOK</span> TRAINING
              </Link>
              <span className="text-emerald-700 hidden sm:inline">|</span>
              <Link to="/contact" className="hover:text-emerald-300 transition-colors font-medium hidden sm:inline">
                SUPPORT
              </Link>
              <Link to="/contact" className="sm:hidden">
                <Mail size={16} className="hover:text-emerald-300 transition-colors" />
              </Link>
            </div>
          </div>

          {/* Mobile Contact Info Dropdown */}
          <div className={`sm:hidden overflow-hidden transition-all duration-300 ${showContactInfo ? 'max-h-24 pb-2' : 'max-h-0'}`}>
            <div className="flex flex-col space-y-2 text-white/90 text-xs border-t border-white/10 pt-2">
              <a href="tel:+254746743936" className="flex items-center space-x-2 hover:text-white">
                <Phone size={12} className="text-emerald-300" />
                <span>+254 746 743 936</span>
              </a>
              <a href="mailto:info@climatenexusafrica.org" className="flex items-center space-x-2 hover:text-white">
                <Mail size={12} className="text-emerald-300" />
                <span>info@climatenexusafrica.org</span>
              </a>
              <div className="flex items-center space-x-2">
                <Clock size={12} className="text-emerald-300" />
                <span>Mon-Fri: 8:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer divs to prevent content from hiding under fixed elements */}
      <div className="h-8 sm:h-10"></div>
      <div className="h-16 sm:h-20"></div>
      
      <nav className={`fixed top-8 sm:top-10 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-1 sm:py-2' 
          : 'bg-white/90 backdrop-blur-sm shadow-md py-2 sm:py-4'
      }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="relative mr-1">
                <img 
                  src="/images/Nexus-logo.png" 
                  alt="Climate Nexus Africa" 
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                />
              </div>
              
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm sm:text-base md:text-xl text-gray-800 leading-tight">
                  CLIMATE <span className="hidden xs:inline">NEXUS</span>
                  <span className="xs:hidden">NEX</span>
                </span>
                
                <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 text-emerald-600 font-medium">
                  <div className="w-4 sm:w-6 md:w-8 h-[2px] bg-emerald-600 rounded-full"></div>
                  <span className="text-[10px] sm:text-xs md:text-sm tracking-wider">AFRICA</span>
                  <div className="w-4 sm:w-6 md:w-8 h-[2px] bg-emerald-600 rounded-full"></div>
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.dropdown ? (
                    <>
                      <button
                        className={`flex items-center space-x-1 px-3 xl:px-4 py-1.5 xl:py-2 rounded-lg text-sm xl:text-base text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300 ${
                          location.pathname.includes(link.path) ? 'text-emerald-600 bg-emerald-50' : ''
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {activeDropdown === link.name && (
                        <div className="absolute top-full left-0 mt-2 w-56 xl:w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fadeIn">
                          {link.dropdown.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                to={item.path}
                                className="flex items-center space-x-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                              >
                                {Icon && <Icon size={16} className="text-emerald-600" />}
                                <span>{item.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-3 xl:px-4 py-1.5 xl:py-2 rounded-lg text-sm xl:text-base text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300 ${
                        location.pathname === link.path ? 'text-emerald-600 bg-emerald-50' : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Partner With Us Button - Now using button with onClick */}
              <button
                onClick={handlePartnerClick}
                className="ml-2 xl:ml-4 relative group overflow-hidden rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 p-[2px] hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 cursor-pointer"
              >
                <div className="relative flex items-center space-x-2 rounded-lg bg-white px-4 xl:px-6 py-1.5 xl:py-2 text-gray-800 text-sm xl:text-base transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
                  <span className="font-semibold">Partner</span>
                  <span className="hidden xl:inline">With Us</span>
                </div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-100 hover:bg-emerald-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={18} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" /> : <Menu size={18} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-gray-50 rounded-xl p-3 sm:p-4 space-y-1 sm:space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="space-y-1 sm:space-y-2">
                      <div className="font-semibold text-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base">
                        {link.name}
                      </div>
                      <div className="pl-3 sm:pl-4 space-y-1 border-l-2 border-emerald-200">
                        {link.dropdown.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {Icon && <Icon size={14} className="text-emerald-600" />}
                              <span>{item.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base ${
                        location.pathname === link.path 
                          ? 'bg-emerald-100 text-emerald-700 font-semibold' 
                          : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <button
                onClick={() => {
                  setIsOpen(false);
                  handlePartnerClick();
                }}
                className="block w-full mt-3 sm:mt-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:from-emerald-500 hover:to-teal-500 transition-all"
              >
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
        
        @media (min-width: 480px) {
          .xs\\:inline {
            display: inline;
          }
          .xs\\:hidden {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <Link to="/" className="flex items-center group">
                          {/* Logo Image */}
                          <div className="relative mr-1">
                            <img 
                              src="/images/Nexus-logo.png" 
                              alt="Climate Nexus Africa" 
                              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                            />
                          </div>
                          
                          {/* Text with lines around AFRICA */}
                          <div className="flex flex-col">
                            <span className="font-display font-bold text-sm sm:text-base md:text-xl text-white leading-tight">
                              CLIMATE <span className="hidden xs:inline">NEXUS</span>
                              <span className="xs:hidden">NEX</span>
                            </span>
                            
                            {/* AFRICA with smooth solid lines */}
                            <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 text-emerald-600 font-medium">
                              <div className="w-4 sm:w-6 md:w-8 h-[2px] bg-emerald-600 rounded-full"></div>
                              <span className="text-[10px] sm:text-xs md:text-sm tracking-wider">AFRICA</span>
                              <div className="w-4 sm:w-6 md:w-8 h-[2px] bg-emerald-600 rounded-full"></div>
                            </div>
                          </div>
                        </Link>
            <p className="text-gray-400 mb-4">
              Empowering Africa's climate future through innovation, education, and community action.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-secondary transition">Home</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-secondary transition">Our Team</Link></li>
              <li><Link to="/training" className="text-gray-400 hover:text-secondary transition">Training</Link></li>
              <li><Link to="/community" className="text-gray-400 hover:text-secondary transition">Community</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-secondary transition">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Climate Resilience</li>
              <li className="text-gray-400">GIS Mapping</li>
              <li className="text-gray-400">Digital Literacy</li>
              <li className="text-gray-400">Teacher Training</li>
              <li className="text-gray-400">Youth Empowerment</li>
              <li className="text-gray-400">Research & Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <span className="text-gray-400">+254 746 743 936</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-primary flex-shrink-0" size={18} />
                <span className="text-gray-400">info@climatenexusafrica.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Climate Nexus Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

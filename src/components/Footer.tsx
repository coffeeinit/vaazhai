import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/programs', label: 'Programs' },
    { path: '/startups', label: 'Startups' }
  ];

  const supportLinks = [
    { path: '/join-us', label: 'Join Us' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
    { path: '/privacy', label: 'Privacy Policy' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <img 
              src="https://vaazhai.org/wp-content/uploads/2025/02/Vaazhai-Without-Backgrount-1024x461.png" 
              alt="Vaazhai Ventures" 
              className="h-12 w-auto filter brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed">
              Nurturing early-stage entrepreneurs with personalized mentorship, deep values, and practical support to build businesses that matter.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Tenkasi, Tamil Nadu, India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-emerald-400 flex-shrink-0" />
                <a 
                  href="mailto:contact@vaazhai.org" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  contact@vaazhai.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">+91 97870 30811</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Vaazhai Ventures. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Built with ❤️ for entrepreneurs everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
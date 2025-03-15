
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/83a4e191-27da-48e5-aee1-95ae7136736c.png" 
                alt="Health Care Nepal Logo" 
                className="h-12 w-auto" 
              />
              <span className="font-bold text-xl">Health Care Nepal</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for health services, old age care, and child care. 
              We connect patients with qualified healthcare professionals near you.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-health-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-health-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-health-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-health-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/home-care" className="text-gray-400 hover:text-health-green transition-colors flex items-center">
                  <Heart className="h-4 w-4 mr-2" /> Home Health Care
                </Link>
              </li>
              <li>
                <Link to="/services/old-age-care" className="text-gray-400 hover:text-health-green transition-colors flex items-center">
                  <Heart className="h-4 w-4 mr-2" /> Old Age Care
                </Link>
              </li>
              <li>
                <Link to="/services/child-care" className="text-gray-400 hover:text-health-green transition-colors flex items-center">
                  <Heart className="h-4 w-4 mr-2" /> Child Care
                </Link>
              </li>
              <li>
                <Link to="/services/doctor-visits" className="text-gray-400 hover:text-health-green transition-colors flex items-center">
                  <Heart className="h-4 w-4 mr-2" /> Doctor Home Visits
                </Link>
              </li>
              <li>
                <Link to="/services/nursing" className="text-gray-400 hover:text-health-green transition-colors flex items-center">
                  <Heart className="h-4 w-4 mr-2" /> Nursing Services
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-health-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-health-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-health-green transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/providers" className="text-gray-400 hover:text-health-green transition-colors">
                  For Providers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-health-green transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-health-green mt-0.5" />
                <span className="text-gray-400">
                  Pokhara-31, Rashi, Gandaki, Nepal
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-health-green" />
                <a href="tel:+9779856038440" className="text-gray-400 hover:text-health-blue transition-colors">
                  +977-9856038440
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-health-green" />
                <a href="mailto:healthcarenepal15@gmail.com" className="text-gray-400 hover:text-health-blue transition-colors">
                  healthcarenepal15@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-health-green" />
                <span className="text-gray-400">24/7 Emergency Services</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Health Care Nepal. All rights reserved. Regd. No.: 357224/81/82
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-health-green text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-health-green text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

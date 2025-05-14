import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-white mb-4">
              <Globe size={28} />
              <span>Wanderlust</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Discover the world with our expertly crafted tours. From bustling cities to serene landscapes, we make travel dreams come true.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-400 hover:text-white transition-colors duration-200">Destinations</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">Blog</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">FAQs</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/destinations/india" className="text-gray-400 hover:text-white transition-colors duration-200">India</Link>
              </li>
              <li>
                <Link to="/destinations/thailand" className="text-gray-400 hover:text-white transition-colors duration-200">Thailand</Link>
              </li>
              <li>
                <Link to="/destinations/japan" className="text-gray-400 hover:text-white transition-colors duration-200">Japan</Link>
              </li>
              <li>
                <Link to="/destinations/france" className="text-gray-400 hover:text-white transition-colors duration-200">France</Link>
              </li>
              <li>
                <Link to="/destinations/italy" className="text-gray-400 hover:text-white transition-colors duration-200">Italy</Link>
              </li>
              <li>
                <Link to="/destinations/australia" className="text-gray-400 hover:text-white transition-colors duration-200">Australia</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Travel Street, Wanderlust City, 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-500 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-500 flex-shrink-0" />
                <span className="text-gray-400">info@wanderlust.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Wanderlust. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
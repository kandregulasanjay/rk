import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo.png" alt="RK Liquid Detergent" className="h-10 w-auto" />
              <span className="font-heading font-bold text-xl text-sky-main">RK Liquid Detergent</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              RK Liquid Detergents - Founded in 2025. We provide premium quality liquid detergents, dish wash, and floor cleaners for every household. Quality you can trust.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/products?cat=Liquid Detergent" className="hover:text-sky-main transition-colors">Liquid Detergent</Link></li>
              <li><Link to="/products?cat=Dish Wash" className="hover:text-sky-main transition-colors">Dish Wash</Link></li>
              <li><Link to="/products?cat=Floor Cleaner" className="hover:text-sky-main transition-colors">Floor Cleaner</Link></li>
              <li><Link to="/products?cat=Combo" className="hover:text-sky-main transition-colors">Combo</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/how-to-use" className="hover:text-sky-main transition-colors">Dosage Guide</Link></li>
              <li><Link to="/laundry-tips" className="hover:text-sky-main transition-colors">Laundry Tips</Link></li>
              <li><Link to="/machine-guide" className="hover:text-sky-main transition-colors">Machine Guide</Link></li>
              <li><Link to="/about" className="hover:text-sky-main transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-sky-main mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+918332808881" className="hover:text-sky-main transition-colors block">+91 8332 808881</a>
                  <a href="tel:+918332808882" className="hover:text-sky-main transition-colors block">+91 8332 808882</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-sky-main flex-shrink-0" />
                <a href="mailto:rkdetergentesandliquids.in@gmail.com" className="hover:text-sky-main transition-colors break-all">rkdetergentesandliquids.in@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-sky-main mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-300 mb-1">Office:</p>
                  <p>DR NO 42-18, 42-17, 42-16, Maharani Agraharam Veedhi, Veda Samajam, Salur, Vizianagaram, Parvathi Puram Manyam, Andhra Pradesh - 535502</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-sky-main mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-300 mb-1">Factory:</p>
                  <p>P.Konavalasa (Village), Pachipenta (Mandal), Parvathipuram Manyam (Dist), Survey no-17</p>
                </div>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2025 RK Liquid Detergent. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
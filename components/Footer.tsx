import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#1a472a] to-[#0d2818] text-white pt-16 pb-8 relative overflow-hidden">
      {/* Christmas decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-green-600 to-red-600"></div>
      <div className="absolute top-10 left-10 text-4xl opacity-10">🎄</div>
      <div className="absolute top-20 right-20 text-3xl opacity-10">❄</div>
      <div className="absolute bottom-20 left-1/4 text-2xl opacity-10">🎁</div>
      <div className="absolute bottom-10 right-1/3 text-3xl opacity-10">⭐</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo.png" alt="RK Liquid Detergent" className="h-10 w-auto" />
              <span className="font-heading font-bold text-xl text-green-300">RK Liquid Detergent</span>
            </div>
            <p className="text-green-100/70 text-sm leading-relaxed">
              RK Liquid Detergents - Founded in 2025. We provide premium quality liquid detergents, dish wash, and floor cleaners for every household. Quality you can trust.
            </p>
            <p className="text-red-300 text-sm mt-3 font-medium">🎄 Wishing you a sparkling clean holiday season!</p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-green-300">Shop</h3>
            <ul className="space-y-2 text-sm text-green-100/70">
              <li><Link to="/products?cat=Liquid Detergent" className="hover:text-red-300 transition-colors">Liquid Detergent</Link></li>
              <li><Link to="/products?cat=Dish Wash" className="hover:text-red-300 transition-colors">Dish Wash</Link></li>
              <li><Link to="/products?cat=Floor Cleaner" className="hover:text-red-300 transition-colors">Floor Cleaner</Link></li>
              <li><Link to="/products?cat=Combo" className="hover:text-red-300 transition-colors">🎁 Combo</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-green-300">Support</h3>
            <ul className="space-y-2 text-sm text-green-100/70">
              <li><Link to="/how-to-use" className="hover:text-red-300 transition-colors">Dosage Guide</Link></li>
              <li><Link to="/laundry-tips" className="hover:text-red-300 transition-colors">Laundry Tips</Link></li>
              <li><Link to="/machine-guide" className="hover:text-red-300 transition-colors">Machine Guide</Link></li>
              <li><Link to="/about" className="hover:text-red-300 transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-green-300">Contact Us</h3>
            <ul className="space-y-3 text-sm text-green-100/70">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+918332808881" className="hover:text-red-300 transition-colors block">+91 8332 808881</a>
                  <a href="tel:+918332808882" className="hover:text-red-300 transition-colors block">+91 8332 808882</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-red-400 flex-shrink-0" />
                <a href="mailto:rkdetergentesandliquids.in@gmail.com" className="hover:text-red-300 transition-colors break-all">rkdetergentesandliquids.in@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-200 mb-1">Office:</p>
                  <p>DR NO 42-18, 42-17, 42-16, Maharani Agraharam Veedhi, Veda Samajam, Salur, Vizianagaram, Parvathi Puram Manyam, Andhra Pradesh - 535502</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-200 mb-1">Factory:</p>
                  <p>P.Konavalasa (Village), Pachipenta (Mandal), Parvathipuram Manyam (Dist), Survey no-17</p>
                </div>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-green-100/50 hover:text-red-300 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-green-100/50 hover:text-red-300 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-green-100/50 hover:text-red-300 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-green-100/50">
          <p>&copy; 2025 RK Liquid Detergent. All rights reserved. 🎄</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-red-300">Privacy Policy</a>
            <a href="#" className="hover:text-red-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
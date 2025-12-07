import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Droplet } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Droplet className="h-6 w-6 text-sky-main fill-current" />
              <span className="font-heading font-bold text-xl text-sky-main">CleanSky</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the power of a fresh clean with our eco-friendly, advanced formula detergents.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/products" className="hover:text-sky-main transition-colors">Liquid Detergent</Link></li>
              <li><Link to="/products" className="hover:text-sky-main transition-colors">Powder</Link></li>
              <li><Link to="/products" className="hover:text-sky-main transition-colors">Pods</Link></li>
              <li><Link to="/products" className="hover:text-sky-main transition-colors">Bundles</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/how-to-use" className="hover:text-sky-main transition-colors">Dosage Guide</Link></li>
              <li><Link to="/store-locator" className="hover:text-sky-main transition-colors">Store Locator</Link></li>
              <li><a href="#" className="hover:text-sky-main transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-sky-main transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Stay Fresh</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe for tips & offers.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-sky-main"
              />
              <button className="bg-sky-main hover:bg-sky-deep text-white px-4 py-2 rounded-r-md font-bold transition-colors">
                Go
              </button>
            </form>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2024 CleanSky Detergent. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
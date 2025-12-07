import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, ChevronDown } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigation = [
    {
      name: 'Shop',
      path: '/products',
      children: [
        { name: 'All Products', path: '/products' },
        { name: 'Liquid Detergent', path: '/products' },
        { name: 'Dish Wash', path: '/products' },
        { name: 'Floor Cleaner', path: '/products' },
      ]
    },
    {
      name: 'Laundry Tips',
      path: '/laundry-tips',
      children: [
        { name: 'How to Use / Dosage', path: '/how-to-use' },
        { name: 'Washing Tips', path: '/laundry-tips' },
      ]
    },
    {
      name: 'Machine 101',
      path: '/machine-guide',
      children: [
        { name: 'Guide to Washing Machines', path: '/machine-guide' },
        { name: 'Common Problems', path: '/machine-guide' },
      ]
    },
    {
      name: 'About',
      path: '/about',
      children: [
        { name: 'Share the Load', path: '/about#share-the-load' },
        { name: 'Sustainability', path: '/sustainability' },
      ]
    },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group">
              <img
                src="/images/logo.png"
                alt="CleanSky Logo"
                className="h-12 w-auto group-hover:scale-105 transition-transform"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative group h-20 flex items-center"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 text-sm font-bold uppercase tracking-wide transition-colors duration-200 ${
                    location.pathname.startsWith(item.path)
                      ? 'text-sky-main' 
                      : 'text-neutral-dark hover:text-sky-deep'
                  }`}
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {item.children && item.children.length > 0 && (
                  <div className="absolute top-20 left-0 w-64 bg-white shadow-xl border-t-2 border-sky-main rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top z-50">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className="block px-6 py-3 text-sm text-gray-600 hover:bg-sky-50 hover:text-sky-main transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link 
              to="/store-locator"
              className="text-sm font-bold uppercase tracking-wide text-neutral-dark hover:text-sky-deep transition-colors"
            >
              Where to Buy
            </Link>
          </div>

          {/* Icons / CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="relative cursor-pointer group">
              <ShoppingCart className="h-6 w-6 text-neutral-dark group-hover:text-sky-deep transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-sky-main text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </div>
            <Link 
              to="/products"
              className="bg-sky-main hover:bg-sky-deep text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Buy Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <div className="relative mr-4">
              <ShoppingCart className="h-6 w-6 text-neutral-dark" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-sky-main text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-dark hover:text-sky-main p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg h-screen overflow-y-auto pb-20 z-50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navigation.map((item) => (
              <div key={item.name} className="border-b border-gray-50 pb-2">
                <div className="flex justify-between items-center py-2">
                   <Link 
                     to={item.path} 
                     onClick={() => setIsOpen(false)}
                     className="text-lg font-bold text-neutral-dark"
                   >
                     {item.name}
                   </Link>
                   {item.children && item.children.length > 0 && <ChevronDown className="w-5 h-5 text-gray-400" />}
                </div>
                {item.children && item.children.length > 0 && (
                  <div className="pl-4 space-y-2 mt-1 mb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-sm font-medium text-gray-500 hover:text-sky-main"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
             <Link
                to="/store-locator"
                onClick={() => setIsOpen(false)}
                className="block py-3 text-lg font-bold text-neutral-dark border-b border-gray-50"
              >
                Where to Buy
              </Link>
            
            <div className="pt-6">
               <Link 
                to="/products"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-sky-main text-white px-4 py-4 rounded-lg font-bold text-lg shadow-md"
               >
                 Shop Now
               </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
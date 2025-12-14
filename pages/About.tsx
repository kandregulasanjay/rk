import React from 'react';
import { Heart, Users, Leaf, FlaskConical } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* About Us Hero */}
      <section className="relative py-20 bg-neutral-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-neutral-dark mb-6">RK Liquid Detergents - Founded 2025</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              RK Liquid Detergents is committed to delivering powerful cleaning solutions for every household. Our advanced formulas tackle tough stains while being gentle on fabrics and the environment.
            </p>
          </div>
        </div>
      </section>

      {/* Share the Load Section */}
      <section id="share-the-load" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                 <img src="/images/top-combo.jpg" alt="RK Liquid Detergent Products" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-sky-900/20"></div>
               </div>
            </div>
            <div className="w-full md:w-1/2">
               <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-4 py-2 rounded-full font-bold text-sm mb-6">
                 <Heart className="w-4 h-4 fill-current" /> Our Promise
               </div>
               <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-6">Share The Load</h2>
               <h3 className="text-xl font-medium text-sky-main mb-4">Quality cleaning for every home.</h3>
               <p className="text-gray-600 mb-6 leading-relaxed">
                 At RK Liquid Detergents, we believe in making laundry effortless for everyone. Our products are designed to deliver superior cleaning performance whether you use a top load or front load washing machine. Since our founding in 2025, we have been dedicated to providing affordable, high-quality detergents that every family can trust.
               </p>
               <div className="grid grid-cols-2 gap-6">
                  <div className="border-l-4 border-sky-main pl-4">
                    <span className="block text-3xl font-bold text-neutral-dark">2025</span>
                    <span className="text-sm text-gray-500">Year Founded</span>
                  </div>
                  <div className="border-l-4 border-sky-main pl-4">
                    <span className="block text-3xl font-bold text-neutral-dark">100%</span>
                    <span className="text-sm text-gray-500">Customer Satisfaction</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detergents & Ingredients */}
      <section className="py-20 bg-neutral-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Product Range</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              RK Liquid Detergents offers a complete range of cleaning solutions for your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-sky-500 transition-colors">
               <div className="bg-sky-900/50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                 <FlaskConical className="w-8 h-8 text-sky-400" />
               </div>
               <h3 className="text-xl font-bold mb-3">Liquid Detergent</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Our premium liquid detergents are formulated for both top load and front load machines. They dissolve quickly and penetrate deep into fabric fibers to remove stubborn stains effectively.
               </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-sky-500 transition-colors">
               <div className="bg-sky-900/50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                 <Leaf className="w-8 h-8 text-sky-400" />
               </div>
               <h3 className="text-xl font-bold mb-3">Dish Wash</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 RK Dish Wash cuts through grease and grime effortlessly, leaving your dishes sparkling clean. Gentle on hands yet tough on stubborn food residue.
               </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-sky-500 transition-colors">
               <div className="bg-sky-900/50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                 <Users className="w-8 h-8 text-sky-400" />
               </div>
               <h3 className="text-xl font-bold mb-3">Floor Cleaner</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Keep your floors spotless with RK Floor Cleaner. Our formula removes dirt, stains, and bacteria while leaving a fresh, long-lasting fragrance throughout your home.
               </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
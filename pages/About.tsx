import React from 'react';
import { Heart, Users, Leaf, FlaskConical } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* About Us Hero - Christmas Theme */}
      <section className="relative py-20 bg-gradient-to-r from-[#1a472a] via-[#2d5a3d] to-[#8B0000] overflow-hidden">
        <div className="absolute top-4 left-10 text-3xl opacity-20">❄</div>
        <div className="absolute top-8 right-20 text-2xl opacity-20">🎄</div>
        <div className="absolute bottom-4 left-1/4 text-2xl opacity-20">🎁</div>
        <div className="absolute bottom-8 right-1/3 text-3xl opacity-20">⭐</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">🎄 RK Liquid Detergents - Founded 2025</h1>
            <p className="text-xl text-green-100 leading-relaxed">
              RK Liquid Detergents is committed to delivering powerful cleaning solutions for every household. Our advanced formulas tackle tough stains while being gentle on fabrics and the environment.
            </p>
          </div>
        </div>
      </section>

      {/* Share the Load Section - Christmas Theme */}
      <section id="share-the-load" className="py-20 bg-gradient-to-b from-green-50 to-red-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 text-4xl opacity-10">🎄</div>
        <div className="absolute bottom-10 left-10 text-3xl opacity-10">❄</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-green-200">
                 <img src="/images/top-combo.jpg" alt="RK Liquid Detergent Products" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-green-900/10"></div>
               </div>
            </div>
            <div className="w-full md:w-1/2">
               <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold text-sm mb-6 border border-red-200">
                 <Heart className="w-4 h-4 fill-current" /> 🎁 Our Promise
               </div>
               <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-6">Share The Load</h2>
               <h3 className="text-xl font-medium text-green-700 mb-4">Quality cleaning for every home.</h3>
               <p className="text-gray-600 mb-6 leading-relaxed">
                 At RK Liquid Detergents, we believe in making laundry effortless for everyone. Our products are designed to deliver superior cleaning performance whether you use a top load or front load washing machine. Since our founding in 2025, we have been dedicated to providing affordable, high-quality detergents that every family can trust.
               </p>
               <div className="grid grid-cols-2 gap-6">
                  <div className="border-l-4 border-green-600 pl-4">
                    <span className="block text-3xl font-bold text-neutral-dark">2025</span>
                    <span className="text-sm text-gray-500">Year Founded</span>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <span className="block text-3xl font-bold text-neutral-dark">100%</span>
                    <span className="text-sm text-gray-500">Customer Satisfaction</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detergents & Ingredients - Christmas Theme */}
      <section className="py-20 bg-gradient-to-br from-[#1a472a] via-[#2d5a3d] to-[#8B0000] text-white relative overflow-hidden">
        <div className="absolute top-10 left-10 text-6xl opacity-10">🎄</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-10">🎁</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">🎁 Our Product Range</h2>
            <p className="text-green-100 max-w-2xl mx-auto">
              RK Liquid Detergents offers a complete range of cleaning solutions for your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-green-400/30 hover:border-green-400 transition-colors">
               <div className="bg-green-600/50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                 <FlaskConical className="w-8 h-8 text-green-200" />
               </div>
               <h3 className="text-xl font-bold mb-3">🎄 Liquid Detergent</h3>
               <p className="text-green-100 text-sm leading-relaxed">
                 Our premium liquid detergents are formulated for both top load and front load machines. They dissolve quickly and penetrate deep into fabric fibers to remove stubborn stains effectively.
               </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-red-400/30 hover:border-red-400 transition-colors">
               <div className="bg-red-600/50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                 <Leaf className="w-8 h-8 text-red-200" />
               </div>
               <h3 className="text-xl font-bold mb-3">🎁 Dish Wash</h3>
               <p className="text-green-100 text-sm leading-relaxed">
                 RK Dish Wash cuts through grease and grime effortlessly, leaving your dishes sparkling clean. Gentle on hands yet tough on stubborn food residue.
               </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-green-400/30 hover:border-green-400 transition-colors">
               <div className="bg-green-600/50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                 <Users className="w-8 h-8 text-green-200" />
               </div>
               <h3 className="text-xl font-bold mb-3">❄ Floor Cleaner</h3>
               <p className="text-green-100 text-sm leading-relaxed">
                 Keep your floors spotless with RK Floor Cleaner. Our formula removes dirt, stains, and bacteria while leaving a fresh, long-lasting fragrance throughout your home.
               </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
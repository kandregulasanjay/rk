import React from 'react';
import { Heart, Users, Leaf, FlaskConical } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* About Us Hero */}
      <section className="relative py-20 bg-neutral-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-neutral-dark mb-6">Redefining Clean Since 2024</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              CleanSky isn't just about removing stains. It's about innovating for a better future, where advanced cleaning power meets unwavering sustainability.
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
                 <img src="https://picsum.photos/seed/laundryfamily/800/600" alt="Family doing laundry" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-sky-900/20"></div>
               </div>
            </div>
            <div className="w-full md:w-1/2">
               <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-4 py-2 rounded-full font-bold text-sm mb-6">
                 <Heart className="w-4 h-4 fill-current" /> Community Initiative
               </div>
               <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-6">Share The Load</h2>
               <h3 className="text-xl font-medium text-sky-main mb-4">Because laundry is everyone's job.</h3>
               <p className="text-gray-600 mb-6 leading-relaxed">
                 We believe that a happy home is a shared home. Our "Share The Load" campaign encourages families to break gender stereotypes and share household chores equally. When we share the load, we share the love.
               </p>
               <div className="grid grid-cols-2 gap-6">
                  <div className="border-l-4 border-sky-main pl-4">
                    <span className="block text-3xl font-bold text-neutral-dark">85%</span>
                    <span className="text-sm text-gray-500">Moms feel relieved when dads help</span>
                  </div>
                  <div className="border-l-4 border-sky-main pl-4">
                    <span className="block text-3xl font-bold text-neutral-dark">1M+</span>
                    <span className="text-sm text-gray-500">Pledges to share chores</span>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Science Meets Nature</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Transparent ingredients. Powerful results. No hidden nasties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-sky-500 transition-colors">
               <div className="bg-sky-900/50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                 <FlaskConical className="w-8 h-8 text-sky-400" />
               </div>
               <h3 className="text-xl font-bold mb-3">Enzymatic Power</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 We use natural enzymes like Protease and Amylase that specifically target protein and starch stains, breaking them down at a molecular level without damaging fibers.
               </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-sky-500 transition-colors">
               <div className="bg-sky-900/50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                 <Leaf className="w-8 h-8 text-sky-400" />
               </div>
               <h3 className="text-xl font-bold mb-3">Plant-Based Surfactants</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Derived from coconut and palm oils (RSPO certified), our cleaning agents lift dirt effectively while being fully biodegradable and safe for aquatic life.
               </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-sky-500 transition-colors">
               <div className="bg-sky-900/50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                 <Users className="w-8 h-8 text-sky-400" />
               </div>
               <h3 className="text-xl font-bold mb-3">Hypoallergenic</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Free from optical brighteners, chlorine bleach, and artificial dyes. Dermatologically tested to be safe for sensitive skin and babies.
               </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
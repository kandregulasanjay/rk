import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { LAUNDRY_TIPS, STAINS } from '../services/data';

export const LaundryTips: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header - Christmas Theme */}
      <div className="bg-gradient-to-r from-[#1a472a] via-[#2d5a3d] to-[#8B0000] py-16 relative overflow-hidden">
        <div className="absolute top-4 left-10 text-3xl opacity-20">❄</div>
        <div className="absolute top-8 right-20 text-2xl opacity-20">🎄</div>
        <div className="absolute bottom-4 left-1/4 text-2xl opacity-20">🎁</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">🎄 Master the Art of Laundry</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
            From stubborn stains to delicate fabrics, we've got the expert advice you need.
          </p>
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="How do I remove red wine?"
              className="w-full pl-5 pr-12 py-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 border-2 border-green-200"
            />
            <button className="absolute right-2 top-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Stain Removal Grid - Christmas Theme */}
      {/* <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-heading font-bold text-neutral-dark">🎁 Stain Removal Guide</h2>
          <Link to="/article/t1" className="text-green-600 font-bold hover:underline">View Guide</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {STAINS.map((stain) => (
            <Link to="/article/t1" key={stain.name} className="bg-white border-2 border-green-100 shadow-sm rounded-xl p-6 text-center hover:shadow-md hover:border-green-300 cursor-pointer transition-all group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{stain.icon}</div>
              <h3 className="font-bold text-gray-700 text-sm">{stain.name}</h3>
            </Link>
          ))}
        </div>
      </section> */}

      {/* Articles Grid - Christmas Theme */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-red-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 text-4xl opacity-10">🎄</div>
        <div className="absolute bottom-10 left-10 text-3xl opacity-10">❄</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-heading font-bold text-neutral-dark mb-10">🎄 Latest Laundry Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {LAUNDRY_TIPS.map((tip) => (
              <Link to={`/article/${tip.id}`} key={tip.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col h-full group border-2 border-green-100 hover:border-green-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={tip.image} alt={tip.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {tip.category}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg text-neutral-dark mb-3 leading-tight group-hover:text-green-600 transition-colors">
                    {tip.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                    {tip.excerpt}
                  </p>
                  <div className="mt-auto">
                    <span className="text-green-600 font-bold text-sm hover:underline cursor-pointer">Read Article</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
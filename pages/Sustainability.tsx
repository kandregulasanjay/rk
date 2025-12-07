import React, { useEffect, useState } from 'react';
import { Droplet, Wind, RefreshCw, Heart } from 'lucide-react';

export const Sustainability: React.FC = () => {
  const [waterSaved, setWaterSaved] = useState(124500);
  
  // Simple counter animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setWaterSaved(prev => prev + Math.floor(Math.random() * 5));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-sky-main text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Clean Clothes, Cleaner Planet</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            We believe you shouldn't have to choose between tough cleaning power and environmental responsibility.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
             <div className="text-5xl font-bold text-sky-main mb-2">{waterSaved.toLocaleString()}</div>
             <div className="text-gray-500 font-medium">Liters of Water Saved This Year</div>
          </div>
          <div className="border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0">
             <div className="text-5xl font-bold text-green-500 mb-2">100%</div>
             <div className="text-gray-500 font-medium">Renewable Energy Manufacturing</div>
          </div>
          <div className="border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0">
             <div className="text-5xl font-bold text-blue-500 mb-2">50%</div>
             <div className="text-gray-500 font-medium">Recycled Ocean Plastic in Bottles</div>
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
           <div>
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                 <Droplet className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4">Cold Water Active</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Heating water accounts for up to 90% of the energy used in a laundry cycle. CleanSky is engineered to work perfectly at 30°C (86°F), helping you slash your carbon footprint with every wash.
              </p>
           </div>
           <div className="rounded-2xl overflow-hidden shadow-lg h-64 bg-gray-100">
             <img src="https://picsum.photos/seed/water/600/400" alt="Water splash" className="w-full h-full object-cover" />
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20 md:flex-row-reverse">
           <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg h-64 bg-gray-100">
             <img src="https://picsum.photos/seed/plastic/600/400" alt="Recycling" className="w-full h-full object-cover" />
           </div>
           <div className="order-1 md:order-2">
              <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                 <RefreshCw className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4">Circular Packaging</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We don't just recycle; we reuse. Our 'Loop' program allows you to return empty pods containers to participating retailers for refilling. Our cardboard boxes are 100% compostable.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};
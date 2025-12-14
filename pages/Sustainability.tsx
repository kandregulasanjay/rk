import React from 'react';
import { Droplet, RefreshCw, Heart } from 'lucide-react';

export const Sustainability: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-sky-main text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">RK Liquid Detergents - Quality You Can Trust</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            At RK Liquid Detergents, we are committed to providing high-quality cleaning products that deliver powerful results for your home.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
             <div className="text-5xl font-bold text-sky-main mb-2">2025</div>
             <div className="text-gray-500 font-medium">Year Founded</div>
          </div>
          <div className="border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0">
             <div className="text-5xl font-bold text-green-500 mb-2">100%</div>
             <div className="text-gray-500 font-medium">Quality Guaranteed</div>
          </div>
          <div className="border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0">
             <div className="text-5xl font-bold text-blue-500 mb-2">4+</div>
             <div className="text-gray-500 font-medium">Product Categories</div>
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
              <h2 className="text-3xl font-heading font-bold mb-4">Top Load Detergent</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                RK Liquid Detergent for top load machines is specially formulated with a rich lather formula that works effectively in high-water wash cycles. Our advanced cleaning agents penetrate deep into fabric fibers to remove tough stains while keeping your clothes soft and fresh.
              </p>
           </div>
           <div className="rounded-2xl overflow-hidden shadow-lg h-80 bg-gray-50 p-4 flex items-center justify-center">
             <img src="/images/top-combo.jpg" alt="RK Top Load Detergent Combo" className="max-w-full max-h-full object-contain" />
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20 md:flex-row-reverse">
           <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg h-80 bg-gray-50 p-4 flex items-center justify-center">
             <img src="/images/front-combo.jpg" alt="RK Front Load Detergent Combo" className="max-w-full max-h-full object-contain" />
           </div>
           <div className="order-1 md:order-2">
              <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                 <RefreshCw className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4">Front Load Detergent</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our front load liquid detergent is designed for low-water, high-efficiency washing machines. The concentrated formula produces controlled foam for optimal cleaning performance, ensuring your clothes come out spotless while protecting your machine from residue buildup.
              </p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
           <div>
              <div className="inline-block p-3 bg-pink-100 rounded-full mb-4">
                 <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4">Complete Home Care</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Beyond laundry, RK Liquid Detergents offers a complete range of home cleaning solutions including Dish Wash for sparkling utensils and Floor Cleaner for spotless floors. Our combo packs provide great value, giving you all the cleaning essentials your home needs in one convenient package.
              </p>
           </div>
           <div className="rounded-2xl overflow-hidden shadow-lg h-80 bg-gray-50 p-4 flex items-center justify-center">
             <img src="/images/combo2.jpg" alt="RK Complete Home Care Combo" className="max-w-full max-h-full object-contain" />
           </div>
        </div>
      </div>
    </div>
  );
};
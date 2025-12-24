import React from 'react';
import { Settings, AlertTriangle, WashingMachine, Check } from 'lucide-react';

export const MachineGuide: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-red-50 min-h-screen relative overflow-hidden">
      {/* Christmas decorations */}
      <div className="absolute top-40 left-10 text-4xl opacity-10">🎄</div>
      <div className="absolute top-60 right-10 text-3xl opacity-10">❄</div>
      <div className="absolute bottom-40 left-20 text-2xl opacity-10">🎁</div>
      <div className="absolute bottom-20 right-1/4 text-3xl opacity-10">⭐</div>

      <div className="bg-gradient-to-r from-[#1a472a] via-[#2d5a3d] to-[#8B0000] shadow-lg py-12 relative overflow-hidden">
        <div className="absolute top-2 left-10 text-2xl opacity-20">❄</div>
        <div className="absolute bottom-2 right-10 text-2xl opacity-20">🎄</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl font-heading font-bold text-white mb-2">🎄 Washing Machine Guide</h1>
          <p className="text-green-100 max-w-2xl">Everything you need to know to keep your machine running smoothly and your clothes looking their best.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">

        {/* Machine Types - Christmas Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-green-200">
             <div className="flex items-center gap-4 mb-6">
               <div className="bg-green-100 p-3 rounded-xl border border-green-200">
                 <WashingMachine className="w-8 h-8 text-green-600" />
               </div>
               <h2 className="text-2xl font-bold text-neutral-dark">🎄 Front Load</h2>
             </div>
             <ul className="space-y-3">
               <li className="flex items-start gap-2 text-gray-600">
                 <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                 <span>Uses less water and energy per load.</span>
               </li>
               <li className="flex items-start gap-2 text-gray-600">
                 <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                 <span>Gentler on clothes due to tumbling action.</span>
               </li>
               <li className="flex items-start gap-2 text-gray-600">
                 <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                 <span>Requires high-efficiency (HE) low-suds detergent like RK Liquid Detergent.</span>
               </li>
             </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-red-200">
             <div className="flex items-center gap-4 mb-6">
               <div className="bg-red-100 p-3 rounded-xl border border-red-200">
                 <Settings className="w-8 h-8 text-red-600" />
               </div>
               <h2 className="text-2xl font-bold text-neutral-dark">🎁 Top Load</h2>
             </div>
             <ul className="space-y-3">
               <li className="flex items-start gap-2 text-gray-600">
                 <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                 <span>Generally faster wash cycles.</span>
               </li>
               <li className="flex items-start gap-2 text-gray-600">
                 <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                 <span>Easier to load and add forgotten items mid-cycle.</span>
               </li>
               <li className="flex items-start gap-2 text-gray-600">
                 <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                 <span>Works well with RK Liquid Detergent.</span>
               </li>
             </ul>
          </div>
        </div>

        {/* Common Problems - Christmas Theme */}
        <div className="mb-12">
          <h2 className="text-3xl font-heading font-bold text-neutral-dark mb-8 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-500" /> ❄ Common Machine Problems
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                problem: "Bad Odor",
                cause: "Mold or residue buildup.",
                fix: "Run an empty hot cycle with vinegar or machine cleaner monthly. Leave the door open after washes."
              },
              {
                problem: "Clothes Too Wet",
                cause: "Spin cycle failure or overloading.",
                fix: "Check for unbalanced loads. Remove some items and run the spin cycle again. Check drain filter."
              },
              {
                problem: "Excessive Vibration",
                cause: "Unleveled machine.",
                fix: "Adjust the feet of the washing machine until it is perfectly level on the floor."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border-l-4 border-red-500 p-6 rounded-r-xl shadow-md">
                <h3 className="font-bold text-lg mb-2">{item.problem}</h3>
                <p className="text-sm text-gray-500 mb-4"><strong>Cause:</strong> {item.cause}</p>
                <p className="text-sm text-neutral-dark bg-gradient-to-r from-green-50 to-red-50 p-3 rounded border border-green-200"><strong>Quick Fix:</strong> {item.fix}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
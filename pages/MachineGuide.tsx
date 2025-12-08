import React from 'react';
import { Settings, AlertTriangle, WashingMachine, Check } from 'lucide-react';

export const MachineGuide: React.FC = () => {
  return (
    <div className="bg-neutral-light min-h-screen">
      <div className="bg-white shadow-sm py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-heading font-bold text-neutral-dark mb-2">Washing Machine Guide</h1>
          <p className="text-gray-500 max-w-2xl">Everything you need to know to keep your machine running smoothly and your clothes looking their best.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Machine Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
             <div className="flex items-center gap-4 mb-6">
               <div className="bg-sky-100 p-3 rounded-xl">
                 <WashingMachine className="w-8 h-8 text-sky-main" />
               </div>
               <h2 className="text-2xl font-bold text-neutral-dark">Front Load</h2>
             </div>
             <ul className="space-y-3">
               <li className="flex items-start gap-2 text-gray-600">
                 <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                 <span>Uses less water and energy per load.</span>
               </li>
               <li className="flex items-start gap-2 text-gray-600">
                 <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                 <span>Gentler on clothes due to tumbling action.</span>
               </li>
               <li className="flex items-start gap-2 text-gray-600">
                 <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                 <span>Requires high-efficiency (HE) low-suds detergent like CleanSky Liquid.</span>
               </li>
             </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
             <div className="flex items-center gap-4 mb-6">
               <div className="bg-sky-100 p-3 rounded-xl">
                 <Settings className="w-8 h-8 text-sky-main" />
               </div>
               <h2 className="text-2xl font-bold text-neutral-dark">Top Load</h2>
             </div>
             <ul className="space-y-3">
               <li className="flex items-start gap-2 text-gray-600">
                 <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                 <span>Generally faster wash cycles.</span>
               </li>
               <li className="flex items-start gap-2 text-gray-600">
                 <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                 <span>Easier to load and add forgotten items mid-cycle.</span>
               </li>
               <li className="flex items-start gap-2 text-gray-600">
                 <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                 <span>Works well with CleanSky Powder or Liquid.</span>
               </li>
             </ul>
          </div>
        </div>

        {/* Common Problems */}
        <div className="mb-12">
          <h2 className="text-3xl font-heading font-bold text-neutral-dark mb-8 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-yellow-500" /> Common Machine Problems
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
              <div key={idx} className="bg-white border-l-4 border-yellow-400 p-6 rounded-r-xl shadow-sm">
                <h3 className="font-bold text-lg mb-2">{item.problem}</h3>
                <p className="text-sm text-gray-500 mb-4"><strong>Cause:</strong> {item.cause}</p>
                <p className="text-sm text-neutral-dark bg-yellow-50 p-3 rounded"><strong>Quick Fix:</strong> {item.fix}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
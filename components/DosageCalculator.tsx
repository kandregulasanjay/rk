import React, { useState } from 'react';
import { WashingMachine, Shirt, Sparkles } from 'lucide-react';

export const DosageCalculator: React.FC = () => {
  const [loadSize, setLoadSize] = useState<'Small' | 'Medium' | 'Large'>('Medium');
  const [dirtLevel, setDirtLevel] = useState<'Light' | 'Normal' | 'Heavy'>('Normal');
  const [waterHardness, setWaterHardness] = useState<'Soft' | 'Hard'>('Soft');

  const calculateDosage = () => {
    let base = 35; // mL
    if (loadSize === 'Small') base -= 10;
    if (loadSize === 'Large') base += 15;
    
    if (dirtLevel === 'Heavy') base += 15;
    if (dirtLevel === 'Light') base -= 5;

    if (waterHardness === 'Hard') base += 10;

    return base;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div className="bg-sky-main p-6 text-white text-center">
        <h3 className="font-heading font-bold text-2xl mb-1">Perfect Dose Calculator</h3>
        <p className="opacity-90 text-sm">Stop wasting detergent. Find your perfect measure.</p>
      </div>

      <div className="p-6 md:p-8 space-y-8">
        
        {/* Load Size */}
        <div>
          <label className="block text-sm font-bold text-neutral-dark mb-3 flex items-center gap-2">
            <Shirt className="w-4 h-4 text-sky-main" /> Load Size
          </label>
          <div className="grid grid-cols-3 gap-3">
            {['Small', 'Medium', 'Large'].map((size) => (
              <button
                key={size}
                onClick={() => setLoadSize(size as any)}
                className={`py-2 px-3 rounded-lg text-sm font-medium border-2 transition-all ${
                  loadSize === size 
                    ? 'border-sky-main bg-sky-50 text-sky-main' 
                    : 'border-gray-200 text-gray-500 hover:border-sky-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Dirt Level */}
        <div>
          <label className="block text-sm font-bold text-neutral-dark mb-3 flex items-center gap-2">
             <Sparkles className="w-4 h-4 text-sky-main" /> Dirt Level
          </label>
          <div className="grid grid-cols-3 gap-3">
            {['Light', 'Normal', 'Heavy'].map((level) => (
              <button
                key={level}
                onClick={() => setDirtLevel(level as any)}
                className={`py-2 px-3 rounded-lg text-sm font-medium border-2 transition-all ${
                  dirtLevel === level
                    ? 'border-sky-main bg-sky-50 text-sky-main' 
                    : 'border-gray-200 text-gray-500 hover:border-sky-200'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Water Hardness */}
        <div>
          <label className="block text-sm font-bold text-neutral-dark mb-3 flex items-center gap-2">
             <WashingMachine className="w-4 h-4 text-sky-main" /> Water Type
          </label>
          <div className="flex gap-3">
            {['Soft', 'Hard'].map((type) => (
              <button
                key={type}
                onClick={() => setWaterHardness(type as any)}
                className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium border-2 transition-all ${
                  waterHardness === type
                    ? 'border-sky-main bg-sky-50 text-sky-main' 
                    : 'border-gray-200 text-gray-500 hover:border-sky-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Result */}
        <div className="bg-neutral-light rounded-xl p-6 text-center animate-pulse-once">
          <p className="text-gray-500 text-sm uppercase tracking-wide font-semibold mb-2">Recommended Dose</p>
          <div className="flex items-end justify-center gap-2 text-sky-main">
            <span className="text-5xl font-heading font-bold">{calculateDosage()}</span>
            <span className="text-xl font-medium mb-1">mL</span>
          </div>
          <p className="text-xs text-gray-400 mt-2">Based on CleanSky Liquid Advance formula</p>
        </div>

      </div>
    </div>
  );
};
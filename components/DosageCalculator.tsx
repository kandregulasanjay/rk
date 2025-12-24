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
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-green-200">
      {/* Christmas themed header */}
      <div className="bg-gradient-to-r from-[#1a472a] via-[#2d5a3d] to-[#8B0000] p-6 text-white text-center relative overflow-hidden">
        <div className="absolute top-2 left-4 text-xl opacity-30">❄</div>
        <div className="absolute top-2 right-4 text-xl opacity-30">🎄</div>
        <h3 className="font-heading font-bold text-2xl mb-1">🎁 Perfect Dose Calculator</h3>
        <p className="opacity-90 text-sm">Stop wasting detergent. Find your perfect measure.</p>
      </div>

      <div className="p-6 md:p-8 space-y-8">

        {/* Load Size */}
        <div>
          <label className="block text-sm font-bold text-neutral-dark mb-3 flex items-center gap-2">
            <Shirt className="w-4 h-4 text-green-600" /> Load Size
          </label>
          <div className="grid grid-cols-3 gap-3">
            {['Small', 'Medium', 'Large'].map((size) => (
              <button
                key={size}
                onClick={() => setLoadSize(size as any)}
                className={`py-2 px-3 rounded-lg text-sm font-medium border-2 transition-all ${
                  loadSize === size
                    ? 'border-green-600 bg-green-50 text-green-700'
                    : 'border-gray-200 text-gray-500 hover:border-green-300'
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
             <Sparkles className="w-4 h-4 text-red-500" /> Dirt Level
          </label>
          <div className="grid grid-cols-3 gap-3">
            {['Light', 'Normal', 'Heavy'].map((level) => (
              <button
                key={level}
                onClick={() => setDirtLevel(level as any)}
                className={`py-2 px-3 rounded-lg text-sm font-medium border-2 transition-all ${
                  dirtLevel === level
                    ? 'border-red-500 bg-red-50 text-red-600'
                    : 'border-gray-200 text-gray-500 hover:border-red-300'
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
             <WashingMachine className="w-4 h-4 text-green-600" /> Water Type
          </label>
          <div className="flex gap-3">
            {['Soft', 'Hard'].map((type) => (
              <button
                key={type}
                onClick={() => setWaterHardness(type as any)}
                className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium border-2 transition-all ${
                  waterHardness === type
                    ? 'border-green-600 bg-green-50 text-green-700'
                    : 'border-gray-200 text-gray-500 hover:border-green-300'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Result - Christmas themed */}
        <div className="bg-gradient-to-br from-green-50 to-red-50 rounded-xl p-6 text-center border-2 border-green-200">
          <p className="text-gray-500 text-sm uppercase tracking-wide font-semibold mb-2">🎄 Recommended Dose</p>
          <div className="flex items-end justify-center gap-2 text-green-700">
            <span className="text-5xl font-heading font-bold">{calculateDosage()}</span>
            <span className="text-xl font-medium mb-1">mL</span>
          </div>
          <p className="text-xs text-gray-400 mt-2">Based on RK Liquid Detergent formula ✨</p>
        </div>

      </div>
    </div>
  );
};
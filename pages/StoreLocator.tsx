import React, { useState } from 'react';
import { Search, MapPin, Navigation } from 'lucide-react';
import { STORES } from '../services/data';
import { Store } from '../types';

export const StoreLocator: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Store[]>(STORES);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    // Mock search delay
    setTimeout(() => {
      // In a real app, this would filter based on geocoding
      const filtered = STORES.filter(s => 
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        s.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filtered.length > 0 ? filtered : STORES);
      setIsSearching(false);
    }, 800);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="flex-1 flex flex-col md:flex-row relative">
        
        {/* Sidebar List */}
        <div className="w-full md:w-1/3 bg-white z-10 shadow-xl flex flex-col">
          <div className="p-6 bg-sky-main text-white">
            <h1 className="text-2xl font-heading font-bold mb-4">Find a Store</h1>
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Zip Code, City, or State"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none shadow-sm"
              />
              <Search className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            </form>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {isSearching ? (
              <div className="text-center py-10 text-gray-500">Searching nearby locations...</div>
            ) : (
              results.map((store) => (
                <div key={store.id} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-transparent hover:border-sky-200 group">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-neutral-dark text-lg group-hover:text-sky-main">{store.name}</h3>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">{store.distance}</span>
                  </div>
                  <div className="flex items-start text-gray-500 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1 mt-0.5 flex-shrink-0" />
                    {store.address}
                  </div>
                  <button className="w-full py-2 border border-sky-main text-sky-main rounded-lg font-bold text-sm hover:bg-sky-50 transition-colors flex items-center justify-center gap-2">
                    <Navigation className="w-4 h-4" /> Get Directions
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="w-full md:w-2/3 bg-gray-200 relative">
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
             {/* Simulating a map view */}
             <div className="text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                   <MapPin className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 font-medium">Interactive Map Placeholder</p>
                <p className="text-gray-400 text-sm max-w-xs mx-auto mt-2">
                  In a production environment, this would integrate with Google Maps API using the grounding data to show retailer locations dynamically.
                </p>
             </div>
             {/* Mock Pins */}
             <div className="absolute top-1/4 left-1/4">
               <div className="relative">
                 <div className="w-8 h-8 bg-sky-main rounded-full border-4 border-white shadow-lg animate-bounce flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                 </div>
               </div>
             </div>
             <div className="absolute top-1/2 left-2/3">
               <div className="relative">
                 <div className="w-8 h-8 bg-sky-main rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                 </div>
               </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};
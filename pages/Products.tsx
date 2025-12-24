import React, { useState, useMemo } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { Filter, Plus, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '../services/data';
import { Product } from '../types';

interface ProductsPageProps {
  addToCart: (product: Product) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ addToCart }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialCat = searchParams.get('cat') || 'All';
  const [filterCategory, setFilterCategory] = useState<string>(initialCat);
  
  const filteredProducts = useMemo(() => {
    if (filterCategory === 'All') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === filterCategory);
  }, [filterCategory]);

  const categories = ['All', 'Liquid Detergent', 'Dish Wash', 'Floor Cleaner', 'Combo'];

  return (
    <div className="bg-gradient-to-b from-green-50 to-red-50 min-h-screen pb-20 relative overflow-hidden">
      {/* Christmas decorations */}
      <div className="absolute top-20 left-10 text-4xl opacity-10">🎄</div>
      <div className="absolute top-40 right-10 text-3xl opacity-10">❄</div>
      <div className="absolute bottom-40 left-20 text-2xl opacity-10">🎁</div>
      <div className="absolute bottom-20 right-1/4 text-3xl opacity-10">⭐</div>

      {/* Header */}
      <div className="bg-gradient-to-r from-[#1a472a] via-[#2d5a3d] to-[#8B0000] shadow-lg py-12 relative overflow-hidden">
        <div className="absolute top-2 left-10 text-2xl opacity-20">❄</div>
        <div className="absolute bottom-2 right-10 text-2xl opacity-20">🎄</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl font-heading font-bold text-white mb-2">🎁 Our Products</h1>
          <p className="text-green-100 max-w-2xl">Discover the perfect formula for your laundry and home cleaning needs. From deep-cleaning smart wash to sparkling dish liquids.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 flex-shrink-0 relative z-10">
            <div className="bg-white p-6 rounded-xl shadow-md sticky top-24 border-2 border-green-200">
              <div className="flex items-center gap-2 font-bold text-lg mb-4 text-neutral-dark">
                <Filter className="w-5 h-5 text-green-600" /> 🎄 Filters
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-sm text-green-700 uppercase tracking-wider mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        className="sr-only"
                        checked={filterCategory === cat}
                        onChange={() => setFilterCategory(cat)}
                      />
                      <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center transition-colors ${filterCategory === cat ? 'border-green-600' : 'border-gray-300 group-hover:border-green-400'}`}>
                        {filterCategory === cat && <div className="w-2 h-2 rounded-full bg-green-600" />}
                      </div>
                      <span className={`${filterCategory === cat ? 'text-green-600 font-medium' : 'text-gray-600 group-hover:text-gray-900'}`}>{cat === 'Combo' ? '🎁 ' + cat : cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Mock Price Range Filter (Visual only for now) */}
              <div className="mb-6">
                <h3 className="font-semibold text-sm text-green-700 uppercase tracking-wider mb-3">Price Range</h3>
                <input type="range" className="w-full accent-green-600 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>₹70</span>
                  <span>₹999</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 relative z-10">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-green-100 hover:border-green-300 flex flex-col h-full">
                    {/* Changed padding top and object fit for tall images */}
                    <Link to={`/products/${product.id}`} className="relative block pt-[120%] overflow-hidden rounded-t-2xl bg-gradient-to-br from-green-50 to-red-50 p-4">
                      <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-500 hover:scale-105" />
                      {product.id === 'p1' && <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">🎄 Best Seller</span>}
                    </Link>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-1 rounded">{product.category}</span>
                        <span className="text-xs font-bold bg-red-100 text-red-700 px-2 py-1 rounded">
                          {Math.round(((product.mrp - product.price) / product.mrp) * 100)}% OFF
                        </span>
                      </div>
                      <Link to={`/products/${product.id}`}>
                        <h3 className="font-bold text-lg text-neutral-dark mb-1 hover:text-green-600 transition-colors">{product.name}</h3>
                      </Link>
                      <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.shortDescription}</p>

                      <div className="mt-auto pt-4 border-t border-green-100">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-sm text-gray-400 line-through">₹{product.mrp}</span>
                          <span className="font-heading font-bold text-xl text-green-700">₹{product.price}</span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => addToCart(product)}
                            className="flex-1 flex items-center justify-center gap-1 bg-green-50 hover:bg-green-100 text-green-700 px-3 py-2 rounded-full font-bold text-sm transition-colors border border-green-200"
                          >
                            <Plus className="w-4 h-4" /> Add
                          </button>
                          <button
                            onClick={() => {
                              addToCart(product);
                              navigate('/cart');
                            }}
                            className="flex-1 flex items-center justify-center gap-1 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-full font-bold text-sm transition-colors"
                          >
                            <ShoppingBag className="w-4 h-4" /> 🎁 Buy
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredProducts.length === 0 && (
                  <div className="col-span-full text-center py-20 text-gray-400">
                    <p>🎄 No products found in this category.</p>
                  </div>
                )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
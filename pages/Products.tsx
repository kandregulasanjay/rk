import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Filter, Star, Plus } from 'lucide-react';
import { PRODUCTS } from '../services/data';
import { Product } from '../types';

interface ProductsPageProps {
  addToCart: (product: Product) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ addToCart }) => {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get('cat') || 'All';
  const [filterCategory, setFilterCategory] = useState<string>(initialCat);
  
  const filteredProducts = useMemo(() => {
    if (filterCategory === 'All') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === filterCategory);
  }, [filterCategory]);

  const categories = ['All', 'Liquid', 'Dish Wash', 'Surface Cleaner', 'Powder', 'Pods'];

  return (
    <div className="bg-neutral-light min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-heading font-bold text-neutral-dark mb-2">Our Products</h1>
          <p className="text-gray-500 max-w-2xl">Discover the perfect formula for your laundry and home cleaning needs. From deep-cleaning smart wash to sparkling dish liquids.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
              <div className="flex items-center gap-2 font-bold text-lg mb-4 text-neutral-dark">
                <Filter className="w-5 h-5" /> Filters
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold text-sm text-gray-500 uppercase tracking-wider mb-3">Category</h3>
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
                      <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center transition-colors ${filterCategory === cat ? 'border-sky-main' : 'border-gray-300 group-hover:border-sky-300'}`}>
                        {filterCategory === cat && <div className="w-2 h-2 rounded-full bg-sky-main" />}
                      </div>
                      <span className={`${filterCategory === cat ? 'text-sky-main font-medium' : 'text-gray-600 group-hover:text-gray-900'}`}>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Mock Price Range Filter (Visual only for now) */}
              <div className="mb-6">
                <h3 className="font-semibold text-sm text-gray-500 uppercase tracking-wider mb-3">Price Range</h3>
                <input type="range" className="w-full accent-sky-main h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>$2</span>
                  <span>$30</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-sky-100 flex flex-col h-full">
                    {/* Changed padding top and object fit for tall images */}
                    <Link to={`/products/${product.id}`} className="relative block pt-[120%] overflow-hidden rounded-t-2xl bg-gray-50 p-4">
                      <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-500 hover:scale-105" />
                      {product.id === 'p1' && <span className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-md">Best Seller</span>}
                    </Link>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-2 py-1 rounded">{product.category}</span>
                        <div className="flex items-center gap-1">
                           <Star className="w-3 h-3 text-yellow-400 fill-current" />
                           <span className="text-xs font-bold text-gray-600">{product.rating}</span>
                        </div>
                      </div>
                      <Link to={`/products/${product.id}`}>
                        <h3 className="font-bold text-lg text-neutral-dark mb-1 hover:text-sky-main transition-colors">{product.name}</h3>
                      </Link>
                      <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.shortDescription}</p>
                      
                      <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                        <span className="font-heading font-bold text-xl text-neutral-dark">${product.price.toFixed(2)}</span>
                        <button 
                          onClick={() => addToCart(product)}
                          className="flex items-center gap-2 bg-sky-main hover:bg-sky-deep text-white px-4 py-2 rounded-full font-bold text-sm transition-colors"
                        >
                          <Plus className="w-4 h-4" /> Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredProducts.length === 0 && (
                  <div className="col-span-full text-center py-20 text-gray-400">
                    <p>No products found in this category.</p>
                  </div>
                )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
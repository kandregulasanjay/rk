import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Check, ShoppingCart, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '../services/data';
import { Product } from '../types';

interface ProductDetailProps {
  addToCart: (product: Product) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ addToCart }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState<'desc' | 'ingredients' | 'reviews'>('desc');

  useEffect(() => {
    const found = PRODUCTS.find(p => p.id === id);
    setProduct(found || null);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="bg-neutral-light min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-sky-main">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-sky-main">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-dark font-medium">{product.name}</span>
        </nav>

        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Image Section */}
            <div className="bg-gray-50 p-8 flex items-center justify-center">
              <img src={product.image} alt={product.name} className="w-full max-w-md object-contain mix-blend-multiply" />
            </div>

            {/* Info Section */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-sky-100 text-sky-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">{product.category}</span>
                <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">{product.scent}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-gray-500 text-sm">{product.reviews} reviews</span>
              </div>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {product.fullDescription}
              </p>

              <div className="mb-8 border-t border-b border-gray-100 py-6">
                <div className="mb-6">
                   <div className="flex items-center gap-3 mb-2">
                     <span className="text-sm text-gray-400 line-through">₹{product.mrp}</span>
                     <span className="text-xs font-bold bg-green-100 text-green-700 px-3 py-1 rounded">
                       {Math.round(((product.mrp - product.price) / product.mrp) * 100)}% OFF
                     </span>
                   </div>
                   <span className="text-4xl font-heading font-bold text-neutral-dark">₹{product.price}</span>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 bg-sky-50 hover:bg-sky-100 text-sky-main px-6 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-colors border-2 border-sky-main"
                  >
                    <ShoppingCart className="w-5 h-5" /> Add to Cart
                  </button>
                  <button
                    onClick={() => {
                      addToCart(product);
                      navigate('/cart');
                    }}
                    className="flex-1 bg-sky-main hover:bg-sky-deep text-white px-6 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg hover:shadow-sky-200"
                  >
                    <ShoppingBag className="w-5 h-5" /> Buy Now
                  </button>
                </div>
              </div>

              {/* <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                 <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-sky-main" /> Free Shipping over $30
                 </div>
                 <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-sky-main" /> 30-Day Money Back
                 </div>
              </div> */}
            </div>
          </div>

          {/* Details Tabs */}
          <div className="border-t border-gray-100">
             <div className="flex border-b border-gray-100">
               {['desc', 'ingredients', 'reviews'].map((tab) => (
                 <button
                   key={tab}
                   onClick={() => setActiveTab(tab as any)}
                   className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${
                     activeTab === tab 
                      ? 'border-b-2 border-sky-main text-sky-main bg-sky-50/50' 
                      : 'text-gray-400 hover:text-gray-600'
                   }`}
                 >
                   {tab === 'desc' ? 'Benefits' : tab}
                 </button>
               ))}
             </div>
             <div className="p-8 md:p-12 min-h-[200px]">
               {activeTab === 'desc' && (
                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {product.benefits.map((benefit, idx) => (
                     <li key={idx} className="flex items-start gap-3">
                       <div className="bg-green-100 p-1 rounded-full mt-1">
                          <Check className="w-3 h-3 text-green-600" />
                       </div>
                       <span className="text-gray-700">{benefit}</span>
                     </li>
                   ))}
                 </ul>
               )}
               {activeTab === 'ingredients' && (
                 <div>
                   <h3 className="font-bold mb-4">Transparent Ingredients</h3>
                   <div className="flex flex-wrap gap-2">
                     {product.ingredients.map((ing, idx) => (
                       <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm">{ing}</span>
                     ))}
                   </div>
                   <p className="mt-4 text-sm text-gray-500">Free from phosphates, chlorine bleach, and artificial dyes.</p>
                 </div>
               )}
               {activeTab === 'reviews' && (
                 <div className="text-center py-8">
                   <p className="text-gray-500">Customer reviews section placeholder.</p>
                   <div className="flex justify-center text-yellow-400 my-2">
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                   </div>
                 </div>
               )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
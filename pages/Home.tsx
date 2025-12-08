import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Zap, Heart, Instagram, ChevronRight, Plus } from 'lucide-react';
import { PRODUCTS, LAUNDRYGRAM_POSTS } from '../services/data';
import { DosageCalculator } from '../components/DosageCalculator';

interface HomeProps {
  addToCart: (product: any) => void;
}

export const Home: React.FC<HomeProps> = ({ addToCart }) => {
  const featuredProducts = PRODUCTS.slice(0, 4);
  const heroProduct = PRODUCTS[0]; // CleanSky Liquid Advance

  // Hero carousel images
  const heroImages = [
    '/images/hero_section_display_images/Untitled73_20251204173622.png',
    '/images/hero_section_display_images/Untitled73_20251204173646.png',
    '/images/hero_section_display_images/Untitled73_20251204173717.png',
    '/images/hero_section_display_images/Untitled73_20251204173737.png',
    '/images/hero_section_display_images/Untitled73_20251204173846.png',
    '/images/hero_section_display_images/Untitled73_20251204173912.png',
    '/images/hero_section_display_images/Untitled73_20251204173933.png',
    '/images/hero_section_display_images/Untitled73_20251204173951.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="flex flex-col w-full">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>

      {/* Video-Themed Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0066cc] via-[#39A3E6] to-[#67C8FF] overflow-hidden min-h-[600px] flex items-center">
        {/* Abstract Background Shapes (Bubbles/Circles from video) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-10 left-10 w-32 h-32 bg-sky-300 rounded-full opacity-20 animate-float blur-xl"></div>
           <div className="absolute top-1/2 right-20 w-64 h-64 bg-pink-300 rounded-full opacity-20 animate-float-delayed blur-2xl"></div>
           <div className="absolute -bottom-10 left-1/3 w-48 h-48 bg-white rounded-full opacity-10 animate-float blur-lg"></div>
           <div className="absolute top-20 right-1/3 w-24 h-24 bg-teal-300 rounded-full opacity-20 animate-pulse blur-lg"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-10 pb-20">
          
          <div className="text-white text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-6 leading-tight drop-shadow-sm">
              Smart Wash.<br/>
              <span className="text-sky-100">Protects Fabric.</span><br/>
              <span className="text-sky-100">Attacks Dirt.</span>
            </h1>
            <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-lg mx-auto lg:mx-0 font-light">
              Experience the next generation of stain removal with our advanced enzymatic formula.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/products"
                className="bg-white text-blue-600 hover:bg-sky-50 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Shop Now
              </Link>
              <Link
                to="/laundry-tips"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                Stain Guide
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end items-center min-h-[500px]">
             {/* Background Circle Element behind product */}
             <div className="w-[500px] h-[500px] bg-white/10 rounded-full border border-white/20 animate-pulse relative flex items-center justify-center">
               {/* Rotating Hero Images Carousel - Centered */}
               <div className="w-60 h-60 md:w-80 md:h-80 animate-float z-10 flex items-center justify-center">
                 <img
                   src={heroImages[currentImageIndex]}
                   alt="CleanSky Products"
                   className="w-full h-full object-contain drop-shadow-2xl transform rotate-6 hover:rotate-0 transition-all duration-700"
                   key={currentImageIndex}
                 />
                 {/* Sparkle effects */}
                 <div className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg animate-bounce">
                    <div className="bg-sky-500 rounded-full w-3 h-3"></div>
                 </div>
                 {/* Carousel indicators */}
                 <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
                   {heroImages.map((_, index) => (
                     <button
                       key={index}
                       onClick={() => setCurrentImageIndex(index)}
                       className={`w-2 h-2 rounded-full transition-all ${
                         index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
                       }`}
                       aria-label={`Go to image ${index + 1}`}
                     />
                   ))}
                 </div>
               </div>
             </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="fill-white" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Find the Right Product (Updated Design) */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-neutral-dark">Find the right product for you</h2>
            <p className="text-gray-500 mt-4 text-lg">Choose your wash style to find your perfect match.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Card 1: Top Load Machine */}
             <div className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
                <div className="absolute inset-0 bg-gray-200">
                  <img src="/images/bg/pink-bg.png" alt="Top Load Machine" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                   <h3 className="text-3xl font-heading font-bold text-white mb-2">Top Load</h3>
                   <p className="text-gray-200 mb-6">Rich Lather Formula</p>
                   <Link to="/products?cat=Liquid" className="inline-flex items-center bg-white text-neutral-dark px-6 py-3 rounded-full font-bold hover:bg-sky-main hover:text-white transition-colors">
                      Shop Liquid <ChevronRight className="w-4 h-4 ml-2" />
                   </Link>
                </div>
                <img
                  src="/images/hero_section_display_images/Untitled73_20251204173646.png"
                  alt="Liquid Bottle"
                  className="absolute bottom-14 right-8 w-20 md:w-36 drop-shadow-xl transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500"
                />
             </div>

             {/* Card 2: Front Load */}
             <div className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
                <div className="absolute inset-0 bg-gray-200">
                  <img src="/images/bg/blue-bg.png" alt="Front Load Machine" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                   <h3 className="text-3xl font-heading font-bold text-white mb-2">Front Load</h3>
                   <p className="text-gray-200 mb-6">Rich Lather Formula</p>
                   <Link to="/products?cat=Liquid" className="inline-flex items-center bg-white text-neutral-dark px-6 py-3 rounded-full font-bold hover:bg-sky-main hover:text-white transition-colors">
                      Shop Liquid <ChevronRight className="w-4 h-4 ml-2" />
                   </Link>
                </div>
                <img
                  src="/images/hero_section_display_images/Untitled73_20251204173737.png"
                  alt="Liquid Bottle"
                  className="absolute bottom-14 right-8 w-20 md:w-36 drop-shadow-xl transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="bg-sky-50 py-12 border-y border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full mb-4 shadow-sm">
                <Zap className="h-8 w-8 text-sky-main" />
              </div>
              <h3 className="font-heading font-bold text-lg text-neutral-dark">Powerful Stain Removal</h3>
              <p className="text-gray-500 mt-2">Enzymatic action tackles dirt at the fiber level.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full mb-4 shadow-sm">
                <Shield className="h-8 w-8 text-sky-main" />
              </div>
              <h3 className="font-heading font-bold text-lg text-neutral-dark">Fabric Protection</h3>
              <p className="text-gray-500 mt-2">Keeps colors vibrant and whites bright wash after wash.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full mb-4 shadow-sm">
                <CheckCircle className="h-8 w-8 text-sky-main" />
              </div>
              <h3 className="font-heading font-bold text-lg text-neutral-dark">Eco-Friendly</h3>
              <p className="text-gray-500 mt-2">Biodegradable ingredients and 100% recyclable packaging.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product List Section (Replaces Stain Removal Guide) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-neutral-dark">Best Sellers</h2>
            <p className="text-gray-500 mt-2">Explore our complete range of laundry detergents.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="group relative bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-50 mb-4 p-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-full w-full object-contain object-center group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                  />
                  {/* Quick Add Button */}
                  <button 
                    onClick={() => addToCart(product)}
                    className="absolute bottom-3 right-3 bg-sky-main text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-sky-deep"
                    aria-label="Add to cart"
                  >
                     <Plus className="w-5 h-5" />
                  </button>
                  {/* Tag */}
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-sky-800 text-xs font-bold px-2 py-1 rounded-md shadow-sm">
                    {product.category}
                  </span>
                </div>
                
                <Link to={`/products/${product.id}`}>
                  <h3 className="font-heading font-bold text-lg text-neutral-dark mb-1 group-hover:text-sky-main transition-colors line-clamp-1">{product.name}</h3>
                </Link>
                
                <div className="flex flex-col gap-1 mb-3">
                   <div className="flex items-center gap-2">
                     <span className="text-sm text-gray-400 line-through">₹{product.mrp}</span>
                     <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded">
                       {Math.round(((product.mrp - product.price) / product.mrp) * 100)}% OFF
                     </span>
                   </div>
                </div>

                <div className="flex items-center justify-between mt-auto">
                   <span className="font-bold text-xl text-neutral-dark">₹{product.price}</span>
                   <Link to={`/products/${product.id}`} className="text-sm font-bold text-sky-main hover:text-sky-deep">
                     Details
                   </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products" className="inline-flex items-center border-2 border-neutral-dark text-neutral-dark px-8 py-3 rounded-full font-bold hover:bg-neutral-dark hover:text-white transition-colors group">
              View All Products <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-20 bg-neutral-dark text-white overflow-hidden relative">
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-400 via-sky-900 to-black"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2">
                  <div className="inline-block bg-sky-500 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Editor's Choice</div>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">RK Liquid Detergent</h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Experience our most advanced formula yet. Designed to penetrate deep layers of fabric to lift invisible stains and odors while preserving color vibrancy.
                  </p>
                  <div className="flex flex-wrap gap-4">
                     <button onClick={() => addToCart(heroProduct)} className="bg-sky-main hover:bg-sky-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors">
                        Add to Cart - ₹{heroProduct.price}
                     </button>
                     <Link to={`/products/${heroProduct.id}`} className="bg-transparent border-2 border-white hover:bg-white hover:text-neutral-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-colors">
                        Learn More
                     </Link>
                  </div>
               </div>
               <div className="md:w-1/2 flex justify-center">
                  <img src={heroProduct.image} alt="Liquid Advance" className="max-w-sm w-full rounded-2xl drop-shadow-2xl transform md:rotate-6 hover:rotate-0 transition-transform duration-500" />
               </div>
            </div>
         </div>
      </section>

      {/* Laundrygram Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-neutral-dark inline-flex items-center gap-2">
                 Check out Our #Laundrygram <Instagram className="w-8 h-8 text-sky-main" />
              </h2>
              <p className="text-gray-500 mt-2">Join our community of clean. Tag @RKLiquids to be featured.</p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {PRODUCTS.slice(0, 4).map((product) => (
                 <div key={product.id} className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-gray-50">
                    <img src={product.image} alt={product.name} className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center text-white">
                       <div className="text-center p-4 pb-6">
                          <p className="font-bold text-sm line-clamp-2">{product.name}</p>
                          <p className="text-xs mt-1">₹{product.price}</p>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
           <div className="text-center mt-8">
              <a href="#" className="inline-block text-sky-main font-bold border-b-2 border-sky-main pb-1 hover:text-sky-deep hover:border-sky-deep transition-colors">
                 View All Posts
              </a>
           </div>
        </div>
      </section>

      {/* How To Use & Calculator Split */}
      <section className="py-16 bg-neutral-light overflow-hidden" id="dosage-calculator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
               <h2 className="text-3xl font-heading font-bold text-neutral-dark mb-6">Wash better, waste less.</h2>
               <div className="space-y-8">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-sky-100 text-sky-main font-bold text-xl">1</div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-neutral-dark">Sort & Load</h4>
                      <p className="mt-1 text-gray-500">Separate whites and colors. Don't overload the machine to ensure thorough cleaning.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-sky-100 text-sky-main font-bold text-xl">2</div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-neutral-dark">Dose Correctly</h4>
                      <p className="mt-1 text-gray-500">Use our calculator to find the exact amount needed for your load size and soil level.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-sky-100 text-sky-main font-bold text-xl">3</div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-neutral-dark">Select Cycle</h4>
                      <p className="mt-1 text-gray-500">CleanSky works perfectly in cold water (30°C), saving energy and protecting fabrics.</p>
                    </div>
                  </div>
               </div>
               <div className="mt-8">
                 <Link to="/how-to-use" className="text-sky-main font-bold hover:underline">Read full guide</Link>
               </div>
            </div>
            <div className="relative">
              <DosageCalculator />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ProductsPage } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Sustainability } from './pages/Sustainability';
import { StoreLocator } from './pages/StoreLocator';
import { About } from './pages/About';
import { MachineGuide } from './pages/MachineGuide';
import { LaundryTips } from './pages/LaundryTips';
import { ArticleDetail } from './pages/ArticleDetail';
import { CartPage } from './pages/Cart';
import { Product, CartItem } from './types';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showToast, setShowToast] = useState(false);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    // Show toast
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCart(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-neutral-dark">
        <Navbar cartCount={cartCount} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/products" element={<ProductsPage addToCart={addToCart} />} />
            <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
            <Route path="/how-to-use" element={<Navigate to="/#dosage-calculator" replace />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/store-locator" element={<StoreLocator />} />
            <Route path="/about" element={<About />} />
            <Route path="/machine-guide" element={<MachineGuide />} />
            <Route path="/laundry-tips" element={<LaundryTips />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
            <Route path="/cart" element={
              <CartPage
                cart={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
              />
            } />
          </Routes>
        </main>

        <Footer />

        {/* Toast Notification */}
        {showToast && (
          <div className="fixed bottom-4 right-4 z-50 bg-neutral-dark text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-bounce">
            <div className="bg-green-500 rounded-full p-1">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-sm">Added to cart</p>
            </div>
            <button onClick={() => setShowToast(false)} className="ml-2 text-gray-400 hover:text-white">✕</button>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
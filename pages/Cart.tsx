import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, Mail, Phone, ArrowLeft } from 'lucide-react';
import { CartItem } from '../types';

interface CartPageProps {
  cart: CartItem[];
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

export const CartPage: React.FC<CartPageProps> = ({ cart, updateQuantity, removeFromCart, clearCart }) => {
  // Calculate totals
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalMRP = cart.reduce((acc, item) => acc + (item.mrp * item.quantity), 0);
  const totalSavings = totalMRP - subtotal;
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-neutral-light py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-2xl font-heading font-bold text-neutral-dark mb-4">Your Cart is Empty</h1>
            <p className="text-gray-500 mb-8">Looks like you haven't added any products yet.</p>
            <Link
              to="/products"
              className="inline-flex items-center bg-sky-main hover:bg-sky-deep text-white px-8 py-3 rounded-full font-bold transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-light py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-heading font-bold text-neutral-dark mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm flex gap-4">
                <div className="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2" />
                </div>
                <div className="flex-1 min-w-0">
                  <Link to={`/products/${item.id}`} className="font-bold text-neutral-dark hover:text-sky-main transition-colors line-clamp-2">
                    {item.name}
                  </Link>
                  <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="font-bold text-lg text-neutral-dark">₹{item.price}</span>
                    <span className="text-sm text-gray-400 line-through">₹{item.mrp}</span>
                    <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded">
                      {Math.round(((item.mrp - item.price) / item.mrp) * 100)}% OFF
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-1"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                  <div className="flex items-center gap-2 bg-gray-100 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="p-2 hover:bg-gray-200 rounded-l-lg transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-gray-200 rounded-r-lg transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center pt-4">
              <Link to="/products" className="text-sky-main font-bold hover:underline flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Continue Shopping
              </Link>
              <button
                onClick={clearCart}
                className="text-red-500 hover:text-red-600 font-medium text-sm"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary & Contact */}
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-heading font-bold text-neutral-dark mb-4">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Items ({totalItems})</span>
                  <span className="text-neutral-dark">₹{totalMRP}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>- ₹{totalSavings}</span>
                </div>
                <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-lg">
                  <span className="text-neutral-dark">Total</span>
                  <span className="text-sky-main">₹{subtotal}</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-green-700 text-sm font-medium">
                  You're saving ₹{totalSavings} on this order!
                </p>
              </div>
            </div>

            {/* Contact to Order */}
            <div className="bg-sky-main rounded-xl p-6 text-white">
              <h2 className="text-xl font-heading font-bold mb-2">Ready to Order?</h2>
              <p className="text-sky-100 text-sm mb-6">
                Contact us to place your order. We'll confirm availability and arrange delivery.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:rkdetergentesandliquids.in@gmail.com?subject=Order%20Request&body=Hi%20RK%20Liquid%20Detergents,%0A%0AI%20would%20like%20to%20place%20an%20order%20for%20the%20following%20items:%0A%0A${cart.map(item => `- ${item.name} (Qty: ${item.quantity}) - ₹${item.price * item.quantity}`).join('%0A')}%0A%0ATotal: ₹${subtotal}%0A%0APlease%20confirm%20availability%20and%20delivery%20details.%0A%0AThank%20you!`}
                  className="flex items-center gap-3 bg-white text-sky-main px-4 py-3 rounded-lg font-bold hover:bg-sky-50 transition-colors w-full justify-center"
                >
                  <Mail className="w-5 h-5" />
                  Order via Email
                </a>

                <a
                  href="tel:+918332808881"
                  className="flex items-center gap-3 bg-sky-deep text-white px-4 py-3 rounded-lg font-bold hover:bg-sky-800 transition-colors w-full justify-center"
                >
                  <Phone className="w-5 h-5" />
                  Call: +91 8332 808881
                </a>

                <div className="text-center">
                  <p className="text-sky-100 text-xs mb-2">Or contact us directly:</p>
                  <a href="mailto:rkdetergentesandliquids.in@gmail.com" className="text-white font-medium hover:underline block">
                    rkdetergentesandliquids.in@gmail.com
                  </a>
                  <p className="text-sky-100 text-xs mt-2">+91 8332 808881 | +91 8332 808882</p>
                </div>
              </div>
            </div>

            {/* Order Details Preview */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-neutral-dark mb-3">Your Order Details</h3>
              <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg font-mono whitespace-pre-wrap">
                {cart.map(item => (
                  <div key={item.id} className="mb-1">
                    {item.name} x{item.quantity} = ₹{item.price * item.quantity}
                  </div>
                ))}
                <div className="border-t border-gray-200 mt-2 pt-2 font-bold">
                  Total: ₹{subtotal}
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Copy this and include in your email for quick ordering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

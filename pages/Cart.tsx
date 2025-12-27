import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, Mail, Phone, ArrowLeft, CreditCard, Loader2 } from 'lucide-react';
import { CartItem } from '../types';
import { initializeRazorpayPayment, RazorpayResponse } from '../services/razorpay';

interface CartPageProps {
  cart: CartItem[];
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

export const CartPage: React.FC<CartPageProps> = ({ cart, updateQuantity, removeFromCart, clearCart }) => {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Calculate totals
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalMRP = cart.reduce((acc, item) => acc + (item.mrp * item.quantity), 0);
  const totalSavings = totalMRP - subtotal;
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Handle Razorpay Payment
  const handleRazorpayPayment = async () => {
    setIsProcessingPayment(true);
    setPaymentStatus(null);

    const cartItemsForPayment = cart.map(item => ({
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    }));

    await initializeRazorpayPayment(
      subtotal,
      cartItemsForPayment,
      { name: '', email: '', phone: '' },
      (response: RazorpayResponse) => {
        setIsProcessingPayment(false);
        setPaymentStatus({
          type: 'success',
          message: `Payment successful! Order ID: ${response.razorpay_order_id}`,
        });
        // Clear cart after successful payment
        clearCart();
      },
      (error: string) => {
        setIsProcessingPayment(false);
        if (error !== 'Payment cancelled') {
          setPaymentStatus({
            type: 'error',
            message: error,
          });
        }
      }
    );
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-red-50 py-16 relative overflow-hidden">
        {/* Christmas decorations */}
        <div className="absolute top-10 left-10 text-4xl opacity-20">🎄</div>
        <div className="absolute top-20 right-20 text-3xl opacity-20">❄</div>
        <div className="absolute bottom-20 left-1/4 text-2xl opacity-20">🎁</div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="bg-white rounded-2xl p-12 shadow-lg border-2 border-green-200">
            <ShoppingBag className="w-24 h-24 text-green-300 mx-auto mb-6" />
            <h1 className="text-2xl font-heading font-bold text-neutral-dark mb-4">🎄 Your Cart is Empty</h1>
            <p className="text-gray-500 mb-8">Looks like you haven't added any products yet. Fill it with holiday sparkle!</p>
            <Link
              to="/products"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-bold transition-colors shadow-md"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> 🎁 Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-red-50 py-8 relative overflow-hidden">
      {/* Christmas decorations */}
      <div className="absolute top-10 left-10 text-4xl opacity-10">🎄</div>
      <div className="absolute top-40 right-10 text-3xl opacity-10">❄</div>
      <div className="absolute bottom-40 left-20 text-2xl opacity-10">🎁</div>
      <div className="absolute bottom-20 right-1/4 text-3xl opacity-10">⭐</div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-3xl font-heading font-bold text-neutral-dark mb-8">🛒 Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-4 shadow-md flex gap-4 border border-green-100 hover:border-green-200 transition-colors">
                <div className="w-24 h-24 flex-shrink-0 bg-gradient-to-br from-green-50 to-red-50 rounded-lg overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2" />
                </div>
                <div className="flex-1 min-w-0">
                  <Link to={`/products/${item.id}`} className="font-bold text-neutral-dark hover:text-green-600 transition-colors line-clamp-2">
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
              <Link to="/products" className="text-green-600 font-bold hover:underline flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> 🎁 Continue Shopping
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
            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-green-200">
              <h2 className="text-xl font-heading font-bold text-neutral-dark mb-4">🎄 Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Items ({totalItems})</span>
                  <span className="text-neutral-dark">₹{totalMRP}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Holiday Discount</span>
                  <span>- ₹{totalSavings}</span>
                </div>
                <div className="border-t border-green-200 pt-3 flex justify-between font-bold text-lg">
                  <span className="text-neutral-dark">Total</span>
                  <span className="text-green-600">₹{subtotal}</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-red-50 rounded-lg border border-green-200">
                <p className="text-green-700 text-sm font-medium">
                  🎁 You're saving ₹{totalSavings} on this order!
                </p>
              </div>

              {/* Payment Status Message */}
              {paymentStatus && (
                <div className={`mt-4 p-3 rounded-lg ${paymentStatus.type === 'success' ? 'bg-green-100 border border-green-300' : 'bg-red-100 border border-red-300'}`}>
                  <p className={`text-sm font-medium ${paymentStatus.type === 'success' ? 'text-green-700' : 'text-red-700'}`}>
                    {paymentStatus.type === 'success' ? '✅' : '❌'} {paymentStatus.message}
                  </p>
                </div>
              )}

              {/* Razorpay Pay Now Button */}
              <button
                onClick={handleRazorpayPayment}
                disabled={isProcessingPayment}
                className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-lg font-bold transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isProcessingPayment ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    Pay ₹{subtotal} with Razorpay
                  </>
                )}
              </button>
              <p className="text-xs text-gray-500 text-center mt-2">
                Secure payment powered by Razorpay
              </p>
            </div>

            {/* Contact to Order */}
            <div className="bg-gradient-to-br from-[#1a472a] to-[#8B0000] rounded-xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-2 right-2 text-xl opacity-30">🎄</div>
              <div className="absolute bottom-2 left-2 text-xl opacity-30">❄</div>
              <h2 className="text-xl font-heading font-bold mb-2">🎁 Ready to Order?</h2>
              <p className="text-green-100 text-sm mb-6">
                Contact us to place your order. We'll confirm availability and arrange delivery.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:rkdetergentesandliquids.in@gmail.com?subject=Order%20Request&body=Hi%20RK%20Liquid%20Detergents,%0A%0AI%20would%20like%20to%20place%20an%20order%20for%20the%20following%20items:%0A%0A${cart.map(item => `- ${item.name} (Qty: ${item.quantity}) - ₹${item.price * item.quantity}`).join('%0A')}%0A%0ATotal: ₹${subtotal}%0A%0APlease%20confirm%20availability%20and%20delivery%20details.%0A%0AThank%20you!`}
                  className="flex items-center gap-3 bg-white text-green-700 px-4 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors w-full justify-center"
                >
                  <Mail className="w-5 h-5" />
                  Order via Email
                </a>

                <a
                  href="tel:+918332808881"
                  className="flex items-center gap-3 bg-red-600 text-white px-4 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors w-full justify-center"
                >
                  <Phone className="w-5 h-5" />
                  Call: +91 8332 808881
                </a>

                <div className="text-center">
                  <p className="text-green-100 text-xs mb-2">Or contact us directly:</p>
                  <a href="mailto:rkdetergentesandliquids.in@gmail.com" className="text-white font-medium hover:underline block">
                    rkdetergentesandliquids.in@gmail.com
                  </a>
                  <p className="text-green-100 text-xs mt-2">+91 8332 808881 | +91 8332 808882</p>
                </div>
              </div>
            </div>

            {/* Order Details Preview */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-green-100">
              <h3 className="font-bold text-neutral-dark mb-3">📋 Your Order Details</h3>
              <div className="text-xs text-gray-500 bg-gradient-to-br from-green-50 to-red-50 p-3 rounded-lg font-mono whitespace-pre-wrap border border-green-100">
                {cart.map(item => (
                  <div key={item.id} className="mb-1">
                    {item.name} x{item.quantity} = ₹{item.price * item.quantity}
                  </div>
                ))}
                <div className="border-t border-green-200 mt-2 pt-2 font-bold text-green-700">
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

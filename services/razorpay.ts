// API Configuration
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

export interface CartItemForPayment {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface OrderDetails {
  items: CartItemForPayment[];
  customer?: {
    name?: string;
    email?: string;
    phone?: string;
  };
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  theme: {
    color: string;
  };
  handler: (response: RazorpayResponse) => void;
  modal?: {
    ondismiss?: () => void;
  };
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => {
      open: () => void;
      close: () => void;
    };
  }
}

// Fetch Razorpay Key from backend
async function getRazorpayKey(): Promise<string> {
  const response = await fetch(`${API_URL}/api/payment/key`);
  const data = await response.json();

  if (!data.success || !data.key_id) {
    throw new Error('Failed to get Razorpay key');
  }

  return data.key_id;
}

// Create order on backend
async function createOrder(amount: number, orderDetails: OrderDetails): Promise<{ id: string; amount: number }> {
  const response = await fetch(`${API_URL}/api/payment/create-order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount,
      receipt: `order_${Date.now()}`,
      notes: {
        items_count: orderDetails.items.length.toString(),
        customer_name: orderDetails.customer?.name || '',
        customer_email: orderDetails.customer?.email || '',
        customer_phone: orderDetails.customer?.phone || '',
      }
    }),
  });

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.message || 'Failed to create order');
  }

  return data.order;
}

// Verify payment on backend
async function verifyPayment(
  razorpay_order_id: string,
  razorpay_payment_id: string,
  razorpay_signature: string,
  orderDetails: OrderDetails
): Promise<boolean> {
  const response = await fetch(`${API_URL}/api/payment/verify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      order_details: orderDetails
    }),
  });

  const data = await response.json();
  return data.success;
}

// Initialize Razorpay Payment
export const initializeRazorpayPayment = async (
  amount: number,
  cartItems: CartItemForPayment[],
  customerInfo: { name?: string; email?: string; phone?: string },
  onSuccess: (response: RazorpayResponse) => void,
  onFailure: (error: string) => void
) => {
  try {
    // Check if Razorpay SDK is loaded
    if (typeof window.Razorpay === 'undefined') {
      onFailure('Payment system not loaded. Please refresh the page.');
      return;
    }

    // Get Razorpay key from backend
    const razorpayKey = await getRazorpayKey();

    if (!razorpayKey) {
      onFailure('Payment system is not configured. Please contact support.');
      return;
    }

    // Create order on backend
    const orderDetails: OrderDetails = {
      items: cartItems,
      customer: customerInfo
    };

    const order = await createOrder(amount, orderDetails);

    // Create order description
    const orderDescription = cartItems
      .map(item => `${item.name} x${item.quantity}`)
      .join(', ')
      .substring(0, 255);

    // Configure Razorpay options
    const options: RazorpayOptions = {
      key: razorpayKey,
      amount: order.amount,
      currency: 'INR',
      name: 'RK Detergents and Liquids',
      description: orderDescription || 'Order Payment',
      order_id: order.id,
      prefill: {
        name: customerInfo.name || '',
        email: customerInfo.email || '',
        contact: customerInfo.phone || '',
      },
      theme: {
        color: '#1a472a',
      },
      handler: async function (response: RazorpayResponse) {
        try {
          // Verify payment on backend
          const isVerified = await verifyPayment(
            response.razorpay_order_id,
            response.razorpay_payment_id,
            response.razorpay_signature,
            orderDetails
          );

          if (isVerified) {
            onSuccess(response);
          } else {
            onFailure('Payment verification failed. Please contact support.');
          }
        } catch (error) {
          onFailure('Payment verification error. Please contact support.');
        }
      },
      modal: {
        ondismiss: function () {
          onFailure('Payment cancelled');
        },
      },
    };

    // Open Razorpay checkout
    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();

  } catch (error) {
    console.error('Payment initialization error:', error);
    onFailure(error instanceof Error ? error.message : 'Failed to initialize payment');
  }
};

// Utility to format amount for display
export const formatAmount = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

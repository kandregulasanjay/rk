# RK Detergents Backend

Production-ready Node.js backend for RK Detergents e-commerce payment processing.

## Features

- Razorpay payment integration
- Payment signature verification
- Webhook handling for payment events
- Transaction storage in Excel
- Admin API for transaction management
- CORS configured for Vercel frontend

## Setup

### 1. Install Dependencies

```bash
cd rk-backend
npm install
```

### 2. Configure Environment Variables

Create `.env` file with your credentials:

```env
# Razorpay Credentials (Get from Razorpay Dashboard)
RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_secret_key

# Server Configuration
PORT=5000
NODE_ENV=production

# Frontend URL (Your Vercel deployment)
FRONTEND_URL=https://rk-swart.vercel.app

# Webhook Secret (Get from Razorpay Dashboard > Webhooks)
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret

# Admin API Key (Optional - for admin endpoints)
ADMIN_API_KEY=your_admin_api_key
```

### 3. Run Locally

```bash
# Development
npm run dev

# Production
npm start
```

## Deploy to Render

### Step 1: Create Render Account
Go to [render.com](https://render.com) and sign up.

### Step 2: Create Web Service
1. Click "New" > "Web Service"
2. Connect your GitHub repository
3. Select the `rk-backend` folder
4. Configure:
   - **Name**: rk-backend
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (or Starter for production)

### Step 3: Add Environment Variables
In Render dashboard, add all environment variables from `.env`

### Step 4: Deploy
Click "Create Web Service" and wait for deployment.

### Step 5: Update Frontend
After deployment, update your Vercel frontend `.env`:

```env
VITE_API_URL=https://your-render-app.onrender.com
```

## API Endpoints

### Payment Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/payment/key` | Get Razorpay Key ID |
| POST | `/api/payment/create-order` | Create payment order |
| POST | `/api/payment/verify` | Verify payment signature |
| GET | `/api/payment/payment/:id` | Get payment details |
| POST | `/api/payment/refund` | Initiate refund |

### Webhook Route

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/webhook` | Razorpay webhook handler |

### Admin Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/transactions` | Get all transactions |
| GET | `/api/admin/transaction/:id` | Get transaction by order ID |
| GET | `/api/admin/stats` | Get payment statistics |

## Razorpay Webhook Setup

1. Go to Razorpay Dashboard > Webhooks
2. Add webhook URL: `https://your-render-app.onrender.com/api/webhook`
3. Select events:
   - `payment.captured`
   - `payment.failed`
   - `payment.authorized`
   - `refund.created`
   - `order.paid`
4. Copy the webhook secret to your `.env`

## Transaction Storage

Transactions are stored in Excel files:
- `data/transactions.xlsx` - All payment transactions
- `data/webhooks.xlsx` - Webhook event logs

## Security Checklist

- [x] Payment signature verification
- [x] Webhook signature verification
- [x] CORS restricted to frontend URL
- [x] No sensitive keys exposed to frontend
- [x] Environment variables for all secrets
- [x] HTTPS enforced (Render provides this)

## Support

For issues, contact: rkdetergentesandliquids.in@gmail.com

const express = require('express');
const crypto = require('crypto');
const { updateTransactionStatus, saveWebhookEvent } = require('../utils/transactions');

const router = express.Router();

// Razorpay Webhook Handler
router.post('/', async (req, res) => {
  try {
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;

    // Get signature from headers
    const signature = req.headers['x-razorpay-signature'];

    if (!signature) {
      console.error('Webhook: Missing signature');
      return res.status(400).json({ error: 'Missing signature' });
    }

    // Verify webhook signature
    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(req.body)
      .digest('hex');

    if (signature !== expectedSignature) {
      console.error('Webhook: Invalid signature');
      return res.status(400).json({ error: 'Invalid signature' });
    }

    // Parse the webhook payload
    const payload = JSON.parse(req.body.toString());
    const event = payload.event;
    const paymentEntity = payload.payload?.payment?.entity;

    console.log(`Webhook received: ${event}`);

    // Save webhook event for audit
    await saveWebhookEvent({
      event_id: payload.event_id || `evt_${Date.now()}`,
      event_type: event,
      payload: payload,
      received_at: new Date().toISOString()
    });

    // Handle different webhook events
    switch (event) {
      case 'payment.captured':
        await handlePaymentCaptured(paymentEntity);
        break;

      case 'payment.failed':
        await handlePaymentFailed(paymentEntity);
        break;

      case 'payment.authorized':
        await handlePaymentAuthorized(paymentEntity);
        break;

      case 'refund.created':
        await handleRefundCreated(payload.payload?.refund?.entity);
        break;

      case 'order.paid':
        await handleOrderPaid(payload.payload?.order?.entity, paymentEntity);
        break;

      default:
        console.log(`Unhandled webhook event: ${event}`);
    }

    // Acknowledge receipt of webhook
    res.json({ status: 'ok', event: event });

  } catch (error) {
    console.error('Webhook Error:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

// Handle payment captured
async function handlePaymentCaptured(payment) {
  if (!payment) return;

  console.log(`Payment captured: ${payment.id}`);

  await updateTransactionStatus(payment.order_id, {
    payment_id: payment.id,
    status: 'captured',
    method: payment.method,
    email: payment.email,
    contact: payment.contact,
    captured_at: new Date().toISOString(),
    amount_paid: payment.amount / 100
  });

  // TODO: Send confirmation email to customer
  // TODO: Update inventory
  // TODO: Create invoice
}

// Handle payment failed
async function handlePaymentFailed(payment) {
  if (!payment) return;

  console.log(`Payment failed: ${payment.id}`);

  await updateTransactionStatus(payment.order_id, {
    payment_id: payment.id,
    status: 'failed',
    failure_reason: payment.error_description || 'Payment failed',
    error_code: payment.error_code,
    failed_at: new Date().toISOString()
  });
}

// Handle payment authorized
async function handlePaymentAuthorized(payment) {
  if (!payment) return;

  console.log(`Payment authorized: ${payment.id}`);

  await updateTransactionStatus(payment.order_id, {
    payment_id: payment.id,
    status: 'authorized',
    authorized_at: new Date().toISOString()
  });
}

// Handle refund created
async function handleRefundCreated(refund) {
  if (!refund) return;

  console.log(`Refund created: ${refund.id}`);

  await updateTransactionStatus(refund.payment_id, {
    refund_id: refund.id,
    refund_amount: refund.amount / 100,
    refund_status: refund.status,
    refunded_at: new Date().toISOString()
  });
}

// Handle order paid
async function handleOrderPaid(order, payment) {
  if (!order) return;

  console.log(`Order paid: ${order.id}`);

  await updateTransactionStatus(order.id, {
    status: 'paid',
    order_status: order.status,
    amount_paid: order.amount_paid / 100,
    paid_at: new Date().toISOString()
  });
}

module.exports = router;

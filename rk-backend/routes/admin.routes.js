const express = require('express');
const { getAllTransactions, getTransactionByOrderId } = require('../utils/transactions');

const router = express.Router();

// Simple API key authentication middleware
const authenticateAdmin = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  const validApiKey = process.env.ADMIN_API_KEY;

  if (!validApiKey) {
    // If no API key is set, allow access (for development)
    return next();
  }

  if (apiKey !== validApiKey) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized'
    });
  }

  next();
};

// Get all transactions
router.get('/transactions', authenticateAdmin, async (req, res) => {
  try {
    const transactions = await getAllTransactions();

    // Parse JSON fields for response
    const parsedTransactions = transactions.map(tx => {
      const parsed = { ...tx };
      ['notes', 'order_details'].forEach(field => {
        if (parsed[field] && typeof parsed[field] === 'string') {
          try {
            parsed[field] = JSON.parse(parsed[field]);
          } catch (e) {
            // Keep as string if not valid JSON
          }
        }
      });
      return parsed;
    });

    res.json({
      success: true,
      count: parsedTransactions.length,
      transactions: parsedTransactions
    });

  } catch (error) {
    console.error('Get Transactions Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch transactions'
    });
  }
});

// Get transaction by order ID
router.get('/transaction/:orderId', authenticateAdmin, async (req, res) => {
  try {
    const { orderId } = req.params;
    const transaction = await getTransactionByOrderId(orderId);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: 'Transaction not found'
      });
    }

    // Parse JSON fields
    ['notes', 'order_details'].forEach(field => {
      if (transaction[field] && typeof transaction[field] === 'string') {
        try {
          transaction[field] = JSON.parse(transaction[field]);
        } catch (e) {
          // Keep as string
        }
      }
    });

    res.json({
      success: true,
      transaction
    });

  } catch (error) {
    console.error('Get Transaction Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch transaction'
    });
  }
});

// Get transaction statistics
router.get('/stats', authenticateAdmin, async (req, res) => {
  try {
    const transactions = await getAllTransactions();

    const stats = {
      total_orders: transactions.length,
      successful_payments: transactions.filter(tx => tx.status === 'paid' || tx.status === 'captured').length,
      failed_payments: transactions.filter(tx => tx.status === 'failed').length,
      pending_payments: transactions.filter(tx => tx.status === 'created' || tx.status === 'authorized').length,
      total_revenue: transactions
        .filter(tx => tx.status === 'paid' || tx.status === 'captured')
        .reduce((sum, tx) => sum + (parseFloat(tx.amount) || 0), 0),
      refunds: transactions.filter(tx => tx.refund_id).length,
      total_refunded: transactions
        .filter(tx => tx.refund_amount)
        .reduce((sum, tx) => sum + (parseFloat(tx.refund_amount) || 0), 0)
    };

    res.json({
      success: true,
      stats
    });

  } catch (error) {
    console.error('Get Stats Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch statistics'
    });
  }
});

module.exports = router;

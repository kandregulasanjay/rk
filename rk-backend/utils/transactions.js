const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const TRANSACTIONS_FILE = path.join(__dirname, '../data/transactions.xlsx');
const WEBHOOKS_FILE = path.join(__dirname, '../data/webhooks.xlsx');

// Ensure data directory exists
const dataDir = path.join(__dirname, '../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize Excel file with headers if it doesn't exist
function initializeExcelFile(filePath, headers) {
  if (!fs.existsSync(filePath)) {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet([headers]);
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, filePath);
  }
}

// Transaction headers
const TRANSACTION_HEADERS = [
  'order_id',
  'payment_id',
  'amount',
  'currency',
  'status',
  'method',
  'email',
  'contact',
  'receipt',
  'notes',
  'order_details',
  'signature',
  'failure_reason',
  'error_code',
  'refund_id',
  'refund_amount',
  'refund_status',
  'created_at',
  'verified_at',
  'captured_at',
  'failed_at',
  'refunded_at'
];

// Webhook headers
const WEBHOOK_HEADERS = [
  'event_id',
  'event_type',
  'payload',
  'received_at'
];

// Initialize files
initializeExcelFile(TRANSACTIONS_FILE, TRANSACTION_HEADERS);
initializeExcelFile(WEBHOOKS_FILE, WEBHOOK_HEADERS);

// Read Excel file and return data as array of objects
function readExcelFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return [];
    }
    const wb = XLSX.readFile(filePath);
    const ws = wb.Sheets[wb.SheetNames[0]];
    return XLSX.utils.sheet_to_json(ws);
  } catch (error) {
    console.error('Error reading Excel file:', error);
    return [];
  }
}

// Write data to Excel file
function writeExcelFile(filePath, data, headers) {
  try {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data, { header: headers });
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, filePath);
    return true;
  } catch (error) {
    console.error('Error writing Excel file:', error);
    return false;
  }
}

// Save new transaction
async function saveTransaction(transaction) {
  try {
    const transactions = readExcelFile(TRANSACTIONS_FILE);

    // Create transaction object with all fields
    const newTransaction = {};
    TRANSACTION_HEADERS.forEach(header => {
      if (transaction[header] !== undefined) {
        // Stringify objects
        if (typeof transaction[header] === 'object') {
          newTransaction[header] = JSON.stringify(transaction[header]);
        } else {
          newTransaction[header] = transaction[header];
        }
      } else {
        newTransaction[header] = '';
      }
    });

    transactions.push(newTransaction);
    writeExcelFile(TRANSACTIONS_FILE, transactions, TRANSACTION_HEADERS);

    console.log(`Transaction saved: ${transaction.order_id}`);
    return true;
  } catch (error) {
    console.error('Error saving transaction:', error);
    return false;
  }
}

// Update transaction status
async function updateTransactionStatus(orderId, updates) {
  try {
    const transactions = readExcelFile(TRANSACTIONS_FILE);

    // Find and update transaction
    let found = false;
    const updatedTransactions = transactions.map(tx => {
      if (tx.order_id === orderId) {
        found = true;
        // Merge updates
        Object.keys(updates).forEach(key => {
          if (typeof updates[key] === 'object') {
            tx[key] = JSON.stringify(updates[key]);
          } else {
            tx[key] = updates[key];
          }
        });
      }
      return tx;
    });

    if (!found) {
      // If order not found, create new entry
      const newTx = { order_id: orderId };
      Object.keys(updates).forEach(key => {
        if (typeof updates[key] === 'object') {
          newTx[key] = JSON.stringify(updates[key]);
        } else {
          newTx[key] = updates[key];
        }
      });
      updatedTransactions.push(newTx);
    }

    writeExcelFile(TRANSACTIONS_FILE, updatedTransactions, TRANSACTION_HEADERS);

    console.log(`Transaction updated: ${orderId}`);
    return true;
  } catch (error) {
    console.error('Error updating transaction:', error);
    return false;
  }
}

// Save webhook event
async function saveWebhookEvent(event) {
  try {
    const webhooks = readExcelFile(WEBHOOKS_FILE);

    const newEvent = {
      event_id: event.event_id,
      event_type: event.event_type,
      payload: JSON.stringify(event.payload),
      received_at: event.received_at
    };

    webhooks.push(newEvent);
    writeExcelFile(WEBHOOKS_FILE, webhooks, WEBHOOK_HEADERS);

    console.log(`Webhook event saved: ${event.event_type}`);
    return true;
  } catch (error) {
    console.error('Error saving webhook event:', error);
    return false;
  }
}

// Get all transactions (for admin dashboard)
async function getAllTransactions() {
  return readExcelFile(TRANSACTIONS_FILE);
}

// Get transaction by order ID
async function getTransactionByOrderId(orderId) {
  const transactions = readExcelFile(TRANSACTIONS_FILE);
  return transactions.find(tx => tx.order_id === orderId);
}

module.exports = {
  saveTransaction,
  updateTransactionStatus,
  saveWebhookEvent,
  getAllTransactions,
  getTransactionByOrderId
};

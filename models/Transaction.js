// backend/models/Transaction.js
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  dateOfSale: Date,
  title: String,
  description: String,
  price: Number,
  category: String,
  isSold: Boolean
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;

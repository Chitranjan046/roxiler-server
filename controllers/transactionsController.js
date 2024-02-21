// backend/controllers/transactionsController.js
const Transaction = require('../models/Transaction');

exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.searchTransactions = async (req, res) => {
  try {
    const { month, search, page, perPage } = req.query;
    const regex = new RegExp(search, 'i');
    const transactions = await Transaction.find({
      dateOfSale: { $regex: month, $options: 'i' },
      $or: [
        { title: regex },
        { description: regex },
        { price: parseFloat(search) || 0 }
      ]
    }).skip((page - 1) * perPage).limit(parseInt(perPage));
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

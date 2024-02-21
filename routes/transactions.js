// backend/routes/transactions.js
const express = require('express');
const router = express.Router();
const transactionsController = require('../controllers/transactionsController');

router.get('/', transactionsController.getAllTransactions);
router.get('/search', transactionsController.searchTransactions);

module.exports = router;

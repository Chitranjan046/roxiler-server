// backend/server.js
const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const transactionsRouter = require('./routes/transactions');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/transactions', transactionsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

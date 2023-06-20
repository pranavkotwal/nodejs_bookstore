const express = require('express');
const connectDB = require('./config/mongo');
const bookRoutes = require('./routers/bookRoutes');
const logger = require('./config/logger');


const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON data
app.use(express.json());

// Routes
app.use('/api/items', bookRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

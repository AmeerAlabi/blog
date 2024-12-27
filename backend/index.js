const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(require('cors')()); // Enable CORS

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // No need for deprecated options
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit process with failure
  }
};

connectDB();

// Log MongoDB URI (for debugging purposes)
console.log('MongoDB URI:', process.env.MONGO_URI);

// Basic route
app.get('/', (req, res) => res.send('Backend is running!'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

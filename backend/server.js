const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const pickupRequestRoutes = require('./routes/pickupRoutes');
const itemRequestRoutes = require('./routes/itemRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
// Routes
app.use('/api/pickupRequests', pickupRequestRoutes);
app.use('/api/itemRequests', itemRequestRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})

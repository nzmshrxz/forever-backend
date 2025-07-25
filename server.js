const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // to use .env variables

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // to accept JSON body

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Connect to MongoDB (we will do later)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));


// Routes
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Listen to server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


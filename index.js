const express = require('express');
const mongoose = require('mongoose');
// const session = require('express-session');
const habitRoutes = require('./routes/habitRoutes');


// Create an instance of the Express app
const app = express();
//Setting EJS as view engine and content rendering and encoding
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Parse incoming request bodies
app.use(express.urlencoded({ extended: true }));

// Connect to the MongoDB atlas database
mongoose.connect(`mongodb+srv://zadafiyajay2:Unk9k6NJ1wGHjNJN@cluster0.cumbfeu.mongodb.net/?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Routes
app.use('/', habitRoutes);

// Start the server
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});

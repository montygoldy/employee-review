const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const path = require('path');

// Routes import
const users = require('./server/routes/users');
const employees = require('./server/routes/employees');
const feedbacks = require('./server/routes/feedbacks');

const app = express();

// Db config
const db = require('./server/config/keys').mongoURI;

// Connect to mongodb
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected')).catch(err => console.log(err));

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./server/services/passport')(passport);

// Routes
app.use('/api/users', users);
app.use('/api/employees', employees);
app.use('/api/feedbacks', feedbacks);

// Server Static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server is running on port ${port}`));

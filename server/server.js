const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

// Routes import
const users = require('./routes/users');
const employees = require('./routes/employees');

const app = express();

// Db config
const db = require('./config/keys').mongoURI;

// Connect to mongodb
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected')).catch(err => console.log(err));

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./services/passport');

// Routes
app.use('/api/users', users);
app.use('/api/employees', employees);

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server is running on port ${port}`));

const JWT = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const keys = require('../config/keys');

// Input validations
const validateRegisterInput = require('../validations/Register');
const validateLoginInput = require('../validations/Login');

// Model
const User = require('../models/User');

module.exports = {
  register: async (req, res) => {
    const {
      errors,
      isValid,
    } = validateRegisterInput(req.body);

    // Check if any errors
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const {
      email,
      password,
      name,
      isAdmin,
    } = req.body;
    // Check if email already exists
    const foundUser = await User.findOne({
      email,
    });
    if (foundUser) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    }

    // Create a new user
    const newUser = new User({
      name,
      email,
      password,
      isAdmin,
    });
    try {
      // Generate salt
      const salt = await bcrypt.genSalt(10);

      // hash the password with our new salt
      const hash = await bcrypt.hash(newUser.password, salt);

      // override the cleartext password with the hashed one
      newUser.password = hash;

      // save the new user
      const user = await newUser.save();
      return res.json(user);
    } catch (error) {
      throw error;
    }
  },

  login: async (req, res) => {
    const {
      errors,
      isValid,
    } = validateLoginInput(req.body);

    // Check if any errors
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const {
      email,
      password,
    } = req.body;

    try {
      // Find the user by ID
      const user = await User.findOne({
        email,
      });

      // Check for user
      if (!user) {
        errors.email = 'Email not found';
        return res.status(404).json(errors);
      }

      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        errors.password = 'Invalid Password';
        return res.status(404).json(errors);
      }

      // If user matches, create a jwt payload
      const payload = {
        id: user.id,
        name: user.name,
        isAdmin: user.isAdmin,
      };

      // Generate webtokens
      const token = await JWT.sign(
        payload,
        keys.secretKey, {
          expiresIn: 360000,
        },
      );

      // Send token as a response
      return res.json({
        success: true,
        token: `Bearer ${token}`,
      });
    } catch (error) {
      errors.password = 'Something went wrong';
      return res.status(400).json(errors);
    }
  },

  currentUser: async (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      isAdmin: req.user.isAdmin,
    });
  },
};

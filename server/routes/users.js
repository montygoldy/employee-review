const express = require('express');
const passport = require('passport');
const UserController = require('../controller/users');

const router = express.Router();


// @route  Register @api/users/register
// @desc   Register user route
// @access PUBLIC
router.post('/register', UserController.register);

// @route  Login @api/users/login
// @desc   Login user route
// @access PUBLIC
router.post('/login', UserController.login);

// @route  Get @api/users/current
// @desc   GET Current user route
// @access PRIVATE
router.get('/current', passport.authenticate('jwt', {
  session: false,
}), UserController.currentUser);

// @route  Get @api/users/
// @desc   GET All users
// @access PRIVATE
router.get('/', passport.authenticate('jwt', { session: false }), UserController.getUsers);

module.exports = router;

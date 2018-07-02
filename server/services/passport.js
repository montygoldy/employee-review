const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const {
  ExtractJwt,
} = require('passport-jwt');
const keys = require('../config/keys');
const User = require('../models/User');

module.exports = passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.secretKey,
}, async (payload, done) => {
  try {
    // Find the user specified in token
    const user = await User.findById(
      payload.id,
    );
    if (!user) {
      return done(null, false);
    }

    // If user exists return user
    done(null, user);
  } catch (error) {
    done(error, false);
  }
}));

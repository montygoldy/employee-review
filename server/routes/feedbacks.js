const express = require('express');
const passport = require('passport');
const FeedbackController = require('../controller/feedbacks');

const passportJWT = passport.authenticate('jwt', {
  session: false,
});

const router = express.Router();

// @route  GET @api/feedbacks
// @desc   Get all Feedback route
// @access PRIVATE
router.get('/', passportJWT, FeedbackController.getAllFeedbacks);

// @route  GET @api/feedbacks/:id
// @desc   Get Feedback by id route
// @access PRIVATE
// router.get('/:id', passportJWT, FeedbackController.getFeedbackById);

// @route  POST @api/feedbacks/
// @desc   Add a Feedback route
// @access PRIVATE
router.post('/', passportJWT, FeedbackController.addFeedback);

// @route  PUT @api/feedbacks/employeeId
// @desc   Edit a Feedback route
// @access PRIVATE
router.put('/:id', passportJWT, FeedbackController.editFeedback);

module.exports = router;

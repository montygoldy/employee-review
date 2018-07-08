// Model
const Feedback = require('../models/Feedback');

// Validation
const validateFeedbackInput = require('../validations/Feedback');

module.exports = {
  getAllFeedbacks: async (req, res) => {
    const errors = {};
    try {
      const feedbacks = await Feedback.find({});

      // Check if feedbacks empty
      if (!feedbacks || feedbacks.length === 0) {
        errors.noFeedbacks = 'No feddbacks found';
        return res.status(404).json(errors);
      }

      return res.json(feedbacks);
    } catch (err) {
      errors.noFeedbacks = 'Please try again';
      return res.status(404).json(errors);
    }
  },

  addFeedback: async (req, res) => {
    const {
      errors,
      isValid,
    } = validateFeedbackInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    try {
      // Get fields
      const feedbackFields = {};
      feedbackFields.reviewerId = req.user.id;
      feedbackFields.reviewerName = req.user.name;
      feedbackFields.pro = req.body.pro;
      feedbackFields.con = req.body.con;
      feedbackFields.comments = req.body.comments;
      feedbackFields.rating = req.body.rating;

      let feedback = await Feedback.findOne({
        user: feedbackFields.reviewerId,
      });

      if (feedback) {
        errors.alreadyFeedback = 'You have already submitted feedback to this employee';
        return res.status(404).json(errors);
      }

      // Create new feedback
      feedback = await new Feedback(feedbackFields).save();
      return res.json(feedback);
    } catch (err) {
      errors.addFeedback = 'Unable add feedback try again!';
      return res.status(404).json(errors);
    }
  },

  editFeedback: async (req, res) => {
    const {
      errors,
      isValid,
    } = validateFeedbackInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    try {
      // Get fields
      const feedbackFields = {};
      feedbackFields.reviewerId = req.user.id;
      feedbackFields.reviewerName = req.user.name;
      feedbackFields.pro = req.body.pro;
      feedbackFields.con = req.body.con;
      feedbackFields.comments = req.body.comments;
      feedbackFields.rating = req.body.rating;

      const feedback = await Feedback.findOneAndUpdate({
        _id: req.params.id,
      }, {
        $set: feedbackFields,
      }, {
        new: true,
      });

      return res.json(feedback);
    } catch (err) {
      errors.addFeedback = 'Unable edit feedback try again!';
      return res.status(404).json(errors);
    }
  },
};

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
      feedbackFields.employeeId = req.params.employeeId;

      let feedback = await Feedback.find({
        employeeId: req.params.employeeId,
      });

      if (feedback.filter(f => f.reviewerId.toString() === req.user.id).length > 0) {
        errors.alreadyReviewed = 'You have already reviewed this employee';
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

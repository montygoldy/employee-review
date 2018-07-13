const mongoose = require('mongoose');

const {
  Schema,
} = mongoose;

// Create Schema
const FeedbackSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  reviewerId: {
    type: String,
    required: true,
  },
  reviewerName: {
    type: String,
    required: true,
  },
  pro: {
    type: String,
    required: true,
  },
  con: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  employeeId: {
    type: String,
    required: true,
  },
});

// Create model
const feedback = mongoose.model('feedbacks', FeedbackSchema);

module.exports = feedback;

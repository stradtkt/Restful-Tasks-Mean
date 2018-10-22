const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: {
      type: String
  },
  description: {
      type: String,
      default: ''
  },
  completed: {
      type: Boolean,
      default: false
  },
  created_at: {
      type: Date,
      default: Date.now
  },
  updated_at: {
      type: Date,
      default: Date.now
  }
});

module.exports = mongoose.models('Task', taskSchema);


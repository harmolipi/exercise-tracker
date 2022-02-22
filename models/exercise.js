const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date },
});

// Virtual for formatted date
ExerciseSchema.virtual('date_formatted').get(function () {
  return this.date.toDateString();
});

module.exports = mongoose.model('Exercise', ExerciseSchema);

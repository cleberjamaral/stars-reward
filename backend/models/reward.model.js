const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rewardSchema = new Schema({
  pupilname: { type: String, required: true },
  stars: { type: Number, required: true },
  description: { type: String, required: false },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Reward = mongoose.model('Reward', rewardSchema);

module.exports = Reward;
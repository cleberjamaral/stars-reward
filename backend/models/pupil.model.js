const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pupilSchema = new Schema({
  pupilname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Pupil = mongoose.model('Pupil', pupilSchema);

module.exports = Pupil;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addLocationsSchema = new Schema({
  Name: { type: String, required: true },
  website: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});


const addLocations = mongoose.model('addLocations', addLocationsSchema);


module.exports = addLocations;
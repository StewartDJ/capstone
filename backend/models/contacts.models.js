const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactsSchema = new Schema({
  Name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});


const contacts = mongoose.model('contacts', contactsSchema);


module.exports = contacts;
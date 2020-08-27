const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addLocationsSchema = new Schema({
  Name: { type: String, required: true },
  description: {type: String, required: true},
  website: { type: String, required: true },
  imageUrl:{type: String, required: true},
  location: {object:
  {
    address: {type: String, required: true},
    city: {type: String, required: true},
    destinationState:{type: String, required: true},
    zipCode:{type:Number, required: true},
  },},
  indoors:{type: Boolean, required: true},    
 familyFriendly:{type: Boolean, required: true}
}) 
 



const addLocations = mongoose.model('addLocations', addLocationsSchema);


module.exports = addLocations;
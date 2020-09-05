const mongoose = require('mongoose');
const Schema = mongoose.Schema;
<<<<<<< HEAD

=======
// const locationSchema = new Schema({
//   address: {type: String, required: true},
//   city: {type: String, required: true},
//   destinationState:{type: String, required: true},
//   zipCode:{type:Number, required: true}
// }) 
>>>>>>> f6b8db5d78f6a5aecac413970f99a885253b020a
const addLocationsSchema = new Schema({
  Name: { type: String, required: true },
  description: {type: String, required: true},
  website: { type: String, required: true },
  imageUrl:{type: String, required: true},
  location: {type: Object, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    destinationState:{type: String, required: true},
    zipCode:{type:Number, required: true},
    indoors:{type: Boolean },    
    familyFriendly:{type: Boolean }
  }); 
 

  // location: {type: locationSchema, required: true},
  // indoors:{type: Boolean },    
  //   familyFriendly:{type: Boolean }
  // }); 
 const TouristDestination = mongoose.model(
  "TouristDestination",
  addLocationsSchema
);

module.exports = TouristDestination;


// module.exports = TouristDestination;
// Made some changes here - DJ
// const addLocations = mongoose.model('addLocations', addLocationsSchema);
// module.exports = addLocations;
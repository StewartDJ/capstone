const { Router } = require("express");
const TouristDestination = require("../models/addLocations.models");

Router.route('/').get((req, res) => {
   TouristDestination.find()
   .then(touristdestinations => res.json(touristdestinations))
   .catch(err => res.status(400).json('Error: ' + err));
})
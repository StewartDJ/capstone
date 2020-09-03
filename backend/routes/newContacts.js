const router = require('express').Router()

const Info = require('../models/contacts.model');

router.route('/').get((req,res) => {
       Info.find()
        .then((newLocations) =>{res.json(newLocations)})
        .catch((err) => {
            console.log(err)
            res.status(400).json("Error:" + err)
        });
});

        router.route('/add').post((req,res) => {
              const name = req.body.name
                const email = req.body.email                                         
                const phoneNumber = Number(req.body.phoneNumber)
                const date = Date.parse(req.body.date)
                const newInfo = new Info (
                    {
                        name,
                        email,
                        phoneNumber,
                        date
                        }
                )

                newInfo
                .save()
                .then(() => {
                    res.json('Location added!')
                })
                .catch((err) => {
                    console.log(err)
                     res.status(400).json("Error:" + err)
                })
        });


        // add more routes
              
                
                 
        // end add more routes

        module.exports = router;
const router = require('express').Router();
let Attraction = require('../Models/attractionsSchema');

router.route('/').get((req, res) => {
    Attraction.find(req.params.category)
    .then(attraction => 
        res.json(attraction))
        .catch((err) => {
            res.status(400).json('Error: ' + err)
        });
});

router.route('/:id').get((req, res) => {
    Attraction.findById(req.params.id)
    .then((attraction) => {
        res.json(attraction)
    }).catch((err) => {
        res.status(400).json('Error ' + err)
    });
}).put((req, res) => {
    Attraction.findById(req.params.id)
    .then((attraction) => {
        attraction.title = req.body.title 
        attraction.description = req.body.description 
        attraction.imageURL = req.body.imageURL 
        attraction.website = req.body.website 
        attraction.location = req.body.location 
        attraction.category = req.body.category 
    })
    .catch((err) => {
        res.status(400).json('Error ' + err)
    });
});


module.exports = router;
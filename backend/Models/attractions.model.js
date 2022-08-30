const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const locationSchema = new Schema({
    address: {
        type: String
    },

    category: {
        type: String
    },

    website: {
        type: String
    },

    imageURL: {
        type: String
    }
})


const Location = mongoose.model('Location', locationSchema)
module.exports = Location
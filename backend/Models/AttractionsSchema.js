const mongoose = require(mongoose);
const Schema = mongoose.Schema;
const attractionSchema = new Shcema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    imageURL: {
        type: String,
    },
    website: {
        type: String,
    },
    location: {
        type: String,
    },
    category: {
        type: String,
    }
});

const Attraction = mongoose.model('Attraction', attractionSchema);


module.exports = Attraction;
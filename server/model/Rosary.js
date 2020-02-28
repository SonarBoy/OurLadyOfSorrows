let mongoose = require('mongoose');

let RosarySchema = mongoose.Schema({
    MysteryName: String,
    MysteryType: String,
    MysteryNumber: Number,
    Verses: String,
    Matthew: String,
    Mark: String,
    Luke: String,
    John: String,
    Contemplation: String
},{
    collection: "Rosary"
});

module.exports = mongoose.model("Rosary",RosarySchema);
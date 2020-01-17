let mongoose = require('mongoose');

let RosarySchema = mongoose.Schema({
    MysteryName: String,
    MysteryType: String,
    MysteryNumber: Number,
    Verses: Number,
    Matthew: String,
    Mark: String,
    Luke: String,
    John: String
},{
    collection: "Rosary"
});

module.exports = mongoose.model("Rosary",RosarySchema);
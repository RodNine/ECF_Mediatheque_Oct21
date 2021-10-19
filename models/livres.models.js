const mongoose = require("mongoose");

const livreSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    titre : String,
    auteur : String,
    date : Number,
    description : String,
    genre : String
})
module.exports= mongoose.model('livre',livreSchema);
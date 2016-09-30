var mongoose=require("mongoose");
var Schema = mongoose.Schema;

var peopleSchema = new Schema ({
    name: String,
    peeCount: Number,
});

module.exports = mongoose.model("people", peopleSchema)
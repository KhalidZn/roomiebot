var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
  user_id: {type: String},
  title: {type: String},
  awards:{type:String},
  plot: {type: String},
  date: {type: String},
  runtime: {type: String},
  director: {type: String},
  writer: {type: String},
  genre: {type:String},
  cast: {type: String},
  rating: {type: String},
  type:{type:String},
  poster_url: {type: String}
});

module.exports = mongoose.model("Movie", MovieSchema);

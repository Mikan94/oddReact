const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const oddSchema = new Schema(
  {
    oddID: String,
    oddHome: String,
    oddDraw: String,
    oddAway: String,
  },
  {
    timestamps: true,
  }
);

const Odd = mongoose.model("Odd", oddSchema);
module.exports = Odd;

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roundSchema = new Schema(
  {
    roundID: String,
  },
  {
    timestamps: true,
  }
);

const Round = mongoose.model("Round", roundSchema);
module.exports = Round;

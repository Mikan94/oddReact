const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const scoreSchema = new Schema(
  {
    gameID: String,
    scoreHome: String,
    scoreAway: String,
  },
  {
    timestamps: true,
  }
);

const Score = mongoose.model("Score", scoreSchema);
module.exports = Score;

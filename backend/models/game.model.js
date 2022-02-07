const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {
    gameID: String,
    round: String,
    date: String,
    teamHome: String,
    teamAway: String,
    scoreHome: String,
    scoreAway: String,
  },
  {
    timestamps: true,
  }
);

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;

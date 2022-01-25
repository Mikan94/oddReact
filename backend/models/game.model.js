const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {
    gameID: String,
    date: String,
    teamHome: String,
    teamAway: String,
    scoreHome: String,
    scoreAway: String,
    oddID: String,
    oddHome: String,
    oddAway: String,
    oddDraw: String,
  },
  {
    timestamps: true,
  }
);

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;

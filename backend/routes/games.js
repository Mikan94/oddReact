const router = require("express").Router();
let Game = require("../models/game.model");

router.route("/").get((req, res) => {
  Game.find()
    .then((games) => res.json(games))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const gameID = req.body.gameID;
  const round = req.body.round;
  const date = req.body.date;
  const teamHome = req.body.teamHome;
  const teamAway = req.body.teamAway;

  const newGame = new Game({
    gameID,
    round,
    date,
    teamHome,
    teamAway,
  });

  newGame
    .save()
    .then(() => res.json("Games added"))
    .catch((err) => res.setMaxListeners(400).json("Error: " + err));
});

module.exports = router;

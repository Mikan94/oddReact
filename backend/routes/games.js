const router = require("express").Router();
const Game = require("../models/game.model");
let Games = require("../models/game.model");

router.route("/").get((req, res) => {
  Games.find()
    .then((games) => res.json(games))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const gameID = req.body.gameID;
  const date = req.body.date;
  const teamHome = req.body.teamHome;
  const teamAway = req.body.teamAway;
  const scoreHome = req.body.scoreHome;
  const scoreAway = req.body.scoreAway;
  const oddID = req.body.oddID;
  const oddHome = req.body.oddHome;
  const oddAway = req.body.oddAway;
  const oddDraw = req.body.oddDraw;

  const newGame = new Game({
    gameID,
    date,
    teamHome,
    teamAway,
    scoreHome,
    scoreAway,
    oddID,
    oddHome,
    oddAway,
    oddDraw,
  });

  newGame
    .save()
    .then(() => res.json("Game added"))
    .catch((err) => res.setMaxListeners(400).json("Error: " + err));
});

module.exports = router;

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
  const scoreHome = req.body.scoreHome;
  const scoreAway = req.body.scoreAway;

  const newGame = new Game({
    gameID,
    round,
    date,
    teamHome,
    teamAway,
    scoreHome,
    scoreAway,
  });

  newGame
    .save()
    .then(() => res.json("Games added"))
    .catch((err) => res.setMaxListeners(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Game.findById(req.params.id)
    .then((game) => res.json(game))
    .catch((err) => res.status.json("Error" + err));
});

router.route("/update/:id").post((req, res) => {
  Game.findById(req.params.id)
    .then((game) => {
      game.gameID = req.body.gameID;
      game.round = req.body.round;
      game.date = req.body.date;
      game.teamHome = req.body.teamHome;
      game.teamAway = req.body.teamAway;
      game.scoreHome = req.body.scoreHome;
      game.scoreAway = req.body.scoreAway;

      game
        .save()
        .then(() => res.json("Score updated"))
        .catch((err) => res.status(400).json("Error" + err));
    })
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;

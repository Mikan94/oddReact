const router = require("express").Router();
const Game = require("../models/game.model");
let Games = require("../models/game.model");

router.route("/").get((req, res) => {
  Games.find()
    .then((games) => res.json(games))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const data = req.body.data;
  //const date = req.body.date;
  //const round = req.body.round;
  //const teamHome = req.body.teamHome;
  //const teamAway = req.body.teamAway;
  //const scoreHome = req.body.scoreHome;
  //const scoreAway = req.body.scoreAway;
  //const oddHome = req.body.oddHome;
  //const oddAway = req.body.oddAway;
  //const oddDraw = req.body.oddDraw;

  const newGame = new Game({
    //date,
    //round,
    //teamHome,
    //teamAway,
    //scoreHome,
    //scoreAway,
    //oddHome,
    //oddAway,
    //oddDraw,
    data,
  });

  newGame
    .save()
    .then(() => res.json("Game added"))
    .catch((err) => res.setMaxListeners(400).json("Error: " + err));
});

module.exports = router;

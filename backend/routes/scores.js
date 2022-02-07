const router = require("express").Router();
let Score = require("../models/score.model");

router.route("/").get((req, res) => {
  Score.find()
    .then((scores) => res.json(scores))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const gameID = req.body.gameID;
  const scoreHome = req.body.scoreHome;
  const scoreAway = req.body.scoreAway;

  const newScore = new Score({
    gameID,
    scoreHome,
    scoreAway,
  });

  newScore
    .save()
    .then(() => res.json("Scores added"))
    .catch((err) => res.setMaxListeners(400).json("Error: " + err));
});

module.exports = router;

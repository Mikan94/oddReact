const router = require("express").Router();
let Round = require("../models/round.model");

router.route("/").get((req, res) => {
  Round.find()
    .sort({ title: 1 })
    .collation({ locale: "en_US", numericOrdering: true })
    .then((rounds) => res.json(rounds))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const roundID = req.body.roundID;

  const newRound = new Round({
    roundID,
  });

  newRound
    .save()
    .then(() => res.json("Rounds added"))
    .catch((err) => res.setMaxListeners(400).json("Error: " + err));
});

module.exports = router;

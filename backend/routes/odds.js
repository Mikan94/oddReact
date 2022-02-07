const router = require("express").Router();
let Odd = require("../models/odd.model");

router.route("/").get((req, res) => {
  Odd.find()
    .then((odds) => res.json(odds))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const oddID = req.body.oddID;
  const oddHome = req.body.oddHome;
  const oddDraw = req.body.oddDraw;
  const oddAway = req.body.oddAway;

  const newOdd = new Odd({
    oddID,
    oddHome,
    oddDraw,
    oddAway,
  });

  newOdd
    .save()
    .then(() => res.json("Odd added"))
    .catch((err) => res.setMaxListeners(400).json("Error: " + err));
});

module.exports = router;

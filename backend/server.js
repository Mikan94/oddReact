const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongoose database connection established successfully");
});

const gamesRouter = require("./routes/games");
const oddsRouter = require("./routes/odds");
const scoresRouter = require("./routes/scores");
const usersRouter = require("./routes/users");

app.use("/games", gamesRouter);
app.use("/odds", oddsRouter);
app.use("/scores", scoresRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

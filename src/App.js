import React from "react";
import GamesData from "./Services/Api/GamesData";
import OddsData from "./Services/Api/OddsData";
import ScoresData from "./Services/Api/ScoresData";
import GetGamesDB from "./Services/Database/Games/getGamesDB";
import GetOddsDB from "./Services/Database/Odds/getOddsDB";
import GetScoresDB from "./Services/Database/Scores/getScoresDB";
import GetGamesData from "./Services/Database/getGamesData";

function App() {
  return (
    <>
      <GetGamesData />
    </>
  );
}

export default App;

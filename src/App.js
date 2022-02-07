import React from "react";
import GamesData from "./Services/Api/GamesData";
import OddsData from "./Services/Api/OddsData";
import ScoresData from "./Services/Api/ScoresData";
import GetGamesDB from "./Services/Database/Games/getGamesDB";
import GetOddsDB from "./Services/Database/Odds/getOddsDB";
import GetScoresDB from "./Services/Database/Scores/getScoresDB";

function App() {
  return (
    <>
      {/* <GamesData />
      <OddsData />
      <GetGamesDB />
      <GetOddsDB /> */}
      <ScoresData />
      <GetScoresDB />
    </>
  );
}

export default App;

import React from "react";
import GamesData from "./Services/Api/GamesData";
import OddsData from "./Services/Api/OddsData";
import GetGamesDB from "./Services/Database/Games/getGamesDB";
import GetOddsDB from "./Services/Database/Odds/getOddsDB";
import GetGamesData from "./Services/Database/getGamesData";
import GetRounds from "./Services/Database/getRounds";

function App() {
  return (
    <>
      <GetRounds />
    </>
  );
}

export default App;

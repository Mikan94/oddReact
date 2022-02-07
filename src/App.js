import React from "react";
import GamesData from "./Services/Api/GamesData";
import OddsData from "./Services/Api/OddsData";
import GetGamesDB from "./Services/Database/Games/getGamesDB";
import GetOddsDB from "./Services/Database/Odds/getOddsDB";

function App() {
  return (
    <>
      <GamesData />
      <OddsData />
      <GetGamesDB />
      <GetOddsDB />
    </>
  );
}

export default App;

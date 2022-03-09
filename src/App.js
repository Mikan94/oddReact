import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import GamesData from "./Services/Api/GamesData";
import OddsData from "./Services/Api/OddsData";
import GetGamesDB from "./Services/Database/Games/getGamesDB";
import GetOddsDB from "./Services/Database/Odds/getOddsDB";
import GetGamesData from "./Services/Database/getGamesData";
import GetRounds from "./Services/Database/getRounds";
import TestCard from "../src/Services/Database/testCard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<GetRounds />} />
          <Route path="/games" element={<GetGamesData />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import React from "react";
import Api from "./Services/Api";
import GamesDB from "./Services/Database/GamesDB";

function App() {
  return (
    <>
      <Api />
      <GamesDB />
    </>
  );
}

export default App;

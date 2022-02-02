import React from "react";
import Api from "./Services/Api";
import GetDataDB from "./Services/Database/Games/getDataDB";

function App() {
  return (
    <>
      <Api />
      <GetDataDB />
    </>
  );
}

export default App;

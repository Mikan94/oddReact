import React, { useState, useEffect } from "react";
import axios from "axios";

function GetGamesData() {
  const [gamesData, setGamesData] = useState([]);
  const [oddsData, setOddsData] = useState([]);
  const [scoresData, setScoresData] = useState([]);
  const [roundData, setRoundData] = useState([]);

  const getDataDB = () => {
    axios.get("http://localhost:8080/games").then((response) => {
      setGamesData(response.data);
    });
    console.log("getted games from db");

    axios.get("http://localhost:8080/odds").then((response) => {
      setOddsData(response.data);
    });
    console.log("getted odds from db");

    axios.get("http://localhost:8080/scores").then((response) => {
      setScoresData(response.data);
    });
    console.log("getted scores from db");

    axios.get("http://localhost:8080/round").then((response) => {
      setRoundData(response.data);
    });
    console.log("getted rounds from db");
  };

  useEffect(() => {
    const getData = setInterval(() => {
      getDataDB();
    }, 5000);
    return () => clearInterval(getData);
  }, []);

  return (
    <>
      <div>test</div>
    </>
  );
}

export default GetGamesData;

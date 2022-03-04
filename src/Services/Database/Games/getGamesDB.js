import React, { Component, useEffect, useState } from "react";
import axios from "axios";

function GetGamesDB() {
  const [gamesData, setGamesData] = useState([]);

  const getDataDB = () => {
    axios.get("http://localhost:8080/games").then((response) => {
      setGamesData(response.data);
    });
    console.log("getted data from db");
  };

  useEffect(() => {
    const callApi = setInterval(() => {
      getDataDB();
    }, 5000);
    return () => clearInterval(callApi);
  }, []);

  return (
    <>
      <div>
        <div>
          {gamesData.map((item) => (
            <div>
              <div>{item.gameID}</div>
              <div>{item.round}</div>
              <div>{new Date(item.date).toLocaleString()}</div>
              <div>{item.teamHome}</div>
              <div>{item.teamAway}</div>
              <div>{item.scoreHome}</div>
              <div>{item.scoreAway}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GetGamesDB;

import React, { Component, useEffect, useState } from "react";
import axios from "axios";

function GetScoresDB() {
  const [scoresData, setScoresData] = useState([]);

  const getDataDB = () => {
    axios.get("http://localhost:5000/scores").then((response) => {
      setScoresData(response.data);
    });
    console.log("getted scores from db");
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
          {scoresData.map((item) => (
            <div>
              <div>{item.gameID}</div>
              <div>{item.scoreHome}</div>
              <div>{item.scoreAway}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GetScoresDB;

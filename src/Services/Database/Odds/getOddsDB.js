import React, { Component, useEffect, useState } from "react";
import axios from "axios";

function GetOddsDB() {
  const [oddsData, setOddsData] = useState([]);

  const getDataDB = () => {
    axios.get("http://localhost:8080/odds").then((response) => {
      setOddsData(response.data);
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
          {oddsData.map((item) => (
            <div>
              <div>{item.oddID}</div>
              <div>{item.oddHome}</div>
              <div>{item.oddDraw}</div>
              <div>{item.oddAway}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GetOddsDB;

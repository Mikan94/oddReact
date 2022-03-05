import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Components/Card";

function GetRoundsDB() {
  const [roundsData, setRoundsData] = useState([]);

  const getDataDB = () => {
    axios.get("http://localhost:8080/rounds").then((response) => {
      setRoundsData(response.data);
    });
    console.log("getted data from db");
  };

  useEffect(() => {
    const callApi = setInterval(() => {
      getDataDB();
    }, 10000);
    return () => clearInterval(callApi);
  }, []);

  return (
    <>
      <div>
        Rounds
        <div>
          {roundsData.map((item) => (
            <Card roundID={item.roundID} />
          ))}
        </div>
      </div>
    </>
  );
}

export default GetRoundsDB;

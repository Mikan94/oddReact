import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

function GetGamesData() {
  const [gamesData, setGamesData] = useState([]);
  const [oddsData, setOddsData] = useState([]);

  const getDataDB = () => {
    axios.get("http://localhost:8080/games").then((response) => {
      setGamesData(response.data);
    });
    console.log("getted games from db");

    axios.get("http://localhost:8080/odds").then((response) => {
      setOddsData(response.data);
    });
    console.log("getted odds from db");
  };

  useEffect(() => {
    getDataDB();
    console.log(state);
  }, []);

  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <>
      <h1>Games</h1>
      <button onClick={() => navigate("/rounds")}>rounds</button>
      <div>
        {gamesData
          .filter((games) => state.item == games.round)
          .map((game) =>
            oddsData
              .filter((item) => game.gameID == item.oddID)
              .map((odd) => {
                return (
                  <>
                    <div>{game.gameID}</div>
                    <div>{game.round}</div>
                    <div>{new Date(game.date).toLocaleString()}</div>
                    <div>{game.teamHome}</div>
                    <div>{game.teamAway}</div>
                    <div>{game.scoreHome}</div>
                    <div>{game.scoreAway}</div>
                    <div>{odd.oddID}</div>
                    <div>{odd.oddHome}</div>
                    <div>{odd.oddDraw}</div>
                    <div>{odd.oddAway}</div>
                  </>
                );
              })
          )}
      </div>
      <div>
        {gamesData
          .filter((games) => state.item == games.round)
          .map((game) => {
            return (
              <>
                <div>{game.gameID}</div>
                <div>{game.round}</div>
                <div>{new Date(game.date).toLocaleString()}</div>
                <div>{game.teamHome}</div>
                <div>{game.teamAway}</div>
                <div>{game.scoreHome}</div>
                <div>{game.scoreAway}</div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default GetGamesData;

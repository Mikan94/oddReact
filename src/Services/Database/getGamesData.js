import React, { useState, useEffect } from "react";
import axios from "axios";

function GetGamesData() {
  const [gamesData, setGamesData] = useState([]);
  const [oddsData, setOddsData] = useState([]);
  const [scoresData, setScoresData] = useState([]);

  const getDataDB = () => {
    axios.get("http://localhost:5000/games").then((response) => {
      setGamesData(response.data);
    });
    console.log("getted games from db");

    axios.get("http://localhost:5000/odds").then((response) => {
      setOddsData(response.data);
    });
    console.log("getted odds from db");

    axios.get("http://localhost:5000/scores").then((response) => {
      setScoresData(response.data);
    });
    console.log("getted scores from db");
  };

  useEffect(() => {
    const getData = setInterval(() => {
      getDataDB();
    }, 5000);
    return () => clearInterval(getData);
  }, []);

  return (
    <>
      <div>
        {/* vorhanden: Games, Odds, Scores */}
        {gamesData.map((game) =>
          oddsData
            .filter((item) => game.gameID == item.oddID)
            .map((odd) =>
              scoresData
                .filter((obj) => odd.oddID == obj.gameID)
                .map((score) => {
                  return (
                    <div>
                      <div>{game.gameID}</div>
                      <div>{game.round}</div>
                      <div>{game.teamHome}</div>
                      <div>{game.teamAway}</div>
                      <div>{score.gameID}</div>
                      <div>{score.scoreHome}</div>
                      <div>{score.scoreAway}</div>
                      <div>{odd.oddID}</div>
                      <div>{odd.oddHome}</div>
                      <div>{odd.oddDraw}</div>
                      <div>{odd.oddAway}</div>
                    </div>
                  );
                })
            )
        )}
      </div>
      <div>
        {/* vorhanden: Games, Scores */}
        {gamesData.map((game) =>
          scoresData
            .filter((item) => game.gameID == item.gameID)
            .map((score) => {
              return (
                <div>
                  <div>{game.gameID}</div>
                  <div>{game.round}</div>
                  <div>{game.teamHome}</div>
                  <div>{game.teamAway}</div>
                  <div>{score.gameID}</div>
                  <div>{score.scoreHome}</div>
                  <div>{score.scoreAway}</div>
                </div>
              );
            })
        )}
      </div>
      <div>
        {/* vorhanden: Games, Odds */}
        {gamesData.map((game) =>
          oddsData
            .filter((item) => game.gameID == item.oddID)
            .map((odd) => {
              return (
                <div>
                  <div>{game.gameID}</div>
                  <div>{game.round}</div>
                  <div>{game.teamHome}</div>
                  <div>{game.teamAway}</div>
                  <div>{odd.oddID}</div>
                  <div>{odd.oddHome}</div>
                  <div>{odd.oddDraw}</div>
                  <div>{odd.oddAway}</div>
                </div>
              );
            })
        )}
      </div>
      <div>
        {/* vorhanden: Games */}
        {gamesData.map((game) => {
          return (
            <div>
              <div>{game.gameID}</div>
              <div>{game.round}</div>
              <div>{game.teamHome}</div>
              <div>{game.teamAway}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default GetGamesData;

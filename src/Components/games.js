import axios from "axios";
import React, { useState, useEffect } from "react";

import Card from "./Card";

function Games() {
  // getData API
  const [games, setGames] = useState([]);
  const [odds, setOdds] = useState([]);

  const apiHost = "v3.football.api-sports.io";
  const apiUrlGames = `https://${apiHost}/fixtures`;
  const apiUrlOdds = `https://${apiHost}/odds`;

  const toParamString = (obj) => new URLSearchParams(obj).toString();

  const apiKey = "b8815df003f549ac6fd8db7f3e27c045";

  const getGames = ({ season, league, round }) => {
    const url = `${apiUrlGames}?${toParamString({ season, league, round })}`;
    return fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-apisports-key": apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => data.response);
  };

  const getOdds = ({ season, bet, bookmaker, league }) => {
    const url = `${apiUrlOdds}?${toParamString({
      season,
      bet,
      bookmaker,
      league,
    })}`;
    return fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-apisports-key": apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => data.response);
  };

  const getData = () => {
    getGames({ season: 2021, league: 78, round: "Regular Season - 20" }).then(
      (data) => {
        setGames(data);
        console.log(games);
      }
    );

    getOdds({
      season: 2021,
      bet: 1,
      bookmaker: 6,
      league: 78,
    }).then((data) => {
      setOdds(data);
      console.log(odds);
    });
  };

  // getData DB
  const [dataDB, setDataDB] = useState([]);

  const datasDB = () => {
    axios.get("http://localhost:5000/games").then((response) => {
      setDataDB(response.data);
    });
  };

  // displayData DB
  function gamesList() {
    return dataDB.map((currentGame) => {
      return (
        <>
          <div>{currentGame.gameID}</div>
          <div>{currentGame.teamHome}</div>
          <div>{currentGame.teamAway}</div>
          <div>{currentGame.scoreHome}</div>
          <div>{currentGame.scoreAway}</div>
          <div>{currentGame.oddID}</div>
          <div>{currentGame.oddHome}</div>
          <div>{currentGame.oddDraw}</div>
          <div>{currentGame.oddAway}</div>
        </>
      );
    });
  }

  return (
    <div>
      <h1>Games</h1>
      <button onClick={getData}>Get Data from API now!</button>
      <button onClick={datasDB}>Get data from DB!</button>

      {/* displayData API */}
      <div className="games">
        {games.map((game) =>
          odds
            .filter((item) => item.fixture.id == game.fixture.id)
            .map((odd) => (
              <Card
                gameID={game.fixture.id}
                teamHome={game.teams.home.name}
                teamAway={game.teams.away.name}
                scoreHome={game.score.fulltime.home}
                scoreAway={game.score.fulltime.away}
                oddID={odd.fixture.id}
                oddHome={odd.bookmakers[0].bets[0].values[0].odd}
                oddDraw={odd.bookmakers[0].bets[0].values[1].odd}
                oddAway={odd.bookmakers[0].bets[0].values[2].odd}
              />
            ))
        )}
      </div>
      <div>{gamesList()}</div>
    </div>
  );
}

export default Games;

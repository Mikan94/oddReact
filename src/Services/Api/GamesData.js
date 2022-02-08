import React, { useState, useEffect } from "react";
import PostGamesDB from "../Database/Games/postGamesDB";

function GamesData() {
  const [games, setGames] = useState([]);

  const apiHost = "v3.football.api-sports.io";
  const apiUrlGames = `https://${apiHost}/fixtures`;

  const toParamString = (obj) => new URLSearchParams(obj).toString();

  const apiKey = "b8815df003f549ac6fd8db7f3e27c045";

  const getGamesData = ({ season, league, round }) => {
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

  const getDataAPI = () => {
    getGamesData({
      season: 2021,
      league: 78,
      round: "Regular Season - 30",
    }).then((data) => {
      setGames(data);
      console.log(games);
    });
  };

  useEffect(() => {
    const callApi = setInterval(() => {
      getDataAPI();
      setGames([]);
    }, 10000);
    return () => clearInterval(callApi);
  }, []);

  return (
    <div>
      <div className="games">
        {games.map((game) => (
          <PostGamesDB
            gameID={game.fixture.id}
            round={game.league.round}
            date={game.fixture.date}
            teamHome={game.teams.home.name}
            teamAway={game.teams.away.name}
          />
        ))}
      </div>
    </div>
  );
}

export default GamesData;

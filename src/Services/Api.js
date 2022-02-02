import React, { useState, useEffect } from "react";
import PostDataDB from "./Database/Games/postDataDB";

function Api() {
  const [games, setGames] = useState([]);
  const [odds, setOdds] = useState([]);

  const apiHost = "v3.football.api-sports.io";
  const apiUrlGames = `https://${apiHost}/fixtures`;
  const apiUrlOdds = `https://${apiHost}/odds`;

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

  const getOddsData = ({ season, bet, bookmaker, league }) => {
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

  const getDataAPI = () => {
    getGamesData({
      season: 2021,
      league: 78,
      round: "Regular Season - 22",
    }).then((data) => {
      setGames(data);
      console.log(games);
    });

    getOddsData({
      season: 2021,
      bet: 1,
      bookmaker: 6,
      league: 78,
    }).then((data) => {
      setOdds(data);
      console.log(odds);
    });
  };

  return (
    <div>
      <button onClick={getDataAPI}>GetDataAPI</button>
      <div className="games">
        {odds.map((odd) =>
          games
            .filter((item) => item.fixture.id == odd.fixture.id)
            .map((game) => (
              <PostDataDB
                gameID={game.fixture.id}
                round={game.league.round}
                date={game.fixture.date}
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
    </div>
  );
}

export default Api;

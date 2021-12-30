import React, { useState, useEffect } from "react";

function Scores() {
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

  const getOdds = ({ season, bet, bookmaker, date, league }) => {
    const url = `${apiUrlOdds}?${toParamString({
      season,
      bet,
      bookmaker,
      date,
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

  useEffect(() => {
    getGames({ season: 2021, league: 39, round: "Regular Season - 20" }).then(
      (data) => setGames(data)
    );
    getOdds({
      season: 2021,
      bet: 1,
      bookmaker: 6,
      date: "2021-12-28",
      league: 39,
    }).then((data) => setOdds(data));
  }, []);

  return (
    <div>
      <h1>Games</h1>
      <div className="games">
        {games.map((game) =>
          odds
            .filter((item) => item.fixture.id == game.fixture.id)
            .map((odd) => (
              <div>
                <div>##### START ##### </div>
                <div>GameID: {game.fixture.id}</div>
                <div>{new Date(game.fixture.date).toLocaleString()}</div>
                <div>Team Home: {game.teams.home.name}</div>
                <div>Team Away: {game.teams.away.name}</div>
                <div>Score Home: {game.score.fulltime.home}</div>
                <div>Score Away: {game.score.fulltime.away}</div>
                <div>--------------------------</div>
                <div>OddID: {odd.fixture.id}</div>
                <div>Bet Home: {odd.bookmakers[0].bets[0].values[0].odd}</div>
                <div>Bet Draw: {odd.bookmakers[0].bets[0].values[1].odd}</div>
                <div>Bet Away: {odd.bookmakers[0].bets[0].values[2].odd}</div>
                <div>##### END ##### </div>
                <p></p>
              </div>
            ))
        )}
      </div>
    </div>
  );
}

export default Scores;

import React, { useEffect, useState } from "react";

function App() {
  const [games, setGames] = useState([]);
  const [odds, setOdds] = useState([]);

  const apiHost = "v3.football.api-sports.io";
  const apiUrlGames = `https://${apiHost}/fixtures`;
  const apiUrlOdds = `https://${apiHost}/odds`;

  const toParamString = (obj) => new URLSearchParams(obj).toString();

  const apiKey = "b8815df003f549ac6fd8db7f3e27c045";
  const getGames = ({ season, league, date }) => {
    const url = `${apiUrlGames}?${toParamString({ season, league, date })}`;
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
    getGames({ season: 2021, league: 39, date: "2021-12-28" }).then((data) =>
      setGames(data)
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
        test
        {games.map((game) => {
          odds
            .filter((item) => item.fixture.id == game.fixture.id)
            .map((odds) => {
              return <div></div>;
            });
        })}
        {games.map((game) => {
          odds
            .filter((item) => item.fixture.id == game.fixture.id)
            .map((odd) => {
              console.log(game.fulltime);
              console.log(odd.bookmakers[0].bets[0].values[0].odd);
              return (
                <div>
                  <div>{game.id}</div>
                  <div>{game.fulltime}</div>
                  <div>{game.away}</div>
                  <div>{game.home}</div>
                  <div>odd{odd.bookmakers[0].bets[0].values[0].odd}</div>
                  <div>{odd.bookmakers[0].bets[0].values[1].odd}</div>
                  <div>{odd.bookmakers[0].bets[0].values[2].odd}</div>
                </div>
              );
            });
        })}
      </div>
    </div>
  );
}

export default App;

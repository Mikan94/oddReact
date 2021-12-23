import React, { useEffect, useState } from "react";

function App() {
  const [games, setGames] = useState([]);
  const [odds, setOdds] = useState([]);

  const apiHost = "v3.football.api-sports.io";
  const apiUrlGames = `https://${apiHost}/fixtures`;
  const apiUrlOdds = `https://${apiHost}/odds`;

  const toParamString = (obj) => new URLSearchParams(obj).toString();

  const apiKey = "3914b827d25c9a793d6af1ec9c312d55";
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

  const Score = (props) => {
    const {
      game: {
        fixture: { date },
        score: { fulltime },
        teams,
      },
    } = props;

    return (
      <div className="score">
        <div className="score-date">{new Date(date).toLocaleString()}</div>
        <div className="score-grid">
          <div>{teams.home.name}</div>
          <div>{teams.away.name}</div>
          <div>{fulltime.home}</div>
          <div>{fulltime.away}</div>
        </div>
      </div>
    );
  };

  const Odds = (props) => {
    const {
      odd: {
        league: { name },
        bookmakers,
      },
    } = props;

    return (
      <div className="score">
        <div className="score-grid">
          <div>{name}</div>
          {bookmakers.map((item) => {
            return (
              <div>
                {item.bets.map((subItem) => {
                  return (
                    <div>
                      {subItem.values.map((sub) => {
                        return <div>{sub.odd}</div>;
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  useEffect(() => {
    getGames({ season: 2021, league: 78, date: "2021-12-18" }).then((data) =>
      setGames(data)
    );
    getOdds({
      season: 2021,
      bet: 1,
      bookmaker: 6,
      date: "2021-12-18",
      league: 78,
    }).then((data) => setOdds(data));
  }, []);

  return (
    <div>
      <h1>Games</h1>
      <div className="games">
        {games.map((game) => {
          const {
            fixture: { id },
          } = game;
          return <Score key={id} game={game} />;
        })}
        {odds.map((odd) => {
          const {
            fixture: { id },
          } = odd;
          return <Odds key={id} odd={odd} />;
        })}
      </div>
    </div>
  );
}

export default App;

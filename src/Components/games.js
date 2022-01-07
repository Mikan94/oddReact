import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "./Card";

function Games() {
  const [games, setGames] = useState([]);
  const [odds, setOdds] = useState([]);
  const [teamHome, setTeamHome] = useState([]);

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

  const postGames = (props) => {
    const data = {
      home: this.props.teamHome,
    };

    axios
      .post("http:localhost/5000/games/add", data)
      .then((res) => console.log(res.data));
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

  useEffect(() => {
    getGames({ season: 2021, league: 39, round: "Regular Season - 21" }).then(
      (data) => {
        setGames(data);
      }
    );

    getOdds({
      season: 2021,
      bet: 1,
      bookmaker: 6,
      league: 39,
    }).then((data) => setOdds(data));
  }, []);

  const Card = ({
    gameID,
    date,
    teamHome,
    teamAway,
    scoreHome,
    scoreAway,
    oddID,
    oddHome,
    oddDraw,
    oddAway,
  }) => {
    return (
      <>
        <div>
          <div>##### START ##### </div>
          <div>{gameID}</div>
          <div>{date}</div>
          <div>{teamHome}</div>
          <div>{teamAway}</div>
          <div>{scoreHome}</div>
          <div>{scoreAway}</div>
          <div>----------------</div>
          <div>{oddID}</div>
          <div>{oddHome}</div>
          <div>{oddDraw}</div>
          <div>{oddAway}</div>
          <div>##### ENDE ##### </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <h1>Games</h1>
      <button>Post to DB!</button>
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
    </div>
  );
}

export default Games;

import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "./Card";

function Games() {
  /* const gameId = this.props.gameID;
  const date = this.props.date;
  const teamHome = this.props.teamHome;
  const teamAway = this.props.teamAway;
  const scoreHome = this.props.scoreHome;
  const scoreAway = this.props.scoreAway;
  const oddId = this.props.oddID;
  const oddHome = this.props.oddHome;
  const oddDraw = this.props.oddDraw;
  const oddAway = this.props.oddAway;

postGames = () => {
        const data = {
          gameId: this.props.gameID,
          date: this.props.date,
          teamHome: this.props.teamHome,
          teamAway: this.props.teamAway,
          scoreHome: this.props.scoreHome,
          scoreAway: this.props.scoreAway,
          oddId: this.props.oddID,
          oddHome: this.props.oddHome,
          oddDraw: this.props.oddDraw,
          oddAway: this.props.oddAway,
        };

        axios.post("http://localhost:5000/games/add", { data }).then((res) => {
          console.log(res);
          console.log(res.data);
        });
      };
    }

    
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

  // 404 POST Route not found
  const postGames = () => {
    const data = {
      games: games,
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
    getGames({ season: 2021, league: 39, round: "Regular Season - 21" })
      .then((data) => {
        setGames(data);
      })
      .then(console.log(games));

      getOdds({
      season: 2021,
      bet: 1,
      bookmaker: 6,
      league: 39,
    }).then((data) => setOdds(data));
  }, []);

  const postGames = () => {
    return fetch("http://localhost:5000/games/add/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(games),
    })
      .then((response) => response.json())

      .then(console.log(games));
  };*/
  const [games, setGames] = useState([]);

  const postGames = () => {
    const data = {
      games: games,
    };

    axios.post("http://localhost:5000/games/add", { data }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };
  // Post works and send over one entry with array with all games

  const getGames = () => {
    axios.get("http://localhost:5000/games").then((response) => {
      const data = response.data;
      setGames(data.response);
      console.log("Data has been received");
      console.log(games);
    });
  };

  // Functions called with button onClick={getGames}

  /*const getGames = () => {
    return fetch("http://localhost:5000/games/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => data.response);
  };*/

  /*useEffect(() => {
    getGames();
  }, []);*/

  const displayGames = () => {
    return games.map((game, index) =>
      game.map((data, index) => {
        <div key={index}>
          <p>{data.teams.home.name}</p>
        </div>;
      })
    );
  };

  return (
    <div>
      <h1>Games</h1>

      <div className="games">
        hello world
        <button onClick={postGames}>Post games!</button>
        <button onClick={getGames}>Get games!</button>
      </div>
    </div>
  );
}

export default Games;

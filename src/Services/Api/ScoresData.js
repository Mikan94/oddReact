import React, { useState, useEffect } from "react";
import PostScoresDB from "../Database/Scores/postScoresDB";

function ScoresData() {
  const [scores, setScores] = useState([]);

  const apiHost = "v3.football.api-sports.io";
  const apiUrlGames = `https://${apiHost}/fixtures`;

  const toParamString = (obj) => new URLSearchParams(obj).toString();

  const apiKey = "b8815df003f549ac6fd8db7f3e27c045";

  const getScoresData = ({ season, league, round }) => {
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
    getScoresData({
      season: 2021,
      league: 78,
      round: "Regular Season - 15",
    }).then((data) => {
      setScores(data);
      console.log(scores);
    });
  };

  useEffect(() => {
    const callApi = setInterval(() => {
      getDataAPI();
      setScores([]);
    }, 10000);
    return () => clearInterval(callApi);
  }, []);

  return (
    <div>
      <div className="games">
        {scores.map((score) => (
          <PostScoresDB
            gameID={score.fixture.id}
            scoreHome={score.score.fulltime.home}
            scoreAway={score.score.fulltime.away}
          />
        ))}
      </div>
    </div>
  );
}

export default ScoresData;

import React, { useState, useEffect } from "react";
import PostOddsDB from "../Database/Odds/postOddsDB";

function OddsData() {
  const [odds, setOdds] = useState([]);

  const apiHost = "v3.football.api-sports.io";
  const apiUrlOdds = `https://${apiHost}/odds`;

  const toParamString = (obj) => new URLSearchParams(obj).toString();

  const apiKey = "b8815df003f549ac6fd8db7f3e27c045";

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

  useEffect(() => {
    const callApi = setInterval(() => {
      getDataAPI();
      setOdds([]);
    }, 10000);
    return () => clearInterval(callApi);
  }, []);

  return (
    <div>
      <div className="games">
        {odds.map((odd) => (
          <PostOddsDB
            oddID={odd.fixture.id}
            oddHome={odd.bookmakers[0].bets[0].values[0].odd}
            oddDraw={odd.bookmakers[0].bets[0].values[1].odd}
            oddAway={odd.bookmakers[0].bets[0].values[2].odd}
          />
        ))}
      </div>
    </div>
  );
}

export default OddsData;

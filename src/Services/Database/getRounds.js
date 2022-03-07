import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Components/Card";
import { useNavigate } from "react-router-dom";

function GetRounds(props) {
  const [rounds, setRounds] = useState([]);
  const [currentRound, setCurrentRound] = useState([]);

  const apiHost = "v3.football.api-sports.io";
  const apiUrlRounds = `https://${apiHost}/fixtures/rounds`;

  const toParamString = (obj) => new URLSearchParams(obj).toString();

  const apiKey = "b8815df003f549ac6fd8db7f3e27c045";

  const getRoundsData = ({ season, league }) => {
    const url = `${apiUrlRounds}?${toParamString({ season, league })}`;
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

  const getRoundCurrent = ({ season, league, current }) => {
    const url = `${apiUrlRounds}?${toParamString({ season, league, current })}`;
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
    getRoundsData({
      season: 2021,
      league: 78,
    }).then((data) => {
      setRounds(data);
    });

    getRoundCurrent({
      season: 2021,
      league: 78,
      current: true,
    }).then((data) => {
      setCurrentRound(data);
    });
  };

  useEffect(() => {
    getDataAPI();
    console.log(rounds);
    console.log(currentRound);
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div>
        Rounds {currentRound}
        <div>
          {rounds.map((item) => (
            <button
              onClick={() =>
                navigate("/games", { state: { item, currentRound } })
              }
            >
              <Card roundID={item} />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default GetRounds;

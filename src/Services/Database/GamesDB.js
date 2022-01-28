import React, { Component, useEffect, useState } from "react";
import axios from "axios";

export default class Card extends Component {
  postDataDB() {
    const data = {
      gameID: this.props.gameID,
      date: this.props.date,
      teamHome: this.props.teamHome,
      teamAway: this.props.teamAway,
      scoreHome: this.props.scoreHome,
      scoreAway: this.props.scoreAway,
      oddID: this.props.oddID,
      oddHome: this.props.oddHome,
      oddDraw: this.props.oddDraw,
      oddAway: this.props.oddAway,
    };

    console.log(data);

    axios
      .post("http://localhost:5000/games/add", data)
      .then((res) => console.log(res.data));
  }

  componentDidMount() {
    this.postDataDB();
  }

  render() {
    const [gamesData, setGamesData] = useState([]);

    const getDataDB = () => {
      axios.get("http://localhost:5000/games").then((response) => {
        setGamesData(response.data);
      });
    };

    return (
      <>
        <div>
          {gamesData.map((item) => (
            <div>
              <div>{item.gameID}</div>
              <div>{item.teamHome}</div>
              <div>{item.teamAway}</div>
              <div>{item.scoreHome}</div>
              <div>{item.scoreAway}</div>
              <div>{item.oddID}</div>
              <div>{item.oddHome}</div>
              <div>{item.oddDraw}</div>
              <div>{item.oddAway}</div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

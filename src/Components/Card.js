import React, { Component, useEffect } from "react";
import axios from "axios";

export default class Card extends Component {
  render() {
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

    function onSubmit() {
      const gameData = {
        gameID: data.gameID,
        date: data.date,
        teamHome: data.teamHome,
        teamAway: data.teamAway,
        scoreHome: data.scoreHome,
        scoreAway: data.scoreAway,
        oddID: data.oddID,
        oddHome: data.oddHome,
        oddDraw: data.oddDraw,
        oddAway: data.oddAway,
      };

      console.log(gameData);

      axios
        .post("http://localhost:5000/games/add", gameData)
        .then((res) => console.log(res.gameData));
    }

    return (
      <>
        <div>
          <button onClick={onSubmit}>Click to submit!</button>
          <div>##### START ##### </div>
          <div>{data.gameID}</div>
          <div>{data.date}</div>
          <div>{data.teamHome}</div>
          <div>{data.teamAway}</div>
          <div>{data.scoreHome}</div>
          <div>{data.scoreAway}</div>
          <div>----------------</div>
          <div>{data.oddID}</div>
          <div>{data.oddHome}</div>
          <div>{data.oddDraw}</div>
          <div>{data.oddAway}</div>
          <div>##### ENDE ##### </div>
        </div>
      </>
    );
  }
}

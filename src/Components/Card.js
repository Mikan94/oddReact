import React, { Component, useEffect } from "react";
import axios from "axios";

export default class Card extends Component {
  onSubmit() {
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
    this.onSubmit();
  }

  render() {
    return (
      <>
        <div>
          <div>##### START ##### </div>
          <div>{this.props.gameID}</div>
          <div>{this.props.date}</div>
          <div>{this.props.teamHome}</div>
          <div>{this.props.teamAway}</div>
          <div>{this.props.scoreHome}</div>
          <div>{this.props.scoreAway}</div>
          <div>----------------</div>
          <div>{this.props.oddID}</div>
          <div>{this.props.oddHome}</div>
          <div>{this.props.oddDraw}</div>
          <div>{this.props.oddAway}</div>
          <div>##### ENDE ##### </div>
        </div>
      </>
    );
  }
}

import React, { Component } from "react";
import axios from "axios";

export default class postDataDB extends Component {
  postDataDB() {
    const data = {
      gameID: this.props.gameID,
      round: this.props.round,
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
    return <>test</>;
  }
}

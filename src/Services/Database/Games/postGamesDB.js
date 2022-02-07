import React, { Component } from "react";
import axios from "axios";

export default class postGamesDB extends Component {
  postGamesDataDB() {
    const data = {
      gameID: this.props.gameID,
      round: this.props.round,
      date: this.props.date,
      teamHome: this.props.teamHome,
      teamAway: this.props.teamAway,
    };

    console.log(data);

    axios
      .post("http://localhost:5000/games/add", data)
      .then((res) => console.log(res.data));
  }

  componentDidMount() {
    this.postGamesDataDB();
  }
  render() {
    return <>test</>;
  }
}

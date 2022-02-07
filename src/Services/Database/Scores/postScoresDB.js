import React, { Component } from "react";
import axios from "axios";

export default class postScoresDB extends Component {
  postScoresDataDB() {
    const data = {
      gameID: this.props.gameID,
      scoreHome: this.props.scoreHome,
      scoreAway: this.props.scoreAway,
    };

    console.log(data);

    axios
      .post("http://localhost:5000/scores/add", data)
      .then((res) => console.log(res.data));
  }

  componentDidMount() {
    this.postScoresDataDB();
  }
  render() {
    return <>test</>;
  }
}

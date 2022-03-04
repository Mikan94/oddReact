import React, { Component } from "react";
import axios from "axios";

export default class postGamesDB extends Component {
  postOddsDataDB() {
    const data = {
      oddID: this.props.oddID,
      oddHome: this.props.oddHome,
      oddDraw: this.props.oddDraw,
      oddAway: this.props.oddAway,
    };

    console.log(data);

    axios
      .post("http://localhost:8080/odds/add", data)
      .then((res) => console.log(res.data));
  }

  componentDidMount() {
    this.postOddsDataDB();
  }
  render() {
    return <>test</>;
  }
}

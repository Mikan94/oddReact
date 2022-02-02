import React, { Component, useEffect, useState } from "react";
import axios from "axios";

export default class getDataDB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesData: [],
    };
  }

  getDataDB() {
    axios.get("http://localhost:5000/games").then((response) => {
      this.setState({ gamesData: response.data });
    });
    console.log("getted data from db");
  }

  componentDidMount() {
    this.getDataDB();
  }

  render() {
    return (
      <>
        <div>
          <div>
            {this.state.gamesData.map((item) => (
              <div>
                <div>{item.gameID}</div>
                <div>{item.round}</div>
                <div>{new Date(item.date).toLocaleString()}</div>
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
        </div>
      </>
    );
  }
}

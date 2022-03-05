import React, { Component } from "react";
import "../Components/card.css";

export default class Card extends Component {
  render() {
    return (
      <>
        <div className="card-wrapper">{this.props.roundID}</div>
      </>
    );
  }
}

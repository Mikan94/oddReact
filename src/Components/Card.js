import React from "react";

const Card = ({
  gameID,
  date,
  teamHome,
  teamAway,
  scoreHome,
  scoreAway,
  oddID,
  oddHome,
  oddDraw,
  oddAway,
}) => {
  return (
    <>
      <div>
        <div>##### START ##### </div>
        <div>{gameID}</div>
        <div>{date}</div>
        <div>{teamHome}</div>
        <div>{teamAway}</div>
        <div>{scoreHome}</div>
        <div>{scoreAway}</div>
        <div>----------------</div>
        <div>{oddID}</div>
        <div>{oddHome}</div>
        <div>{oddDraw}</div>
        <div>{oddAway}</div>
        <div>##### ENDE ##### </div>
      </div>
    </>
  );
};

export default Card;

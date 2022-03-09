import React from "react";

import "./games.css";

export default function testCard() {
  return (
    <button className="card-wrapper">
      <div>Regular Season - 25/ 07.03.2022 15:30 Uhr</div>
      <div className="game-wrapper">
        <div className="team-wrapper">
          <h1>2</h1>
          <div>Bayern München</div>
        </div>
        <div className="team-wrapper">
          <h1>:</h1>
        </div>
        <div className="team-wrapper">
          <h1>3</h1>
          <div>Borussia Dortmund</div>
        </div>
      </div>

      <div className="odd-wrapper">
        <div className="odd">1.75</div>
        <div className="odd">2.50</div>
        <div className="odd">3.25</div>
      </div>
    </button>
  );
}

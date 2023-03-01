import React from "react";
import rock from "../assets/images/icon-rock.svg";

function Reveal() {
  const data = {
    id: 0,
    name: "rock",
    src: rock,
  };
  return (
    <div className="reveal-container">
      <section className="player reveal">
        <h2>You Picked</h2>
        <div className={`${data.name} select-btn`}>
          <img src={data.src} alt={data.name} />
        </div>
      </section>

      <section className="house reveal">
        <h2>The House Picked</h2>
        <div className={`select-btn`}>
          <div className="empty-select"></div>
        </div>
      </section>

      <section className="reveal-results">
        <h2>You Lose</h2>
        <button className="play-again">Play Again</button>
      </section>
    </div>
  );
}

export default Reveal;

import React, { useState, useEffect } from "react";
import useGameContext from "./GameContext";
import { images } from "../images";

function Reveal() {
  const [houseSelected, setHouseSelected] = useState();
  const [gameResult, setGameResult] = useState();
  const { state, houseSelect, updateScore, updateStatus, resetSelect } =
    useGameContext();
  const player = state.player.selection;
  const house = state.house.selection;

  const housePick = state.house.isSelected ? (
    <div className={`${house.name} select-btn`}>
      <img src={house.src} alt={house.name} />
    </div>
  ) : (
    <div className="empty-select"></div>
  );

  function handleClick(e) {
    e.preventDefault();
    resetSelect();
  }

  function generateHouseSelect() {
    // Generate random index between 0 and # of total selections
    const idx = Math.floor(Math.random() * images.length);
    houseSelect(images[idx]);
  }

  function determineResult() {
    const startIdx = player.id;
    const endIdx = house.id;
    let win = false;
    console.log(
      `[${images[startIdx].id}] ${images[startIdx].name} vs [${images[endIdx].id}] ${images[endIdx].name}`
    );
    if (startIdx == endIdx) {
      updateStatus("draw");
    } else {
      for (let i = startIdx; i <= images.length; i++) {
        if (i == images.length) i = 0;
        win = !win;
        if (i == endIdx) break;
      }

      if (win === true) {
        updateStatus("win");
        updateScore(1);
      } else {
        updateStatus("lose");
        updateScore(-1);
      }
    }
  }

  useEffect(() => {
    if (!state.house.isSelected) {
      setTimeout(() => {
        generateHouseSelect();
      }, 1000);
    }
  }, []);

  useEffect(() => {
    if (state.house.isSelected) {
      determineResult();
    }
  }, [state.house]);
  return (
    <div className="reveal-container">
      <section className="player reveal">
        <h2>You Picked</h2>
        <div className={`${player.name} select-btn`}>
          <img src={player.src} alt={player.name} />
        </div>
      </section>

      <section className="house reveal">
        <h2>The House Picked</h2>
        {housePick}
      </section>

      {state.gameStatus && (
        <section className="reveal-results">
          <h2>You {state.gameStatus}</h2>
          <button className="play-again" onClick={handleClick}>
            Play Again
          </button>
        </section>
      )}
    </div>
  );
}

export default Reveal;

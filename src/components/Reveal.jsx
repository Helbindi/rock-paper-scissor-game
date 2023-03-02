import React, { useEffect } from "react";
import useGameContext from "./GameContext";
import { images } from "../images";

function Reveal() {
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

  const winRipple = (
    <div className="win-screen">
      <div className="ripple inner"></div>
      <div className="ripple mid"></div>
      <div className="ripple outer"></div>
    </div>
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

  /*
    Logic:  Starting with the initial index of the selected move (ie. Rock = 0), every sequential index
            after that until we reach back to 0 is a losing/winning result.
      [Rock, Paper, Scissors, Spock, Lizard] = [0, 1, 2, 3, 4]
        Rock draws with Rock, loses against Paper and Spock, wins against Sissor and Lizard.
      Thus, [Rock, Paper, Scissors, Spock, Lizard] = [Draw, Lose, Win, Lose, Win]
        If the opponent picks index: 0 = draw, 1,3 = player lose, 2,4 = player win 
    **Reset the loop index back to 0 if end of array reached.
  */
  function determineResult() {
    const startIdx = player.id;
    const endIdx = house.id;
    let win = false;

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
        {state.gameStatus === "win" && winRipple}
      </section>

      <section className="house reveal">
        <h2>The House Picked</h2>
        {housePick}
        {state.gameStatus === "lose" && winRipple}
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

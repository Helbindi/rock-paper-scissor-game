import React, { useState } from "react";
import Selection from "./Selection";
import Reveal from "./Reveal";
import rules from "../assets/images/image-rules-bonus.svg";
import closeBtn from "../assets/images/icon-close.svg";
import logo from "../assets/images/logo-bonus.svg";
import useGameContext from "./GameContext";

function Game() {
  const [isRulesActive, setIsRulesActive] = useState(false);
  const { state } = useGameContext();

  function toggleRules(e) {
    e.preventDefault();
    if (isRulesActive) {
      setIsRulesActive(false);
    } else {
      setIsRulesActive(true);
    }
  }

  return (
    <div className="game-container">
      {/* Game Title and Current Game Score */}
      <div className="game-header">
        <img src={logo} alt="game-logo" />
        <section className="game-score">
          <p>Score</p>
          <h2 className="game-points">{state.score}</h2>
        </section>
      </div>

      {/* User Selection and Game UI elements */}
      <div className="game-ui">
        {state.player.isSelected ? <Reveal /> : <Selection />}
      </div>

      {/* Rules Toggle */}
      <button className="rules-btn" onClick={(e) => toggleRules(e)}>
        Rules
      </button>
      {isRulesActive && (
        <div className="rules-container">
          <section className="rules-content">
            <h2>Rules</h2>
            <img className="rules-img" src={rules} alt="game-rules-image" />
            <img
              className="close-rules"
              src={closeBtn}
              alt="close-image"
              onClick={(e) => toggleRules(e)}
            />
          </section>
        </div>
      )}
    </div>
  );
}

export default Game;

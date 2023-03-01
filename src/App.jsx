import React, { useState } from "react";
import rules from "./assets/images/image-rules-bonus.svg";
import closeBtn from "./assets/images/icon-close.svg";
import logo from "./assets/images/logo-bonus.svg";
import pentagon from "./assets/images/bg-pentagon.svg";
import "./index.css";
import Selection from "./components/Selection";
import Reveal from "./components/Reveal";

function App() {
  const [isRulesActive, setIsRulesActive] = useState(false);

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
          <h2 className="game-points">12</h2>
        </section>
      </div>

      {/* User Selection and Game UI elements */}
      <div className="game-ui">
        {/* <Selection /> */}
        <Reveal />
      </div>

      <button className="rules-btn" onClick={(e) => toggleRules(e)}>
        Rules
      </button>
      {/* Rules Toggle */}
      {isRulesActive && (
        <div className="rules-container">
          <section className="rules-content">
            <h2>Rules</h2>
            <img src={rules} alt="game-rules-image" />
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

export default App;

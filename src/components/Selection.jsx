import React from "react";
import pentagon from "../assets/images/bg-pentagon.svg";
import GameBtn from "./GameBtn";
import { images } from "../images";
import useGameContext from "./GameContext";

function Selection() {
  const { playerSelect } = useGameContext();

  function handleClick(e, id) {
    e.preventDefault();
    playerSelect(images[id]);
  }

  return (
    <div className="game-selection">
      <img className="pentagon-img" src={pentagon} alt="" />
      {images.map((i) => (
        <GameBtn data={i} key={i.id} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default Selection;

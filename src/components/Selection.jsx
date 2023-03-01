import React, { useState } from "react";
import pentagon from "../assets/images/bg-pentagon.svg";
import GameBtn from "./GameBtn";
import { images } from "../images";

function Selection() {
  const [selected, setSelected] = useState();

  function handleClick(e, id) {
    e.preventDefault();
    if (selected !== id) {
      setSelected(id);
    }
  }

  console.log(selected);
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

import React, { useState } from "react";
import pentagon from "../assets/images/bg-pentagon.svg";
import { images } from "../images";

function Selection() {
  const [selected, setSelected] = useState();

  function handleClick(e, idx) {
    e.preventDefault();
    setSelected(idx);
  }

  console.log(selected);
  return (
    <div className="game-selection">
      <img className="pentagon-img" src={pentagon} alt="" />
      {images.map((i, idx) => (
        <div
          key={i.name}
          className={`${i.name} select-btn`}
          onClick={(e) => handleClick(e, idx)}
        >
          <img src={i.src} alt={`${i.name}-image`} />
        </div>
      ))}
    </div>
  );
}

export default Selection;

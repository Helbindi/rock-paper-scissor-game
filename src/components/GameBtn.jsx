import React from "react";

function GameBtn({ data, handleClick }) {
  return (
    <div
      className={`${data.name} select-btn`}
      onClick={(e) => handleClick(e, data.id)}
    >
      <img src={data.src} alt={data.name} />
    </div>
  );
}

export default GameBtn;

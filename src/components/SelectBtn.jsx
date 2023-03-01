import React from "react";

function SelectBtn({ name, children }) {
  return <div className={`${name} select-btn`}>{children}</div>;
}

export default SelectBtn;

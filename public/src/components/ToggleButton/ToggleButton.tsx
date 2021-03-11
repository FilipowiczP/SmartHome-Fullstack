import React from "react";

const ToggleButton = () => {
  return (
    <label className="switch">
      <input type="checkbox" className="switch__input" />
      <span className="switch__slider rounded" />
    </label>
  );
};

export default ToggleButton;

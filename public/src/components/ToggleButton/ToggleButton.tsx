import React from "react";
import { ToggleButtonProps } from "../Interfaces/Interface";
import { turnOffAllRoom } from "../API";

const ToggleButton = ({ id, turnOffRoom }: ToggleButtonProps) => {
  const handleTurnOffRoom = () => {
    turnOffAllRoom(turnOffRoom, id)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__input"
        checked={turnOffRoom}
        onClick={handleTurnOffRoom}
      />
      <span className="switch__slider rounded" />
    </label>
  );
};

export default ToggleButton;

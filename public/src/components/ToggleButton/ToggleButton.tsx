import React from "react";
import { ToggleButtonProps } from "../Interfaces/Interface";
import { turnOffAllRoom } from "../API";

const ToggleButton = ({ id, turnOffRoom, toggleRoom }: ToggleButtonProps) => {
  const handleTurnOffRoom = () => {
    turnOffAllRoom(turnOffRoom, id).then((res) => res.json());
    toggleRoom();
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

import React, { useState } from "react";
import { addRoom } from "../API";
import { HomeHeaderProps } from "../Interfaces/Interface";
import plus from "../../images/plus.png";
import "./homeHeader.scss";

const HomeHeader = ({ alertNewRoom, alertAddNewRoom }: HomeHeaderProps) => {
  const [window, setWindow] = useState(false);
  const [newRoom, setNewRoom] = useState({
    name: "",
    device: [],
    turnOffRoom: false,
  });

  const handleRoomName = (value: any) => {
    setNewRoom({ ...newRoom, name: value });
  };

  const handleAddRoom = () => {
    let validation = true;
    if (newRoom.name.length === 0) {
      validation = false;
    }
    if (validation === true) {
      addRoom(newRoom).then((res) => res.json());
      alertNewRoom();
      setTimeout(() => {
        setNewRoom({ ...newRoom, name: "" });
      }, 1000);
    }
  };

  return (
    <header className="homeHeader">
      <h1 className="homeHeader__title">Welcome</h1>
      <div className="homeHeader__newRoom">
        <img src={plus} alt="plus" onClick={() => setWindow(!window)} />
      </div>
      {window && (
        <div className="homeHeader__window">
          <input
            type="text"
            className="homeHeader__window-name input"
            value={newRoom.name}
            onChange={(event) => handleRoomName(event.target.value as any)}
          />
          {alertAddNewRoom === "" ? "" : alertAddNewRoom}
          <button
            className="homeHeader__window-button button"
            onClick={handleAddRoom}
          >
            Add room
          </button>
        </div>
      )}
    </header>
  );
};

export default HomeHeader;

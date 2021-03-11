import React from "react";
import "./rooms.scss";
import ToggleButton from "../ToggleButton/ToggleButton";

const Rooms = () => {
  return (
    <main className="main">
      <div className="main__room">
        <h2>Room name</h2>
        <h3>Devices: X</h3>
        <h3>Room is: Y</h3>
        <ToggleButton />
      </div>
    </main>
  );
};

export default Rooms;

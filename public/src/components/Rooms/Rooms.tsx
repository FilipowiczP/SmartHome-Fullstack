import React from "react";
import "./rooms.scss";
import { MainProps } from "../Interfaces/Interface";
import ToggleButton from "../ToggleButton/ToggleButton";

const Rooms = ({ rooms }: MainProps) => {
  return (
    <main className="main">
      {rooms.map(({ _id, name, device, turnOffRoom }: any) => {
        return (
          <div className="main__room">
            <h2>{name}</h2>
            <h3>Devices: {device.length}</h3>
            <h3>Room is: {turnOffRoom === true ? "On" : "Off"}</h3>
            <ToggleButton turnOffRoom={turnOffRoom} id={_id} />
          </div>
        );
      })}
    </main>
  );
};

export default Rooms;

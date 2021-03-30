import React from "react";
import "./rooms.scss";
import { MainRoomsProps } from "../Interfaces/Interface";
import ToggleButton from "../ToggleButton/ToggleButton";

const Rooms = ({ rooms, toggleRoom }: MainRoomsProps) => {
  return (
    <main className="main">
      {rooms.map(({ _id, name, device, turnOffRoom }: any) => {
        return (
          <div key={`key ${_id}`} className="main__room">
            <h2>{name}</h2>
            <h3>Devices: {device.length}</h3>
            <h3>Room is: {turnOffRoom === true ? "On" : "Off"}</h3>
            <ToggleButton
              turnOffRoom={turnOffRoom}
              id={_id}
              toggleRoom={toggleRoom}
            />
          </div>
        );
      })}
    </main>
  );
};

export default Rooms;

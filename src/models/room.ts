import mongoose, { Schema } from "mongoose";

const schema = new Schema(
  {
    name: String,
    turnOffRoom: Boolean,
    device: [
      {
        name: String,
        manually: Boolean,
        turnON: Boolean || null,
        slide: Boolean,
        slideName: String || null,
        power: Number || null,
        min: Number || null,
        max: Number || null,
        unit: String || null,
      },
    ],
  },
  {
    collection: "Rooms",
  }
);

const Room = mongoose.model("Room", schema);

function listRooms(cb: Function) {
  Room.find({}).exec(function (err, room) {
    if (err) {
      cb(err);
    } else {
      cb(null, room);
    }
  });
}

function addRoom(roomData: Object, cb: Function) {
  let room = new Room(roomData);

  room.save(function (err, room) {
    if (err) {
      cb(err);
    } else {
      cb(null, room);
    }
  });
}

function turnOffAllRoom(id: string, change: boolean) {
  console.log("method " + id);
  console.log("method " + change);

  Room.findByIdAndUpdate({ _id: id }, { $set: { turnOffRoom: true } });
}

module.exports = {
  rooms: listRooms,
  add: addRoom,
  change: turnOffAllRoom,
};

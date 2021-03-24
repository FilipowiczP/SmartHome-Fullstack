import { Router, Request, Response } from "express";

const models = require("../models/room");
export const HomeController: Router = Router();

HomeController.get("/", (req: Request, res: Response) => {
  models.rooms(function (err: Error, room: any) {
    res.send(err ? [] : room);
  });
});

HomeController.patch(`/:id`, (req: Request, res: Response) => {
  console.log("endpoint id" + req.params.id);
  console.log("endpoint body" + req.body);

  models.turnOffAllRoom(req.params.id, req.body);
});

HomeController.post("/", (req: Request, res: Response) => {
  models.add(req.body, function (err: Error, room: Object) {
    if (err) {
      res.status(404);
      res.json({
        error: "Room has not been added",
      });
    } else {
      res.json(room);
    }
  });
});

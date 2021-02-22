import { Router, Request, Response } from "express";
import bodyParser from "body-parser";

const models = require("../models/room");
export const HomeController: Router = Router();

HomeController.use(bodyParser.json());

HomeController.get("/", (req: Request, res: Response) => {
  models.rooms(function (err: Error, room: any) {
    res.send(err ? [] : room);
  });
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

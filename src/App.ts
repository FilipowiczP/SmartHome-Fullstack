import express from "express";
import { HomeController } from "./controllers/api";
import connectToMongoose from "./models/index";
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
(async function runApp() {
  try {
    const app = express();

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(HomeController);

    await connectToMongoose();

    app.listen(process.env.PORT, () =>
      console.log(`Listening on port ${process.env.PORT}`)
    );
  } catch (err) {
    console.log("Problems initializitng the app", err);
  }
})();

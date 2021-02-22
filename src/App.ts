import express from "express";
import { HomeController } from "./controllers/api";
import connectToMongoose from "./models/index";

require("dotenv").config();

(async function runApp() {
  try {
    const app = express();

    app.use(HomeController);

    await connectToMongoose();

    app.listen(process.env.PORT, () =>
      console.log(`Listening on port ${process.env.PORT}`)
    );
  } catch (err) {
    console.log("Problems initializitng the app", err);
  }
})();

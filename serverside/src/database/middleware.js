import config from "../config.json";
import mongoose from "mongoose";

export default function () {
  return function (request, response, next) {
    mongoose.connect(config.db.connstr, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", () => {
      console.log("database connection opened!");
    });
    next();
  };
}

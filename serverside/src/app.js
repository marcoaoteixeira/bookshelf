import createHttpError from "http-errors";
import express from "express";
import cors from "cors";
//import jwt from './helpers/jwt'
import * as db from "./database/middleware";

import accountRoutes from "./routes/account";

const app = express();

// config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// use JWT auth to secure the api
//app.use(jwt())

// start up database connection
app.use(db());

// setup routes
app.use("/api", accountRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createHttpError(404));
});

// start server
const port = process.env.NODE_ENV === "production" ? 80 : 4000;
app.listen(port, function () {
  console.log("Server listening on port " + port);
});

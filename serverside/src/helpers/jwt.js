import expressJwt from "express-jwt";
import config from "../config.json";

export default {
  jwt: function () {
    const { secret } = config;
    return expressJwt({ secret, algorithms: ["HS256"] }).unless({
      path: [
        // public routes that don't require authentication
        "/users/authenticate",
      ],
    });
  },
};

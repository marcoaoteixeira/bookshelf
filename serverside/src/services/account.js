import config from "../config.json";
import { sign } from "jsonwebtoken";
import User from "../database/models/user";

function omitPassword(user) {
  return {
    username: user.username,
    fullName: user.fullName,
  };
}

export default {
  authenticate: async function ({ username, password }) {
    const user = User.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) throw "Username or password is incorrect";

    // create a jwt token that is valid for 7 days
    const token = sign({ sub: user.id }, config.secret, { expiresIn: "7d" });

    return {
      ...omitPassword(user),
      token,
    };
  },
};

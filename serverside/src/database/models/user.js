import mongoose from "mongoose";

export default {
  User: mongoose.model(
    "User",
    new mongoose.Schema({
      username: {
        type: String,
        min: 6,
        required: ["true", "User name required"],
      },
      password: {
        type: String,
        min: 6,
        max: 12,
        required: ["true", "Password required"],
      },
      fullName: {
        type: String,
        min: 6,
        required: ["true", "Full name required"],
      },
    })
  ),
};

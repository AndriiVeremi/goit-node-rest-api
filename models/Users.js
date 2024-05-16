import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSettings } from "./hooks.js";
import { emailRegexp } from "../constants/user-constants.js";

const UsersSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      math: emailRegexp,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

UsersSchema.post("save", handleSaveError);

UsersSchema.pre("findOneAndUpdate", setUpdateSettings);

UsersSchema.post("findOneAndUpdate", handleSaveError);

const User = model("user", UsersSchema);

export default User;

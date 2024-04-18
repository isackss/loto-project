import { Schema, models, model } from "mongoose";
import { unique } from "next/dist/build/utils";
import { number, string } from "zod";

const UserSchema = new Schema({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  picture: { type: String, required: true },
  location: { type: String },
  reputation: { type: Number },
  joinedAt: { type: Date, default: Date.now },
});

const User = models.User || model("User", UserSchema);

export default User;

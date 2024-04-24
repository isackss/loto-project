import { Schema, models, model } from "mongoose";

const PlaySchema = new Schema({
  number: { type: String },
  serie: { type: String },
  ticket: [{ type: Schema.Types.ObjectId, ref: "Ticket" }],
  soldBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdOn: { type: Date, default: Date.now },
  lotteryId: [{ type: Schema.Types.ObjectId, ref: "Lottery" }],
});

const Play = models.Play || model("Play", PlaySchema);

export default Play;

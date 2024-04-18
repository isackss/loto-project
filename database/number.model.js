import { Schema, models, model } from "mongoose";

const NumberSchema = new Schema({
  number: { type: String },
  serie: { type: String },
  ticket: [{ type: Schema.Types.ObjectId, ref: "Ticket" }],
  soldBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdOn: { type: Date, default: Date.now },
  lotteryId: [{ type: Schema.Types.ObjectId, ref: "Lottery" }],
});

const Number = models.Number || model("Number", NumberSchema);

export default Number;

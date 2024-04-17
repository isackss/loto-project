import { Schema, models, model, Document } from "mongoose";

const TicketSaleSchema = new Schema({
  numbers: [{ type: Schema.Types.ObjectId, ref: "Numbers" }],
  createdBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
  terminalId: [{ type: Schema.Types.ObjectId, ref: "Terminal" }],
  lotteryId: [{ type: Schema.Types.ObjectId, ref: "Lottery" }],
});

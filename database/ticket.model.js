import { Schema, models, model } from "mongoose";

const TicketSaleSchema = new Schema({
  numbers: [{ type: Schema.Types.ObjectId, ref: "Numbers" }],
  soldNumbers: { type: Number },
  ticketPrice: { type: Number },
  terminalId: [{ type: Schema.Types.ObjectId, ref: "Terminal" }],
  lotteryId: [{ type: Schema.Types.ObjectId, ref: "Lottery" }],
  createdBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
});

const Ticket = models.Ticket || model("Question", TicketSaleSchema);

export default Ticket;

"use server";

import Ticket from "@/database/ticket.model";
import { connectToDatabase } from "../mongoose";
import Play from "@/database/play.model";

export async function createNewTicket(params) {
  try {
    connectToDatabase();

    const { plays, soldNumbers, ticketPrice, createdBy, lotteryId, path } =
      params;

    // Create the ticket
    const ticket = await Ticket.create({
      soldNumbers,
      ticketPrice,
    });

    const playDocuments = [];

    // Create the plays or get them if they already exist

    for (const play of plays) {
      const existingPlay = await Play.findOneAndUpdate(
        { number: { $regex: new RegExp(`^${play}$`, "i") } },
        { $setOnInsert: { number: play }, $push: { ticket: ticket._id } },
        { upsert: true, new: true }
      );

      playDocuments.push(existingPlay._id);
    }

    await Ticket.findByIdAndUpdate(ticket._id, {
      $push: { plays: { $each: playDocuments } },
    });

    // Create an interaction record for the user's create ticket.
  } catch (error) {
    console.log("Error al conectar a la base de datos", error);
  }
}

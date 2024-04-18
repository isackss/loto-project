"use server";

import Ticket from "@/database/ticket.model";
import { connectToDatabase } from "../mongoose";

export async function createNewTicket(params) {
  try {
    connectToDatabase();

    const { numbers, soldNumbers, ticketPrice, createdBy, lotteryId, path } =
      params;

    // Create the ticket
    const ticket = await Ticket.create({
      soldNumbers,
      ticketPrice,
    });
  } catch (error) {
    console.log("Error al conectar a la base de datos", error);
  }
}

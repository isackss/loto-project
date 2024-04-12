"use server";

import { connectToDatabase } from "../mongoose";

export async function createNewTicket(params) {
  try {
    connectToDatabase();
  } catch (error) {
    console.log("Error al conectar a la base de datos", error);
  }
}

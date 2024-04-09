"use client";

import { useState, useEffect } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Sales = () => {
  const [ticketSales, setTicketSales] = useState([]);

  useEffect(() => {
    const sales = JSON.parse(localStorage.getItem("sales"));
    setTicketSales(sales);
  }, []);

  return (
    <div>
      <h1 className="py-2 text-xl">Demo de ventas diarias</h1>
      <Table className="border">
        <TableCaption>Lista de tickets vendidos.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Ticket</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Método</TableHead>
            <TableHead>Números</TableHead>
            <TableHead className="text-right">Monto</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ticketSales ? (
            ticketSales.map((el) => (
              <TableRow key={el.ticketId}>
                <TableCell className="font-medium">{el.ticketId}</TableCell>
                <TableCell>{el.status}</TableCell>
                <TableCell>{el.paymentMethod}</TableCell>
                <TableCell>
                  {el.numbers.map((number) => `${number.num}, `)}
                </TableCell>
                <TableCell className="text-right">Q{el.ammount}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>Sin datos</TableRow>
          )}
          {/* <TableRow>
            <TableCell className="font-medium">T01-0001</TableCell>
            <TableCell>Pagado</TableCell>
            <TableCell>Efectivo</TableCell>
            <TableCell className="text-right">Q100.00</TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </div>
  );
};

export default Sales;

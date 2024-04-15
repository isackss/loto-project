"use client";

import PosForm from "@/components/forms/PosForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createNewTicket } from "@/lib/actions/ticket.action";
import { useState } from "react";

/* import DeleteIcon from "@mui/icons-material/Delete"; */

/* import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; */

export default function Pos() {
  const [numbers, setNumbers] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [soldTickets, setSoldTickets] = useState(() => {
    const saved =
      typeof window !== "undefined" ? localStorage.getItem("tickets") : "";
    const initialValue = saved ? JSON.parse(saved) : "";
    return initialValue || [];
  });
  // Define your form

  // Define submit handler
  const cartHandleSubmit = (e) => {
    const input = e.currentTarget.elements.number.value;
    const serie = e.currentTarget.elements.serie.value;
    if (
      numbers.length > 0 &&
      numbers.some((item) => item.num === input && item.serie === serie)
    ) {
      alert("El número con la serie dada ya existe.");
    } else {
      setNumbers((prev) => [
        ...prev,
        { _id: `${serie}${input}`, num: input, serie },
      ]);
    }
    createNewTicket({});
    e.preventDefault();
  };
  /* useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("tickets"));

    if (localData) {
      setSales(localData);
    }
  }, []); */

  /* console.log(`Nombers: `, numbers); */

  const cartItemDelete = (e) => {
    const itemId = e.currentTarget.id;
    const itemsFiltered = numbers.filter((item) => item._id !== itemId);
    setNumbers(itemsFiltered);
  };

  const createTicket = () => {
    const randomId = `_${
      Math.random().toString(30).substr(2, 17) +
      Math.random().toString(30).substring(2, 17)
    }`;

    if (numbers.length > 0) {
      const ticket = {
        ticketId: randomId,
        user: "Eduardo",
        terminal: "T01",
        numbers,
        status: "Pagado",
        paymentMethod: "Efectivo",
        ammount: 100,
        creationDate: "12/03/2024",
      };

      setSoldTickets((prev) => [...prev, ticket]);

      setNumbers([]);
      alert("Ticket creado con éxito!");
      localStorage.setItem("tickets", JSON.stringify(soldTickets));
    }
  };
  /* console.log(`From useState: `, soldTickets);
  console.log(`From localStorage: `, JSON.parse(localStorage.getItem("sales"))); */
  return (
    <main className="h-svh p-4">
      <div>
        <PosForm />
      </div>
      <section className="relative h-svh">
        <form onSubmit={cartHandleSubmit}>
          <div>
            <Label htmlFor="serie">Serie:</Label>
            <select id="serie" name="serie" className="w-full p-2">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>

            <Label>Introduzca el número:</Label>
            <div className="flex gap-4">
              <Input
                type="tel"
                id="number"
                name="number"
                maxLength={3}
                required
                defaultValue="000"
              />
              <Button>Agregar</Button>
            </div>
          </div>
        </form>
        {/* Display cart items */}
        <div className="mt-4 grid w-full grid-flow-row border p-4">
          {numbers.map((number) => (
            <div
              key={number._id}
              className="flex items-center justify-between border p-2"
            >
              <div>{`${number.serie} - ${number.num}`}</div>
              <div>
                <Button onClick={cartItemDelete} id={number._id}>
                  {/* <DeleteIcon fontSize="small" /> */}
                  Delete
                </Button>
              </div>
            </div>
          ))}
          <div>Total números: {numbers.length}</div>
        </div>
        {/* Create new ticket */}
        <div className="absolute bottom-0 w-full">
          <Button
            disabled={numbers.length > 0 ? "" : "disabled"}
            className="bottom-0 w-full"
            onClick={createTicket}
          >
            Confirmar venta
          </Button>
        </div>
      </section>
    </main>
  );
}

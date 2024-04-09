"use client";

import Image from "next/image";

/* import lotoLogo from "@/assets/img/logo_loto.png"; */
import { Ticket } from "@/Schema";
import { useState } from "react";

export default function Home() {
  const ticket = new Ticket(
    123,
    "A",
    "009",
    "02-23-2024",
    "28-02-2024",
    "LTM-1458"
  );

  const [tickets, setTickets] = useState(ticket);

  return (
    <div>
      <div>
        <div className="bg-gray-200 p-4 text-center text-2xl font-bold">
          LOTERIA DE GUATEMALA
        </div>
        <div className="text-center">www.lotoelectronica.com</div>
      </div>
      <div className="p-1">
        <div className="text-center text-4xl">PRIMER PREMIO</div>
        <div className="text-center text-7xl font-bold">Q250,000</div>
      </div>
      <div className="p-1">
        <div className="text-center text-2xl">SEGUNDO PREMIO</div>
        <div className="text-center text-5xl font-bold">Q150,000</div>
      </div>
      <div className="p-1">
        <div className="text-center text-xl">TERCER PREMIO</div>
        <div className="text-center text-3xl font-bold">Q50,000</div>
      </div>
      <div className="flex justify-around gap-1 border-4 border-gray-300 bg-gray-200 p-5 font-extrabold">
        <div className="text-5xl">A</div>
        <div className="text-5xl">0</div>
        <div className="text-5xl">0</div>
        <div className="text-5xl">0</div>
      </div>
      <div className="grid grid-flow-col grid-cols-2">
        <div className="">{/* <Image src={lotoLogo} alt="QR code" /> */}</div>
        <div className="flex items-center text-center text-3xl font-bold">
          LA SUERTE TE ESTÁ BUSCANDO
        </div>
      </div>
      <div className="grid grid-flow-col grid-cols-2">
        <div className="">{/* <Image src={qr} alt="QR code" /> */}</div>
        <div className="flex flex-col justify-around p-4 text-xs">
          <div>
            <span className="font-bold">Fecha del sorteo:</span>
            <br />
            {tickets._drawDate}
          </div>
          <div>
            <span className="font-bold">Valor del boleto:</span> Q100
          </div>
          <div>
            <span className="font-bold">Fecha de emisión:</span> 22/02/2024
            13:14:00
          </div>
          <div>
            <span className="font-bold">Código del boleto:</span> TK-0235-456831
          </div>
          <div>
            <span className="font-bold">Terminal:</span> LTM-0002
          </div>
        </div>
      </div>
    </div>
  );
}

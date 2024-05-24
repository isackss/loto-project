"use client";

/* import { PosSchema } from "@/lib/validations"; */
import { useState } from "react";
import { useRouter } from "next/navigation";

const PosForm = () => {
  const [playSerie, setPlaySerie] = useState("");
  const [plays, setPlays] = useState([]);
  const router = useRouter();

  /* Agregar serie a la jugada */
  const handleAddSerie = (e) => {
    const serie = e.target.value;
    if (serie.length > 0) {
      setPlaySerie(serie);
    }
  };

  /* Agregar jugada a la lista */
  const handleAddPlay = (e) => {
    e.preventDefault();

    const playField = document.getElementById("play");
    let userPlay = playField.value;
    const date = Date.now();

    /* Validar formato de jugada */
    if (/^\d+$/.test(userPlay)) {
      if (userPlay.length === 1) {
        userPlay = "00" + userPlay;
      } else if (userPlay.length === 2) {
        userPlay = "0" + userPlay;
      }
    } else {
      alert("Introduzca sólo números");
      return;
    }

    /* Validar si la jugada ya existe */
    if (playSerie.length > 0 && userPlay.length > 0) {
      if (plays.find((el) => el.serie === playSerie && el.play === userPlay)) {
        alert("Esta jugada ya existe!");
      } else {
        setPlays((prev) => [
          ...prev,
          {
            _id: `${date}${playSerie}${userPlay}`,
            serie: playSerie,
            play: userPlay,
          },
        ]);
      }
    }
  };

  /* Eliminar jugada de la lista */
  const handlePlayDelete = (playId) => {
    const filteredPlays = plays.filter((el) => el._id !== playId);

    setPlays(filteredPlays);
  };

  /* Creación del ticket */

  const handleTicketSubmit = () => {
    confirm("Se va a generar el ticket. Presione Aceptar para confirmar");
    router.push("/pos/ticket/1");
  };

  return (
    <>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="text-dark300_light900">Seleccione una serie</label>
          <select
            className="rounded-md border p-4 shadow-md"
            name="serie"
            onChange={(e) => handleAddSerie(e)}
          >
            <option value="">Seleccione una serie</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-auto flex-col">
            <label className="text-dark300_light900">
              Introduzca la cifra a vender
            </label>
            <input
              id="play"
              type="tel"
              name="play"
              maxLength="3"
              min={0}
              className="rounded-md border p-4 shadow-md"
            />
          </div>
          <button
            className="primary-gradient rounded-lg border px-6 text-light-900"
            onClick={(e) => handleAddPlay(e)}
          >
            Agregar
          </button>
        </div>
      </form>
      <div className="mt-4 flex flex-col gap-4 border p-4 shadow-md">
        {plays.map((play) => (
          <div
            key={play._id}
            className="flex flex-row items-center border p-2 shadow-sm"
          >
            <div className="text-dark300_light900 flex-1 font-mono text-2xl font-bold">{`${play.serie} - ${play.play}`}</div>
            <button
              className="rounded-md border bg-slate-600 px-4 py-2 text-light-900"
              onClick={() => handlePlayDelete(play._id)}
            >
              Eliminar
            </button>
          </div>
        ))}
        <div className="border p-4 text-center">
          Jugadas totales: {plays.length}
        </div>
      </div>
      <button
        className={`mt-6 w-full rounded-lg px-6 py-4 text-center text-light-900 max-sm:px-6 ${plays.length > 0 ? "primary-gradient" : "bg-slate-400"}`}
        disabled={plays.length > 0 ? false : true}
        onClick={handleTicketSubmit}
      >
        Generar Ticket
      </button>
    </>
  );
};

export default PosForm;

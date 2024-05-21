"use client";

/* import { PosSchema } from "@/lib/validations"; */
import { useState } from "react";

const PosForm = ({ mongoUserId }) => {
  const [playSerie, setPlaySerie] = useState("");
  const [plays, setPlays] = useState([]);

  /* Agregar serie a la jugada */
  const handleAddSerie = (e) => {
    const serie = e.target.value;
    if (serie.length > 0) {
      setPlaySerie(serie);
    }
  };

  /* Agregar jugada a la lista */
  const handleAddPlay = (e) => {
    const playField = document.getElementById("play");
    const userPlay = playField.value;
    const date = Date.now();

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

    e.preventDefault();
  };

  /* Eliminar jugada de la lista */
  const handlePlayDelete = (playId) => {
    const filteredPlays = plays.filter((el) => el._id !== playId);

    setPlays(filteredPlays);
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
              maxLength={3}
              min={0}
              defaultValue="000"
              className="rounded-md border p-4 shadow-md"
            />
          </div>
          <button
            className="primary-gradient rounded-lg border text-light-900 max-sm:px-6"
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
      <button className="primary-gradient mt-6 w-full rounded-lg px-6 py-4 text-center text-light-900 max-sm:px-6">
        Generar Ticket
      </button>
    </>
  );
};

export default PosForm;

"use client";

import { PosSchema } from "@/lib/validations";
import { use, useState } from "react";

const PosForm = ({ mongoUserId }) => {
  const [playSerie, setPlaySerie] = useState("");
  const [plays, setPlays] = useState([]);

  const handleAddSerie = (e) => {
    const serie = e.target.value;
    if (serie.length > 0) {
      setPlaySerie(serie);
    }
  };

  const handleAddPlay = (e) => {
    const playField = document.getElementById("play");
    const userPlay = playField.value;
    const date = Date.now();

    if (playSerie.length > 0 && userPlay.length >= 0) {
      setPlays((prev) => [
        ...prev,
        {
          _id: `${date}${playSerie}${userPlay}`,
          serie: playSerie,
          play: userPlay,
        },
      ]);
    }

    e.preventDefault();
  };

  const handlePlayDelete = (playId) => {
    const filteredPlays = plays.filter((el) => el._id !== playId);

    setPlays(filteredPlays);
    console.log(filteredPlays);
  };
  console.log(plays);
  return (
    <>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label>Seleccione una serie</label>
          <select
            className="p-4"
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
        <div className="flex">
          <div className="flex flex-auto flex-col">
            <label>Introduzca la cifra a vender</label>
            <input
              id="play"
              type="tel"
              name="play"
              maxLength={3}
              min={0}
              defaultValue="000"
              className="p-4"
            />
          </div>
          <button
            className="border max-sm:px-6"
            onClick={(e) => handleAddPlay(e)}
          >
            Agregar
          </button>
        </div>
      </form>
      <div>
        {plays.map((play) => (
          <div
            key={play._id}
            className="flex flex-row border px-2 pt-4 align-middle"
          >
            <div className="flex-1">{`${play.serie} - ${play.play}`}</div>
            <button
              className="border bg-slate-600"
              onClick={() => handlePlayDelete(play._id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default PosForm;

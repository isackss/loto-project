"use client";

import { PosSchema } from "@/lib/validations";
import { useState } from "react";

const PosForm = ({ mongoUserId }) => {
  return (
    <>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label>Seleccione una serie</label>
          <select className="p-4" name="serie">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>Introduzca la cifra a vender</label>
          <input
            type="tel"
            name="play"
            maxLength={3}
            min={0}
            defaultValue="000"
            className="p-4"
          />
        </div>
      </form>

      <div></div>
    </>
  );
};

export default PosForm;

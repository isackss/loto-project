import React from "react";

const page = async () => {
  const serieArray = () => {
    let serie = [];
    for (let i = 0; i <= 999; i++) {
      serie.push(i);
    }
    return serie;
  };

  const serie = await serieArray();

  return (
    <div className="flex flex-wrap">
      {serie.map((el) => (
        <div
          key={el}
          className={`flex w-10 justify-center border px-4 py-2 ${el % 2 == 0 ? "bg-red-900 text-white" : ""}`}
        >
          {el}
        </div>
      ))}
    </div>
  );
};

export default page;

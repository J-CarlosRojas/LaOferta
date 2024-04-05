import React from "react";

const DisplayOferta = ({ oferta }) => {
  return (
    //Muestra la oferta de la maquina.

    <div className="flex justify-center ">
      <div>
        <p className=" font-secundaria text-naranja mt-2 mb-2 text-2xl ">
          La oferta actual:{" "}
        </p>
        <p className="  min-h-3 p-5 font-numeros text-3xl text-rojo ">
          $ {oferta}
        </p>
      </div>
    </div>
  );
};

export default DisplayOferta;

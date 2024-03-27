import React from "react";
import Boton from "./Boton";

const Resultado = ({ cambiarModal, modal }) => {
  if (!modal) return null;

  return (
    <div className=" fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg ">
        <h2>Modal abierto</h2>
        <Boton onClick={cambiarModal} texto={"Cerrar Modal"} />
      </div>
    </div>
  );
};

export default Resultado;

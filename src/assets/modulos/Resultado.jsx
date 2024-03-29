import React from "react";
import Boton from "./Boton";

const Resultado = ({ cambiarModal, modal, oferta, premio }) => {
  if (!modal) return null;

  const premioTexto =
    premio !== null ? "El premio es: " + premio : "No hay premio aún";

  return (
    <div className=" fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg ">
        <p>{premioTexto}</p>
        <p>La oferta es: {oferta}</p>
        <Boton onClick={cambiarModal} texto={"Cerrar Modal"} />
      </div>
    </div>
  );
};

export default Resultado;

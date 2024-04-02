import React from "react";
import Boton from "./Boton";

const Resultado = ({ recargarPagina, modal, oferta, premio, aceptoOferta }) => {
  if (!modal) return null;

  const premioTexto =
    premio !== null ? "El premio es: " + premio : "No hay premio aún";

  let textoAceptoOferta;
  let textoGanoPerdio = "entro gano perdio";

  if (aceptoOferta) {
    textoAceptoOferta = "Aceptaste la oferta ";
    ganoPerdio();
  } else {
    textoAceptoOferta = "Te quedaste con tu cartel";
    ganoPerdio();
  }

  //Función que determina si el jugador tomó la mejor opción.
  function ganoPerdio() {
    if (aceptoOferta) {
      if (oferta > premio && premio !== null) {
        textoGanoPerdio = "Ganaste! " + (oferta - premio).toFixed(2);
      } else {
        textoGanoPerdio = "Perdiste :( " + (premio - oferta).toFixed(2);
      }
    } else {
      if (premio > oferta && premio !== null) {
        textoGanoPerdio = "Ganaste! " + (premio - oferta).toFixed(2);
      } else {
        textoGanoPerdio = "Perdiste :( " + (oferta - premio).toFixed(2);
      }
    }
  }

  return (
    <div className=" fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg ">
        <p>{textoAceptoOferta}</p>
        <p>{textoGanoPerdio}</p>
        <p>{premioTexto}</p>
        <p>La oferta es: {oferta}</p>
        <Boton onClick={recargarPagina} texto={"Reiniciar"} />
      </div>
    </div>
  );
};

export default Resultado;

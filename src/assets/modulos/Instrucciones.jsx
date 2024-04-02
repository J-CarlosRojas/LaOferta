import React, { useEffect, useState } from "react";

const Instrucciones = ({ cartelesSeleccionados }) => {
  const [instruccion, setInstruccion] = useState("Escoge tu cartel");

  useEffect(() => {
    if (cartelesSeleccionados === 0) {
      setInstruccion("Escoge tu cartel");
    }
    if (cartelesSeleccionados > 0 && cartelesSeleccionados < 7) {
      setInstruccion(
        "Puedes escoger la oferta o continuar descartando carteles"
      );
    }
    if (cartelesSeleccionados === 6) {
      setInstruccion(
        "Es tu última tirada, decide si quieres la oferta o te quedas con tu cartel"
      );
    }
  }, [cartelesSeleccionados]);

  return (
    <div>
      <p>{instruccion}</p>
    </div>
  );
};

export default Instrucciones;

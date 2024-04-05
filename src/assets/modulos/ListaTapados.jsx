import React from "react";

const ListaTapados = ({ premiosRestantes }) => {
  return (
    <div className="bg-amarillo max-w-46 pt-6 ">
      <p className=" font-principal  text-cyan-800 text-2xl ">
        Premios Restantes
      </p>
      <div></div>
      <ul>
        {premiosRestantes.map((premio, index) => (
          <li key={index} className=" font-secundaria text-rojo mt-1 ">
            ${premio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTapados;

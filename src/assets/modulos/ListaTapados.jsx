import React from "react";

const ListaTapados = ({ premiosRestantes }) => {
  return (
    <div>
      <p>Premios Restantes</p>
      <div></div>
      <ul>
        {premiosRestantes.map((premio, index) => (
          <li key={index}>${premio}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTapados;

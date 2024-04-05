import React from "react";

const Boton = ({ onClick, texto }) => {
  return <button className=" bg-amarillo p-3 shadow-md font-secundaria text-white " onClick={onClick}>{texto}</button>;
};

export default Boton;

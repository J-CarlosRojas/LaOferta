import React from "react";
/*Este componente le renderiza los botones que el usuario puede seleccionar*/

const SeleccionUsuario = ({ numeroSeleccion, premio, onClick, destapado }) => {
  return (
    <div
      onClick={onClick}
      className=" `w-2/12 bg-slate-950 cursor-pointer min-w-4 ${
        destapado ? 'bg-green-500' : ''
      }`} 
    "
    >
      <p className=" font-bold ">{numeroSeleccion}</p>
      <p>{destapado ? `Premio: ${premio}` : "?"}</p>
    </div>
  );
};

export default SeleccionUsuario;



import React from "react";
/*Este componente le renderiza los botones que el usuario puede seleccionar*/

const SeleccionUsuario = ({ premio, onClick, destapado }) => {
  return (
    <div
      onClick={onClick}
      className="w-16 h-16 cursor-pointer bg-crema text-rojo m-4 rounded-md flex items-center justify-center
      "
    >
      <p className=" text-center font-bold ">{destapado ? `$ ${premio}` : "?"}</p>
    </div>
  );
};

export default SeleccionUsuario;

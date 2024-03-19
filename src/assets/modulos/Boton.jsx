import React from "react";

const Boton = (onClick, leyenda) => {
    return(
        <button onClick={onClick}>
            {leyenda} 
        </button>
    )
}

export default Boton;

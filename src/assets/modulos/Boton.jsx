import React from "react";

const Boton = ({onClick, texto}) => {
    return(
        <button onClick={onClick}>
            {texto} 
        </button>
    )
}

export default Boton;
